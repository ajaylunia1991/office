Feature('mdc -account-center-signin');

/**
 *old address: https://git.ehealthinsurance.com/projects/MU/repos/automation-tests/browse/ehi-ehim-tests/apps/mdc/account-center/test/uitests/signInTest.js
 */

var config = require('config');
var domain = config.get('MDC');

Scenario('ENV: ' +process.env.NODE_ENV + ' Willis - Sign In to Account Center Test @account', (I, signInPage, accountCenterPage) => {
    I.amOnPage(domain　 + '/account-center');
   
    I.wait(5);
    if (process.env.NODE_ENV == 'cm') {
        signInPage.signIn("willis.bao@ehealth-china.com", "Hello!@#123");
    } else if(process.env.NODE_ENV == 'qa'){
        signInPage.signIn("acplogo1@ehealth.com", "Welcome1");
    }else if(process.env.NODE_ENV == 'prod'){
             signInPage.signIn("willis.bao@ehealth-china.com", "Welcome1");
         }
    accountCenterPage.validateAccountCenterPageElements();
    accountCenterPage.signOut();

    // console.log("Validated Reco HomepageElements");
    // console.log("Whoo..Whoo...Validated Account Center");

})