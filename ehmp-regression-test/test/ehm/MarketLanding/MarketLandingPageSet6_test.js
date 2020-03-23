Feature('EHM-Marketing landing pages');

var assert = require('assert');
var config = require('config');
var domain = config.get('EHM');

var randomInfo = require('../../../utils/random').randomInfo();
var LandingURL = require('../../../data/MarketLandingPageURL.js')();

//ALGO-1331, Test case- 24714
Data(LandingURL.URL01).Scenario('ENV: ' + process.env.NODE_ENV + '- GCK- this scenario verify special chars are not allowed on marketing pages', async function(I, current, MarketLandingPage) {

I.amOnPage(domain + current.LandingURL);
I.wait(3);
I.click(MarketLandingPage.fields.firstName);
I.fillField(MarketLandingPage.fields.firstName, randomInfo.firstName);
I.click(MarketLandingPage.fields.lastName);
I.fillField(MarketLandingPage.fields.lastName, randomInfo.lastName);
I.click(MarketLandingPage.fields.phone);
I.fillField(MarketLandingPage.fields.phone, randomInfo.phone);
I.click(MarketLandingPage.fields.email);
I.fillField(MarketLandingPage.fields.email, randomInfo.email);
I.fillField(MarketLandingPage.fields.zipCode, '@#$%**');
I.click(MarketLandingPage.fields.continueBtn);
I.wait(3);
I.see('Please enter a valid zip code');

});

Data(LandingURL.URL02).Scenario('ENV: ' + process.env.NODE_ENV + '- GCK- this scenario verify special chars are not allowed on marketing pages', async function(I, current,MarketLandingPage){

I.amOnPage(domain + current.LandingURL);
I.wait(2);
let url = await I.grabCurrentUrl(); 
console.log(`Current URL is [${url}]`);
I.click(MarketLandingPage.fields.firstName); 
I.fillField(MarketLandingPage.fields.firstName, randomInfo.firstName);
I.click(MarketLandingPage.fields.lastName);
I.fillField(MarketLandingPage.fields.lastName, randomInfo.lastName);
I.click(MarketLandingPage.fields.phone);
I.fillField(MarketLandingPage.fields.phone, randomInfo.phone);

  if(url.includes('medicare-lp4-unionplus'))
  {
    I.click(MarketLandingPage.fields.email);
    I.fillField(MarketLandingPage.fields.email, randomInfo.email);
  }else
{   
    I.click(MarketLandingPage.fields.zipCode);
    I.fillField(MarketLandingPage.fields.zipCode, '@#$%**');
}
I.wait(3);
I.click(MarketLandingPage.fields.continueBtn);
I.wait(3);
I.see('Please enter a valid zip code');

});

Data(LandingURL.URL03).Scenario('ENV: ' + process.env.NODE_ENV + '- GCK- this scenario verify special chars are not allowed on marketing pages', async function(I, current,MarketLandingPage){

I.amOnPage(domain + current.LandingURL);
I.wait(2);
I.click(MarketLandingPage.fields.firstName); 
I.fillField(MarketLandingPage.fields.firstName, randomInfo.firstName);
I.click(MarketLandingPage.fields.lastName);
I.fillField(MarketLandingPage.fields.lastName, randomInfo.lastName);
I.click(MarketLandingPage.fields.phone);
I.fillField(MarketLandingPage.fields.phone, randomInfo.phone);
I.click(MarketLandingPage.fields.email);
I.fillField(MarketLandingPage.fields.email, randomInfo.email);
I.fillField(MarketLandingPage.fields.zipCode, '@#$%**');
I.click(MarketLandingPage.fields.continueBtn);
I.wait(3);
I.see('Please enter a valid zip code');
    
});

Data(LandingURL.URL04).Scenario('ENV:' + process.env.NODE_ENV + 'GCK - this scenario verify special chars are not allowed on marketing pages', async function(I, current,MarketLandingPage){

I.amOnPage(domain + current.LandingURL);
I.wait(2);
I.click(MarketLandingPage.fields.firstName);
I.fillField(MarketLandingPage.fields.firstName, randomInfo.firstName);
I.click(MarketLandingPage.fields.lastName);
I.fillField(MarketLandingPage.fields.lastName, randomInfo.lastName);
I.click(MarketLandingPage.fields.phone);
I.fillField(MarketLandingPage.fields.phone, randomInfo.phone);
I.click(MarketLandingPage.fields.email);
I.fillField(MarketLandingPage.fields.email, randomInfo.email);
I.fillField(MarketLandingPage.fields.zipCode, '@#$%**');
I.click(MarketLandingPage.fields.continueBtn);
I.wait(3);
I.see('Please enter a valid zip code');

});

Data(LandingURL.URL05).Scenario('ENV:' + process.env.NODE_ENV + 'GCK- this scenario verify special chars are not allowed on marketing pages', async function(I,current,MarketLandingPage){

I.amOnPage(domain + current.LandingURL);
I.wait(2);
I.click(MarketLandingPage.fields.firstName);
I.fillField(MarketLandingPage.fields.firstName, randomInfo.firstName);
I.click(MarketLandingPage.fields.lastName);
I.fillField(MarketLandingPage.fields.lastName, randomInfo.lastName);
I.click(MarketLandingPage.fields.phone);
I.fillField(MarketLandingPage.fields.phone, randomInfo.phone);
I.click(MarketLandingPage.fields.email);
I.fillField(MarketLandingPage.fields.email, randomInfo.email);
I.fillField(MarketLandingPage.fields.zipCode, '@#$%**');
I.click(MarketLandingPage.fields.continueBtn);
I.wait(3);
I.see('Please enter a valid zip code');

});

