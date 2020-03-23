Feature('ehm - HomePage');

var assert = require('assert');
var config = require('config');
var domain = config.get('EHM');
var ehmp = config.get('EHMP');
var ehim = config.get('EHIM');
var mdc = config.get('MDC');
var randomInfo = require('../../../utils/random').randomInfo();

// This scenario verifies the following flow About eHealth - > Learn More bth on Home page
Scenario('ENV: ' + process.env.NODE_ENV + 'Maria - HomePage - This scenario verifies the following flow About eHealth - > Learn More bth on Home page', async function(I, ehmPage) {

    I.amOnPage(domain + '/?mboxDisable=true&qascript=Y');
    I.wait(3);

    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHM url: "+url);
        console.log("I am clicking Learn More button");
        I.click(ehmPage.fields.learnMore); //Learn More button
        I.wait(3);
        console.log("I am on Why eHealth Medicare");
        I.see('Why eHealth Medicare', ehmPage.fields.eHealthMedicareTitle);

    } else {

        //TBD
    }
});

// This scenario verifies the following flow Frequently Asked Questions -> How Does Medicare Work? -> Learn More
Scenario('ENV: ' + process.env.NODE_ENV + 'Maria - HomePage - This scenario verifies the following flow Frequently Asked Questions -> How Does Medicare Work? -> Learn More', async function(I, ehmPage) {

    I.amOnPage(domain + '/?mboxDisable=true&qascript=Y');
    I.wait(3);

    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHM url: "+url);
        console.log("I am clicking Learn More at Frequently Asked Questions -> How Does Medicare Work?");
        I.click(ehmPage.fields.faqLearnMore); //Learn More button
        I.wait(3);
        console.log("I am on How Does Medicare Work?");
        I.see('How Does Medicare Work?', ehmPage.fields.howMedicareWorkTitle);

    } else {

        //TBD
    }
});
