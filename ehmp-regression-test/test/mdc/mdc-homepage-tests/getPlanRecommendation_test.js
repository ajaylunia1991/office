Feature('mdc');

/**
 *old address: https://git.ehealthinsurance.com/projects/MU/repos/automation-tests/browse/ehi-ehim-tests/apps/mdc/mdc/mdc-homepage-tests/test/uitests/getPlanRecommendationTest.js
 * and  https://git.ehealthinsurance.com/projects/MU/repos/automation-tests/browse/ehi-ehim-tests/apps/mdc/mdc/mdc-homepage-tests/test/uitests/licensedAgentProfilePageTest.js
 **/

var config = require('config');
var domain = config.get('MDC');


Scenario('ENV: ' +process.env.NODE_ENV + '- Willis - Get Plan Recommendation from a Licensed Agent Test @homepage', {retries: 3}, (I, licensedAgentProfilePage) => {
    I.amOnPage(domain　 + '/agents/tamera-jackson/'); //john-bulliner is not found
    I.wait(2);
    // console.log('Licensed Insurance Profile Page Opened');

    //Licensed Insurance Agent Profile Page Test
    licensedAgentProfilePage.validateLicensedAgentProfilePageElements();
    
    licensedAgentProfilePage.clickGetPlanRecommendation();
    // console.log('plan recommendation page opened');

    // I.wait(2);
    // I.amOnPage(domain　 + '/plan-recommendation/?agentId=341743');//john-bulliner agent id
    I.wait(2);
    // console.log('Whoo...whoo...Get Plan Recommendation From a Licensed Agent Test Passed');
    
    licensedAgentProfilePage.getPlanRecommendation();




})