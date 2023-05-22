/// <reference types='@cypress/xpath' />

export function rolefilter()
{
    cy.reload();
    cy.get('#role').select('Accountant');
    cy.wait(2000);
    
    cy.xpath("//button[@class='btn bg-white px-3 py-2 rounded border']").click();
    cy.get('.form-select').select('Chief Accountant');
    cy.wait(2000);
    cy.xpath("//button[@class='btn bg-white px-3 py-2 rounded border']").click();
    cy.wait(2000);
    cy.get('.form-select').select('Client');
    cy.wait(2000);
    cy.xpath("//button[@class='btn bg-white px-3 py-2 rounded border']").click();
    

}

export function SAsignout()
{
    cy.get("mat-icon[role='img']").click({ force: true });
    cy.get('.c-pointer').click({ force: true });
}
