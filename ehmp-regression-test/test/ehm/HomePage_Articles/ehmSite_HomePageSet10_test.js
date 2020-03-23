Feature('ehm - HomePage');

var assert = require('assert');
var config = require('config');
var domain = config.get('EHM');
var ehmp = config.get('EHMP');
var ehim = config.get('EHIM');
var mdc = config.get('MDC');
var randomInfo = require('../../../utils/random').randomInfo();

// This scenario verifies a flow MD Insurance Plans -> Learn More -> medicare-part D-articles
Scenario('ENV: ' + process.env.NODE_ENV + 'Maria - HomePage - This scenario verifies a flow MD Insurance Plans -> Learn More -> medicare-part D-articles', async function(I, ehmPage) {

    I.amOnPage(domain + '/?mboxDisable=true&qascript=Y');
    I.wait(3);

    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHM url: "+url);
        console.log("I am clicking MD Insurance Plans -> Learn More button");
        I.click(ehmPage.fields.mdLearnMore); //MD Learn More button
        I.wait(3);
        console.log("I am on Medicare Part D Articles");
        I.see('Medicare Part D Articles', ehmPage.fields.articleTitle);


    } else {

        //TBD
    }
});

// This scenario verifies a flow MS Insurance Plans, click Learn More  -> MS articles -> Compare Plans button (EHMP)
Scenario('ENV: ' + process.env.NODE_ENV + 'Maria - HomePage - This scenario verifies a flow MS Insurance Plans, click Learn More  -> MS articles -> Compare Plans button (EHMP)', async function(I, ehmPage) {

    I.amOnPage(domain + '/?mboxDisable=true&qascript=Y');
    I.wait(3);

    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHM url: "+url);
        console.log("I am clicking MS Insurance Plans -> Learn More button");
        I.click(ehmPage.fields.msLearnMore); //MS Learn More button
        I.wait(3);
        console.log("I am entering zip code and clicking Compare Plans");
        I.fillField(ehmPage.fields.zipCodeCategoryBanner, '94085');
        I.click(ehmPage.fields.successleadFormBtn);
        I.wait(4);
        console.log("I am checking URL");
        I.seeInCurrentUrl(ehmp + '/?allid=');
        I.dontSeeInCurrentUrl('zip=94085');
        I.seeInCurrentUrl('type=MS');
        I.seeInCurrentUrl('#quote-plans/');
        I.seeInCurrentUrl('/MS/');
        I.seeInCurrentUrl('/94085');
        I.see("94085 - SANTA CLARA   County", ehmPage.fields.zipQuote);

    } else {

        //TBD
    }
});

