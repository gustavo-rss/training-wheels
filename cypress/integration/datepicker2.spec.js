it("Selects brith date", function () {
  cy.visit("/");
  cy.get("a[href=datepicker]").click();

  const date = {
    day: "30",
    month: "jun",
    year: "2021",
  };

  cy.get(".datetimepicker-dummy-input").click();

  cy.get(".datepicker-nav-month").click();
  cy.contains(".datepicker-month", date.month).click();

  cy.get(".datepicker-nav-year").click();
  cy.contains(".datepicker-year span", date.year).click();

  cy.get(
    'div[class="datepicker-date is-current-month"] button[class=date-item]'
  )
    .contains(new RegExp("^" + date.day + "$", "g"))
    .click();
});
