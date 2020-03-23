Feature('mdc - rxSeoSearchPageTest');

/**
*old address: https://git.ehealthinsurance.com/projects/MU/repos/automation-tests/browse/ehi-ehim-tests/apps/mdc/mdc/drugs/test/uitests/rxSeoSearchPageTest.js
*/

var config = require('config');
var domain = config.get('MDC');

var drug = '/prescription-drugs/';

Scenario('ENV: ' +process.env.NODE_ENV + '-Willis - RxSeo Search Home Page Elements Test @Drugs', (I, rxSeoHomepage) => {

    I.amOnPage(domain　+ drug);
    // console.log("Rx Seo Home Page Opened");

    rxSeoHomepage.validateRxSeoHomepageElements();
    // console.log("Whoo...whoo...Rx Seo Home Page Test Passed");

// })

// Scenario('RxSeo Search From Home Page Test', (I, rxSeoHomepage) => {

//     I.amOnPage(domain　+ drug);
    console.log("Rx Seo Home Page Opened");

    rxSeoHomepage.searchDrugName('Crestor 10 mg tablet');
    // console.log("Whoo...whoo...Drug Search From Rx Seo Home Page Test Passed");

})