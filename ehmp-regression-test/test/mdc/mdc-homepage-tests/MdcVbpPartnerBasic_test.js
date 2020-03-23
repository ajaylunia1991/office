Feature('mdc');

/**
*old address: https://git.ehealthinsurance.com/projects/MU/repos/automation-tests/browse/ehi-ehim-tests/apps/mdc/mdc/recommendation/test/uitests/recorecommendation_homePageTest.js
*/

var config = require('config');
var domain = config.get('MDC');
var ehmp = config.get('EHMP');
var assert = require('assert');

var randomInfo = require('../../../utils/random').randomInfo();
var leadSearch = require('../../../utils/mdc_lead_search');

Scenario('ENV: ' +process.env.NODE_ENV + ' Willis - VBP Partner - Request a Call lead submit@mdcrecommendation_homePageBasic', async function (I, recommendation_homePage) {
    I.amOnPage(domain + '/ChenMed');
    I.wait(2);


        I.seeInCurrentUrl( domain + '/partner/?allid=che7678000');
         let url = await I.grabCurrentUrl();
        console.log(`Current URL is [${url}]`);

    //console.log("Home Page Opened");

    // click on request a call and fill out the form
    I.click(recommendation_homePage.fields.requestACallBtn);
    I.wait(2);
    I.fillField(recommendation_homePage.fields.requestFN,randomInfo.firstName);
    I.fillField(recommendation_homePage.fields.requestLN, randomInfo.lastName);
    I.fillField(recommendation_homePage.fields.requestPhoneNumber, randomInfo.phone);
    console.log('First name is :' + randomInfo.firstName + '; Last name is :' + randomInfo.lastName + '; Phone num is :' + randomInfo.phone + ';');

    I.fillField(recommendation_homePage.fields.requestZip, '90001');
    I.wait(2);
    if (process.env.NODE_ENV != 'prod' ) {

         I.click(recommendation_homePage.fields.RequestSubmitBtn);
         I.wait(8);
         await  I.see('Thank you! We will contact you soon');


    //validate the lead is being created in the DB

     //verify lead was created
        let rows = await leadSearch.mdcsearch(randomInfo);
        console.log("rows: " + rows);
        assert (rows == 1);
};

    //schedule a call
    I.refreshPage();
    I.click(recommendation_homePage.fields.Schedule1Call);
   console.log("click on schedule a call");

    I.wait(2);
    I.fillField(recommendation_homePage.fields.requestFN,randomInfo.firstName);

//scroll page to top otherwise the btn is not clickable

    I.scrollPageToTop()
    I.click(recommendation_homePage.fields.viewplanbtnpartner);
    I.wait(2);

    I.see('Find Medicare Plans');
    I.see('Learn About Medicare');
    I.see('Find your Medicare Advantage plan');
    if (process.env.NODE_ENV == 'cm' | process.env.NODE_ENV == 'qa' ) {

    I.seeInCurrentUrl( ehmp + '/v2?medicarecom=2&allid=che7678000&roundrobin=1');
    }else{

    I.seeInCurrentUrl( ehmp + '/v2?medicarecom=2&allid=che7678000&roundrobin=1');

    };


})