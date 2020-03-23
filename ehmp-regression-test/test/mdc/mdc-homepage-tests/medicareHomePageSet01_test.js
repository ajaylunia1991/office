Feature('mdc');
/**
 * Created by Ajay Lunia 
 */
var config = require('config');
var domain = config.get('MDC');
var assert = require('assert');

// ALGO-1632 - Test case : @C22849 - MDC : Verify that Sign in link in the NAV bar is opening in same tab
Scenario('ENV: ' + process.env.NODE_ENV + ' Ajay @c22849 - MDC : Verify that Sign in link in the NAV bar is opening in same tab', async (I,mdcHomePage) => {
    await I.amOnPage(domain);
    I.waitForVisible(mdcHomePage.fields.signInBtn,'Sign In');
    I.click(mdcHomePage.fields.signInBtn);
    let tabs = await I.grabNumberOfOpenTabs();
    await console.log(tabs);
    assert.equal(1,tabs); //showing that clicking on sign in link is opening in single tab
});
