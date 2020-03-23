
// gck - MEDI-25870, Testcase -C23249
Feature('MDC-password reset');

var config = require('config');
var domain = config.get('MDC');

Scenario('ENV: ' + process.env.NODE_ENV + 'GCK - Reset password mail has been sent', (I, signInPage) => {
    I.amOnPage(domain + '/account-center');

    I.wait(5);
    I.seeElement(signInPage.fields.forgotPassword);
    I.click(signInPage.fields.forgotPassword);


    I.wait(5);
    if (process.env.NODE_ENV == 'cm') {
        I.seeElement(signInPage.fields.forgotPasswordpopup);
        I.seeElement(signInPage.fields.email);
        I.wait(3);
        //I.click('.email.textbox-wrapper');
        I.click(signInPage.fields.forgotemail);
        I.wait(3);
        I.fillField(signInPage.fields.forgotemail, 'willis.bao@ehealth-china.com');
        I.click(signInPage.fields.resetPassword);
        I.waitForVisible(signInPage.fields.confirmationscreen);
        I.see('willis.bao@ehealth-china.com');
        console.log("Reset password Email has been sent")
        I.click(signInPage.fields.confirmbutton)//ok button

    } else if (process.env.NODE_ENV == 'qa') {
        I.seeElement(signInPage.fields.forgotPasswordpopup);
        I.seeElement(signInPage.fields.email);
        I.wait(3);
        I.click(signInPage.fields.forgotemail);
        I.wait(3);
        I.fillField(signInPage.fields.forgotemail, "acplogo1@ehealth.com");
        I.click(signInPage.fields.resetPassword);
        I.waitForVisible(signInPage.fields.confirmationscreen);
        I.see('acplogo1@ehealth.com');
        console.log("Reset password Email has been sent")
        I.click(signInPage.fields.confirmbutton)//ok button

    } else if (process.env.NODE_ENV == 'prod') {
        I.seeElement(signInPage.fields.forgotPasswordpopup);
        I.seeElement(signInPage.fields.email);
        I.wait(3);
        I.click(signInPage.fields.forgotemail);
        I.wait(3);
        I.fillField(signInPage.fields.forgotemail, "willis.bao@ehealth-china.com");
        I.click(signInPage.fields.resetPassword);
        I.waitForVisible(signInPage.fields.confirmationscreen);
        I.see('willis.bao@ehealth-china.com');
        console.log("Reset password Email has been sent")
        I.click(signInPage.fields.confirmbutton)//ok button

    }


});