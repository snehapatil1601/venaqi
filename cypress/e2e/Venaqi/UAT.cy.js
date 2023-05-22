/// <reference types="cypress" />

import { SALogin, checksidebar, changelan } from "./SAutilityfun";
import { addorg, editorg, deleteorg } from "./SAAddorg";

import { usernavigate, addAC, addCA, addclient } from "./SAAddUser.js";
import { editAC, editCA, editClient } from "./SAEditUsers";
import { delAC, delCA, delclient } from "./SADeleteUser";
import { SAsignout, rolefilter } from "./SAFilterByrole";
import {
  clientLogin,
  bookanAppointment,
  viewApponitment,
} from "./clientApponitment";
import { clientrating, clientsignout } from "./ClientFeedback";
import { CALogin, CAadduser, CAedituser, CAdeluser } from "./CAAdduser";
import { acceptApponitment } from "./CAappointment";
import { makeSingleForm } from "./CACustomerReturns";
import { createslot } from "./CACalendar";
import { caexport, CAsignout } from "./CAExport";
import { FormActivitysector } from "./CAactivitysectorform";

describe("SA", () => {
  it(
    "SA:login, changeplan, sidebar, org CURD, user CURD, filterbyrole",
    { scrollBehavior: false },
    () => {
      SALogin();
      changelan();
      checksidebar();
 /*****************SA CURD*************/
      addorg();
      editorg();
      cy.wait(2000);

      usernavigate();
      let AcEmail = addAC();
      let CaEmail = addCA();
      cy.wait(4000);
      let clientEmail = addclient();

      editAC(AcEmail);
      editCA(CaEmail);
      cy.wait(3000);
      editClient(clientEmail);
      rolefilter();
      delAC(AcEmail);
      cy.wait(2000);
      delCA(CaEmail);
      delclient(clientEmail);
      deleteorg();
      SAsignout();

      /************CA CURD & create a slot*********/
      CALogin();
      let response = CAadduser();
     // CAedituser(response);
     // CAdeluser(response);
      let currentTime = createslot();
      cy.wait(2000)
      CAsignout()
      cy.reload()
      /**********Make single form & Rate************/
      CALogin();
      makeSingleForm();
      CAsignout();
      cy.reload()

      /*******Client feebback for singleform*******/
      clientLogin();
      clientrating();
      clientsignout();
      cy.reload()

      /*********CA sector form*******/
      CALogin();
      FormActivitysector();
      CAsignout();
      cy.reload()
       /***********Client book appointment*******/
      
      clientLogin();
      //let clientName = bookanAppointment(currentTime);
      bookanAppointment(currentTime);
      viewApponitment();
      clientsignout();

      /************CA Accept apponitment***************/
     cy.reload()
      CALogin();
      acceptApponitment();
      cy.wait(2000);
      CAsignout();
      cy.reload()
      /**************Client activity sector feedback */
      clientLogin();
      clientrating();
      clientsignout();
      cy.reload()
      //*********Export feedback*********/
      CALogin()
      caexport()
      CAsignout()
    }
  );
});
