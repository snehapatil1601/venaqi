/// <reference types="cypress" />
import randomEmail from "random-email";
import { faker } from "@faker-js/faker";

export function CALogin() {
  cy.visit("https://dev.venaqi.com/#/landing-page");
  cy.viewport("macbook-11");
  cy.get(".btn-connect").click();
  cy.get("#inputEmail").type("ca@yopmail.com");
  cy.get("#mat-input-0").type("Test@123");
  cy.get(".mat-raised-button").click();
  cy.wait(2000);
}
function CAuser() {
  cy.xpath(
    "//mat-list-item[@class='mat-list-item mat-focus-indicator d-flex align-items-center rounded my-2 ps-1 box active']"
  ).click();
}
export function CAadduser() {
  CAuser();
  const Firstname = faker.name.firstName();
  const lastname = faker.name.lastName();
  let causerEmail = randomEmail({ domain: "yopmail.com" });
  cy.xpath("//button[normalize-space()='Add User']").click();
  cy.xpath("//input[@placeholder='Your firstname']").type(Firstname);
  cy.get("input[formcontrolname='lastName']").type(lastname);
  cy.get("input[formcontrolname='contactNumber']").type("7485961236");
  cy.get("input[formcontrolname='email']").type(causerEmail);
  cy.get("select[formcontrolname='roles']").select("Accountant");
  cy.get(".modal-footer > .bg-green").click();
  cy.wait(2000);
  return causerEmail;
}

// CAaddclient();
// {
//   CAuser();
//   const Firstname = faker.name.firstName();
//   const lastname = faker.name.lastName();
//   let clientemail = randomEmail({ domain: "yopmail.com" });
//   cy.get("button[data-bs-toggle='offcanvas']").click();
//   cy.get("input[formcontrolname='firstName']").type(Firstname);
//   cy.get("input[formcontrolname='lastName']").type(lastname);
//   cy.get("input[formcontrolname='contactNumber']").type("7485961236");
//   cy.get("input[formcontrolname='email']").type(clientemail);
//   cy.get("#organization").select("NEW");
//   cy.wait(2000);
//   cy.get("select[formcontrolname='roles']").select("Client");
//   cy.get(".e-multi-select-wrapper").click();
//   cy.get("span[class='e-all-text']").click();
//   cy.get("input[formcontrolname='clientOrganization']").type(genrator.word());
//   cy.get("input[formcontrolname='activitySector']").type(genrator.word());
//   cy.get("input[formcontrolname='activity']").type(genrator.word());
//   cy.get("input[formcontrolname='effective']")
//     .scrollIntoView()
//     .type(randomNumber());
//   cy.get("input[formcontrolname='turnover']").type(randomNumber());
//   cy.get("input[formcontrolname='city']").type(genrator.word());

//   cy.get(".modal-footer > .bg-green").click();
  
// }

export function CAedituser(causerEmail) {
  cy.contains("span", causerEmail)
    .parent()
    .parent()
    .within(() => {
      cy.get(":nth-child(6) > div > .pencil > .p-button-icon").click();
      let lastname = cy.xpath("//input[@placeholder='Your lastname']");
      lastname.clear();
      cy.wait(1000);
      lastname.type("FlorraCA");
      cy.xpath("//button[normalize-space()='Save']").click();
    });
}

export function CAdeluser(causerEmail) {
  cy.contains("span", causerEmail)
    .parent()
    .parent()
    .within(() => {
      cy.get(":nth-child(6) > div > .bg-danger > .p-button-icon").click();
      cy.wait(2000);
      cy.xpath("//button[@class='btn btn-success btn-button']").click();
    });
}
