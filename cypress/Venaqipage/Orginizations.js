require("@cypress/xpath");

class orginization {
  checksidebar() {
    cy.contains("Organizations");
    cy.contains("Users");
  }
  changelanguage() {
    cy.get(
      ".mx-2 > .p-dropdown > .p-dropdown-trigger > .p-dropdown-trigger-icon"
    ).click();
    cy.get(":nth-child(1) > .p-dropdown-item").click();
  }
  orgclick() {
    cy.xpath("//mat-list-item[@routerlink='superadmin/organization']").click();
  }
  Addorginization() {
    cy.get(".bg-green")
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
  }
  setOrgname(Orgname) {
    cy.get(":nth-child(1) > .col-8 > .form-control").type(Orgname);
  }
  setOrgemail(Orgemail) {
    cy.get(":nth-child(2) > .col-8 > .form-control").type(Orgemail);
  }
  setphonenumber(Orgphonenumber) {
    cy.get(".modal-body > :nth-child(3) > .col-8 > .form-control").type(
      Orgphonenumber
    );
  }
  setaccountantlimit(Orglimit) {
    cy.get(":nth-child(4) > .col-8 > .form-control").type(Orglimit);
  }

  saveorg(submit) {
    cy.get(".mt-2 > .bg-green").scrollIntoView().click({ force: true });
  }
  Editorginization() {
    cy.get(":nth-child(1) > :nth-child(6) > div > .pencil > .p-button-icon")
      .should("be.visible")
      .click({ force: true });
  }

  addresstype(adresstype) {
    cy.get("#addressType").select(adresstype);
  }
  setorgadress(setadress) {
    cy.get("textarea[placeholder='Enter address']").type(setadress);
  }
  orgcountery(countery) {
    cy.get("#country").select(countery);
  }
  orgstate(state) {
    cy.get("#state").select(state);
  }
  orgcity(city) {
    cy.get("#city").scrollIntoView().select(city);
  }

  orgzip() {
    cy.get("#zip").type("7485962");
  }
  orgupdate() {
    cy.get(".mt-2 > .bg-green").click();
  }
}

export default orginization;
