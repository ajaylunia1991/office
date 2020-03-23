Feature('mdc');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('MDC');
var assert = require('assert');
var ehmp = config.get('EHMP');

Scenario('ENV: ' + process.env.NODE_CONFIG_ENV + ' - This scenario verifies Invoca phone in Header/Footer on MDC Home @invocaMDC', async function(I, headerPage) {
    var assert = require('assert');
    I.amOnPage(domain);
    I.wait(4);

    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am checking Phone number in Header on MDC Home");
    I.wait(2);
    var res1 = await headerPage.grabPhoneHeaderEHM(headerPage.fields.headerPhoneMDC);
    console.log("grabPhoneHeader returns: "+ res1);
    var res2 = await headerPage.verifyPhoneRegExp(res1);
    console.log("Phone Header regular expression returns: "+ res2);
    console.log("I am checking Phone number in Footer on MDC Home");
    var res3 = await headerPage.grabPhoneFooterEHM(headerPage.fields.footerPhoneMDC);
    console.log("grabPhoneFooter returns: "+ res3);
    var res4 = await headerPage.verifyPhoneRegExp(res3);
    console.log("Phone Footer regular expression returns: "+ res4);
    var phoneFromAPI = await headerPage.phoneSearch(ehmp, headerPage.fields.phoneFromAPImdc);
    console.log("call-service API phone: "+ phoneFromAPI);
    var res5 = await headerPage.verifyPhoneRegExp(phoneFromAPI);
    console.log("Checking if displayed phone not equal to default phone number");
    assert((res2 && res4 && res5) == true && res1 != phoneFromAPI && res3 != phoneFromAPI);


});

Scenario('ENV: ' + process.env.NODE_CONFIG_ENV + ' - This scenario verifies Invoca phone in Header/Footer on MDC Reco page @invocaMDC', async function(I, headerPage) {
    var assert = require('assert');
    I.amOnPage(domain + '/recommendation/#/eligibility/RS1');
    I.wait(4);

    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am checking Phone number in Header on MDC Reco page");
    I.wait(2);
    var res1 = await headerPage.grabPhoneHeaderEHM(headerPage.fields.headerPhoneMDC);
    console.log("grabPhoneHeader returns: "+ res1);
    var res2 = await headerPage.verifyPhoneRegExp(res1);
    console.log("Phone Header regular expression returns: "+ res2);
    console.log("I am checking Phone number in Footer on MDC Reco page");
    var res3 = await headerPage.grabPhoneFooterEHM(headerPage.fields.footerPhoneMDC);
    console.log("grabPhoneFooter returns: "+ res3);
    var res4 = await headerPage.verifyPhoneRegExp(res3);
    console.log("Phone Footer regular expression returns: "+ res4);
    var phoneFromAPI = await headerPage.phoneSearch(ehmp, headerPage.fields.phoneFromAPImdc);
    console.log("call-service API phone: "+ phoneFromAPI);
    var res5 = await headerPage.verifyPhoneRegExp(phoneFromAPI);
    console.log("Checking if displayed phone not equal to default phone number");
    assert((res2 && res4 && res5) == true && res1 != phoneFromAPI && res3 != phoneFromAPI);


});

Scenario('ENV: ' + process.env.NODE_CONFIG_ENV + ' - This scenario verifies Invoca phone in Header/Footer on MDC Home for Privia Partner @mdcInvocaPartners', async function(I, headerPage) {
    var assert = require('assert');
    I.amOnPage(domain + '/partner/?allid=pri7981000');
    I.wait(4);

    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am checking Phone number in Header on MDC Home");
    I.wait(2);
    var res1 = await headerPage.grabPhoneHeaderEHM(headerPage.fields.headerPhoneMDC);
    console.log("grabPhoneHeader returns: "+ res1);
    var res2 = await headerPage.verifyPhoneRegExp(res1);
    console.log("Phone Header regular expression returns: "+ res2);
    console.log("I am checking Phone number in Footer on MDC Home");
    var res3 = await headerPage.grabPhoneFooterEHM(headerPage.fields.footerPhoneMDC);
    console.log("grabPhoneFooter returns: "+ res3);
    var res4 = await headerPage.verifyPhoneRegExp(res3);
    console.log("Phone Footer regular expression returns: "+ res4);
    var phoneFromAPI = await headerPage.phoneSearch(ehmp, headerPage.fields.phoneFromAPImdcPrivia);
    console.log("call-service API phone: "+ phoneFromAPI);
    var res5 = await headerPage.verifyPhoneRegExp(phoneFromAPI);
    console.log("Checking if displayed phone not equal to default phone number");
    assert((res2 && res4 && res5) == true && res1 != phoneFromAPI && res3 != phoneFromAPI);


});

Scenario('ENV: ' + process.env.NODE_CONFIG_ENV + ' - This scenario verifies Invoca phone in Header/Footer on MDC Reco page for Privia Partner @mdcInvocaPartners', async function(I, headerPage) {
    var assert = require('assert');
    I.amOnPage(domain + '/partner/?allid=pri7981000');
    I.wait(4);

    let url = await I.grabCurrentUrl();
    console.log(url);
    I.click(headerPage.fields.recoMenu);
    console.log("I am checking Phone number in Header on MDC Reco page");
    I.wait(2);
    var res1 = await headerPage.grabPhoneHeaderEHM(headerPage.fields.headerPhoneMDC);
    console.log("grabPhoneHeader returns: "+ res1);
    var res2 = await headerPage.verifyPhoneRegExp(res1);
    console.log("Phone Header regular expression returns: "+ res2);
    console.log("I am checking Phone number in Footer on MDC Reco page");
    var res3 = await headerPage.grabPhoneFooterEHM(headerPage.fields.footerPhoneMDC);
    console.log("grabPhoneFooter returns: "+ res3);
    var res4 = await headerPage.verifyPhoneRegExp(res3);
    console.log("Phone Footer regular expression returns: "+ res4);
    var phoneFromAPI = await headerPage.phoneSearch(ehmp, headerPage.fields.phoneFromAPImdcPrivia);
    console.log("call-service API phone: "+ phoneFromAPI);
    var res5 = await headerPage.verifyPhoneRegExp(phoneFromAPI);
    console.log("Checking if displayed phone not equal to default phone number");
    assert((res2 && res4 && res5) == true && res1 != phoneFromAPI && res3 != phoneFromAPI);


});

Scenario('ENV: ' + process.env.NODE_CONFIG_ENV + ' - This scenario verifies Invoca phone in Header/Footer on MDC Reco page for Orlamdo Health Partner @mdcInvocaPartners', async function(I, headerPage) {
    var assert = require('assert');
    I.amOnPage(domain + '/partner/?allid=orl7740000');
    I.wait(4);

    let url = await I.grabCurrentUrl();
    console.log(url);
    I.click(headerPage.fields.recoMenu);
    console.log("I am checking Phone number in Header on MDC Reco page");
    I.wait(2);
    var res1 = await headerPage.grabPhoneHeaderEHM(headerPage.fields.headerPhoneMDC);
    console.log("grabPhoneHeader returns: "+ res1);
    var res2 = await headerPage.verifyPhoneRegExp(res1);
    console.log("Phone Header regular expression returns: "+ res2);
    console.log("I am checking Phone number in Footer on MDC Reco page");
    var res3 = await headerPage.grabPhoneFooterEHM(headerPage.fields.footerPhoneMDC);
    console.log("grabPhoneFooter returns: "+ res3);
    var res4 = await headerPage.verifyPhoneRegExp(res3);
    console.log("Phone Footer regular expression returns: "+ res4);
    var phoneFromAPI = await headerPage.phoneSearch(ehmp, headerPage.fields.phoneFromAPImdcOrlando);
    console.log("call-service API phone: "+ phoneFromAPI);
    var res5 = await headerPage.verifyPhoneRegExp(phoneFromAPI);
    console.log("Checking if displayed phone not equal to default phone number");
    assert((res2 && res4 && res5) == true && res1 != phoneFromAPI && res3 != phoneFromAPI);


});

Scenario('ENV: ' + process.env.NODE_CONFIG_ENV + ' - This scenario verifies Invoca phone in Header/Footer on MDC Home for Orlando Health Partner @mdcInvocaPartners', async function(I, headerPage) {
    var assert = require('assert');
    I.amOnPage(domain + '/partner/?allid=orl7740000');
    I.wait(4);

    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am checking Phone number in Header on MDC Home");
    I.wait(2);
    var res1 = await headerPage.grabPhoneHeaderEHM(headerPage.fields.headerPhoneMDC);
    console.log("grabPhoneHeader returns: "+ res1);
    var res2 = await headerPage.verifyPhoneRegExp(res1);
    console.log("Phone Header regular expression returns: "+ res2);
    console.log("I am checking Phone number in Footer on MDC Home");
    var res3 = await headerPage.grabPhoneFooterEHM(headerPage.fields.footerPhoneMDC);
    console.log("grabPhoneFooter returns: "+ res3);
    var res4 = await headerPage.verifyPhoneRegExp(res3);
    console.log("Phone Footer regular expression returns: "+ res4);
    var phoneFromAPI = await headerPage.phoneSearch(ehmp, headerPage.fields.phoneFromAPImdcOrlando);
    console.log("call-service API phone: "+ phoneFromAPI);
    var res5 = await headerPage.verifyPhoneRegExp(phoneFromAPI);
    console.log("Checking if displayed phone not equal to default phone number");
    assert((res2 && res4 && res5) == true && res1 != phoneFromAPI && res3 != phoneFromAPI);


});