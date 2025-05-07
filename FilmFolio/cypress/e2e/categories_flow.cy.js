describe("Categories Flow on Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("loads genres and displays default sections initially", () => {
    cy.get(".category-item, .category-item-active", { timeout: 10000 }).should(
      "exist",
    );
    cy.contains("Trending Movies").should("exist");
    cy.contains("Top Rated Movies").should("exist");
    cy.contains("Now Playing").should("exist");
  });

  it("clicking a genre hides default sections and shows genre movies", () => {
    cy.get(".category-item").first().click();

    cy.contains("Trending Movies").should("not.exist");
    cy.contains("Top Rated Movies").should("not.exist");
    cy.contains("Now Playing").should("not.exist");

    cy.get(".movie-card, .category-movie-card", { timeout: 10000 }).should(
      "exist",
    );
  });
});
