/// <reference types="cypress" />

describe("Carrinho de compras na Amazon", () => {
  it("Buscar produto e adicionar no carrinho de compras", () => {
    cy.visit("https://www.amazon.com.br");

    // Busca por "mouse gamer"
    cy.get("#twotabsearchtextbox").type("mouse gamer{enter}");
    cy.scrollTo(0, 450);

    // Clica no botão "Adicionar ao carrinho"
    cy.get('[id="a-autoid-1-announce"]').should("be.visible").click();

    // Verifica se o produto foi adicionado
    cy.get("#nav-cart-count").should("contain.text", "1");

    cy.visit("https://www.amazon.com.br/gp/cart/view.html");

    cy.get(".sc-list-item-content").should("exist");
    cy.get(".sc-product-title")
      .first()
      .should("be.visible")
      .and("not.be.empty");
  });
});
