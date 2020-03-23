Feature('mdc');

/**
*old address: https://git.ehealthinsurance.com/projects/MU/repos/automation-tests/browse/ehi-ehim-tests/apps/mdc/mdc/recommendation/test/uitests/recoHomePageTest.js
*/

var config = require('config');
var domain = config.get('MDC');
var ehmp = config.get('EHMP');

var assert = require('assert');

var randomInfo = require('../../../utils/random').randomInfo();
var leadSearch = require('../../../utils/reco_lead_search');

Scenario('ENV: ' +process.env.NODE_ENV + ' Willis - googlecert@mdcBasic09', async function (I, recommendation_homePage) {
    //for medi-20479

    I.amOnPage(domain　+ '/googleae22ea93704a2a50.html');
        I.wait(2);



    I.see("google-site-verification: googleae22ea93704a2a50.html");


})