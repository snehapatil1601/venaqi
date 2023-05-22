

import { wait } from "@testing-library/user-event/dist/utils";

export function editAC(userEmail) {

  cy.contains("span", userEmail)
    .parent()
    .parent()
    .within(() => {
      cy.get(":nth-child(6) > div > .pencil > .p-button-icon").click();
      let lastname = cy.xpath("//input[@placeholder='Your lastname']")
      lastname.clear()
      cy,wait(1000)
      lastname.type("scottAC");
      cy.xpath("//button[normalize-space()='Save']").click();
      cy.wait(2000);
      
    });
}
export function editCA(userEmail) {

  cy.contains("span", userEmail)
    .parent()
    .parent()
    .within(() => {
      cy.get(":nth-child(6) > div > .pencil > .p-button-icon").click();
      let lastname = cy.xpath("//input[@placeholder='Your lastname']")
      lastname.clear()
      cy,wait(1000)
      lastname.type("scottCA");
      cy.xpath("//button[normalize-space()='Save']").click();
      
    });
}
export function editClient(userEmail) {
cy.reload();

  cy.contains("span", userEmail)
    .parent()
    .parent()
    .within(() => {
      cy.get(":nth-child(6) > div > .pencil > .p-button-icon").click();
      let lastname = cy.xpath("//input[@placeholder='Your lastname']")
      lastname.clear()
      cy,wait(1000)
      lastname.type("scottclient");
      ///cy.get('.e-input-group-icon').click();
      //cy.xpath("//div[@class='e-multi-select-wrapper e-down-icon']").trigger('mouseover');
      //cy.get('.e-multi-select-wrapper').click();
      //cy.get("span[class='e-all-text']").click();
      cy.xpath("//button[normalize-space()='Save']").scrollIntoView().click();

      
    });
}



