// ALGO-798, c24625
Feature('ehm - Invoca visibility for default throttle RED');

var config = require('config');
var domain = config.get('EHM');



Scenario('ENV: ' + process.env.NODE_ENV + ' - GCK - Invoca - This scenario verifies Invoca phone visibility in Header/Footer on EHM Home for default throttle RED', async function (I, headerPage) {
    I.amOnPage(domain + '/?defaultThrottle=RED');
    var url = await I.grabCurrentUrl();
    console.log(`I am on page ${url}`);
    console.log("I am checking Phone number on EHM Home");
    I.wait(2);
    I.dontSeeElement(headerPage.fields.footerPhoneEHM);
    console.log("Number is not visible");
    I.dontSeeElement(headerPage.fields.requestacallPhoneEHM);
    console.log("Request a call section is not visible");
    I.dontSeeElement(headerPage.fields.footerPhoneEHM);
    console.log("Phone number in footer is not visible");

});