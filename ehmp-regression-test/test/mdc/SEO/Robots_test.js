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

Scenario('ENV: ' +process.env.NODE_ENV + ' Willis - Robotstest@mdcBasic07', async function (I, recommendation_homePage) {
    //for medi-20479

    I.amOnPage(domain　+ '/robots.txt');
        I.wait(2);



    if (process.env.NODE_ENV == 'cm' | process.env.NODE_ENV == 'qa' ) {

    I.see("User-agent: *");
    I.see("Disallow: /");
    }else
    {
       I.see("User-agent: *");
        I.see("Disallow: /wp-admin/");
        I.see("Sitemap: https://medicare.com/updated_sitemap.xml");



    }

    I.amOnPage('https://devmedicare.wpengine.com/robots.txt');

     I.see("User-agent: *");
    I.see("Disallow: /");


})