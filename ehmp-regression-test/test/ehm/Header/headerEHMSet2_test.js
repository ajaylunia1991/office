Feature('ehm - Header');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHM');
var ehmp = config.get('EHMP');

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Header - This scenario verifies Learn About Medicare in EHM Header', async function(I, headerPage, ehmPage) {
    I.amOnPage(domain);
    I.wait(5);
    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am checking Learn About Medicare in EHM Header");
    I.waitForElement(headerPage.fields.learnAboutMedicare, 10);
    I.click(headerPage.fields.learnAboutMedicare);
    I.wait(8);
    I.seeElement(headerPage.fields.aboutEhealth);
    I.see('About eHealth', headerPage.fields.abouteHealthXPath);
    I.seeElement(headerPage.fields.aboutMedicare);
    I.see('About Medicare', headerPage.fields.aboutMedicare);
    I.seeElement(headerPage.fields.enrollInMedicare);
    I.see('Enroll in Medicare', headerPage.fields.enrollInMedicare);
    I.seeElement(headerPage.fields.eligibilityAndCoverage);
    I.see('Eligibility and Coverage', headerPage.fields.eligibilityAndCoverage);
    I.seeElement(headerPage.fields.medicareResources_EHM);
    I.see('Medicare Resources', headerPage.fields.medicareResources_EHM);
    I.seeElement(headerPage.fields.medicareCosts);
    I.see('Medicare Costs', headerPage.fields.medicareCosts);
    I.click(headerPage.fields.aboutEhealthMedicare);
    I.wait(5);
    I.seeInCurrentUrl(domain + '/about-us/');
    I.see('Why eHealth Medicare', headerPage.fields.whyEhealthMedicare);
    I.click(headerPage.fields.learnAboutMedicare);
    I.wait(3);
    I.click(headerPage.fields.medicareSupplement);
    I.wait(5);
    I.seeInCurrentUrl(domain + '/medicare-supplement-articles/medicare-supplement-insurance-plans/');
    I.see('Medicare Supplement Insurance Plans', headerPage.fields.veifyTitle);
    I.click(headerPage.fields.learnAboutMedicare);
    I.wait(3);
    I.click(headerPage.fields.medicareTaxes);
    I.wait(5);
    I.seeInCurrentUrl(domain + '/medicare-administration-articles/what-is-the-medicare-tax/');
    I.see('What Is the Medicare Tax?', headerPage.fields.veifyTitle);


})

