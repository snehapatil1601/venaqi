/// <reference types="cypress" />
import { CAadduser } from "./CAAdduser";

export function acceptApponitment()
{
    cy.xpath("//h6[normalize-space()='My Appointments']").click();
    cy.wait(2000);
    // cy.get('input[placeholder="Search by name"]').type(clientName).type('{enter}');
    // cy.wait(4000);
    Acceptbtn();
    cy.get('.btn-success').click();
}

function Acceptbtn()
{
    cy.xpath("//tbody[1]/tr[1]/td[7]/div[1]/button[1]/span[1]").click();
    cy.wait(4000);
    cy.xpath("//button[normalize-space()='Accept']").click();
    cy.wait(1000);
}