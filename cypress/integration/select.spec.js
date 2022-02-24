it("Select Loki character by id", function () {
  cy.visit("/");
  cy.get("a[href=select]").click();

  cy.get("#avengerList").select("Loki").should("have.value", "6");
});

it("Select Tony Stark character by contains", function () {
  cy.visit("/");
  cy.get("a[href=select]").click();

  cy.contains("option", "Selecione um personagem")
    .parent()
    .select("Tony Stark")
    .should("have.value", "3");
});

it("Select all avengers by id", function () {
  cy.visit("/select");

  const avenger = [
    { text: "Steve Rogers", value: "1" },
    { text: "Bucky", value: "2" },
    { text: "Tony Stark", value: "3" },
    { text: "Natasha Romanoff", value: "4" },
    { text: "Bruce Banner", value: "5" },
    { text: "Loki", value: "6" },
    { text: "Scott Lang", value: "7" },
  ];

  avenger.forEach((a) => {
    cy.get("#avengerList").select(a.text).should("have.value", a.value);
  });
});
