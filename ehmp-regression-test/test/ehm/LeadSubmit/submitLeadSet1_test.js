Feature('ehm - LeadSubmit');


var assert = require('assert');
var config = require('config');
var domain = config.get('EHM');
var ehmp = config.get('EHMP');

var randomInfo = require('../../../utils/random').randomInfo();
var leadSearch = require('../../../utils/lead_search');

//This scenario verifies Lead creation from Have questions? section
Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - LeadSubmit - This scenario verifies Lead creation from Have questions? section', async function(I, ehmPage) {

    I.amOnPage(domain + '/?mboxDisable=true&qascript=Y');
    I.wait(3);

    let url = await I.grabCurrentUrl();
        console.log("I am on EHM url: " + url);
        I.seeElementInDOM(ehmPage.fields.requestLeadForm);
        console.log("I am clicking Request Lead Form");
        I.click(ehmPage.fields.requestLeadForm);
        I.seeElementInDOM(ehmPage.fields.tcpa);
    if( process.env.NODE_ENV != 'prod') {
        console.log("I am filling in Lead Form");
        console.log('First name is :' + randomInfo.firstName + '; Last name is :' + randomInfo.lastName + '; Phone num is :' + randomInfo.phone + ';');
        //I.fillField(ehmPage.fields.phNumberField, randomInfo.phone);
        I.executeScript(function (phone) {
            $('.request-call-form input#phoneNumber').val(phone);
        }, randomInfo.phone);
        I.fillField(ehmPage.fields.firstNameField, randomInfo.firstName);
        I.fillField(ehmPage.fields.lastNameField, randomInfo.lastName);
        I.fillField(ehmPage.fields.zipcodeLead, '90001');
        console.log("I am clicking Call Me button");
        I.click(ehmPage.fields.callMeBtn);
        I.wait(4);
        console.log("I am clicking Request Lead Form to see Thank You!");
        I.click(ehmPage.fields.requestLeadForm);
        await I.see('Thank You!');

        let rows = await leadSearch.search(randomInfo);
        console.log("rows: " + rows);
        assert(rows == 1);

    }


});



