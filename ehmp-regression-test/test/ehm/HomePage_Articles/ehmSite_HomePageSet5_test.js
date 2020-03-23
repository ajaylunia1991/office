Feature('ehm - HomePage');

var assert = require('assert');
var config = require('config');
var domain = config.get('EHM');
var ehmp = config.get('EHMP');
var ehim = config.get('EHIM');
var mdc = config.get('MDC');
var randomInfo = require('../../../utils/random').randomInfo();

//This scenario verifies downloading a guide after going to "I have a question about Medicare" -> "I want to be sent to guide to Medicare" -> Download a Guide"
Scenario('ENV: ' + process.env.NODE_ENV + 'Maria - HomePage - This scenario verifies downloading a guide after going to "I have a question about Medicare" -> "I want to be sent to guide to Medicare" -> Download a Guide"', async function(I, ehmPage) {

    I.amOnPage(domain + '/?mboxDisable=true&qascript=Y');
    I.wait(3);

    let url = await I.grabCurrentUrl();
    if (url.includes('home-pre-aep-v1') == false) {

        console.log("I am on EHM url: " + url);
        console.log("I am clicking 'I have a question about Medicare'");
        I.wait(1);
        I.click(ehmPage.fields.flowBQuestionsAboutMedicare); //I have a question about Medicare
        I.wait(1);
        console.log('I want to be sent to guide to Medicare');
        I.click(ehmPage.fields.sendMedicareGuide);//I want to be sent to guide to Medicare
        I.wait(2);
        console.log('I am filling in required fields');
        I.fillField(ehmPage.fields.elfFirstName, randomInfo.firstName);
        I.fillField(ehmPage.fields.elfLastName, randomInfo.lastName);
        I.fillField(ehmPage.fields.elfZipCode, '20001');
        I.fillField(ehmPage.fields.email, 'test@com.com');
        console.log("I am clicking downloadBtn button");
        I.click(ehmPage.fields.downloadBtn);
        I.wait(6);
        I.switchToNextTab();
        console.log("I am checking URL for downloaded Guide");
        I.seeInCurrentUrl('ehealthmedicare.com/wp-content/uploads/2018/01/Beginner’s-Guide-to-Medicare_eBook');


    } else {

        //TBD
    }
});

// This scenario verifies a redirection to EHMP after entering zip code and clicking Compare Plans button
Scenario('ENV: ' + process.env.NODE_ENV + 'Maria - HomePage - This scenario verifies a redirection to EHMP after entering zip code and clicking Compare Plans button on Home Page', async function(I, ehmPage) {

    I.amOnPage(domain + '/?mboxDisable=true&qascript=Y');
    I.wait(3);

    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHM url: "+url);
        console.log("I am entering zip code");
        I.fillField(ehmPage.fields.zipCode, '20001');
        console.log("I am clicking Compare Plans button on EHM Home page");
        I.wait(3);
        I.click(ehmPage.fields.topComparePlansBtn); //topComparePlansBtn
        I.wait(5);
        console.log("I am checking URL");
        I.seeInCurrentUrl(ehmp + '/?typeDefaulted=true&type=MA&allid=EHM39972');
        I.dontSeeInCurrentUrl('zip=20001');
        I.seeInCurrentUrl('#quote-plans/');
        I.seeInCurrentUrl('/20001');
        I.see("20001 - DISTRICT OF COLUMBIA   County", ehmPage.fields.zipQuote);

    } else {

        //TBD
    }
});


