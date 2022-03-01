it("Displays success message on popup", function () {
  cy.visit("/");
  cy.get('a[href^="sweet"]').click();

  cy.contains("button", "Sucesso").click();

  cy.get('.swal-text').should('have.text', 'Você clicou no botão verde.')
});

it("Displays error message on popup", function () {
  cy.visit("/");
  cy.get('a[href^="sweet"]').click();

  cy.contains("button", "Deu Ruim").click();

  cy.get('.swal-text').should('have.text', 'Você clicou no botão vermelho.')
});
