Feature('ehm - HomePage');

var assert = require('assert');
var config = require('config');
var domain = config.get('EHM');
var ehmp = config.get('EHMP');
var ehim = config.get('EHIM');
var mdc = config.get('MDC');
var randomInfo = require('../../../utils/random').randomInfo();

// This scenario verifies a redirection from EHM to EHMP after going to MA Insurance Plans -> Find Plans button
Scenario('ENV: ' + process.env.NODE_ENV + 'Maria - HomePage - This scenario verifies a redirection from EHM to EHMP after going to MA Insurance Plans -> Find Plans button', async function(I, ehmPage, censusPage) {

    I.amOnPage(domain + '/?mboxDisable=true&qascript=Y');
    I.wait(3);

    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHM url: "+url);
        console.log("I am clicking MA Insurance Plans -> Find Plans button");
        I.click(ehmPage.fields.maFindPlans); //MA Find Plans button
        I.wait(2);
        ehmPage.verifyCensusPage('Find your Medicare Advantage plan');
        I.wait(2);
        console.log("I am filling in zip code on MA census page");
        I.fillField(censusPage.fields.zip, '20001');
        I.wait(3);
        console.log("I am on MA census page and clicking Find Plans button");
        I.click(censusPage.fields.nextBtn);
        I.wait(3);
        console.log("I am on EHMP with type=MA");
        I.seeInCurrentUrl(ehmp + '/?allid=');
        I.seeInCurrentUrl('type=MA');
        I.seeInCurrentUrl('#quote-plans/');
        I.seeInCurrentUrl('/MA/');
        I.seeInCurrentUrl('/20001');

    } else {

        //TBD
    }
});

// This scenario verifies a redirection from EHM to EHMP after going to MD Insurance Plans -> Find Plans button
Scenario('ENV: ' + process.env.NODE_ENV + 'Maria - HomePage - This scenario verifies a redirection from EHM to EHMP after going to MD Insurance Plans -> Find Plans button', async function(I, ehmPage, censusPage) {

    I.amOnPage(domain + '/?mboxDisable=true&qascript=Y');
    I.wait(3);

    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHM url: "+url);
        console.log("I am clicking MD Insurance Plans -> Find Plans button");
        I.click(ehmPage.fields.mdFindPlans); //MD Find Plans button
        I.wait(2);
        ehmPage.verifyCensusPage('Find your Medicare Part D plan');
        I.wait(2);
        console.log("I am filling in zip code on MD census page");
        I.fillField(censusPage.fields.zip, '12345');
        I.wait(3);
        console.log("I am on MD census page and clicking Find Plans button");
        I.click(censusPage.fields.nextBtn);
        I.wait(3);
        console.log("I am on EHMP with type=MD");
        I.seeInCurrentUrl(ehmp + '/?allid=');
        I.seeInCurrentUrl('type=MD');
        I.seeInCurrentUrl('#quote-plans/');
        I.seeInCurrentUrl('/MD/');
        I.seeInCurrentUrl('/12345');

    } else {

        //TBD
    }
});


