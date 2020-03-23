Feature('ehm - HomePage');

var assert = require('assert');
var config = require('config');
var domain = config.get('EHM');
var ehmp = config.get('EHMP');
var ehim = config.get('EHIM');
var mdc = config.get('MDC');
var randomInfo = require('../../../utils/random').randomInfo();

// This scenario verifies a flow MA Insurance Plans, click Learn More  -> MA articles -> Get Started button (EHMP)
Scenario('ENV: ' + process.env.NODE_ENV + 'Maria - HomePage - This scenario verifies a flow MA Insurance Plans, click Learn More  -> MA articles -> Get Started button (EHMP)', async function(I, ehmPage) {

    I.amOnPage(domain + '/?mboxDisable=true&qascript=Y');
    I.wait(3);

    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHM url: "+url);
        console.log("I am clicking MA Insurance Plans -> Learn More button");
        I.click(ehmPage.fields.maLearnMore); //MA Learn More button
        I.wait(3);
        console.log("I am entering zip code and clicking Get Started");
        I.fillField(ehmPage.fields.zipCodeZipCode, '75501');
        I.click(ehmPage.fields.getStartedBtn);
        I.wait(4);
        console.log("I am checking URL");
        I.seeInCurrentUrl(ehmp + '/?allid=');
        I.dontSeeInCurrentUrl('zip=75501');
        I.seeInCurrentUrl('type=MA');
        I.seeInCurrentUrl('#quote-plans/');
        I.seeInCurrentUrl('/MA/');
        I.seeInCurrentUrl('/75501');
        I.see("75501 - BOWIE   County", ehmPage.fields.zipQuote);

    } else {

        //TBD
    }
});

// This scenario verifies a flow MD Insurance Plans, click Learn More  -> MD articles -> Browse Plans button (EHMP)
Scenario('ENV: ' + process.env.NODE_ENV + 'Maria - HomePage - This scenario verifies a flow MD Insurance Plans, click Learn More  -> MD articles -> Browse Plans button (EHMP)', async function(I, ehmPage) {

    I.amOnPage(domain + '/?mboxDisable=true&qascript=Y');
    I.wait(3);

    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHM url: "+url);
        console.log("I am clicking MD Insurance Plans -> Learn More button");
        I.click(ehmPage.fields.mdLearnMore); //MD Learn More button
        I.wait(3);
        console.log("I am entering zip code and clicking Browse Plans");
        I.fillField(ehmPage.fields.zipCodeNeedHelp, '10001');
        I.click(ehmPage.fields.browsePlansBtn);
        I.wait(4);
        console.log("I am checking URL");
        I.seeInCurrentUrl(ehmp + '/?allid=');
        I.dontSeeInCurrentUrl('zip=10001');
        I.seeInCurrentUrl('type=MD');
        I.seeInCurrentUrl('#quote-plans/');
        I.seeInCurrentUrl('/MD/');
        I.seeInCurrentUrl('/10001');
        I.see("10001 - NEW YORK   County", ehmPage.fields.zipQuote);

    } else {

        //TBD
    }
});

