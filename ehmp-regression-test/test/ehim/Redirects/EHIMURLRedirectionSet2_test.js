Feature('ehim - Redirects');


var assert = require('assert');
var config = require('config');
var domain = config.get('EHIM');


var LandingURL = require('../../../data/EHIMURLRedirection.js')();


//This scenario verifies market landing pages

Data(LandingURL.URL02).Scenario('ENV: ' + process.env.NODE_ENV + ' - Willis - Redirects - This scenario verifies EHIM URL redirection02', async function(I, current) {

    I.amOnPage(domain + current.LandingURL);
    I.wait(2);
    //Create lead from market landing page
    I.seeInCurrentUrl(domain + current.redirectURL);
    // console.log('Redirected URL is :' + current.redirectURL);


});

