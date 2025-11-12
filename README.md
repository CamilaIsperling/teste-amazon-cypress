# teste-amazon-cypress

Projeto de automação de testes end‑to‑end com **Cypress** para validar buscas e fluxo de carrinho no site da Amazon Brasil.

> Exemplos de cenários cobertos: buscar produtos (ex.: “celular”, “notebook”) e adicionar item ao carrinho após rolagem controlada da página.

---

## Pré‑requisitos

- **Node.js** 18+ (ou 20+ recomendado)
- **npm** 8+ (ou **pnpm/yarn** se preferir)
- Acesso à internet (os testes navegam até `https://www.amazon.com.br`)

Verifique:

```bash
node -v
npm -v
```

---

## Instalação

```bash
# clone o repositório
git clone https://github.com/CamilaIsperling/teste-amazon-cypress.git
cd teste-amazon-cypress

# instale as dependências
npm install
```

---

## Como executar

### Abrir o Cypress (modo interativo)

```bash
npx cypress open
```

Escolha **E2E Testing** → selecione o navegador → clique no teste desejado.

### Rodar no terminal

```bash
npx cypress run
```

Para escolher um navegador específico:

```bash
npx cypress run --browser chrome
```

---

## Estrutura do projeto

Um exemplo de organização sugerida (pode variar conforme seu repositório):

```
├─ cypress.config.{js,ts}        # Configuração principal do Cypress (baseUrl, viewport, reporter)
├─ cypress/
│  ├─ e2e/
│  │  │  ├─ busca.cy.js           
│  │  │  └─ carrinho.cy.js     
│  │  │  └─ navegacao.cy.js     
│  │  └─ README.md               # (opcional) notas específicas dos testes E2E
│  ├─ fixtures/                  # Mocks de dados (JSON) usados nos testes
│  ├─ support/
│  │  ├─ commands.js             # Comandos customizados: ex. login(), getBySel(), etc.
│  │  └─ e2e.js                  # Hooks globais, imports e configurações por teste
├─ reports/                      # (opcional) relatórios HTML/JUnit/Mochawesome
├─ package.json
└─ README.md
```

### O que cada arquivo/pasta faz

- **`cypress.config.{js,ts}`**: configurações do projeto. Exemplos úteis:
  - `baseUrl`: `https://www.amazon.com.br`
  - `defaultCommandTimeout`, `viewportWidth`, `viewportHeight`
  - `reporter` e `reporterOptions` (Mochawesome/JUnit)
- **`cypress/e2e/amazon/busca.cy.js`**: testes de busca (ex.: digitar “celular” e verificar resultados; digitar “notebook” e validar sugestão de autocomplete).
- **`cypress/e2e/amazon/carrinho.cy.js`**: fluxo de adicionar produto ao carrinho mantendo a **mesma estrutura** pedida (incluindo `cy.scrollTo(...)`):
  - visita a home → busca por “mouse gamer” → **rola a página** para garantir visibilidade → entra no produto → clica “Adicionar ao carrinho”.
- **`cypress/fixtures/`**: dados estáticos para mocks (ex.: usuários, respostas de API, massa de teste).
- **`cypress/support/commands.js`**: lugar ideal para criar comandos como `cy.searchProduct(term)` ou utilitários de rolagem/espera.
- **`cypress/support/e2e.js`**: executa antes de cada spec E2E; bom para registrar comandos e intercepts globais.
- **`reports/`**: saída de relatórios quando configurado um reporter.
- **`.github/workflows/`**: pipelines para rodar os testes no CI.

---

## ⚙️ Configurações recomendadas

Crie/ajuste `cypress.config.js`:

```js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.amazon.com.br",
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // plugins / reporters aqui se necessário
      return config;
    },
  },
  video: true,
});
```

```bash
npm install cypress --save-dev
```