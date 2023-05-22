
export function SALogin() {
    cy.visit('https://dev.venaqi.com/#/landing-page');
    cy.viewport('macbook-11');
    cy.get('.btn-connect').click();
    cy.get('#inputEmail').type('superadmin@yopmail.com');
    cy.get('#mat-input-0').type('Superadmin@123');
    cy.get('.mat-raised-button').click();
    cy.wait(4000);

}

export function checksidebar()
{
    cy.contains('Organizations');
    cy.contains('Users');
}

export function changelan()
{
    cy.get('.mx-2 > .p-dropdown > .p-dropdown-trigger > .p-dropdown-trigger-icon').click();
    cy.get(':nth-child(1) > .p-dropdown-item').click();
}


