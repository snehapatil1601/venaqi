/// <reference types="cypress" />
export function CAedituser(causerEmail)
{
cy.contains("span", causerEmail)
    .parent()
    .parent()
    .within(() => {
      cy.get(":nth-child(6) > div > .pencil > .p-button-icon").click();
      let lastname = cy.xpath("//input[@placeholder='Your lastname']")
      lastname.clear()
      cy,wait(1000)
      lastname.type("FlorraCA");
      cy.xpath("//button[normalize-space()='Save']").click();
      
    });
}