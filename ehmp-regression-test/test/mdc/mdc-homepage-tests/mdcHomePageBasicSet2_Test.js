Feature('mdc');

/**
 * created by Ajay Lunia 
 */

var config = require('config');
var domain = config.get('MDC');
var assert = require('assert');

var phoneNumber;

// ALGO-657-Test case : @C24778 - Desktop: Phone number should be present on the page'
Scenario('ENV:' + process.env.NODE_ENV + ' Ajay - @C24778 Desktop: Phone number should be present on the page',(I,mdcHomePage) => {
    I.amOnPage(domain);
    I.waitForVisible(mdcHomePage.fields.callBox,5);
    I.scrollTo(mdcHomePage.fields.callBox);
    phoneNumber = (mdcHomePage.fields.callBox).length;
    assert.equal(13,phoneNumber);
});
