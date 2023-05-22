export function caexport() {
    cy.xpath("//h6[normalize-space()='Customer Returns']").click();
    cy.xpath("//button[normalize-space()='Export']").click();
    cy.wait(2000);
  }
  
  export function CAsignout() {
    cy.get(".mat-icon-no-color").click();
    cy.get(".c-pointer").click();
  }