it("Uses timeout page", function () {
  cy.visit("/");
  cy.get("a[href=timeout]").click();

  cy.contains("button", "Habilita").click();
  // cy.wait(7000);

  cy.get("#firstname").should("be.visible").type("Gustavo", {timeout: 7000});
});
