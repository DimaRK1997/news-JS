describe('App e2e', () => {
  beforeEach(() => {
    cy.intercept('https://newsapi.org/v2/sources?apiKey=22d4e54d29bf4d64a87c6542403e37b8', {
      fixture: 'dataSources',
    }).as('getSources');
    cy.intercept('https://newsapi.org/v2/everything?apiKey=22d4e54d29bf4d64a87c6542403e37b8&sources=abc-news', {
      fixture: 'dataNews',
    }).as('getNews');
  });

  it('Renders 10 items Sources', () => {
    cy.visit('');
    cy.wait('@getSources');
    cy.get('.source__item').its('length').should('equal', 5);
  });

  it('Renders news "ABC News"', () => {
    cy.get('div[data-source-id="abc-news"]').click();
    cy.wait('@getNews');
    cy.get('.news__item').its('length').should('equal', 5);
  });
});
