Feature('ehim - HomePage');



var config = require('config');
var domain = config.get('EHIM');
var ehmp = config.get('EHMP');

var randomInfo = require('../../../utils/random').randomInfo();

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - HomePage - This scenario verifies the following flow:\n' +
    'EHIM, MS Insurance Plans, click Learn More  -> medicare-supplement-articles -> Get Started button (EHMP)', async function(I, ehimPageNew) {
    I.amOnPage(domain + '/?mboxDisable=true');
    I.wait(3);
    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHIM url: "+url);
        I.scrollTo(ehimPageNew.fields.requestLeadForm);
        I.wait(3);
        console.log("I am clicking Medicare Supplement Insurance Plans");
        I.click(ehimPageNew.fields.homeMSPlansLink);
        I.wait(3);
        console.log("I am clicking Learn More button for MS");
        I.click(ehimPageNew.fields.learnMoreBtnMS);
        I.wait(3);
        console.log("I am entering zip code and clicking Get Started");
        I.fillField(ehimPageNew.fields.zipCodeZipCode, '20001');
        I.wait(2);
        I.click(ehimPageNew.fields.getStartedBtn);
        I.wait(5);
        I.seeInCurrentUrl(ehmp + '/?allid=');
        I.seeInCurrentUrl('#quote-plans/MS/20001/09000/DISTRICT OF COLUMBIA/');


    } else {

        //TBD
    }
});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - HomePage - This scenario verifies the redirection to All Articles after clicking All Medicare Articles link', async function(I, ehimPageNew) {

    I.amOnPage(domain + '/?mboxDisable=true');
    I.wait(3);

    let url = await I.grabCurrentUrl();
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHIM url: " + url);
        I.seeElementInDOM(ehimPageNew.fields.requestLeadForm);
        console.log("I am clicking All Articles link");
        I.click(ehimPageNew.fields.allArticles);
        I.wait(3);
        I.see('All Medicare Articles', ehimPageNew.fields.articlesTitle);


    } else {

        //TBD
    }




});
