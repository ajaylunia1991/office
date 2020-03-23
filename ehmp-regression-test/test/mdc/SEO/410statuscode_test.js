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

Scenario('ENV: ' +process.env.NODE_ENV + ' Willis - 410statuscode@mdcHomePageBasic', async function (I, recommendation_homePage) {
    //for medi-20479
    I.amOnPage(domain　+ '/?review=' + randomInfo.firstName);
        I.wait(2);

    console.log('First name is :' + randomInfo.firstName + '; Last name is :' + randomInfo.lastName + '; Phone num is :' + randomInfo.phone + ';');
    I.see("Gone");
    I.see("The requested resource");
    I.see("is no longer available on this server and there is no forwarding address. Please remove all references to this resource");
})