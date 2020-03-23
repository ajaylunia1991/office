
Feature('sutter vanity URL');

var config = require('config');
var vanityURL = require('../../data/vanityURL.js')();

Data(vanityURL.sutterURLList).Scenario('test sutter url redirect rule', {retries: 0}, async(I, current) => {

    I.amOnPage(current.url);
    I.waitForText(current.text);
    I.seeInCurrentUrl(current.redirectURL);

});


