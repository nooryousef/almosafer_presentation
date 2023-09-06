/// <reference types= "cypress" />

describe('assertion for ', () => {
  it('currency is SAR', () => {
    cy.visit('https://www.almosafer.com/ar')
    cy.get('.cta__saudi').click()
    cy.get('[data-testid="Header__CurrencySelector"]').invoke('text').should('include', 'SAR')

let arab="العربية"
    cy.get('[data-testid="Header__LanguageSwitch"]').should('have.text','English')

    cy.get('#uncontrolled-tab-example-tab-flights ').should('have.class','nav-item nav-link active')

  })
})
