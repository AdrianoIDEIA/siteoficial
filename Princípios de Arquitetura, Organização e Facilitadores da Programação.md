## Instruções para Agente de IA: Desenvolvimento de Software de Alta Qualidade com Foco em Web Design

Este documento serve como um guia fundamental para um agente de IA focado em auxiliar ou avaliar o desenvolvimento de software, com uma **ênfase especial em projetos de Web Design**. Ele detalha os princípios de arquitetura, organização do código e facilitadores de programação essenciais para a construção de sistemas web robustos, manuteníveis e escaláveis, que também ofereçam uma excelente experiência ao usuário.

---

### Princípios de Arquitetura de Software

Ao analisar ou projetar uma arquitetura de software, o agente de IA deve priorizar os seguintes princípios para garantir um sistema web escalável, manutenível, flexível e confiável:

- **Separação de Preocupações (SoC):**
    
    - **Instrução:** Garanta que o sistema seja dividido em componentes modulares e independentes, onde cada um lide com uma única funcionalidade específica. No contexto web, isso significa separar claramente a interface do usuário (HTML/CSS), a lógica de apresentação (JavaScript do lado do cliente) e a lógica de negócio/dados (backend).
        
    - **Avaliação:** Verifique a granularidade dos componentes e se há sobreposição de responsabilidades entre frontend e backend, ou entre camadas de apresentação.
        
- **Baixo Acoplamento:**
    
    - **Instrução:** Minimize as dependências entre os módulos. As mudanças em um componente devem ter impacto mínimo em outros. Isso é crucial para a flexibilidade, permitindo que alterações de design no frontend ou atualizações no backend ocorram com pouca interrupção.
        
    - **Avaliação:** Identifique conexões diretas excessivas ou dependências rígidas, por exemplo, o frontend fazendo muitas suposições sobre a implementação do backend, ou vice-versa.
        
- **Alta Coesão:**
    
    - **Instrução:** Assegure que os elementos dentro de um módulo sejam logicamente relacionados e contribuam para um propósito bem definido. Para web design, isso implica que um componente de UI deve ter todas as suas partes relacionadas (HTML, CSS, JS) coesas, e um serviço de backend deve ser responsável por um conjunto específico de operações.
        
    - **Avaliação:** Verifique se as funcionalidades de um módulo são coesas ou se ele abrange responsabilidades diversas.
        
- **Princípio da Responsabilidade Única (SRP):**
    
    - **Instrução:** Cada classe ou módulo deve ter apenas uma razão para mudar. Em web design, isso pode significar que um componente de UI não deve lidar com a lógica de autenticação, ou que um módulo CSS deve focar apenas em estilos, não em layout de página.
        
    - **Avaliação:** Examine se uma classe, componente ou módulo pode ser afetado por mais de um tipo de alteração de requisito.
        
- **Não se Repita (DRY):**
    
    - **Instrução:** Evite a duplicação de código. Promova a reutilização através de abstrações e componentes. No web design, isso se aplica a estilos CSS reutilizáveis, componentes de UI e funções JavaScript comuns.
        
    - **Avaliação:** Busque por blocos de código idênticos ou muito similares em diferentes partes do sistema (HTML, CSS, JavaScript).
        
- **Princípio Aberto/Fechado (OCP):**
    
    - **Instrução:** O software deve ser aberto para extensão, mas fechado para modificação. Novas funcionalidades de UI ou backend devem ser adicionadas sem alterar o código existente, geralmente via polimorfismo/abstração ou o uso de frameworks e bibliotecas que suportam extensibilidade.
        
    - **Avaliação:** Verifique se a adição de novas funcionalidades (ex: um novo tema visual, um novo tipo de conteúdo) exige modificações extensas em classes ou componentes existentes.
        

---

### Organização do Código e do Projeto (com foco em Web Design)

Para uma organização eficaz do projeto e do código, especialmente em Web Design, o agente de IA deve seguir e promover estas práticas:

- **Estrutura de Diretórios Clara e Consistente:**
    
    - **Instrução:** Mantenha uma organização lógica e previsível de arquivos e diretórios. Para web, isso frequentemente significa separar o frontend (HTML, CSS, JS, assets) do backend, e dentro do frontend, organizar por componentes, páginas ou funcionalidades.
        
    - **Avaliação:** Verifique a facilidade de navegação e a consistência na estrutura, especialmente na separação entre código de apresentação e lógica.
        
- **Padrões de Nomenclatura Consistentes:**
    
    - **Instrução:** Aplique convenções claras e uniformes para variáveis, funções, classes, arquivos e diretórios. Para web design, isso se estende a nomes de classes CSS (ex: BEM), IDs HTML e nomes de componentes de UI.
        
    - **Avaliação:** Identifique inconsistências na nomenclatura que prejudiquem a legibilidade e a manutenção, tanto no CSS/HTML quanto no JavaScript.
        
- **Documentação Adequada:**
    
    - **Instrução:** Promova a documentação da arquitetura, APIs, decisões de design (inclusive de UI/UX), e o fluxo geral do sistema. Para web, é vital documentar componentes de UI, fluxos de usuário e integrações com serviços.
        
    - **Avaliação:** Verifique a presença e clareza da documentação interna (comentários em HTML/CSS/JS) e externa (guias de estilo, documentação de API).
        
- **Controle de Versão (Git):**
    
    - **Instrução:** Utilize um sistema de controle de versão de forma disciplinada, com branches para novas funcionalidades ou ajustes de design, commits atômicos e mensagens claras.
        
    - **Avaliação:** Analise a qualidade dos commits, o uso de branches e a frequência de integrações, observando como as alterações de design são gerenciadas.
        
- **Gerenciamento de Dependências:**
    
    - **Instrução:** Recomende o uso de ferramentas para gerenciar dependências de projeto (npm/Yarn para frontend; Maven/Gradle, Composer, etc. para backend) para garantir consistência de versões de bibliotecas e frameworks.
        
    - **Avaliação:** Verifique a presença e a correta configuração de ferramentas de gerenciamento de dependências, especialmente para pacotes de frontend.
        

---

### Facilitadores da Programação (com foco em Web Design)

Para otimizar o processo de desenvolvimento e aumentar a qualidade, o agente de IA deve incorporar e promover os seguintes facilitadores, com um olhar para o Web Design:

- **Testes Automatizados:**
    
    - **Instrução:** Incentivar e, se possível, auxiliar na implementação de:
        
        - **Testes Unitários:** Para componentes de UI (ex: React Testing Library, Jest) e lógica de backend.
            
        - **Testes de Integração:** Verificação da interação entre frontend e backend (APIs), e entre diferentes componentes de UI.
            
        - **Testes de Aceitação/Fim a Fim (E2E):** Simulam o comportamento do usuário na interface (ex: Cypress, Playwright, Selenium) para garantir que a experiência de usuário e o fluxo geral funcionem como esperado.
            
    - **Avaliação:** Analise a cobertura de testes e a robustez dos cenários testados, com ênfase na interface do usuário.
        
- **Integração Contínua (CI):**
    
    - **Instrução:** Assegure a integração frequente do código de todos os desenvolvedores em um repositório central, com builds automatizados (incluindo compilação de CSS/JS, transpilação) e testes, detectando problemas de integração precocemente.
        
    - **Avaliação:** Verifique a existência de pipelines de CI e a frequência das integrações, incluindo testes específicos para o frontend.
        
- **Entrega Contínua/Implantação Contínua (CD):**
    
    - **Instrução:** Promova a capacidade de liberar o software para produção a qualquer momento (CDelivery) ou a implantação automática após testes (CDeployment). Isso acelera o tempo de lançamento de novas funcionalidades ou correções de design.
        
    - **Avaliação:** Determine o nível de automação e a frequência de _deploys_ para produção, observando a agilidade nas atualizações visuais e funcionais.
        
- **Revisão de Código (Code Review):**
    
    - **Instrução:** Encoraje a revisão mútua de código para identificar bugs, melhorar a qualidade, garantir a conformidade com as convenções (incluindo padrões de UI/UX) e disseminar conhecimento.
        
    - **Avaliação:** Verifique a existência e a eficácia do processo de revisão de código, prestando atenção à qualidade do código de frontend e backend.
        
- **Padrões de Projeto (Design Patterns):**
    
    - **Instrução:** Sugira a aplicação de soluções comprovadas para problemas de design de software. Para web design, isso inclui padrões de componentes de UI, padrões de arquitetura de frontend (ex: MVVM, Flux), e padrões de design responsivo.
        
    - **Avaliação:** Identifique a aplicação de padrões de projeto quando apropriado no design e na implementação, tanto no frontend quanto no backend.
        
- **Refatoração:**
    
    - **Instrução:** Promova a reestruturação contínua do código existente sem alterar seu comportamento externo. O objetivo é melhorar a legibilidade, a manutenibilidade e a performance, incluindo otimizações para o carregamento e renderização da página web.
        
    - **Avaliação:** Verifique a presença de atividades de refatoração contínuas no processo de desenvolvimento, com atenção à performance do web design.
        
- **Ambientes de Desenvolvimento Padronizados:**
    
    - **Instrução:** Garanta que todos os desenvolvedores tenham ambientes de desenvolvimento configurados de forma semelhante. Ferramentas como Docker ou gerenciadores de pacotes podem ajudar a manter a consistência e evitar problemas de "funciona na minha máquina", especialmente em relação a versões de navegadores e ferramentas de build de frontend.
        
    - **Avaliação:** Verifique a uniformidade dos ambientes de desenvolvimento, incluindo ferramentas e dependências de frontend.
        
- **Feedback Constante:**
    
    - **Instrução:** Estabeleça canais de comunicação abertos entre a equipe de desenvolvimento, designers de UI/UX, testadores e _stakeholders_. O feedback contínuo ajuda a identificar problemas cedo e a garantir que o produto final atenda às expectativas de usabilidade e funcionalidade.
        
    - **Avaliação:** Verifique a existência e eficácia dos canais de feedback, especialmente aqueles relacionados ao design e à experiência do usuário.