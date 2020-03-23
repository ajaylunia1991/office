Feature('mdc - carrierIndexPageTest');

/**
*old address: https://git.ehealthinsurance.com/projects/MU/repos/automation-tests/browse/ehi-ehim-tests/apps/mdc/mdc/carriers/test/uitests/carrierIndexPageTest.js
*/

var config = require('config');
var domain = config.get('MDC');

Scenario('ENV: ' +process.env.NODE_ENV + ' - Willis - Carriers Index Page Elements Test @carriers', (I, signInPage, accountCenterPage) => {
    I.amOnPage(domain　+ '/carriers');
    I.wait(5);
    I.see('Find Medicare Carriers in your area');
   
})