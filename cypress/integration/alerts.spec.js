it("Displays an alert messages", function () {
  cy.visit("/");
  cy.get('a[href="javascript_alerts"]').click();

  cy.contains("button", "Alerta").click();

  cy.on("window:alert", function (result) {
    expect(result).to.equal("Isto é uma mensagem de alerta");
  });
});

it("Displays and interacts confirming alert messages", function () {
  cy.visit("/");
  cy.get('a[href="javascript_alerts"]').click();

  cy.contains("button", "Confirma").click();

  cy.on("window:confirm", () => true);
  cy.get("#result").should("have.text", "Mensagem confirmada");
});

it("Displays and interacts not confirming alert messages", function () {
  cy.visit("/");
  cy.get('a[href="javascript_alerts"]').click();

  cy.contains("button", "Confirma").click();

  cy.on("window:confirm", () => false);
  cy.get("#result").should("have.text", "Mensagem não confirmada");
});

it("Interacts with prompt alert messages displaying a name", function () {
  cy.visit("/");
  cy.get('a[href="javascript_alerts"]').click();

  cy.window().then(function ($win) {
    cy.stub($win, "prompt").returns("Gustavo");
    cy.contains("button", "Prompt").click();
  });

  cy.get("#result").should("have.text", "Olá, Gustavo");
});
