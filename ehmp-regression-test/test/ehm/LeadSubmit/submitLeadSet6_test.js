Feature('ehm - LeadSubmit');


var assert = require('assert');
var config = require('config');
var domain = config.get('EHM');
var ehmp = config.get('EHMP');

var randomInfo = require('../../../utils/random').randomInfo();
var leadSearch = require('../../../utils/lead_search');

//This scenario verifies a redirection to EHMP after submitting a Lead by clicking "I want to shop for a medicare plan" - "I want to talk to a licensed insurance agent" -> Submit a Lead and then clicking Find Plans
Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - LeadSubmit - This scenario verifies a redirection to EHMP after submitting a Lead by clicking "I want to shop for a medicare plan" - "I want to talk to a licensed insurance agent" -> Submit a Lead and then clicking Find Plans', async function(I, ehmPage) {

    I.amOnPage(domain + '/?mboxDisable=true&qascript=Y');
    I.wait(3);

    let url = await I.grabCurrentUrl();
        console.log("I am on EHM url: " + url);
        console.log("I am clicking 'I want to shop for a medicare plan'");
        I.wait(1);
        I.click(ehmPage.fields.flowAShopMedicare); //I want to shop for a medicare plan
        I.wait(1);
        console.log("I want to talk to a licensed insurance agent");
        I.click(ehmPage.fields.flowATalkTOPerson);//I want to talk to a licensed insurance agent
        I.wait(1);
    if( process.env.NODE_ENV != 'prod') {
        //ehmPage.fillLeadForm(ehmPage.fields.firstNameFlowA, ehmPage.fields.lastNameFlowA, ehmPage.fields.phoneNumber, ehmPage.fields.zipCodeFlowA);
        console.log("I am filling in Lead Form");
        console.log('First name is :' + randomInfo.firstName + '; Last name is :' + randomInfo.lastName + '; Phone num is :' + randomInfo.phone + ';');
        //I.fillField(ehmPage.fields.phoneNumber, randomInfo.phone);
        I.executeScript(function (phone) {
            $('#flowAShopLeadForm > div.two-col.clearfix > div.lf-field > #phoneNumber').val(phone);
        }, randomInfo.phone);
        I.fillField(ehmPage.fields.firstNameFlowA, randomInfo.firstName);
        I.fillField(ehmPage.fields.lastNameFlowA, randomInfo.lastName);
        I.fillField(ehmPage.fields.zipCodeFlowA, '12345');
        console.log("I am clicking AgentCallMe button");
        I.click(ehmPage.fields.agentCallMeBtn);
        I.wait(4);
        console.log("I am seeing Thanks! after Lead submittion");
        I.see('Thanks!');
        console.log("I am filling in zip code and clicking Find Plans");
        I.fillField(ehmPage.fields.zipCodeToEHMP, '20001');
        I.click(ehmPage.fields.recoAComparePlansBtnConfirm);
        I.wait(4);
        await I.seeInCurrentUrl(ehmp); // verifying that URL is EHMP

        let rows = await leadSearch.search(randomInfo);
        console.log("rows: " + rows);
        assert(rows == 1);
    }


});

