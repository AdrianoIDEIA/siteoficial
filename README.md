# EIBM Terapias - Site Oficial

Aplicação React para apresentação de serviços de terapias especializadas da EIBM.

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes de interface (shadcn/ui)
│   └── figma/          # Componentes específicos do Figma
├── pages/              # Páginas da aplicação
├── hooks/              # Custom hooks React
├── lib/                # Utilitários e configurações
├── types/              # Definições de tipos TypeScript
├── constants/          # Constantes da aplicação
└── styles/             # Arquivos de estilo globais
```

## Páginas Disponíveis

- **Home**: Página principal com navegação
- **Psicologia**: Página específica de psicologia
- **Fonoaudiologia**: Página específica de fonoaudiologia
- **Psicopedagogia**: Página específica de psicopedagogia
- **Terapia Ocupacional**: Página específica de terapia ocupacional

## Tecnologias Utilizadas

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (animações)
- Lucide React (ícones)
- shadcn/ui (componentes)

## Scripts Disponíveis

- `npm start`: Inicia o servidor de desenvolvimento
- `npm build`: Cria build de produção
- `npm test`: Executa os testes
- `npm eject`: Ejeta a configuração do Create React App

## Estrutura de Componentes

### UI Components
Todos os componentes de UI estão organizados em `src/components/ui/` e seguem o padrão shadcn/ui.

### Hooks
Custom hooks estão em `src/hooks/` para reutilização de lógica.

### Utilitários
Funções utilitárias estão em `src/lib/` incluindo a função `cn` para merge de classes CSS.

### Tipos
Definições de tipos TypeScript estão em `src/types/` para melhor tipagem.

### Constantes
Constantes da aplicação estão em `src/constants/` para centralização de valores fixos.
