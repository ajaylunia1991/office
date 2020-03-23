Feature('mdc');

var config = require('config');
var domain = config.get('MDC');

//ALGO-391- testcase @C24793 - Verify duplicate meta description tags
Scenario('ALGO-391-Testcase @C24793- Verify duplicate meta description tags', (I, mdcHomePage) => {
    I.amOnPage(domain);
    I.wait(2);
    I.grabSource('<meta name="description" content="Looking for Medicare plans or ways to save money on Medicare? Get free information and comparison tools, plus live help from Medicare.com."/>');
})