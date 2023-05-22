/// <reference types="cypress" />

import { doLogin } from "./UAT.cy";
import randomEmail from "random-email";

export function addorg() {

    cy.get('.bg-green').scrollIntoView().should("be.visible").click({ force: true });
    cy.get(':nth-child(1) > .col-8 > .form-control').type('UAT Test', { force: true });
      cy.get(':nth-child(2) > .col-8 > .form-control').type(randomEmail({ domain: 'yopmail.com'}) );
    cy.get('.modal-body > :nth-child(3) > .col-8 > .form-control').type('2514789632');
    cy.get(':nth-child(4) > .col-8 > .form-control').type('2');
    cy.get('.mt-2 > .bg-green').scrollIntoView().click({ force: true });
    
}

export function editorg() {
    cy.get(':nth-child(1) > :nth-child(6) > div > .pencil > .p-button-icon').should("be.visible").click({ force: true });
    const limit = cy.get("input[placeholder='1']").clear();
    cy.wait(1000);
   limit.type('5');
    cy.get('#addressType').select('OFFICE');
    cy.get("textarea[placeholder='Enter address']").type('spine city');
    cy.get('#country').select('France');
    cy.get('#state').select('Bretagne');
    cy.get('#city').scrollIntoView().select('Ambon');
    cy.get('#zip').type('7485962');
    cy.get('.mt-2 > .bg-green').click();
    
}

export function deleteorg()
{
  cy.get(':nth-child(1) > :nth-child(6) > div > .bg-danger > .p-button-icon').click();
  cy.get('.btn-success').click();
  cy.wait(4000);
}










