Feature('SeoTag');


var assert = require('assert');
var config = require('config');
var domain = config.get('MDC');

var randomInfo = require('../../../utils/random').randomInfo();
var leadSearch = require('../../../utils/lead_search');
var TagURL = require('../../../data/SeoTag.js')();


//This scenario verifies market landing pages

Data(TagURL.URL04).Scenario('ENV: ' + process.env.NODE_ENV + ' Willis - SEO Canonical TAG Testing04@mdcBasic04', async function(I, current) {

    I.amOnPage(domain + current.TagURL);
    I.wait(3);


    let url = await I.grabCurrentUrl();
    console.log(`Current URL is [${url}]`);


    //I.seeInSource('link rel="canonical" href="https://cmmedicare.wpengine.com/"');
    I.seeInSource('link rel="canonical" href="' + url + '"');


    I.seeNumberOfElements('//link[@rel="canonical"]', 1);
    //I.seeInSource('href="https://cmmedicare.wpengine.com/">');
    

});



