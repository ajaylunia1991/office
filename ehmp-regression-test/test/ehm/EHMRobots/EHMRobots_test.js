Feature('ehm - Robots');

/**
*old address: https://git.ehealthinsurance.com/projects/MU/repos/automation-tests/browse/ehi-ehim-tests/apps/mdc/mdc/recommendation/test/uitests/recoHomePageTest.js
*/

var config = require('config');
var domain = config.get('EHM');
var ehmp = config.get('EHMP');

var assert = require('assert');



Scenario('ENV: ' + process.env.NODE_ENV + 'Willis - Robots', async function (I) {
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
    I.see("User-agent: AdsBot-Google");
    I.see("User-agent: AdsBot-Google-Mobile");
    I.see("Disallow: /ehi/StandAloneHelp.ds");



    I.see("User-agent: *");
    I.see("Disallow: /ehi/StandAloneHelp.ds");

    I.see("Disallow: /medicare-lp/");
    I.see("Disallow: /medicare-lp2/");
    I.see("Disallow: /medicare-lp3/");
    I.see("Disallow: /medicare-lp4/");
    I.see("Disallow: /medicare-lp5/");
    I.see("Disallow: /medicare-lp6/");
    I.see("Disallow: /medicare-lp-kaiser/");
    I.see("Disallow: /medicare-lp-sutter/");
    I.see("Disallow: /medicare-lp-sutter2/");
    I.see("Disallow: /medicare-lp-sutter3/");
    I.see("Disallow: /medicare-lp-sutter4/");
    I.see("Disallow: /compare-medicare-plans/");
    I.see("Disallow: /medicare-beginners-guide-for-union-members/");
    I.see("Disallow: /beginners-guide-to-medicare-download/");
    I.see("Disallow: /medicare-lp4-unionplus");

    I.see("Disallow: /shop-for-medicare/");

    I.see("Disallow: /medicare-lp-walgreens/");


    }

    I.amOnPage('https://devmedicare.wpengine.com/robots.txt');

    I.see("User-agent: *");
    I.see("Disallow: /");


})