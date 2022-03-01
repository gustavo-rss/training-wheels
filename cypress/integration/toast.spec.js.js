it("Displays a toast notification", function () {
  cy.visit("/");
  cy.get('a[href="toaster"]').click();

  cy.contains("button", "Toast Rápido").click();
  
    cy.get('.notification').should('be.visible').should('have.text', 'Essa notificação é muito rápida!')

  cy.get('body').wait(3000);
});


