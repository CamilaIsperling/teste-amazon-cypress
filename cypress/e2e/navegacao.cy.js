/// <reference types="cypress" />

describe("Navegação na Amazon", () => {
  beforeEach(() => {
    cy.visit("https://www.amazon.com.br");
  });

  it("Deve acessar a página inicial e verificar o título e o logo", () => {
    cy.title().should("contain", "Amazon");
    cy.get("#nav-logo-sprites").should("be.visible");
  });

  it("Deve abrir o menu de categorias e verificar se 'Mais vendidos' está presente", () => {
    cy.get("#nav-hamburger-menu").should("be.visible").click();
    cy.contains("Mais vendidos").should("be.visible");
  });
});
