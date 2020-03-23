Feature('ehm - LeadSubmit');


var assert = require('assert');
var config = require('config');
var domain = config.get('EHM');
var ehmp = config.get('EHMP');

var randomInfo = require('../../../utils/random').randomInfo();
var leadSearch = require('../../../utils/lead_search');

//This scenario verifies that Home Page is displayed after submitting a Lead from How can we help? FlowA and then clicking No Thanks button
Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - LeadSubmit - This scenario verifies that Home Page is displayed after submitting a Lead from How can we help? FlowA and then clicking No Thanks button', async function(I, ehmPage) {

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
       // I.fillField(ehmPage.fields.phoneNumber, randomInfo.phone);
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
        console.log("I am clicking No Thanks button");
        I.click(ehmPage.fields.noThanksBtnFlowA);
        I.wait(1);
        ehmPage.verifyEHMHomePage();
        await I.see('How can we help?', ehmPage.fields.HowCanWeHelpText);

        let rows = await leadSearch.search(randomInfo);
        console.log("rows: " + rows);
        assert(rows == 1);
    }


});

