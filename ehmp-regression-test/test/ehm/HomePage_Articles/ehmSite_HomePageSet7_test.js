Feature('ehm - HomePage');

var assert = require('assert');
var config = require('config');
var domain = config.get('EHM');
var ehmp = config.get('EHMP');
var ehim = config.get('EHIM');
var mdc = config.get('MDC');
var randomInfo = require('../../../utils/random').randomInfo();

// This scenario verifies the following flow Frequently Asked Questions -> View All button
Scenario('ENV: ' + process.env.NODE_ENV + 'Maria - HomePage - This scenario verifies the following flow Frequently Asked Questions -> View All button', async function(I, ehmPage) {

    I.amOnPage(domain + '/?mboxDisable=true&qascript=Y');
    I.wait(3);

    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHM url: "+url);
        console.log("I am clicking Learn More at Frequently Asked Questions -> View All button");
        I.click(ehmPage.fields.faqLink); //View All button
        I.wait(3);
        console.log("I am on How Does Medicare Work?");
        I.see('Frequently Asked Questions About Medicare', ehmPage.fields.faqPageTitle);

    } else {

        //TBD
    }
});

// This scenario verifies a redirection from EHM to EHMP Census after going to MS Insurance Plans
Scenario('ENV: ' + process.env.NODE_ENV + 'Maria - HomePage - This scenario verifies a redirection from EHM to EHMP MS Census after going to MS Insurance Plans', async function(I, ehmPage, censusPage) {

    I.amOnPage(domain + '/?mboxDisable=true&qascript=Y');
    I.wait(3);

    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHM url: "+url);
        console.log("I am clicking MS Insurance Plans -> Find Plans button");
        I.click(ehmPage.fields.msFindPlans); //MS Find Plans button
        I.wait(3);
        ehmPage.verifyCensusPage('Find your Medicare Supplement');


    } else {

        //TBD
    }
});

