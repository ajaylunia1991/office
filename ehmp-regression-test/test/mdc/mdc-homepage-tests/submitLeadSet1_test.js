//gck, ALGO-694 TC-C23278

Feature('MDC - lead form validation');

var config = require('config');
var domain = config.get('MDC');
var assert = require('assert');

var randomInfo = require('../../../utils/random').randomInfo();
var zip = '90001';
Scenario('ENV: ' + process.env.NODE_ENV + ' - GCK - LeadSubmit - This scenario verifies validation messages', async function (I, leadPage) {

    I.amOnPage(domain + '/?mboxDisable=true&qascript=Y');
    I.wait(3);
    

    let url = await I.grabCurrentUrl();
    console.log("I am on MDC page: " + url);
    I.seeElement(leadPage.fields.requestaCall);
    console.log("I am clicking Request Lead Form");
    I.click(leadPage.fields.requestaCall);
    I.wait(3);
    
    

    I.click(leadPage.fields.submit);
    I.see('This field is required.', leadPage.fields.fnm_error)
    I.wait(2);
    I.scrollTo(leadPage.fields.firstNameField);
    I.fillField(leadPage.fields.firstNameField, randomInfo.firstName);
    I.wait(1);

    I.click(leadPage.fields.submit);
    I.see('This field is required.', leadPage.fields.lnm_error);
    I.wait(2);
    I.scrollTo(leadPage.fields.lastNameField);
    I.fillField(leadPage.fields.lastNameField, randomInfo.lastName);

    I.click(leadPage.fields.submit);
    I.see('This field is required.', leadPage.fields.ph_error);
    I.wait(2);
    I.scrollTo(leadPage.fields.phoneNo);
    I.fillField(leadPage.fields.phoneNo, randomInfo.phone);

    I.click(leadPage.fields.submit);
    I.see('This field is required.', leadPage.fields.zip_error);
    I.fillField(leadPage.fields.zipCode, zip);
    I.wait(2);
    
    if (process.env.NODE_ENV == 'cm' | process.env.NODE_ENV == 'qa'){
    I.click(leadPage.fields.submit);
    I.wait(2);
    await I.waitForText('Thank you! We will contact you soon!');
    await console.log('Form has been submitted');

    }





});
