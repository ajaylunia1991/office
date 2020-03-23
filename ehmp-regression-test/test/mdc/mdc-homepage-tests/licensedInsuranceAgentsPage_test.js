Feature('mdc');

/**
 *old address: https://git.ehealthinsurance.com/projects/MU/repos/automation-tests/browse/ehi-ehim-tests/apps/mdc/mdc/mdc-homepage-tests/test/uitests/licensedInsuranceAgentPageTest.js
 */

var config = require('config');
var domain = config.get('MDC');

// Licensed Insurance Agent Page, Saving Text Statement element text
var agentSaveText1 = "Our shoppers found a potential average savings of";
var agentSaveText2 = "$531/year*";

Scenario('ENV: ' +process.env.NODE_ENV + ' Willis -Licensed Insurance Agent Page Test @agentpage', (I, agentPage) => {
    I.amOnPage(domain　 + '/agents'); 
    I.wait(2);
    // console.log('Licensed Insurance Agent Page Opened');

    agentPage.validateLicensedAgentProfilePageElements();
})

// Verify Savings statements on Licensed Insurance Agent Page - ALGO-508 TestCase-@C24668
Scenario('ENV: ' +process.env.NODE_ENV + ' Reena -Licensed Insurance Agent Page Test- ALGO-508 TestCase-@C24668', (I, agentPage) => {
    I.amOnPage(domain　 + '/agents'); 
    I.wait(2);
    console.log('Licensed Insurance Agent Page Opened');
    agentPage.validateSavingText(agentSaveText1,agentSaveText2);
})