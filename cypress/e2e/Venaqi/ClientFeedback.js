

export function clientrating() {
    cy.xpath("//h1[@class='ms-1 text-white my-auto logo pointer']").click();
    cy.wait(2000);
    cy.get("a[class='btn-connect mt-5']").click();
    cy.get(
      ":nth-child(1) > .my-1 > .d-flex > .ms-2 > .p-rating > :nth-child(8)"
    ).click();
    cy.get(
      ":nth-child(1) > .my-1 > .d-flex > .ms-2 > .p-rating > :nth-child(10)"
    ).click();
    cy.window().scrollTo("bottom");
    cy.get(".btn-green").click();
    cy.xpath("//button[@class='btn btn-success btn-button']").click({force: true});
    
  }

  export function clientsignout() {
    cy.xpath("//h1[@class='ms-1 text-white my-auto logo pointer']").click()
    cy.wait(2000)
    cy.xpath("//h6[normalize-space()='Sign Out']").click()
    
  }