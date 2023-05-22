/// <reference types="cypress" />

import { doLogin } from "./login.cy"

describe('SA', () => {

    it("should create org", { scrollBehavior: false }, () => {
        doLogin();
        cy.get('.bg-green').click();

    })
})