Feature('ehmp - invoca');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHMP');
var assert = require('assert');

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - Invoca - This scenario verifies Invoca phone in Header/Footer on Census MA', async function(I, headerPage) {
    var assert = require('assert');
    I.amOnPage(domain);
    I.wait(4);

    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am checking Phone number in Header on Census MA");
    I.wait(2);
    var res1 = await headerPage.grabPhoneHeader(headerPage.fields.headerPhone);
    console.log("grabPhoneHeader returns: "+ res1);
    var res2 = await headerPage.verifyPhoneRegExp(res1);
    console.log("Phone Header regular expression returns: "+ res2);
    console.log("I am checking Phone number in Footer on Census MA");
    var res3 = await headerPage.grabPhoneFooter(headerPage.fields.footerPhone);
    console.log("grabPhoneFooter returns: "+ res3);
    var res4 = await headerPage.verifyPhoneRegExp(res3);
    console.log("Phone Footer regular expression returns: "+ res4);
    var phoneFromAPI = await headerPage.phoneSearch(domain, headerPage.fields.phoneFromAPIehmp);
    console.log("call-service API phone: "+ phoneFromAPI);
    var res5 = await headerPage.verifyPhoneRegExp(phoneFromAPI);
    console.log("Checking if displayed phone not equal to default phone number");
    assert((res2 && res4 && res5) == true && res1 != phoneFromAPI && res3 != phoneFromAPI);


});

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - Invoca - This scenario verifies Invoca phone in Header/Footer on quote MA', async function(I, headerPage, ehmPage) {
    var assert = require('assert');
    I.amOnPage(domain);
    I.wait(4);
    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am navigating to quote page");
    I.fillField(ehmPage.fields.zipCodeCensus, '12345');
    I.wait(4);
    I.click(ehmPage.fields.btnCensusNext);
    I.wait(4);
    //console.log("I am on quote page and closing Lead Form popup");
    //I.click(headerPage.fields.quoteLeadForm);
    //I.wait(3);
    console.log("I am checking Phone number in Header on quote MA");
    I.wait(2);
    var res1 = await headerPage.grabPhoneHeader(headerPage.fields.headerPhoneQuote);
    console.log("grabPhoneHeader returns: "+ res1);
    var res2 = await headerPage.verifyPhoneRegExp(res1);
    console.log("Phone Header regular expression returns: "+ res2);
    console.log("I am checking Phone number in Footer on Census MA");
    var res3 = await headerPage.grabPhoneFooter(headerPage.fields.footerPhoneQuote);
    console.log("grabPhoneFooter returns: "+ res3);
    var res4 = await headerPage.verifyPhoneRegExp(res3);
    console.log("Phone Footer regular expression returns: "+ res4);
    var phoneFromAPI = await headerPage.phoneSearch(domain, headerPage.fields.phoneFromAPIehmp);
    console.log("call-service API phone: "+ phoneFromAPI);
    var res5 = await headerPage.verifyPhoneRegExp(phoneFromAPI);
    console.log("Checking if displayed phone not equal to default phone number");
    assert((res2 && res4 && res5) == true && res1 != phoneFromAPI && res3 != phoneFromAPI);

});
