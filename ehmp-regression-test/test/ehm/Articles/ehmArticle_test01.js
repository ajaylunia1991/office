Feature('ehm - verify zipcode');

var assert = require('assert');
var config = require('config');
var domain = config.get('EHM');
var randomInfo = require('../../../utils/random').randomInfo();



//ALGO-1331, Testcase-C24711

Scenario('ENV: ' + process.env.NODE_ENV + 'GCK - This scenario verifies homepage zipcode field should not accept any special chars', async function (I, ehmPage) {

    I.amOnPage(domain);
    I.wait(3);
    let url = await I.grabCurrentUrl();
    console.log("I am on EHM url: " + url);

    I.click(ehmPage.fields.topComparePlansBtn);
    I.wait(2);
    I.fillField(ehmPage.fields.zipCodeCensus, '@#@&%');
    I.wait(2);
    I.click(ehmPage.fields.btnCensusNext);
    I.wait(2);
    I.see('Please enter a valid zip code');

});

// ALGO-1331, Testcase-C24712
Scenario('ENV: ' + process.env.NODE_ENV + 'GCK - This scenario verifies articles banner zipcode field should not accept special chars', async function (I,ehmPage) {


    I.amOnPage(domain + '/medicare-advantage-articles/medicare-advantage-part-c-plans/');
    I.wait(3);
    let url = await I.grabCurrentUrl();
    console.log("I am on EHM url: " + url);

    I.click(ehmPage.fields.zipcodebanner);
    I.wait(2);
    I.fillField(ehmPage.fields.zipcodebanner, '@#@&%');
    I.wait(2);
    I.click(ehmPage.fields.getStartedBtn);
    I.wait(2);
    I.seeInCurrentUrl('ehealthmedicareplans.com/');
    I.fillField('zipCode', '1@#@&%');
    I.wait(2);
    I.click(ehmPage.fields.btnCensusNext);
    I.wait(2);
    I.see('Please correct the indicated field(s) below.');

});


// //ALGO-1331, Testcase-C24713
Scenario('ENV: ' + process.env.NODE_ENV + 'GCK - This scenario verifies zipcode field should not accept special chars on request a call from', async function (I, ehmPage) {

    I.amOnPage(domain + '/medicare-advantage-articles/medicare-advantage-part-c-plans/');
    I.wait(3);
    let url = await I.grabCurrentUrl();
    console.log("I am on EHM url: " + url);

    I.fillField(ehmPage.fields.frstName, randomInfo.firstName);
    I.wait(2);
    I.fillField(ehmPage.fields.latName, randomInfo.lastName);
    I.wait(2);
    I.fillField(ehmPage.fields.contactNumber, randomInfo.phone);
    I.wait(3);
    I.fillField(ehmPage.fields.zCode, '@#@&%');
    I.wait(2);
    I.click(ehmPage.fields.requestaCall);
    I.wait(2);
    I.see('Please enter a valid zip code');

});