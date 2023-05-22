// import { faker } from '@faker-js/faker';

// describe("Employee user", () => {
//   it("login", { scrollBehavior: false }, () => {
//     cy.visit("https://app.pillcoach.co/");
//     cy.viewport(1920, 1080);
    
//     cy.get("#email").type("user@yopmail.com");
//     cy.get("#password").type("User@123");
//     cy.get("button[type='submit']").click();
//     cy.xpath("//a[@class='nav-link'][normalize-space()='Patients']").click();
//     cy.xpath(
//      "//div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/a[1]/i[1]"
//     ).click();
//     cy.xpath(
//      "//ul[@class='dropdown-menu dropdown-menu-end show']//a[@class='dropdown-item']"
//    ).click();
//     cy.get("button[data-bs-target='#selectDocument']").click();
//     cy.xpath(
//        "//button[@class='btn btn-nav btn-xl me-3 px-4 mt-20'][normalize-space()='CMR']"
//     ).click();
    
//     cy.visit("https://app.pillcoach.co/medication-review/669")

//     // cy.window().then(win => {
//     //   const accessToken = win.sessionStorage.getItem('access_token')
//     //   expect(accessToken).to.exist

//     //  // cy.visit("https://app.pillcoach.co/patients/675");

      
//     //   cy.window().then((win) => {
//     //     win.sessionStorage.setItem('access_token', accessToken);
        

//     //   });
//     // })

//     cy.wait(8000);
//     cy.xpath('//button[@data-bs-target="#to-do-list"]')
//       .should("be.visible")
//       .click();
    
//     cy.get("#selectedText").select("medicationRelated");
//     cy.get("#medicationText").select("hydrochlorothiazide 12.5 MG / losartan potassium 100 MG [Hyzaar]");
//     cy.get("#whatYouTalk").type("Do yoga");
//     cy.xpath("//div[1]/div[1]/div[1]/div[3]/button[2]").click();
//     cy.wait(4000)
//   //  cy.xpath("//button[normalize-space()='Next']").click();
//   cy.get('.text-end > .btn-primary').click()

 

// // // Generate a random date between today and 30 days from now
// // const futureDate = faker.date.future(30);

// // // Convert the date to a string in ISO format
// // const dateString = futureDate.toISOString();

// // // Use the date string in your test

// cy.get('#datePickerTake').type("05/04/2023");
// cy.xpath("//input[@id='selectvaccine']").click();
// cy.xpath("//input[@class='multiselect-tags-search']").select('')
// })
//   })

  
  

