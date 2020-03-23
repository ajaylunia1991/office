Feature('mdc');

var config = require('config');
var domain = config.get('MDC');


var assert = require('assert');

var randomInfo = require('../../../utils/random').randomInfo();
var leadSearch = require('../../../utils/reco_lead_search');


Scenario('ENV: ' +process.env.NODE_ENV + ' Willis - SiteMaptesting@mdcBasic06', async function (I, recommendation_homePage) {
    I.amOnPage(domain+'/sitemap/');
    I.wait(2);


//This Scenario verifies Links present Under Pages Heading 
//Summary :- Verify the text for the 11 links below Pages Heading 
I.seeElement('//A[contains(text(),"About Us")]');
I.seeElement('//A[contains(text(),"carriers")]');
I.seeElement('//A[contains(text(),"Compare Plans")]');
//I.seeElement('//A[contains(text(),"doctors")]');
I.seeElement('//A[contains(text(),"eHealth Terms of Use")]');
I.seeElement('//A[contains(text(),"Home Page")]');
//I.seeElement('//A[contains(text(),"Medicare by State")]');
I.seeElement('//A[contains(text(),"Medicare Forms")]');
//I.seeElement('//A[contains(text(),"Prescription Drugs")]');
I.seeElement('//A[contains(text(),"Privacy Policy")]');
I.seeElement('//A[contains(text(),"Sign up")]');


//verify there are only 11 links but not 12 links below  
let num = await I.grabNumberOfVisibleElements('.page_item');  
console.log("========number:"+ num);  
assert.equal(num,8);
})  


