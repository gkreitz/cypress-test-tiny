/// <reference types="cypress" />
describe('page', {baseUrl: 'https://github.com/'}, () => {
  it('works', () => {
      cy.visit('/gkreitz/cypress-test-tiny')
      cy.get('a[href="http://google.com/"]').click()
  })
})
