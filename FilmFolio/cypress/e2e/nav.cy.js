describe("Navbar component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders all nav links", () => {
    cy.get("nav .navbar-links")
      .should("contain.text", "Home")
      .and("contain.text", "ExploreAI")
      .and("contain.text", "Favorites")
      .and("contain.text", "Watchlist");
  });

  it("toggles theme class on <html>", () => {
    cy.get("html").should("not.have.class", "light-theme");

    cy.get(".theme-toggle").click();
    cy.get("html").should("have.class", "light-theme");
    cy.get(".theme-toggle").click();
    cy.get("html").should("not.have.class", "light-theme");
  });
});
