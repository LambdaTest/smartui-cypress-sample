/// <reference types="cypress" />

describe('My First Cypress method', function () {
    it('clickin on element', () => {
      cy.visit('https://example.cypress.io/commands/actions')
      cy.screenshot('cypress')
    })
  })
  
  describe('My second Cypress method', function () {
    it('clickin on element', () => {
      cy.visit('https://www.google.com/')
      cy.screenshot('google')
    })
  })
  
  
