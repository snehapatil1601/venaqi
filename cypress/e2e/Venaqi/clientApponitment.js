/// <reference types="cypress" />

import Chance from "chance";
const chance = new Chance();
const randomString = chance.string({ length: 25, alpha: true });

export function clientLogin() {
 cy.visit("https://dev.venaqi.com/#/landing-page");
  cy.viewport("macbook-11");
  cy.get(".btn-connect").click();
  cy.get("#inputEmail").type("client@yopmail.com");
  cy.get("#mat-input-0").type("Test@123");
  cy.get(".mat-raised-button").click();
  cy.wait(5000);
}
export function bookanAppointment(currentTime) {
  let clientname = "spidy";
  cy.xpath("//a[@class='btn-connect mt-5 w-25 me-3 ng-star-inserted']").click();
  cy.get("input[placeholder='Search by Accountant Name']").type("spidy");
  cy.xpath("//button[normalize-space()='Make An Appointment']").click();
  cy.wait(4000);
  //Form-1
  cy.get("select[formcontrolname='consultation']").select("Monthly point");
  cy.wait(4000);
  cy.get("input[name='selectedTimeSlot']").check();
  cy.xpath(
    "//fieldset[@id='form1']//button[@type='submit'][normalize-space()='Continue']"
  ).click();
  cy.wait(4000);
  //Form-2
  cy.get("input[value='No']").check();
  cy.wait(2000);
  cy.get("textarea[placeholder='type here']").type(randomString);
  cy.xpath(
    "//fieldset[@id='form2']//button[@type='submit'][normalize-space()='Continue']"
  ).click();
  cy.wait(1000);
  //Form-3
  cy.get("select[formcontrolname='meetingMode']").select("Video");
  cy.scrollTo(0, 10000);
  cy.xpath(`//div[normalize-space()='${currentTime.getDate()}']`)
    .scrollIntoView()
    .should("be.visible")
    .click();
  cy.window().scrollTo("bottom");
  cy.wait(2000);
  cy.xpath(
    `//div[normalize-space()='${currentTime.getHours()}:00 AM - ${currentTime.getHours()}:30 AM']`
  ).click({ force: true });

  //view slot
  cy.wait(2000);
  cy.get("span[class='e-btn-icon e-icons e-eye-icon']").click({ force: true });
  cy.xpath("//button[normalize-space()='Add']").click({ force: true });
  cy.wait(2000);
  cy.window().scrollTo("bottom");
  cy.xpath(
    "//fieldset[@id='form3']//button[@type='submit'][normalize-space()='Continue']"
  ).click({ force: true });
  cy.xpath(
    "//button[@class='btn ms-2 btn-green text-white border-0 nxt__btn']"
  ).click({ force: true });
  cy.wait(4000);
  cy.xpath("//button[normalize-space()='Done']").click();
  cy.wait(2000);
  return clientname;
}
export function viewApponitment() {
  cy.xpath("//h1[@class='ms-1 text-white my-auto logo pointer']").click({force: true});
  cy.xpath("//h6[normalize-space()='My Appointments']").click({force: true});
  cy.xpath("//tbody[1]/tr[1]/td[7]/div[1]/button[1]/span[1]").click();
  cy.wait(2000);
  cy.xpath("//h6[normalize-space()='My Appointments']").click();
}


