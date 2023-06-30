/// <reference types="cypress" />

describe('My First Cypress method', function () {
    it('clickin on element', () => {
      cy.visit('https://the-internet.herokuapp.com/add_remove_elements/')
      cy.screenshot('herokuapp')
    })
  })
  
  describe('My second Cypress method', function () {
    it('clickin on element', () => {
      cy.visit('https://www.google.com/')
      cy.screenshot('google')
    })
  })
  
  