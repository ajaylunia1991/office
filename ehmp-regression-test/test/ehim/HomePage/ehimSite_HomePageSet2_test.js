Feature('ehim - HomePage');



var config = require('config');
var domain = config.get('EHIM');
var ehmp = config.get('EHMP');

var randomInfo = require('../../../utils/random').randomInfo();

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - HomePage - This scenario verifies the following flow:\n' +
    'EHIM, MS Insurance Plans, click Learn More -> medicare-supplement-articles', async function(I, ehimPageNew, ehmPage) {
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
        console.log("I am on Medicare Supplement Articles");
        I.see('Medicare Supplement Articles', ehimPageNew.fields.articlesTitle);
        I.seeInCurrentUrl('ehealthinsurance.com/medicare/supplement-all');


    } else {

        //TBD
    }
});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - HomePage - This scenario verifies the following flow:\n' +
    'EHIM, MA Insurance Plans, click Learn More  -> medicare-advantage-articles', async function(I, ehimPageNew, ehmPage) {
    I.amOnPage(domain + '/?mboxDisable=true');
    I.wait(3);
    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHIM url: "+url);
        I.scrollTo(ehimPageNew.fields.requestLeadForm);
        I.wait(3);
        console.log("I am clicking Learn More button for MA");
        I.click(ehimPageNew.fields.learnMoreBtnMA);
        I.wait(3);
        console.log("I am on Medicare Advantage Articles");
        I.see('Medicare Advantage Articles', ehimPageNew.fields.articleTitle);
        I.seeInCurrentUrl('ehealthinsurance.com/medicare/advantage-all');


    } else {

        //TBD
    }
});
