Feature('SeoTag');


//var assert = require('assert');
var config = require('config');
var domain = config.get('MDC');

//ALGO-35 - Test cases - @C50541 On Compare Plan page, Verify that on View source have only one Canonical Tags and URL should point to original URL.
Scenario('ENV: ' + process.env.NODE_ENV + '  Reena - ALGO-35 - Test cases - @C50541 On Compare Plan page, Verify that on View source have only one Canonical Tags and URL should point to original URL.', async (I) => {

    I.amOnPage(domain + '/compare-medicare-plans/');
    I.wait(3);
    I.waitForText('Find Affordable Medicare Plans in your Area');

     let url = await I.grabCurrentUrl();
     console.log(`Current URL is [${url}]`);
 
     I.seeInSource('link rel="canonical" href="' + url + '"');
     I.seeNumberOfElements('//link[@rel="canonical"]', 1);
 
});
