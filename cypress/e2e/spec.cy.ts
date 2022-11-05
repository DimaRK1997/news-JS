describe('App e2e', () => {
  it('Name title app', () => {
    cy.visit('/');

    cy.get('title').contains('NewsPortal');
  });

  it('Clicked on ABC News', () => {
    cy.visit('/');

    cy.get('[data-source-id="abc-news"]').click();
  });
});
