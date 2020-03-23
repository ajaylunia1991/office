Feature('ehm - HomePage');

var assert = require('assert');
var config = require('config');
var domain = config.get('EHM');
var ehmp = config.get('EHMP');
var ehim = config.get('EHIM');
var mdc = config.get('MDC');
var randomInfo = require('../../../utils/random').randomInfo();

//This scenario verifies a redirection to Medicare after going to "I want a Medicare plan recomendation" - "I want to get a recommendation online"
Scenario('ENV: ' + process.env.NODE_ENV + 'Maria - HomePage - This scenario verifies a redirection to Medicare after going to "I want a Medicare plan recomendation" - "I want to get a recommendation online"', async function(I, ehmPage) {

    I.amOnPage(domain + '/?mboxDisable=true&qascript=Y');
    I.wait(3);

    let url = await I.grabCurrentUrl();
    if (url.includes('home-pre-aep-v1') == false) {

        console.log("I am on EHM url: " + url);
        console.log("I am clicking 'I want a Medicare plan recommendation'");
        I.wait(1);
        I.click(ehmPage.fields.flowCMedicareRecommendation); //I want a Medicare plan recommendation
        I.wait(1);
        console.log('I want to get a recommendation online');
        I.click(ehmPage.fields.getRecommendationOnline);//I want to talk to licensed insurance agent
        I.wait(10);
        console.log('I am redirecting to Medicare');
        I.seeInCurrentUrl(mdc + '/recommendation/?allid=EHM39972#/eligibility/RS1'); // verifying that URL is Medicare


    } else {

        //TBD
    }
});

//This scenario verifies a redirection to Medicare after going to "I want a Medicare plan recomendation" - "I want to get a recommendation online"
Scenario('ENV: ' + process.env.NODE_ENV + 'Maria - HomePage - This scenario verifies a redirection to Medicare after going to "I want a Medicare plan recomendation" - "I want to get a recommendation online"', async function(I, ehmPage) {

    I.amOnPage(domain + '/?mboxDisable=true&qascript=Y');
    I.wait(3);

    let url = await I.grabCurrentUrl();
    if (url.includes('home-pre-aep-v1') == false) {

        console.log("I am on EHM url: " + url);
        console.log("I am clicking 'I want a Medicare plan recommendation'");
        I.wait(1);
        I.click(ehmPage.fields.flowCMedicareRecommendation); //I want a Medicare plan recommendation
        I.wait(1);
        console.log('I want to get a recommendation online');
        I.click(ehmPage.fields.getRecommendationOnline);//I want to talk to licensed insurance agent
        I.wait(2);
        console.log('I am clicking No Thanks, Take Me Back button on the dialog');
        I.click(ehmPage.fields.recoFlowCOverlayClose);
        I.wait(2);
        ehmPage.verifyEHMHomePage();
        I.see('How would you like to get your recommendation?', ehmPage.fields.recoFlowCMedicareRecommendLanding);

    } else {

        //TBD
    }
});

