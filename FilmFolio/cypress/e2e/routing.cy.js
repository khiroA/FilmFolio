describe("App Routing", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('navigates to Home page ("/") and shows default sections', () => {
    cy.contains("Trending Movies").should("exist");
  });

  it('navigates to Favorites page ("/favorites")', () => {
    cy.get('a[href="/favorites"]').first().click();

    cy.url().should("include", "/favorites");
    cy.contains("Your Favorites").should("exist");
  });

  it('navigates to Watchlist page ("/watchlist")', () => {
    cy.get('a[href="/watchlist"]').first().click();
    cy.url().should("include", "/watchlist");
    cy.contains("Your Watchlist").should("exist");
  });

  it('navigates to Explore page ("/explore")', () => {
    cy.get('a[href="/explore"]').first().click();
    cy.url().should("include", "/explore");
    cy.contains("Explore with AI").should("exist");
  });

  it("displays 404 Not Found for invalid routes", () => {
    cy.visit("/invalid-route-xyz", { failOnStatusCode: false });
    cy.contains("Page Not Found").should("exist");
  });
});
