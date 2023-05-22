import { click } from "@testing-library/user-event/dist/click";
import Chance from "chance";
const chance = new Chance();
const randomString = chance.string({ length: 25, alpha: true });

export function FormActivitysector() {
  cy.xpath("//h6[normalize-space()='Customer Returns']").click();
  cy.wait(2000);
  cy.xpath("//button[normalize-space()='My Feedback Grids']").click();
  const toggle = cy.get(".mat-slide-toggle-input");

  toggle.invoke("attr", "aria-checked").then((state) => {
    cy.log("STATE OF TOGGLE :: ", state);

    if (state === "false") {
      cy.get(".mat-slide-toggle-thumb").click();
    }

    ActivitySectorForm();
  });
}

function ActivitySectorForm() {
  //Add critera

  cy.get(".text-whitepb-3").click({ force: click });
  cy.get("#acrdn_header_1 > .e-toggle-icon > .e-tgl-collapse-icon").click();
  cy.get("#inputId0").type(randomString);
  cy.get(".btn").click();

  //Edit critera
  cy.get(":nth-child(1) > .col-1 > .d-inline-flex > .pencil > .pi").click();
  cy.wait(2000);
  cy.get("#text-area0").clear();
  cy.wait(2000);
  cy.get("#text-area0").type(randomString);
  cy.xpath(
    "//i[@class='pi pi-check col-white d-flex justify-content-center']"
  ).click();
}
