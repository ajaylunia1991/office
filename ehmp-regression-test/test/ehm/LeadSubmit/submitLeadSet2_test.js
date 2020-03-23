Feature('ehm - LeadSubmit');


var assert = require('assert');
var config = require('config');
var domain = config.get('EHM');
var ehmp = config.get('EHMP');

var randomInfo = require('../../../utils/random').randomInfo();
var leadSearch = require('../../../utils/lead_search');

//This scenario verifies Lead creation from "I want to shop for a medicare plan" - "I want to talk to a licensed insurance agent" -> Submit a Lead
Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - LeadSubmit - This scenario verifies Lead creation from "I want to shop for a medicare plan" - "I want to talk to a licensed insurance agent" -> Submit a Lead', async function(I, ehmPage) {

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
            console.log("I am filling in Lead form");
            console.log('First name is :' + randomInfo.firstName + '; Last name is :' + randomInfo.lastName + '; Phone num is :' + randomInfo.phone + ';');
            //I.fillField(ehmPage.fields.phoneNumber, randomInfo.phone);
            I.executeScript(function (phone) {
                $('#flowAShopLeadForm > div.two-col.clearfix > div.lf-field > #phoneNumber').val(phone);
            }, randomInfo.phone);
            I.fillField(ehmPage.fields.firstNameFlowA, randomInfo.firstName);
            I.fillField(ehmPage.fields.lastNameFlowA, randomInfo.lastName);
            I.fillField(ehmPage.fields.zipCodeFlowA, '90001');
            console.log("I am clicking AgentCallMe button");
            I.click(ehmPage.fields.agentCallMeBtn);
            I.wait(4);
            console.log("I am seeing Thanks! after Lead submittion");
            await I.see('Thanks!');
            console.log("I am checking that Lead is created using Lead API");

            let rows = await leadSearch.search(randomInfo);
            console.log("rows: " + rows);
            assert(rows == 1);

        }

});

