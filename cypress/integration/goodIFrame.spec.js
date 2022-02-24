const niceIframe = function () {
  return cy
    .get("#weareqaninja")
    .its("0.contentDocument.body")
    .should("not.be.empty")
    .then(cy.wrap);
};

it("Asserts iframe instagram followers at good iFrame", function () {
  cy.visit("/");
  cy.get("a[href^='nice']").click();

  niceIframe()
    .contains(".FollowerCountText", "6,258 followers")
    .should("be.visible");
});

const badIframe = function () {
  return cy
    .get("iframe[src*=instagram]")
    .its("0.contentDocument.body")
    .should("not.be.empty")
    .then(cy.wrap);
};
it("Asserts iframe instagram followers at bad iFrame", function () {
  cy.visit("/");
  cy.get("a[href^='bad']").click();

  badIframe()
    .contains(".FollowerCountText", "6,258 followers")
    .should("be.visible");
});
