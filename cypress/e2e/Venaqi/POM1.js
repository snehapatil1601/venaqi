import SAlogin from "../../Venaqipage/loginpage";
import orginization from "../../Venaqipage/Orginizations";

import randomEmail from "random-email";
import Chance from "chance";
const genrator = new Chance()


describe("SA Operation", () => {
    beforeEach( () => {

        cy.fixture('venaqilogin').then((data) => {
            cy.visit('https://dev.venaqi.com/#/landing-page');
            cy.viewport('macbook-11');
            const obj = new SAlogin()
            obj.connectbutton()
            obj.setusername(data.SAusername)
            obj.setpassword(data.SApassworsd)
            obj.loginclick();
 })
 })

it("Add orginization", () => {

        const obj1 = new orginization();
        cy.wait(2000)
        obj1.checksidebar()
        obj1.changelanguage()
       // obj.orgclick()
        obj1.Addorginization(genrator.word())
        obj1.setOrgname(genrator.word())
        obj1.setOrgemail(randomEmail({ domain: 'yopmail.com'}))
        obj1.setphonenumber('7485961236')
        obj1.setaccountantlimit('10')
        obj1.saveorg()

        const ob1 = new orginization();
    ob1.Editorginization()
    ob1.addresstype('OFFICE')
    ob1.setorgadress('spine city')
    ob1.orgcountery('France')
    ob1.orgstate('Bretagne')
    ob1.orgcity('Ambon')
    ob1.orgzip('7485962')
    ob1.orgupdate()

})

})

