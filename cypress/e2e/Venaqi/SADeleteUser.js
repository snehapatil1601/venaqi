/// <reference types='@cypress/xpath' />
export function delAC(userEmail) {

    cy.contains("span", userEmail)
      .parent()
      .parent()
      .within(() => {
        cy.get(':nth-child(6) > div > .bg-danger > .p-button-icon').click();
        cy.wait(2000);
        cy.xpath("//button[@class='btn btn-success btn-button']").click();
});
  }
  export function delCA(userEmail) {

    cy.contains("span", userEmail)
      .parent()
      .parent()
      .within(() => {
        cy.get(':nth-child(6) > div > .bg-danger > .p-button-icon').click();
        cy.wait(2000);
        cy.xpath("//button[@class='btn btn-success btn-button']").click();
});
  }
  export function delclient(userEmail) {

    cy.contains("span", userEmail)
      .parent()
      .parent()
      .within(() => {
        cy.get(':nth-child(6) > div > .bg-danger > .p-button-icon').click();
        cy.wait(2000);
        cy.xpath("//button[@class='btn btn-success btn-button']").click();
});
  }
