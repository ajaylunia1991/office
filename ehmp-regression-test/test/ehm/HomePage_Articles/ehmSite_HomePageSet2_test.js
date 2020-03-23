Feature('ehm - HomePage');

var assert = require('assert');
var config = require('config');
var domain = config.get('EHM');
var ehmp = config.get('EHMP');
var ehim = config.get('EHIM');
var mdc = config.get('MDC');
var randomInfo = require('../../../utils/random').randomInfo();

// This scenario verifies the flow "I have a question about Medicare" - "I want to find answers online" -> No, thanks. I am done
Scenario('ENV: ' + process.env.NODE_ENV + 'Maria - HomePage - This scenario verifies the flow "I have a question about Medicare" - "I want to find answers online" -> No, thanks. I am done', async function(I, ehmPage) {

    I.amOnPage(domain + '/?mboxDisable=true&qascript=Y');
    I.wait(3);

    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHM url: "+url);
        console.log("I am clicking 'I have a question about Medicare'");
        I.wait(2);
        I.click(ehmPage.fields.flowBQuestionsAboutMedicare); //I have a question about Medicare
        I.wait(2);
        console.log("I am clicking 'I want to find answers online'");
        I.click(ehmPage.fields.flowBFindAnswersOnline);//I want to find answers online
        I.wait(2);
        console.log("I am clicking 'No, thanks. I am done'");
        I.click(ehmPage.fields.flowBFindAnswersOnlineConfirm);
        I.wait(2);
        ehmPage.verifyEHMHomePage();


    } else {

        //TBD
    }
});

// This scenario verifies the flow "I have a question about Medicare" -> "I want to find answers online" -> " Learn About Medicare Advantage " -> medicare-advantage-articles
Scenario('ENV: ' + process.env.NODE_ENV + 'Maria - HomePage - This scenario verifies the flow "I have a question about Medicare" -> "I want to find answers online" -> " Learn About Medicare Advantage" -> medicare-advantage-articles', async function(I, ehmPage) {

    I.amOnPage(domain + '/?mboxDisable=true&qascript=Y');
    I.wait(3);

    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHM url: "+url);
        console.log("I am clicking 'I have a question about Medicare'");
        I.wait(2);
        I.click(ehmPage.fields.flowBQuestionsAboutMedicare); //I have a question about Medicare
        I.wait(2);
        console.log("I am clicking 'I want to find answers online'");
        I.click(ehmPage.fields.flowBFindAnswersOnline);//I want to find answers online
        I.wait(2);
        console.log("I am clicking 'Learn About Medicare Advantage'");
        I.click(ehmPage.fields.learnAboutMA);//Learn About Medicare Advantage
        I.wait(4);
        ehmPage.verifyEHM_ArticlesPage('Medicare Advantage Articles', 'medicare-advantage-articles');


    } else {

        //TBD
    }
});

