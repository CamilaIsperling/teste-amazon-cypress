/// <reference types="cypress" />

describe("Busca de produtos na Amazon", () => {
  beforeEach(() => {
    cy.visit("https://www.amazon.com.br");
  });

  it("Deve buscar por 'celular' e validar se há resultados na página", () => {
    cy.get("#twotabsearchtextbox").type("celular{enter}");
    cy.url().should("include", "celular");
    cy.get("div.s-main-slot")
      .find("div[data-component-type='s-search-result']")
      .should("have.length.greaterThan", 0);
  });

  it("Deve buscar por 'notebook' e validar sugestão na barra de busca", () => {
    cy.get("#twotabsearchtextbox").type("notebook");
    cy.get(".s-suggestion").should("contain.text", "notebook");
  });
});
