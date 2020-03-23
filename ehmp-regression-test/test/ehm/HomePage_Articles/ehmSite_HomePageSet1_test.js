Feature('ehm - HomePage');

var assert = require('assert');
var config = require('config');
var domain = config.get('EHM');
var ehmp = config.get('EHMP');
var ehim = config.get('EHIM');
var mdc = config.get('MDC');
var randomInfo = require('../../../utils/random').randomInfo();

// This scenario verifies redirection to Census page -> EHMP
Scenario('ENV: ' + process.env.NODE_ENV + 'Maria - HomePage - This scenario verifies redirection to Census page and default allid -> EHMP', async function(I, ehmPage) {

    I.amOnPage(domain + '/?mboxDisable=true&qascript=Y');
    I.wait(3);

    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHM url: "+url);
        console.log("I am clicking Compare Plans button on EHM Home page");
        I.wait(3);
        I.click(ehmPage.fields.topComparePlansBtn); //topComparePlansBtn
        I.wait(2);
        ehmPage.verifyCensusPage('Find your Medicare Advantage plan');
        console.log("I am entering zip code and clicking Find Plans on Census page");
        I.fillField(ehmPage.fields.zipCodeCensus, '90001');
        I.wait(2);
        I.click(ehmPage.fields.btnCensusNext);
        I.wait(6);
        console.log("I am checking EHMP URL");
        I.seeInCurrentUrl(ehmp + '/?allid=EHM39972');
        I.seeInCurrentUrl('#quote-plans/');
        I.seeInCurrentUrl('/MA/');
        I.seeInCurrentUrl('/90001');

    } else {

        //TBD
    }
});

// This scenario verifies the flow "I want to shop for a medicare plan" -> "I want to find a medicare plan" -> Find a Plan -> Census -> EHMP
Scenario('ENV: ' + process.env.NODE_ENV + 'Maria - HomePage - This scenario verifies the flow "I want to shop for a medicare plan" -> "I want to find a medicare plan" -> Find a Plan -> Census -> EHMP', async function(I, ehmPage) {

    I.amOnPage(domain + '/?mboxDisable=true&qascript=Y');
    I.wait(3);

    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHM url: "+url);
        console.log("I am clicking 'I want to shop for a medicare plan'");
        I.wait(2);
        I.click(ehmPage.fields.flowAShopMedicare); //I want to shop for a medicare plan
        I.wait(2);
        I.click(ehmPage.fields.flowAFindPlanOnline);//I want to find a medicare plan
        I.wait(2);
        I.click(ehmPage.fields.recoAComparePlansBtn);//Find a Plan btn
        I.wait(2);
        ehmPage.verifyCensusPage('Find your Medicare Advantage plan');
        I.wait(2);
        console.log("I am entering zip code and clicking Find Plans on Census page");
        I.fillField(ehmPage.fields.zipCodeCensus, '20001');
        I.wait(2);
        I.click(ehmPage.fields.btnCensusNext);
        I.wait(3);
        console.log("I am checking EHMP URL");
        I.seeInCurrentUrl(ehmp + '/?allid=');
        I.seeInCurrentUrl('#quote-plans');
        I.seeInCurrentUrl('/MA/');
        I.seeInCurrentUrl('/20001');


    } else {

        //TBD
    }
});
