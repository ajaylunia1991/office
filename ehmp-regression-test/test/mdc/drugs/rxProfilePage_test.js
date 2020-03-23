Feature('mdc - rxProfilePageTest');

/**
*old address: https://git.ehealthinsurance.com/projects/MU/repos/automation-tests/browse/ehi-ehim-tests/apps/mdc/mdc/drugs/test/uitests/rxProfilePageTest.js
*/

var config = require('config');
var domain = config.get('MDC');

var drug = '/prescription-drugs/browse-drugs-by-name/simvastatin/simvastatin-5-mg-tablet/16729015615/';

Scenario('ENV: ' +process.env.NODE_ENV + '-Willis -RxSeo Search Home Page - Validate Drug Profile Elements Test @Drugs', (I, rxProfilePage) => {

    I.amOnPage(domain　+ drug);
    // console.log("Rx Profile Page Opened");

    rxProfilePage.validateRxProfilePageElements();
    // console.log("Whoo...whoo...Rx Seo Home Page Test Passed");

// })


// Scenario('RxSeo Search Home Page - Validate Drug Price Saving Info Presence Test', (I, drugListPage) => {

//     I.amOnPage(domain　+ drug);
    // console.log("Rx Profile Page Opened");

    rxProfilePage.validateDrugPriceSavingsInfo();
    // console.log("Whoo...whoo...Rx Seo Drug Price Presence Test Passed");

// })

// Scenario('RxSeo Search Home Page - Validate Drug Name Info Presence Test', (I, drugListPage) => {

//     I.amOnPage(domain　+ drug);
    // console.log("Rx Profile Page Opened");

    rxProfilePage.validateDrugNameInfo();
    // console.log("Whoo...whoo...Rx Seo Drug Name Info Passed");

// })

// Scenario('RxSeo Search Home Page - Validate Drug Plan Savings Info Presence Test', (I, drugListPage) => {

//     I.amOnPage(domain　+ drug);
    // console.log("Rx Profile Page Opened");

    rxProfilePage.validateDrugPlanSavings();
    // console.log("Whoo...whoo...Rx Seo Drug Plan Savings Info Passed");

// })


// Scenario('RxSeo Search Home Page - Validate Drug Info Presence Test', (I, drugListPage) => {

//     I.amOnPage(domain　+ drug);
    // console.log("Rx Profile Page Opened");

    rxProfilePage.validateDrugInfo();
    // console.log("Whoo...whoo...Rx Seo Drug Info Test Passed");

})