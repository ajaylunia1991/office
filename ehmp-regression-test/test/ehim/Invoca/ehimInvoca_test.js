Feature('ehim - Invoca');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHIM');
var assert = require('assert');
var ehmp = config.get('EHMP');

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Invoca - This scenario verifies Invoca phone in Header/Footer on EHIM Home', async function(I, headerPage) {
    var assert = require('assert');
    I.amOnPage(domain);
    I.wait(4);

    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am checking Phone number in Header on EHIM Home");
    I.wait(2);
    var res1 = await headerPage.grabPhoneHeaderEHM(headerPage.fields.headerPhoneEHM);
    console.log("grabPhoneHeader returns: "+ res1);
    var res2 = await headerPage.verifyPhoneRegExp(res1);
    console.log("Phone Header regular expression returns: "+ res2);
    console.log("I am checking Phone number in Footer on EHIM Home");
    var res3 = await headerPage.grabPhoneFooterEHM(headerPage.fields.footerPhoneEHM);
    console.log("grabPhoneFooter returns: "+ res3);
    var res4 = await headerPage.verifyPhoneRegExp(res3);
    console.log("Phone Footer regular expression returns: "+ res4);
    var phoneFromAPI = await headerPage.phoneSearch(ehmp, headerPage.fields.phoneFromAPIehim);
    console.log("call-service API phone: "+ phoneFromAPI);
    var res5 = await headerPage.verifyPhoneRegExp(phoneFromAPI);
    console.log("Checking if displayed phone not equal to default phone number");
    assert((res2 && res4 && res5) == true && res1 != phoneFromAPI && res3 != phoneFromAPI);



});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Invoca - This scenario verifies Invoca phone in Header/Footer on EHIM MS Plan F', async function(I, headerPage) {
    var assert = require('assert');
    I.amOnPage(domain + '/supplement-all/medicare-supplement-plan-f');
    I.wait(4);

    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am checking Phone number in Header on EHIM MS Plan F");
    I.wait(2);
    var res1 = await headerPage.grabPhoneHeaderEHM(headerPage.fields.headerPhoneEHM);
    console.log("grabPhoneHeader returns: "+ res1);
    var res2 = await headerPage.verifyPhoneRegExp(res1);
    console.log("Phone Header regular expression returns: "+ res2);
    console.log("I am checking Phone number in Footer on EHIM MS Plan F");
    var res3 = await headerPage.grabPhoneFooterEHM(headerPage.fields.footerPhoneEHM);
    console.log("grabPhoneFooter returns: "+ res3);
    var res4 = await headerPage.verifyPhoneRegExp(res3);
    console.log("Phone Footer regular expression returns: "+ res4);
    var phoneFromAPI = await headerPage.phoneSearch(ehmp, headerPage.fields.phoneFromAPIehim);
    console.log("call-service API phone: "+ phoneFromAPI);
    var res5 = await headerPage.verifyPhoneRegExp(phoneFromAPI);
    console.log("Checking if displayed phone not equal to default phone number");
    assert((res2 && res4 && res5) == true && res1 != phoneFromAPI && res3 != phoneFromAPI);


});