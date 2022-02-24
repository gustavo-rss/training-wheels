it("Must check black panther", function () {
  cy.visit("/");
  cy.get("a[href=radios]").click();

  const movies = ["cap", "avengers", "guardians", "avengers3", "blackpanther"];

  movies.forEach(function (m) {
    cy.get(`input[value=${m}]`).check().should("be.checked");
  });
});
