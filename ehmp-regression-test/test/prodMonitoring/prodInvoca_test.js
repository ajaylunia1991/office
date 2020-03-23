Feature('prodMonitoring');

/**
 * created by mmelnyk
 */

//var config = require('config');
//var domain = config.get('EHMP');
var assert = require('assert');

//// EHMP ////

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Invoca - This scenario verifies Invoca phone in Header/Footer on Census MA', async function(I, headerPage) {
    var assert = require('assert');
    I.amOnPage('https://www.ehealthmedicareplans.com');
    I.wait(4);

    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am checking Phone number in Header on Census MA");

    var res1 = await headerPage.grabPhoneHeader(headerPage.fields.headerPhone);
    console.log("grabPhoneHeader returns: "+ res1);
    var res2 = await headerPage.verifyPhoneRegExp(res1);
    console.log("Phone Header regular expression returns: "+ res2);
    console.log("I am checking Phone number in Footer on Census MA");
    var res3 = await headerPage.grabPhoneFooter(headerPage.fields.footerPhone);
    console.log("grabPhoneFooter returns: "+ res3);
    var res4 = await headerPage.verifyPhoneRegExp(res3);
    console.log("Phone Footer regular expression returns: "+ res4);
    var phoneFromAPI = await headerPage.phoneSearch('https://www.ehealthmedicareplans.com', headerPage.fields.phoneFromAPIehmp);
    console.log("call-service API phone: "+ phoneFromAPI);
    var res5 = await headerPage.verifyPhoneRegExp(phoneFromAPI);
    console.log("Checking if displayed phone not equal to default phone number");
    assert((res2 && res4 && res5) == true && res1 != phoneFromAPI && res3 != phoneFromAPI);


});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Invoca - This scenario verifies Invoca phone in Header/Footer on quote MA', async function(I, headerPage, ehmPage) {
    var assert = require('assert');
    I.amOnPage('https://www.ehealthmedicareplans.com');
    I.wait(4);
    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am navigating to quote page");
    I.fillField(ehmPage.fields.zipCodeCensus, '12345');
    I.wait(4);
    I.click(ehmPage.fields.btnCensusNext);
    I.wait(5);
    //console.log("I am on quote page and closing Lead Form popup");
    //I.click(headerPage.fields.quoteLeadForm);
    //I.wait(3);
    console.log("I am checking Phone number in Header on quote MA");

    var res1 = await headerPage.grabPhoneHeader(headerPage.fields.headerPhoneQuote);
    console.log("grabPhoneHeader returns: "+ res1);
    var res2 = await headerPage.verifyPhoneRegExp(res1);
    console.log("Phone Header regular expression returns: "+ res2);
    console.log("I am checking Phone number in Footer on Census MA");
    var res3 = await headerPage.grabPhoneFooter(headerPage.fields.footerPhoneQuote);
    console.log("grabPhoneFooter returns: "+ res3);
    var res4 = await headerPage.verifyPhoneRegExp(res3);
    console.log("Phone Footer regular expression returns: "+ res4);
    var phoneFromAPI = await headerPage.phoneSearch('https://www.ehealthmedicareplans.com', headerPage.fields.phoneFromAPIehmp);
    console.log("call-service API phone: "+ phoneFromAPI);
    var res5 = await headerPage.verifyPhoneRegExp(phoneFromAPI);
    console.log("Checking if displayed phone not equal to default phone number");
    assert((res2 && res4 && res5) == true && res1 != phoneFromAPI && res3 != phoneFromAPI);

});

//// MDC ////

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Invoca - This scenario verifies Invoca phone in Header/Footer on MDC Home', async function(I, headerPage) {
    var assert = require('assert');
    I.amOnPage('https://medicare.com');
    I.wait(4);

    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am checking Phone number in Header on MDC Home");
    I.wait(1);
    var res1 = await headerPage.grabPhoneHeaderEHM(headerPage.fields.headerPhoneMDC);
    console.log("grabPhoneHeader returns: "+ res1);
    var res2 = await headerPage.verifyPhoneRegExp(res1);
    console.log("Phone Header regular expression returns: "+ res2);
    console.log("I am checking Phone number in Footer on MDC Home");
    var res3 = await headerPage.grabPhoneFooterEHM(headerPage.fields.footerPhoneMDC);
    console.log("grabPhoneFooter returns: "+ res3);
    var res4 = await headerPage.verifyPhoneRegExp(res3);
    console.log("Phone Footer regular expression returns: "+ res4);
    var phoneFromAPI = await headerPage.phoneSearch('https://www.ehealthmedicareplans.com', headerPage.fields.phoneFromAPImdc);
    console.log("call-service API phone: "+ phoneFromAPI);
    var res5 = await headerPage.verifyPhoneRegExp(phoneFromAPI);
    console.log("Checking if displayed phone not equal to default phone number");
    assert((res2 && res4 && res5) == true && res1 != phoneFromAPI && res3 != phoneFromAPI);


});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Invoca - This scenario verifies Invoca phone in Header/Footer on MDC Reco page', async function(I, headerPage) {
    var assert = require('assert');
    I.amOnPage('https://medicare.com/recommendation/#/eligibility/RS1');
    I.wait(4);

    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am checking Phone number in Header on MDC Reco page");
    I.wait(1);
    var res1 = await headerPage.grabPhoneHeaderEHM(headerPage.fields.headerPhoneMDC);
    console.log("grabPhoneHeader returns: "+ res1);
    var res2 = await headerPage.verifyPhoneRegExp(res1);
    console.log("Phone Header regular expression returns: "+ res2);
    console.log("I am checking Phone number in Footer on MDC Reco page");
    var res3 = await headerPage.grabPhoneFooterEHM(headerPage.fields.footerPhoneMDC);
    console.log("grabPhoneFooter returns: "+ res3);
    var res4 = await headerPage.verifyPhoneRegExp(res3);
    console.log("Phone Footer regular expression returns: "+ res4);
    var phoneFromAPI = await headerPage.phoneSearch('https://www.ehealthmedicareplans.com', headerPage.fields.phoneFromAPImdc);
    console.log("call-service API phone: "+ phoneFromAPI);
    var res5 = await headerPage.verifyPhoneRegExp(phoneFromAPI);
    console.log("Checking if displayed phone not equal to default phone number");
    assert((res2 && res4 && res5) == true && res1 != phoneFromAPI && res3 != phoneFromAPI);


});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Invoca - This scenario verifies Invoca phone in Header/Footer on MDC Home for Privia Partner', async function(I, headerPage) {
    var assert = require('assert');
    I.amOnPage('https://medicare.com/partner/?allid=pri7981000');
    I.wait(4);

    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am checking Phone number in Header on MDC Home");
    I.wait(1);
    var res1 = await headerPage.grabPhoneHeaderEHM(headerPage.fields.headerPhoneMDC);
    console.log("grabPhoneHeader returns: "+ res1);
    var res2 = await headerPage.verifyPhoneRegExp(res1);
    console.log("Phone Header regular expression returns: "+ res2);
    console.log("I am checking Phone number in Footer on MDC Home");
    var res3 = await headerPage.grabPhoneFooterEHM(headerPage.fields.footerPhoneMDC);
    console.log("grabPhoneFooter returns: "+ res3);
    var res4 = await headerPage.verifyPhoneRegExp(res3);
    console.log("Phone Footer regular expression returns: "+ res4);
    var phoneFromAPI = await headerPage.phoneSearch('https://www.ehealthmedicareplans.com', headerPage.fields.phoneFromAPImdcPrivia);
    console.log("call-service API phone: "+ phoneFromAPI);
    var res5 = await headerPage.verifyPhoneRegExp(phoneFromAPI);
    console.log("Checking if displayed phone not equal to default phone number");
    assert((res2 && res4 && res5) == true && res1 != phoneFromAPI && res3 != phoneFromAPI);


});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Invoca - This scenario verifies Invoca phone in Header/Footer on MDC Reco page for Privia Partner', async function(I, headerPage) {
    var assert = require('assert');
    I.amOnPage('https://medicare.com/partner/?allid=pri7981000');
    I.wait(4);

    let url = await I.grabCurrentUrl();
    console.log(url);
    I.click(headerPage.fields.recoMenu);
    console.log("I am checking Phone number in Header on MDC Reco page");
    I.wait(1);
    var res1 = await headerPage.grabPhoneHeaderEHM(headerPage.fields.headerPhoneMDC);
    console.log("grabPhoneHeader returns: "+ res1);
    var res2 = await headerPage.verifyPhoneRegExp(res1);
    console.log("Phone Header regular expression returns: "+ res2);
    console.log("I am checking Phone number in Footer on MDC Reco page");
    var res3 = await headerPage.grabPhoneFooterEHM(headerPage.fields.footerPhoneMDC);
    console.log("grabPhoneFooter returns: "+ res3);
    var res4 = await headerPage.verifyPhoneRegExp(res3);
    console.log("Phone Footer regular expression returns: "+ res4);
    var phoneFromAPI = await headerPage.phoneSearch('https://www.ehealthmedicareplans.com', headerPage.fields.phoneFromAPImdcPrivia);
    console.log("call-service API phone: "+ phoneFromAPI);
    var res5 = await headerPage.verifyPhoneRegExp(phoneFromAPI);
    console.log("Checking if displayed phone not equal to default phone number");
    assert((res2 && res4 && res5) == true && res1 != phoneFromAPI && res3 != phoneFromAPI);


});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Invoca - This scenario verifies Invoca phone in Header/Footer on MDC Reco page for Orlamdo Health Partner', async function(I, headerPage) {
    var assert = require('assert');
    I.amOnPage('https://medicare.com/partner/?allid=orl7740000');
    I.wait(4);

    let url = await I.grabCurrentUrl();
    console.log(url);
    I.click(headerPage.fields.recoMenu);
    console.log("I am checking Phone number in Header on MDC Reco page");
    I.wait(1);
    var res1 = await headerPage.grabPhoneHeaderEHM(headerPage.fields.headerPhoneMDC);
    console.log("grabPhoneHeader returns: "+ res1);
    var res2 = await headerPage.verifyPhoneRegExp(res1);
    console.log("Phone Header regular expression returns: "+ res2);
    console.log("I am checking Phone number in Footer on MDC Reco page");
    var res3 = await headerPage.grabPhoneFooterEHM(headerPage.fields.footerPhoneMDC);
    console.log("grabPhoneFooter returns: "+ res3);
    var res4 = await headerPage.verifyPhoneRegExp(res3);
    console.log("Phone Footer regular expression returns: "+ res4);
    var phoneFromAPI = await headerPage.phoneSearch('https://www.ehealthmedicareplans.com', headerPage.fields.phoneFromAPImdcOrlando);
    console.log("call-service API phone: "+ phoneFromAPI);
    var res5 = await headerPage.verifyPhoneRegExp(phoneFromAPI);
    console.log("Checking if displayed phone not equal to default phone number");
    assert((res2 && res4 && res5) == true && res1 != phoneFromAPI && res3 != phoneFromAPI);


});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Invoca - This scenario verifies Invoca phone in Header/Footer on MDC Home for Orlando Health Partner', async function(I, headerPage) {
    var assert = require('assert');
    I.amOnPage('https://medicare.com/partner/?allid=orl7740000');
    I.wait(4);

    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am checking Phone number in Header on MDC Home");
    I.wait(1);
    var res1 = await headerPage.grabPhoneHeaderEHM(headerPage.fields.headerPhoneMDC);
    console.log("grabPhoneHeader returns: "+ res1);
    var res2 = await headerPage.verifyPhoneRegExp(res1);
    console.log("Phone Header regular expression returns: "+ res2);
    console.log("I am checking Phone number in Footer on MDC Home");
    var res3 = await headerPage.grabPhoneFooterEHM(headerPage.fields.footerPhoneMDC);
    console.log("grabPhoneFooter returns: "+ res3);
    var res4 = await headerPage.verifyPhoneRegExp(res3);
    console.log("Phone Footer regular expression returns: "+ res4);
    var phoneFromAPI = await headerPage.phoneSearch('https://www.ehealthmedicareplans.com', headerPage.fields.phoneFromAPImdcOrlando);
    console.log("call-service API phone: "+ phoneFromAPI);
    var res5 = await headerPage.verifyPhoneRegExp(phoneFromAPI);
    console.log("Checking if displayed phone not equal to default phone number");
    assert((res2 && res4 && res5) == true && res1 != phoneFromAPI && res3 != phoneFromAPI);


});

//// EHIM ////

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Invoca - This scenario verifies Invoca phone in Header/Footer on EHIM Home', async function(I, headerPage) {
    var assert = require('assert');
    I.amOnPage('https://www.ehealthinsurance.com/medicare');
    I.wait(4);

    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am checking Phone number in Header on EHIM Home");
    I.wait(1);
    var res1 = await headerPage.grabPhoneHeaderEHM(headerPage.fields.headerPhoneEHM);
    console.log("grabPhoneHeader returns: "+ res1);
    var res2 = await headerPage.verifyPhoneRegExp(res1);
    console.log("Phone Header regular expression returns: "+ res2);
    console.log("I am checking Phone number in Footer on EHIM Home");
    var res3 = await headerPage.grabPhoneFooterEHM(headerPage.fields.footerPhoneEHM);
    console.log("grabPhoneFooter returns: "+ res3);
    var res4 = await headerPage.verifyPhoneRegExp(res3);
    console.log("Phone Footer regular expression returns: "+ res4);
    var phoneFromAPI = await headerPage.phoneSearch('https://www.ehealthmedicareplans.com', headerPage.fields.phoneFromAPIehim);
    console.log("call-service API phone: "+ phoneFromAPI);
    var res5 = await headerPage.verifyPhoneRegExp(phoneFromAPI);
    console.log("Checking if displayed phone not equal to default phone number");
    assert((res2 && res4 && res5) == true && res1 != phoneFromAPI && res3 != phoneFromAPI);



});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Invoca - This scenario verifies Invoca phone in Header/Footer on EHIM MS Plan F', async function(I, headerPage) {
    var assert = require('assert');
    I.amOnPage('https://www.ehealthinsurance.com/medicare/supplement-all/medicare-supplement-plan-f');
    I.wait(4);

    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am checking Phone number in Header on EHIM MS Plan F");
    I.wait(1);
    var res1 = await headerPage.grabPhoneHeaderEHM(headerPage.fields.headerPhoneEHM);
    console.log("grabPhoneHeader returns: "+ res1);
    var res2 = await headerPage.verifyPhoneRegExp(res1);
    console.log("Phone Header regular expression returns: "+ res2);
    console.log("I am checking Phone number in Footer on EHIM MS Plan F");
    var res3 = await headerPage.grabPhoneFooterEHM(headerPage.fields.footerPhoneEHM);
    console.log("grabPhoneFooter returns: "+ res3);
    var res4 = await headerPage.verifyPhoneRegExp(res3);
    console.log("Phone Footer regular expression returns: "+ res4);
    var phoneFromAPI = await headerPage.phoneSearch('https://www.ehealthmedicareplans.com', headerPage.fields.phoneFromAPIehim);
    console.log("call-service API phone: "+ phoneFromAPI);
    var res5 = await headerPage.verifyPhoneRegExp(phoneFromAPI);
    console.log("Checking if displayed phone not equal to default phone number");
    assert((res2 && res4 && res5) == true && res1 != phoneFromAPI && res3 != phoneFromAPI);


});

//// EHM ////

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Invoca - This scenario verifies Invoca phone in Header/Footer on EHM Home', async function(I, headerPage) {
    var assert = require('assert');
    I.amOnPage('https://www.ehealthmedicare.com');
    I.wait(4);

    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am checking Phone number in Header on EHM Home");
    I.wait(1);
    var res1 = await headerPage.grabPhoneHeaderEHM(headerPage.fields.headerPhoneEHM);
    console.log("grabPhoneHeader returns: "+ res1);
    var res2 = await headerPage.verifyPhoneRegExp(res1);
    console.log("Phone Header regular expression returns: "+ res2);
    console.log("I am checking Phone number in Footer on EHM Home");
    var res3 = await headerPage.grabPhoneFooterEHM(headerPage.fields.footerPhoneEHM);
    console.log("grabPhoneFooter returns: "+ res3);
    var res4 = await headerPage.verifyPhoneRegExp(res3);
    console.log("Phone Footer regular expression returns: "+ res4);
    var phoneFromAPI = await headerPage.phoneSearch('https://www.ehealthmedicareplans.com', headerPage.fields.phoneFromAPIehm);
    console.log("call-service API phone: "+ phoneFromAPI);
    var res5 = await headerPage.verifyPhoneRegExp(phoneFromAPI);
    console.log("Checking if displayed phone not equal to default phone number");
    assert((res2 && res4 && res5) == true && res1 != phoneFromAPI && res3 != phoneFromAPI);


});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Invoca - This scenario verifies Invoca phone in Header/Footer on EHM MS Article', async function(I, headerPage) {
    var assert = require('assert');
    I.amOnPage('https://www.ehealthmedicare.com/medicare-supplement-articles/');
    I.wait(4);

    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am checking Phone number in Header on EHM MS Article");
    I.wait(1);
    var res1 = await headerPage.grabPhoneHeaderEHM(headerPage.fields.headerPhoneEHM);
    console.log("grabPhoneHeader returns: "+ res1);
    var res2 = await headerPage.verifyPhoneRegExp(res1);
    console.log("Phone Header regular expression returns: "+ res2);
    console.log("I am checking Phone number in Footer on EHM MS Article");
    var res3 = await headerPage.grabPhoneFooterEHM(headerPage.fields.footerPhoneEHM);
    console.log("grabPhoneFooter returns: "+ res3);
    var res4 = await headerPage.verifyPhoneRegExp(res3);
    console.log("Phone Footer regular expression returns: "+ res4);
    var phoneFromAPI = await headerPage.phoneSearch('https://www.ehealthmedicareplans.com', headerPage.fields.phoneFromAPIehm);
    console.log("call-service API phone: "+ phoneFromAPI);
    var res5 = await headerPage.verifyPhoneRegExp(phoneFromAPI);
    console.log("Checking if displayed phone not equal to default phone number");
    assert((res2 && res4 && res5) == true && res1 != phoneFromAPI && res3 != phoneFromAPI);


});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Invoca - This scenario verifies Invoca phone in Header/Footer on EHM Home for Providence Partner', async function(I, headerPage) {
    var assert = require('assert');
    I.amOnPage('https://www.ehealthmedicare.com/?allid=pro7969000');
    I.wait(4);

    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am checking Phone number in Header on EHM Home");
    I.wait(1);
    var res1 = await headerPage.grabPhoneHeaderEHM(headerPage.fields.headerPhoneEHM);
    console.log("grabPhoneHeader returns: "+ res1);
    var res2 = await headerPage.verifyPhoneRegExp(res1);
    console.log("Phone Header regular expression returns: "+ res2);
    console.log("I am checking Phone number in Footer on EHM Home");
    var res3 = await headerPage.grabPhoneFooterEHM(headerPage.fields.footerPhoneEHM);
    console.log("grabPhoneFooter returns: "+ res3);
    var res4 = await headerPage.verifyPhoneRegExp(res3);
    console.log("Phone Footer regular expression returns: "+ res4);
    var phoneFromAPI = await headerPage.phoneSearch('https://www.ehealthmedicareplans.com', headerPage.fields.phoneFromAPIehmProvidence);
    console.log("call-service API phone: "+ phoneFromAPI);
    var res5 = await headerPage.verifyPhoneRegExp(phoneFromAPI);
    console.log("Checking if displayed phone not equal to default phone number");
    assert((res2 && res4 && res5) == true && res1 != phoneFromAPI && res3 != phoneFromAPI);


});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Invoca - This scenario verifies Invoca phone in Header/Footer on EHM MS Article for Providence Partner', async function(I, headerPage) {
    var assert = require('assert');
    I.amOnPage('https://www.ehealthmedicare.com/medicare-supplement-articles/?allid=pro7969000');
    I.wait(4);

    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am checking Phone number in Header on EHM MS Article");
    I.wait(1);
    var res1 = await headerPage.grabPhoneHeaderEHM(headerPage.fields.headerPhoneEHM);
    console.log("grabPhoneHeader returns: "+ res1);
    var res2 = await headerPage.verifyPhoneRegExp(res1);
    console.log("Phone Header regular expression returns: "+ res2);
    console.log("I am checking Phone number in Footer on EHM MS Article");
    var res3 = await headerPage.grabPhoneFooterEHM(headerPage.fields.footerPhoneEHM);
    console.log("grabPhoneFooter returns: "+ res3);
    var res4 = await headerPage.verifyPhoneRegExp(res3);
    console.log("Phone Footer regular expression returns: "+ res4);
    var phoneFromAPI = await headerPage.phoneSearch('https://www.ehealthmedicareplans.com', headerPage.fields.phoneFromAPIehmProvidence);
    console.log("call-service API phone: "+ phoneFromAPI);
    var res5 = await headerPage.verifyPhoneRegExp(phoneFromAPI);
    console.log("Checking if displayed phone not equal to default phone number");
    assert((res2 && res4 && res5) == true && res1 != phoneFromAPI && res3 != phoneFromAPI);


});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Invoca - This scenario verifies Invoca phone in Header/Footer on EHM MS Article for CareMount Partner', async function(I, headerPage) {
    var assert = require('assert');
    I.amOnPage('https://www.ehealthmedicare.com/medicare-supplement-articles/?allid=car9159000');
    I.wait(4);

    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am checking Phone number in Header on EHM MS Article");
    I.wait(1);
    var res1 = await headerPage.grabPhoneHeaderEHM(headerPage.fields.headerPhoneEHM);
    console.log("grabPhoneHeader returns: "+ res1);
    var res2 = await headerPage.verifyPhoneRegExp(res1);
    console.log("Phone Header regular expression returns: "+ res2);
    console.log("I am checking Phone number in Footer on EHM MS Article");
    var res3 = await headerPage.grabPhoneFooterEHM(headerPage.fields.footerPhoneEHM);
    console.log("grabPhoneFooter returns: "+ res3);
    var res4 = await headerPage.verifyPhoneRegExp(res3);
    console.log("Phone Footer regular expression returns: "+ res4);
    var phoneFromAPI = await headerPage.phoneSearch('https://www.ehealthmedicareplans.com', headerPage.fields.phoneFromAPIehmCareMount);
    console.log("call-service API phone: "+ phoneFromAPI);
    var res5 = await headerPage.verifyPhoneRegExp(phoneFromAPI);
    console.log("Checking if displayed phone not equal to default phone number");
    assert((res2 && res4 && res5) == true && res1 != phoneFromAPI && res3 != phoneFromAPI);


});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Invoca - This scenario verifies Invoca phone in Header/Footer on EHM Home for CareMount Partner', async function(I, headerPage) {
    var assert = require('assert');
    I.amOnPage('https://www.ehealthmedicare.com/?allid=car9159000');
    I.wait(4);

    let url =await I.grabCurrentUrl();
    console.log(url);
    console.log("I am checking Phone number in Header on EHM Home");
    I.wait(1);
    var res1 = await headerPage.grabPhoneHeaderEHM(headerPage.fields.headerPhoneEHM);
    console.log("grabPhoneHeader returns: "+ res1);
    var res2 = await headerPage.verifyPhoneRegExp(res1);
    console.log("Phone Header regular expression returns: "+ res2);
    console.log("I am checking Phone number in Footer on EHM Home");
    var res3 = await headerPage.grabPhoneFooterEHM(headerPage.fields.footerPhoneEHM);
    console.log("grabPhoneFooter returns: "+ res3);
    var res4 = await headerPage.verifyPhoneRegExp(res3);
    console.log("Phone Footer regular expression returns: "+ res4);
    var phoneFromAPI = await headerPage.phoneSearch('https://www.ehealthmedicareplans.com', headerPage.fields.phoneFromAPIehmCareMount);
    console.log("call-service API phone: "+ phoneFromAPI);
    var res5 = await headerPage.verifyPhoneRegExp(phoneFromAPI);
    console.log("Checking if displayed phone not equal to default phone number");
    assert((res2 && res4 && res5) == true && res1 != phoneFromAPI && res3 != phoneFromAPI);

});

/// GMG ///

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Invoca - This scenario verifies Invoca phone in Header on GMG Home', async function(I, headerPage) {
    var assert = require('assert');
    I.amOnPage('https://www.gomedigap.com/');
    I.wait(4);

    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am checking Phone number in Header on GMG Home");
    I.wait(1);
    var res1 = await headerPage.grabPhoneHeaderEHM(headerPage.fields.headerPhoneGMGHome);
    console.log("grabPhoneHeader returns: "+ res1);
    var res2 = await headerPage.verifyPhoneRegExp(res1);
    console.log("Phone Header regular expression returns: "+ res2);
    var phoneFromAPI = await headerPage.phoneSearch('https://www.ehealthmedicareplans.com', headerPage.fields.phoneFromAPIgmg);
    console.log("call-service API phone: "+ phoneFromAPI);
    var res5 = await headerPage.verifyPhoneRegExp(phoneFromAPI);
    var res6 = await headerPage.phoneFetchForGMG(phoneFromAPI);
    console.log("Checking if displayed phone not equal to default phone number");
    assert((res2 && res5) == true && res1 != res6);


});


Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Invoca - This scenario verifies Invoca phone in Header on GMG Getting Started page', async function(I, headerPage) {
    var assert = require('assert');
    I.amOnPage('https://www.gomedigap.com/');
    I.wait(4);

    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am clicking Find Your Plans btn");
    I.click(headerPage.fields.findPlansBtn);
    I.wait(2);
    I.click(headerPage.fields.closeIcon);
    I.wait(3);
    console.log("I am checking Phone number in Header on GMG Home");
    var res1 = await headerPage.grabPhoneHeaderEHM(headerPage.fields.headerPhoneGMGHome);
    console.log("grabPhoneHeader returns: "+ res1);
    var res2 = await headerPage.verifyPhoneRegExp(res1);
    console.log("Phone Header regular expression returns: "+ res2);
    var phoneFromAPI = await headerPage.phoneSearch('https://www.ehealthmedicareplans.com', headerPage.fields.phoneFromAPIgmg);
    console.log("call-service API phone: "+ phoneFromAPI);
    var res5 = await headerPage.verifyPhoneRegExp(phoneFromAPI);
    var res6 = await headerPage.phoneFetchForGMG(phoneFromAPI);
    console.log("Checking if displayed phone not equal to default phone number");
    assert((res2 && res5) == true && res1 != res6);


});