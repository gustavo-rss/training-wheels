it("Must check best marvel movies", function () {
  cy.visit("/");
  cy.get("a[href=checkboxes]").click();

  const movies = ["cap", "avengers", "guardians", "avengers3", "blackpanther"];

  movies.forEach(function (m) {
    cy.get(`input[name=${m}]`).check().should("be.checked");
  });
});
