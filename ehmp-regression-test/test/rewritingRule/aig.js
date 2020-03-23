Feature('EHM- AIG Redirection');

var config = require('config');
var domain = config.get('EHM');
var vanityURL = require('../../data/vanityURL.js')();

// Test script for ALGO-1403, TC-C23257
Data(vanityURL.AIG).Scenario('ENV:' + process.env.NODE_ENV + 'verify AIG vanity URL redirection', async (I, current) => {

    I.amOnPage(domain + current.url + '/?mboxDisable=true&qascript=Y');
    let url = await I.grabCurrentUrl();
    console.log(`I am on page ${url}`);
    I.waitForText(current.text);
    I.seeInCurrentUrl(domain + current.redirectURL);


})

