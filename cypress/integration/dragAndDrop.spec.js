describe("Drag and drop", function () {
  before(function () {
    cy.visit("/");
    cy.get("a[href^=drag]").click();
  });
  it("Must drag cypress to the nodejs box", function () {
    const dataTransfer = new DataTransfer();

    cy.get("img[alt=Cypress]").trigger("dragstart", { dataTransfer });
    cy.get(".nodejs figure[draggable=true]").trigger("drop", { dataTransfer });
  });

  it("Must drag robot to the python box", function () {
    const dataTransfer = new DataTransfer();

    cy.get("img[alt^=Robot]").trigger("dragstart", { dataTransfer });
    cy.get(".python figure[draggable=true]").trigger("drop", { dataTransfer });
  });
});
