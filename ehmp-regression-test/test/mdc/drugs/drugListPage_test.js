Feature('mdc - drugListPageTest');

/**
*old address: https://git.ehealthinsurance.com/projects/MU/repos/automation-tests/browse/ehi-ehim-tests/apps/mdc/mdc/drugs/test/uitests/drugListPageTest.js
*/

var config = require('config');
var domain = config.get('MDC');

Scenario('ENV: ' +process.env.NODE_ENV +' -Willis- Recommendation Homepage UI Test @Drugs', (I, drugListPage) => {
    I.amOnPage(domain　+ '/prescription-drugs/browse-drugs-by-name/');
    // console.log("Rx Seo Drug List Page Opened");

    drugListPage.validateDrugListPageElements();
    // console.log("Whoo...whoo...Drugs List Page Elements Test Passed");

})


Scenario('RxSeo Drug List Page BreadCrumbs Test @Drugs', (I, drugListPage) => {
    I.amOnPage(domain　+ '/prescription-drugs/browse-drugs-by-name/');
    // console.log("Rx Seo Drug List Page Opened");

    drugListPage.validateBreadcrumb();
    // console.log("Whoo...whoo...Drugs List Page Navigation Test Passed");

})