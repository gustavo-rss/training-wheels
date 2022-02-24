it("Uploads an image", function () {
  cy.visit("/");
  cy.get("a[href=upload]").click();

  const imageFile = "cypress/fixtures/Batman.jpg";

  cy.get("input[name=file").selectFile(imageFile, { force: true });

  cy.get("input[value=Upload]").click();

  cy.get('img[src="/uploads/Batman.jpg"]', { timeout: 7000 }).should(
    "be.visible"
  );
});
