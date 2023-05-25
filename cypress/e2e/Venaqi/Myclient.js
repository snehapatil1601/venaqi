import Chance from "chance";
const chance = new Chance();
const randomString = chance.string({ length: 25, alpha: true });

export function apponitmentReason ()
{
   cy.xpath("//mat-list-item[@routerlink='accountant/my-client']").click();
   cy.wait(2000);
   cy.xpath("//tbody/tr[1]/td[11]/div[1]/button[3]").click()
   cy.get("input[placeholder='Add Reason']").click().type(randomString);
   cy.get("button[type='send-button']").click()
   .xpath("//div[@aria-label='Email Sent Successfully']")
   .should('have.text',' Email Sent Successfully ')

}
 export function clientrate()
{
     cy.xpath("//mat-list-item[@routerlink='accountant/my-client']").click();
     cy.xpath("//tbody/tr[1]/td[11]/div[1]/button[2]/i[1]").click();
     cy.get(':nth-child(1) > .my-1 > .pl-4 > .ng-untouched > .p-rating > :nth-child(10)').click();
     cy.get(':nth-child(2) > .my-1 > .pl-4 > .ng-untouched > .p-rating > :nth-child(10)').click();
     cy.get(':nth-child(3) > .my-1 > .pl-4 > .ng-untouched > .p-rating > :nth-child(10)').click();
     cy.get(':nth-child(4) > .my-1 > .pl-4 > .ng-untouched > .p-rating > :nth-child(10)').click();
     cy.get("textarea[placeholder='type here']").click()
     .type(randomString);
     cy.get('.ms-2').click();
     cy.get('.btn-success').click();
     cy.get("div[aria-label='User feedback added successfully']")
     .should('have.text',' User feedback added successfully ');

    }
