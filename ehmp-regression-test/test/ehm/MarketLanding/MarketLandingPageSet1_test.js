Feature('ehm - MarketLanding');


var assert = require('assert');
var config = require('config');
var domain = config.get('EHM');

var randomInfo = require('../../../utils/random').randomInfo();
var leadSearch = require('../../../utils/lead_search');
var LandingURL = require('../../../data/MarketLandingPageURL.js')();


//This scenario verifies market landing pages

Data(LandingURL.URL01).Scenario('ENV: ' + process.env.NODE_ENV + ' - Willis - MarketLanding - This scenario verifies verifies market landing pages', async function(I, current, MarketLandingPage) {

    I.amOnPage(domain + current.LandingURL);
    I.wait(3);
    //Create lead from market landing page
     MarketLandingPage.fillleadform(randomInfo.firstName, randomInfo.lastName, randomInfo.phone);
    //verify it's on EHMP Page
    I.see('Find Medicare Plans');
    I.see('Learn About Medicare');

    if (process.env.NODE_ENV == 'cm' | process.env.NODE_ENV == 'qa' ) {
        await I.see('Learn About Medicare');
//        I.seeInCurrentUrl( ehmp + '/?leadFormEnabled=false&zip=12345&type=MA&allid=EHM39972&leadid=');
//        I.seeInCurrentUrl( '#quote-plans/MA/90001/05200/LOS%20ANGELES/1/p1');
//
    //Verify lead is created
      let rows = await leadSearch.search(randomInfo);
            console.log("now need to verify rows = 1. The SQL returned rows = : " + rows);
            assert(rows == 1);
            console.log("now rows == 1 verified PASS  " );
//     }else{
//
//        I.seeInCurrentUrl( ehmp + '/v2?leadFormEnabled=false=&type=MA&allid=EHM39972#/');
//
//
     }

});