Feature('ehim - HomePage');



var config = require('config');
var domain = config.get('EHIM');
var ehmp = config.get('EHMP');

var randomInfo = require('../../../utils/random').randomInfo();


Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - HomePage - This scenario verifies the following flow:\n' +
    'EHIM, MD Insurance Plans, click Learn More  -> medicare-part-d-articles', async function(I, ehimPageNew) {
    I.amOnPage(domain + '/?mboxDisable=true');
    I.wait(3);
    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHIM url: "+url);
        I.scrollTo(ehimPageNew.fields.requestLeadForm);
        I.wait(3);
        console.log("I am clicking Medicare Part D Plans");
        I.click(ehimPageNew.fields.homeMDPlansLink);
        I.wait(3);
        console.log("I am clicking Learn More button for MD");
        I.click(ehimPageNew.fields.learnMoreBtnMD);
        I.wait(3);
        console.log("I am on Medicare Part D Articles\n");
        I.see('Medicare Part D Articles', ehimPageNew.fields.articleTitle);
        I.seeInCurrentUrl('ehealthinsurance.com/medicare/part-d-all');


    } else {

        //TBD
    }
});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - HomePage - This scenario verifies the following flow:\n' +
    'EHIM, MA Insurance Plans, click Learn More  -> medicare-advanced-articles -> Compare Plans button (EHMP)', async function(I, ehimPageNew) {
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
        I.wait(3);
        console.log("I am entering zip code and clicking Compare Plans");
        I.fillField(ehimPageNew.fields.zipCodeCategoryBanner, '10001');
        I.wait(2);
        I.click(ehimPageNew.fields.successleadFormBtn);
        I.wait(5);
        I.seeInCurrentUrl(ehmp + '/?allid=');
        I.seeInCurrentUrl('#quote-plans/MA/10001/33420/NEW YORK/1/p1');

    } else {

        //TBD
    }
});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - HomePage - This scenario verifies the following flow:\n' +
    'EHIM, MD Insurance Plans, click Learn More  -> medicare-part-d-articles -> Browse Plans button (EHMP)', async function(I, ehimPageNew) {
    I.amOnPage(domain + '/?mboxDisable=true');
    I.wait(3);
    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHIM url: "+url);
        I.scrollTo(ehimPageNew.fields.requestLeadForm);
        I.wait(3);
        console.log("I am clicking Medicare Part D Plans");
        I.click(ehimPageNew.fields.homeMDPlansLink);
        I.wait(3);
        console.log("I am clicking Learn More button for MD");
        I.click(ehimPageNew.fields.learnMoreBtnMD);
        I.wait(3);
        console.log("I am entering zip code and clicking Browse Plans");
        I.fillField(ehimPageNew.fields.zipCodeNeedHelp, '90001');
        I.wait(2);
        I.click(ehimPageNew.fields.browsePlansBtn);
        I.wait(5);
        I.seeInCurrentUrl(ehmp + '/?allid=');
        I.seeInCurrentUrl('#quote-plans/MD/90001/05200/LOS ANGELES/1/p1');


    } else {

        //TBD
    }
});

