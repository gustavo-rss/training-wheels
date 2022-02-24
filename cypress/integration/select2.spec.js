it("Selects Cypress item", function () {
  cy.visit("/");
  cy.get("a[href^=apps]").click();

  cy.get(".select2-selection--single").click();
  cy.contains(".select2-results__option", "Cypress").click();
});

it("Selects multiple options", function () {
  cy.visit("/");
  cy.get("a[href^=apps]").click();

  const frameworks = ["Cypress", "Protractor", "Robot Framework"];

  frameworks.forEach(function (framework) {
    cy.get(".select2-selection--multiple").click();
    cy.contains(".select2-results__option", framework).click();
  });
});
