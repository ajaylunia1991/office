Feature('mdc');
/**
 * Created by Ajay Lunia 
 */
var config = require('config');
var domain = config.get('MDC');
var assert = require('assert');

var zipCodeField;

// ALGO-1597-Test Case : @C24930 Ensure user should not be able to add more than 5 digits in zipcode
Scenario('ENV: ' + process.env.NODE_ENV + ' - Ajay - @C24930 Ensure user should not be able to add more than 5 digits in zipcode',async function (I, mdcHomePage) {
     await I.amOnPage(domain + '/about-medicare/what-is-medicare/');
     await I.waitForVisible(mdcHomePage.fields.zipcodeOnArticlePage,5);
     await I.scrollTo('//*[@id="main"]/div/div[1]/div[1]/div[1]/div[1]/p[2]');
     await I.fillField(mdcHomePage.fields.zipcodeOnArticlePage,'4533434454'); //Trying to enter 10 Digits in Zip Code field 
     zipCodeField = await I.grabValueFrom(mdcHomePage.fields.zipcodeOnArticlePage);
     assert.equal(5,(zipCodeField[0].length));
     await console.log('zip code length is ' + zipCodeField[0].length);
});
