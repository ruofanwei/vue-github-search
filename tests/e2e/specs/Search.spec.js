

describe("My First Test", () => {
  it("Visits the app root url", () => {
    // visit search page
    cy.visit("/");
    // use keywords : github to search
    cy.get('input[type="text"]').should("have.value", "github");
    // click repositories type
    cy.get(".active").click();
    // scroll to bottom to load more
    cy.scrollTo("bottom", { duration: 2000 });
    // scroll to top
    cy.scrollTo("top", { duration: 2000 });

    // clear keywords
    cy.get('input[type="text"]').focus().clear();
    // type keywords : javascript search
    cy.get("input").type("javascript");
  });
});
