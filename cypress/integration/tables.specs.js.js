it("Must show a table with 7 tv shows", function () {
  cy.visit("/");
  cy.get('a[href="tables"]').click();

  cy.get("table tbody tr").then(function (shows) {
    expect(shows).to.have.length(7);
  });
});

it("Must show loki tv show on the table", function () {
  cy.visit("/");
  cy.get('a[href="tables"]').click();

  cy.contains("table tbody tr", "Loki").then(function (item) {
    expect(item).to.contain("Marvel");
    expect(item).to.contain("Disney+");
    expect(item).to.contain("2021");
  });
});

it("Must remove Round 6 tv show", function () {
  cy.visit("/");
  cy.get('a[href="tables"]').click();

  cy.contains("table tbody tr", "Round 6")
    .then(function (item) {
      item.find(".delete").trigger("click");
    })
    .should("not.exist");

  cy.get("table tbody tr").then(function (shows) {
    expect(shows).to.have.length(6);
  });
});
