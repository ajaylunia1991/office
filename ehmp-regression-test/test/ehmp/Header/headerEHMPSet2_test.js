Feature('ehmp - header');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHMP');
var assert = require('assert');
var ehmp = config.get('EHMP');
var ehm = config.get('EHM');

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - Header - This scenario verifies that MA/MS/MD are available under Header in css on Census', async function(I, headerPage, ehmPage) {
        var assert = require('assert');
        I.amOnPage(domain);
        I.wait(4);

        let url = await I.grabCurrentUrl();
        console.log(url);
        console.log("I am checking in css that MA/MS/MD are available");
        I.wait(2);
        var res = await headerPage.verifyMAMSMDHeader('list-item,list-item','list-item,list-item','list-item,list-item');
        console.log("verifyMAMSMDHeader returns: "+ res);
        assert(res == true);


    });

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - Header - This scenario verifies that only MD is available under Header in css on Census if showPdpOnly=true', async function(I, headerPage, ehmPage) {
    var assert = require('assert');
    I.amOnPage(domain + '/?showPdpOnly=true');
    I.wait(4);

    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am checking that only MD is available if showPdpOnly=true");
    I.wait(2);
    I.seeInSource('class="throttle-GREEN show-pdp-only"');
    var res = await headerPage.verifyMAMSMDHeader('none,none','none,none','list-item,list-item');
    console.log("verifyMAMSMDHeader returns: "+ res);
    assert(res == true);


});

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - Header - This scenario verifies Learn About Medicare in Header on quote and default allid', async function(I, headerPage, ehmPage) {
    var assert = require('assert');
    I.amOnPage(domain + '/?&forceV1=true#quote-plans/MA/90001/05200/LOS%20ANGELES/1/p1');
    I.wait(5);
    let url = I.grabCurrentUrl();
    console.log(url);
    console.log("I am checking Learn About Medicare in Header");
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
    I.seeElement(headerPage.fields.medicareResources);
    I.see('Medicare Resources', headerPage.fields.medicareResources);
    I.seeElement(headerPage.fields.medicareCosts);
    I.see('Medicare Costs', headerPage.fields.medicareCosts);
    I.click(headerPage.fields.medicareAdvantage);
    I.wait(5);
    I.seeInCurrentUrl(ehm + '/medicare-advantage-articles/medicare-advantage-part-c-plans/?allid=EHM35770');
    I.click(ehmPage.fields.getStartedBtn);
    I.wait(4);
    I.seeInCurrentUrl(ehmp);
    I.seeInCurrentUrl('/?allid=EHM35770');

})




