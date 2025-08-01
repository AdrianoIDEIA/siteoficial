// mcp-server-lighthouse/index.js

const process = require('process');
const lighthouse = require('lighthouse'); // Mantemos o require principal
const chromeLauncher = require('chrome-launcher');

// --- CÓDIGO CRÍTICO PARA INICIALIZAÇÃO MCP ---
process.stdout.write(JSON.stringify({
    protocolVersion: "1.0",
    serverInfo: {
        name: "Lighthouse Connector by aco",
        version: "1.0.0",
    }
}) + '\n');
// --- FIM DO CÓDIGO CRÍTICO ---


async function launchChromeAndRunLighthouse(url, opts, config = null) {
    const chrome = await chromeLauncher.launch(opts);
    opts.port = chrome.port;

    // --- ALTERAÇÃO AQUI: Obter a função principal do Lighthouse de forma robusta ---
    // Tenta obter a função principal de diferentes formas comuns de exportação de módulos Node.js
    const lighthouseFunction = 
        typeof lighthouse === 'function' ? lighthouse : // 1. Se já é a função (caso ideal)
        lighthouse.default || // 2. Se é um default export (comum em módulos ES)
        lighthouse.lighthouse; // 3. Se é uma propriedade chamada 'lighthouse' (named export)

    if (typeof lighthouseFunction !== 'function') {
        // Se ainda não encontrarmos, lançamos um erro para depuração
        throw new Error("Lighthouse module could not be loaded as a callable function. Please check installation and exports. Received type: " + typeof lighthouse + ". Module content keys: " + Object.keys(lighthouse).join(', '));
    }
    // --- FIM DA ALTERAÇÃO ---

    const results = await lighthouseFunction(url, opts, config); // Usa a função agora
    await chrome.kill();
    return results;
}

async function handleRpcRequest(request) {
    const { id, method } = request;
    const params = request.params || {};
    const url = params.url;

    if (!method) {
        return { jsonrpc: "2.0", error: { code: -32600, message: "Invalid Request: 'method' is required" }, id: id };
    }

    if (method === 'initialize') {
        return {
            jsonrpc: "2.0",
            result: {
                capabilities: {
                    methods: [
                        "auditUrl",
                        "checkAccessibilityIssues",
                        "initialize"
                    ]
                }
            },
            id: id
        };
    }

    if (!url) {
        return { jsonrpc: "2.0", error: { code: -32602, message: "Invalid params: 'url' is missing for method " + method }, id: id };
    }

    try {
        let resultData;
        let resultMessage;

        switch (method) {
            case 'auditUrl':
                const results = await launchChromeAndRunLighthouse(url, {
                    chromeFlags: ['--headless']
                }, null);
                resultData = {
                    accessibility: results.lhr.categories.accessibility.score * 100,
                    performance: results.lhr.categories.performance.score * 100,
                    bestPractices: results.lhr.categories['best-practices'].score * 100,
                    seo: results.lhr.categories.seo.score * 100,
                    pwa: results.lhr.categories.pwa?.score * 100 || 0,
                    lcp: results.lhr.audits['largest-contentful-paint']?.numericValue,
                    fid: results.lhr.audits['first-input-delay']?.numericValue,
                    cls: results.lhr.audits['cumulative-layout-shift']?.numericValue,
                };
                resultMessage = `Auditoria de ${url} concluída.`;
                break;

            case 'checkAccessibilityIssues':
                const accResults = await launchChromeAndRunLighthouse(url, {
                    chromeFlags: ['--headless']
                }, {
                    extends: 'lighthouse:default',
                    audits: ['accessibility']
                });
                const accessibilityIssues = accResults.lhr.audits.accessibility.details?.items || [];
                resultData = accessibilityIssues.map(issue => ({
                    description: issue.description,
                    impact: issue.impact,
                }));
                resultMessage = `Checagem de acessibilidade de ${url} concluída.`;
                break;

            default:
                return { jsonrpc: "2.0", error: { code: -32601, message: `Method not found: ${method}` }, id: id };
        }

        return { jsonrpc: "2.0", result: resultData || resultMessage, id: id };

    } catch (error) {
        return {
            jsonrpc: "2.0",
            error: {
                code: error.response?.status || -32000,
                message: error.message,
                data: error.response?.data || error.toString()
            },
            id: id
        };
    }
}

process.stdin.on('data', async (data) => {
    try {
        const input = JSON.parse(data.toString());
        if (input.jsonrpc === "2.0" && typeof input.method === 'string') {
            const response = await handleRpcRequest(input);
            process.stdout.write(JSON.stringify(response) + '\n');
        } else if (input.jsonrpc === "2.0" && (input.result || input.error)) {
            // Não faz nada com respostas
        } else {
            process.stdout.write(JSON.stringify({
                jsonrpc: "2.0",
                error: { code: -32700, message: "Parse error: Invalid JSON-RPC 2.0 format or malformed request" },
                id: input.id || null
            }) + '\n');
        }
    } catch (e) {
        process.stdout.write(JSON.stringify({
            jsonrpc: "2.0",
            error: { code: -32700, message: "Parse error: Invalid JSON" },
            id: null
        }) + '\n');
    }
});

process.stdin.on('end', () => {});