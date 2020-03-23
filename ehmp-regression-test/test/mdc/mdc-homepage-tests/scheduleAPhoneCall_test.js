Feature('mdc');

/**
 *old address: https://git.ehealthinsurance.com/projects/MU/repos/automation-tests/browse/ehi-ehim-tests/apps/mdc/mdc/mdc-homepage-tests/test/uitests/scheduleAPhoneCallTest.js
 */

var config = require('config');
var domain = config.get('MDC');


Scenario('ENV: ' +process.env.NODE_ENV + ' Willis - Schedule Phone Call with Licensed Agent Test @agentpage', {retries: 3}, (I, licensedAgentProfilePage) => {
    I.amOnPage(domain　 + '/agents/tamera-jackson/'); 
    // console.log('Licensed Insurance Profile Page Opened');

    licensedAgentProfilePage.clickScheduleCall();
    I.seeInCurrentUrl('schedule-a-phone-call');
    
    licensedAgentProfilePage.getCallFlow();



})