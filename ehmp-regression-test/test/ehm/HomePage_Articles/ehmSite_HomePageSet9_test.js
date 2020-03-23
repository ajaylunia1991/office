Feature('ehm - HomePage');

var assert = require('assert');
var config = require('config');
var domain = config.get('EHM');
var ehmp = config.get('EHMP');
var ehim = config.get('EHIM');
var mdc = config.get('MDC');
var randomInfo = require('../../../utils/random').randomInfo();

// This scenario verifies a flow MS Insurance Plans -> Learn More -> medicare-supplement-articles
Scenario('ENV: ' + process.env.NODE_ENV + 'Maria - HomePage - This scenario verifies a flow MS Insurance Plans -> Learn More -> medicare-supplement-articles', async function(I, ehmPage) {

    I.amOnPage(domain + '/?mboxDisable=true&qascript=Y');
    I.wait(3);

    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHM url: "+url);
        console.log("I am clicking MS Insurance Plans -> Learn More button");
        I.click(ehmPage.fields.msLearnMore); //MS Learn More button
        I.wait(3);
        console.log("I am on Medicare Supplement Articles");
        I.see('Medicare Supplement Articles', ehmPage.fields.articleTitle);


    } else {

        //TBD
    }
});

// This scenario verifies a flow MA Insurance Plans -> Learn More -> medicare-advantage-articles
Scenario('ENV: ' + process.env.NODE_ENV + 'Maria - HomePage - This scenario verifies a flow MA Insurance Plans -> Learn More -> medicare-advantage-articles', async function(I, ehmPage) {

    I.amOnPage(domain + '/?mboxDisable=true&qascript=Y');
    I.wait(3);

    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHM url: "+url);
        console.log("I am clicking MA Insurance Plans -> Learn More button");
        I.click(ehmPage.fields.maLearnMore); //MA Learn More button
        I.wait(3);
        console.log("I am on Medicare Advantage Articles");
        I.see('Medicare Advantage Articles', ehmPage.fields.articleTitle);


    } else {

        //TBD
    }
});
