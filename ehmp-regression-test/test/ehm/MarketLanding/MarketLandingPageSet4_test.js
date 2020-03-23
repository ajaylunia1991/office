Feature('ehm - MarketLanding');


var assert = require('assert');
var config = require('config');
var domain = config.get('EHM');

var randomInfo = require('../../../utils/random').randomInfo();
var leadSearch = require('../../../utils/lead_search');
var LandingURL = require('../../../data/MarketLandingPageURL.js')();


//This scenario verifies market landing pages

Data(LandingURL.URL04).Scenario('ENV: ' + process.env.NODE_ENV + ' - Willis - MarketLanding - This scenario verifies verifies market landing pages', async function(I, current, MarketLandingPage) {

    I.amOnPage(domain + current.LandingURL);
    I.wait(3);
    //Create lead from market landing page
     MarketLandingPage.fillleadform(randomInfo.firstName, randomInfo.lastName, randomInfo.phone);
    //verify it's on EHMP Page

    if (process.env.NODE_ENV == 'cm' | process.env.NODE_ENV == 'qa' ) {
        await I.see('Thank you for downloading');
    //Verify lead is created
      let rows = await leadSearch.search(randomInfo);
            console.log("now need to verify rows = 1. The SQL returned rows = : " + rows);
            assert(rows == 1);
            console.log("now rows == 1 verified PASS  " );
     }else {
     I.see('Guide to Medicare');
     }
});

