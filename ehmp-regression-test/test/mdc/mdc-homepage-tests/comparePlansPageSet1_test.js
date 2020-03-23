Feature('mdc');


var config = require('config');
var domain = config.get('MDC');
var assert = require('assert');
var ehmp = config.get('EHMP');

// Compare Plans Page, Saving Text Statement element text
var comparePlanSaveText1 = "Our customers found a potential average savings of "
var comparePlanSaveText2 = "$531";

// Verify Savings statements on Compare Plan page - ALGO-508 TestCase-@C24668
Scenario('ENV: ' +process.env.NODE_ENV + 'ALGO-508 TestCase-@C24668- Verify Savings statements on @ComparePlanpage',  async function (I, comparePlansPage) {
    I.amOnPage(domain　+ '/compare-medicare-plans/');
    I.wait(2);
    //Compare Plans Page Saving Statement Test
    comparePlansPage.validateSavingText(comparePlanSaveText1,comparePlanSaveText2);
})