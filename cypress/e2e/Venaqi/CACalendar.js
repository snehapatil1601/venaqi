/// <reference types="cypress" />

function calanderclick()
{
    cy.xpath("//h6[normalize-space()='Calendar']").click();
    cy.wait(5000);
}



export function 
createslot() {
    calanderclick();

    let currentTime = new Date();
    currentTime.setDate(currentTime.getDate() +1);
    currentTime.setHours(2);
    currentTime.setMinutes(0);
    currentTime.setSeconds(0);
    currentTime.setMilliseconds(0);
    let currentMilis = currentTime.getTime();
    cy.get(`[data-date=${currentMilis}]`).click({force: true})
    fillslotdetiles();

    return currentTime;
}
 function fillslotdetiles()
 {
    cy.get('#Subject').type('Slot-Test');
    cy.get('#MeetingLink').type('https://zoom.in');
    cy.xpath("//button[normalize-space()='Add']").click();
    cy.wait(1000);

 }
