/**
 * Created by Ajay to include sutter URL List
 */
Feature('Sutter Vanity URL');

var config = require('config');
var domain = config.get('EHM');
var sutterVanityURL = require('../../data/sutterVanityURL.js')();


Data(sutterVanityURL.sutterVanityURLList1).Scenario('Ajay - Verify Vanity URL for Sutter Independent Physicians ', {retries: 0}, async(I, current) => {

    I.amOnPage(domain + current.url);
    I.waitForText(current.text);
    I.seeInCurrentUrl(current.redirectURL);

});