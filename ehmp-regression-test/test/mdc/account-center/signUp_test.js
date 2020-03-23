Feature('mdc - account-center- signUp');

/**
 *old address: https://git.ehealthinsurance.com/projects/MU/repos/automation-tests/browse/ehi-ehim-tests/apps/mdc/account-center/test/uitests/signInTest.js
 */

var config = require('config');
var domain = config.get('MDC');
var randomInfo = require('../../../utils/random').randomInfo();

Scenario('ENV: ' +process.env.NODE_ENV + ' Willis - Sign up a new Account Center Test @account', (I, signInPage, accountCenterPage) => {
        I.amOnPage(domain);
        I.click(signInPage.fields.signInLink);
        I.wait(5);
       // I.switchToNextTab();
        I.wait(1);

        I.click(signInPage.fields.signUp);

        I.wait(1);
            I.fillField(signInPage.fields.FirstName, randomInfo.firstName);
            I.fillField(signInPage.fields.LastName, randomInfo.lastName);
            I.fillField(signInPage.fields.emailID, randomInfo.firstName + randomInfo.lastName + '@gmail.com' );
            I.fillField(signInPage.fields.password, 'Hello!@#456');
               I.wait(1);

        I.click(signInPage.fields.signUpBtn);
            I.wait(3);


                    I.see('Your account has been created!');



            console.log('First name is :' + randomInfo.firstName + '; Last name is :' + randomInfo.lastName + '; Phone num is :' + randomInfo.phone + ';');
        //I.wait(20);


})