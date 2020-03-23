Feature('mdc');


var config = require('config');
var domain = config.get('MDC');

Scenario('ENV: ' +process.env.NODE_ENV + ' Willis - This scenario verifies Yoast SEO Pagination Issue on Category MEDI-21552 & ALGO-262 @articles', (I, mdcHomePage) => {
    console.log("I am on About Medicare Articles");
    I.amOnPage(domain　+ '/about-medicare/page/7/');
    I.wait(3);
    I.waitForVisible('.disabled', 'Next Page >', 30);
    console.log("I am on About Medicare Articles");
    I.seeInSource('link rel="prev"'+' '+'href="'+domain+'/about-medicare/page/6/');
    I.dontSeeInSource('link rel="next"'+' '+'href="'+domain+'/about-medicare/page/8/');
    I.dontSeeInSource('link rel="next"'+' '+'href="'+domain+'/./about-medicare/page/6/');
    I.dontSeeInSource('link rel="prev"'+' '+'href="'+domain+'/./about-medicare/page/8/');

    console.log("I am on Caregiver Resources Articles");
    I.amOnPage(domain　+ '/caregiver-resources/page/7/');
    I.wait(3);
    I.waitForVisible('.disabled', 'Next Page >', 30);
    I.seeInSource('link rel="prev"'+' '+'href="'+domain+'/caregiver-resources/page/6/');
    I.dontSeeInSource('link rel="next"'+' '+'href="'+domain+'/caregiver-resources/page/8');
    I.dontSeeInSource('link rel="next"'+' '+'href="'+domain+'/./caregiver-resources/page/6/');
    I.dontSeeInSource('link rel="prev"'+' '+'href="'+domain+'/./caregiver-resources/page/8/');

    console.log("I am on Medicare Supplement Articles");
    I.amOnPage(domain　+ '/medicare-supplement/page/8/');
    I.wait(3);
    I.waitForVisible('.disabled', 'Next Page >', 30);
    I.seeInSource('link rel="prev"'+' '+'href="'+domain+'/medicare-supplement/page/7/');
    I.dontSeeInSource('link rel="next"'+' '+'href="'+domain+'/medicare-supplement/page/9/');
    I.dontSeeInSource('link rel="next"'+' '+'href="'+domain+'/./medicare-supplement/page/7/');
    I.dontSeeInSource('link rel="prev"'+' '+'href="'+domain+'/./medicare-supplement/page/9/');

})