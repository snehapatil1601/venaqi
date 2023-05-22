import randomEmail from "random-email";
import Chance from "chance";
const genrator = new Chance()


export function usernavigate()
{
  cy.get('.px-1').click();
  
}

export function addAC()
{
    let userEmail = randomEmail({ domain: 'yopmail.com'});
    cy.get("button[data-bs-toggle='offcanvas']").click();
   cy.get("input[formcontrolname='firstName']").type("Andrew");
  cy.get("input[formcontrolname='lastName']").type("AC");
  cy.get("input[formcontrolname='contactNumber']").type("7485961236");
  cy.get("input[formcontrolname='email']").type(userEmail);
  cy.get('#organization').select('NEW');
  cy.wait(2000);
  cy.get("select[formcontrolname='roles']").select('Accountant');
  cy.get('.modal-footer > .bg-green').click();
  cy.wait(2000);
  cy.get('.p-fluid > .p-inputtext').click().type('Andrew').click();
  cy.wait(2000);
  return userEmail;
}
export function addCA()
{
    let emailca = randomEmail({ domain: 'yopmail.com'});
    cy.get("button[data-bs-toggle='offcanvas']").click();
 cy.get("input[formcontrolname='firstName']").type("smith");
  cy.get("input[formcontrolname='lastName']").type("CA");
  cy.get("input[formcontrolname='contactNumber']").type("7485961236");
  cy.get("input[formcontrolname='email']").type(emailca);
  cy.get('#organization').select('NEW');
  cy.wait(2000);
  cy.get("select[formcontrolname='roles']").select('Chief Accountant');
  cy.get('.modal-footer > .bg-green').click();
  cy.wait(2000);
  return emailca;
}

function randomNumber () {
  return Math.floor(Math.random() * 100);
}

export function addclient()
{
    let clientemail = randomEmail({ domain: 'yopmail.com'});
    cy.get("button[data-bs-toggle='offcanvas']").click();
    cy.get("input[formcontrolname='firstName']").type("Florra");
  cy.get("input[formcontrolname='lastName']").type("client");
  cy.get("input[formcontrolname='contactNumber']").type("7485961236");
  cy.get("input[formcontrolname='email']").type(clientemail);
  cy.get('#organization').select('NEW');
  cy.wait(2000);
  cy.get("select[formcontrolname='roles']").select('Client');
  cy.get('.e-multi-select-wrapper').click();
  cy.get("span[class='e-all-text']").click();
  cy.get("input[formcontrolname='clientOrganization']").type(genrator.word())
  cy.get("input[formcontrolname='activitySector']").type(genrator.word())
  cy.get("input[formcontrolname='activity']").type(genrator.word())
  cy.get("input[formcontrolname='effective']").scrollIntoView().type(randomNumber())
  cy.get("input[formcontrolname='turnover']").type(randomNumber())
  cy.get("input[formcontrolname='city']").type(genrator.word())
  
  cy.get('.modal-footer > .bg-green').click();
  return clientemail;
  
  
}


