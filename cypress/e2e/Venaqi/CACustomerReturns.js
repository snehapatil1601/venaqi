/// <reference types="cypress" />
import { FormActivitysector } from "./CAactivitysectorform";

import Chance from "chance";
const chance = new Chance();
const randomString = chance.string({ length: 25, alpha: true });

export function makeSingleForm() {
  cy.xpath("//h6[normalize-space()='Customer Returns']").click();
  cy.wait(2000);
  cy.xpath("//button[normalize-space()='My Feedback Grids']").click();
  const toggle = cy.get(".mat-slide-toggle-input");

  toggle.invoke("attr", "aria-checked").then((state) => {
    cy.log("STATE OF TOGGLE :: ", state);
    
    if (state === "true") {
      cy.get(".mat-slide-toggle-thumb").click();
    }

    singleForm();
  });
}

function singleForm() {
  cy.get(".activate-model > .d-flex > .text-white").click();
  cy.get("input[placeholder='Add new criteria']").type(randomString);
  cy.xpath("//button[@type='submit']").click();
  cy.xpath("//h6[normalize-space()='Customer Returns']").click();
  //cy.xpath("//button[normalize-space()='My Feedback Grids']").click();
  cy.wait(4000);
}
