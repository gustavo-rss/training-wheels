describe("Test suite", function () {
  before(function () {
    cy.log("This runs before all tests");
  });

  beforeEach(function () {
    cy.log("This runs before each test");
  });

  it("Teste 1", function () {
    cy.log("Testando o teste 1");
  });

  it("Teste 2", function () {
    cy.log("Testando o teste 2");
  });

  it("Teste 3", function () {
    cy.log("Testando o teste 3");
  });

  afterEach(function () {
    cy.log("This runs after each test");
  });

  after(function () {
    cy.log("This runs after all tests");
  });
});
