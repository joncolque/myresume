/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress
import  { socialMedia, email } from '../../../src-data/socialMedia.ts'

describe('home', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('display name, profession, aboutme', () => {
    cy.get('[data-test=title-name]').should('contain.text', 'Jon Wilson Colque Limachi')
    cy.get('[data-test=subtitle-profession]').should('contain.text', 'Software Engineer')
    cy.get('[data-test=p-aboutme]').should('contain.text', 'I am passionate about the transmission of human knowledge, especially when it is technology. I am methodical, I focus on delivering value, I like teamwork. Systems Engineer.')
  })

  it.only('display social media', () => {
    socialMedia.forEach(sm => {
      cy.get(`[data-test=${sm.name}]`)
        .should('be.visible')
        .and(($img) => {
          expect($img[0].naturalWidth).to.be.greaterThan(0)
        })
    })
    cy.get(`[data-test=email]`)
        .should('be.visible')
        .and(($img) => {
          expect($img[0].naturalWidth).to.be.greaterThan(0)
        })
  })
})
