Feature('ehm - Redirects');

var assert = require('assert');
var config = require('config');
var domain = config.get('EHM');
var ehmp = config.get('EHMP');
var ehim = config.get('EHIM');
var mdc = config.get('MDC');
var randomInfo = require('../../../utils/random').randomInfo();

//This scenario verifies a redirection to Medicare after going to "I want a Medicare plan recomendation" - "I want to get a recommendation online"
Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Redirects - This scenario verifies a redirection to Medicare after going to "I want a Medicare plan recomendation" - "I want to get a recommendation online" for Partner ProvidenceCA', async function(I, ehmPage) {

    I.amOnPage(domain + '/?allid=pro7969000&mboxDisable=true');
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
        I.wait(15);
        console.log('I am redirecting to Medicare');
        I.seeInCurrentUrl(mdc + '/recommendation/?allid=pro7969000#/eligibility/RS1'); // verifying that URL is Medicare


    } else {

        //TBD
    }
});
