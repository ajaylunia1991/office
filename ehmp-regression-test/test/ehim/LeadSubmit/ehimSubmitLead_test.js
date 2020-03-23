Feature('ehim - LeadSubmit');


var assert = require('assert');
var config = require('config');
var domain = config.get('EHIM');
var ehmp = config.get('EHMP');

var randomInfo = require('../../../utils/random').randomInfo();
var leadSearch = require('../../../utils/lead_search');

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - LeadSubmit - This scenario verifies Lead creation from Have questions? section', async function(I, ehimPageNew) {

    I.amOnPage(domain + '/?mboxDisable=true');
    I.wait(3);

    let url = await I.grabCurrentUrl();

        console.log("I am on EHIM url: " + url);
        I.seeElementInDOM(ehimPageNew.fields.requestLeadForm);
    if( process.env.NODE_ENV != 'prod') {
        console.log("I am clicking Request Call");
        I.click(ehimPageNew.fields.requestLeadForm);
        //I.seeElementInDOM(ehmPage.fields.tcpa);
        console.log("I am filling in Lead Form");
        I.fillField(ehimPageNew.fields.firstNameField, randomInfo.firstName);
        I.fillField(ehimPageNew.fields.lastNameField, randomInfo.lastName);
        I.executeScript(function (phone) {
            $('.request-call-form input#phoneNumber').val(phone);
        }, randomInfo.phone);
        //I.fillField(ehimPageNew.fields.phNumberField, randomInfo.phone);
        console.log('First name is :' + randomInfo.firstName + '; Last name is :' + randomInfo.lastName + '; Phone num is :' + randomInfo.phone + ';');
        I.fillField(ehimPageNew.fields.zipcodeLead, '90001');
        console.log("I am clicking Call Me button");
        I.click(ehimPageNew.fields.callMeBtn);
        I.wait(6);
        console.log("I am clicking Request Lead Form to see Thank You!");
        I.click(ehimPageNew.fields.requestLeadForm);
        I.wait(2);
        await I.see('Thank You!');

        let rows = await leadSearch.search(randomInfo);
        console.log("rows: " + rows);
        assert(rows == 1);
    }


});

