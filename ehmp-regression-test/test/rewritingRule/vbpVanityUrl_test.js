/**
 * Created by Reena to include Vanity URL for VBP List
 */
Feature('EHM VBP vanity URL');

var config = require('config');
var domain = config.get('EHM');
var vanityURL = require('../../data/vanityURL.js')();

// ALGO-1522 - @C23217 - Verify Vanity URL for VBP Monarch 
Data(vanityURL.vanityMonarchURL).Scenario('Reena - ALGO-1522 - @C23217 - Verify redirect rule of Vanity URL for VBP Monarch', {retries: 0}, async(I, current) => {

   I.amOnPage(domain + current.url + '/?mboxDisable=true&qascript=Y'); // this is applied due to AB Test
    let url = await I.grabCurrentUrl();
    console.log(`Current URL is [${url}]`);
    if(url.includes('aep')){
        I.waitForText('Annual Election Period');
    }else{
        I.waitForText(current.text);
    }

   I.seeInCurrentUrl(current.redirectURL+ '&mboxDisable=true&qascript=Y'); // this is applied due to AB Test

});