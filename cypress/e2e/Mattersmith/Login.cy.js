import { faker } from "@faker-js/faker";
import { click } from "@testing-library/user-event/dist/click";
import 'cypress-file-upload';
describe("Create case",() => {

    it('Create case',() => {

        cy.visit("https://mattersmith10.embeddedexperience.com/doc-tracker/#/login");
        cy.viewport(1920,1080)
        cy.xpath("//*[@class='mb-3 input-group']//input[@name='username']").type("snehap@heaptrace.com");
        cy.xpath("//input[@name=\"password\"]").type("Master@123");
        cy.xpath("//button[contains(text(),'Log In')]").click();
        cy.xpath("//a[normalize-space()='Case']").click();
        cy.xpath("//a[normalize-space()='Case List']").click();
        
        cy.xpath("//button[contains(text(),'Add Case')]").click({force:click});
        cy.xpath("//input[@name=\"title\"]").type(faker.word.verb());
        cy.get('#file_doc').attachFile(['Doc1.docx','DOC2.docx','PDF1.pdf','PDF2.pdf']);
        cy.xpath("//button[@class='btn button-color btn btn-tn-color']").click({force:click});
       // cy.xpath("//div[@role='alert']").should('have.text','Case added successfully');
        
    })

})