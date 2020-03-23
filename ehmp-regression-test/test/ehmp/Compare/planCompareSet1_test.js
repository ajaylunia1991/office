Feature('ehmp - compare');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHMP');
//var assert = require('assert');
var ehmp = config.get('EHMP');

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - Compare - This scenario verifies Compare page (regular version) from MA quote', async function(I, quotePageEHMP, headerPage, ehmPage, quoteComparePage) {

    I.amOnPage(domain);
    I.wait(5);
    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am navigating to quote page");
    I.fillField(ehmPage.fields.zipCodeCensus, '12345');
    I.wait(4);
    I.click(ehmPage.fields.btnCensusNext);
    I.wait(6);
    //console.log("I am on quote page and closing Lead Form popup");
    //I.click(headerPage.fields.quoteLeadForm);
    //I.wait(6);
    console.log("I am checking Aetna filter");
    I.click(quotePageEHMP.fields.filterAetna);
    I.wait(6);
    //MA has blue3
    console.log("I am checking that only Aetna plans displayed");
    I.seeElement(quotePageEHMP.fields.logoAetna);
    I.seeInCurrentUrl('f6:3');
    console.log("I am checking plans for Compare");
    I.click(quotePageEHMP.fields.checkPlan1);
    I.wait(4);
    I.click(quotePageEHMP.fields.checkPlan2);
    I.wait(4);
    I.click(quotePageEHMP.fields.checkPlan3);
    I.wait(4);
    console.log("I am clicking Compare btn");
    I.click(quotePageEHMP.fields.bthCompare);
    I.wait(4);
    console.log("I am checking that Compare page is loaded");
    I.see("Compare Plans", quoteComparePage.fields.comparePageRedesign);
    I.seeInCurrentUrl(quoteComparePage.fields.checkURLCompare);
    console.log("I am clicking Back btn on Compare");
    I.click(quoteComparePage.fields.bthBackCompare);
    I.wait(4);
    console.log("I am checking MA quote is loaded");
    I.seeInCurrentUrl('/MA/');
    headerPage.verifyQuotePage('Medicare Advantage Plans');


});

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - Compare - This scenario verifies Compare page (redesign) from MA quote', async function(I, quotePageEHMP, headerPage, ehmPage, quoteComparePage) {

    I.amOnPage(domain);
    I.wait(5);
    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am navigating to quote page");
    I.fillField(ehmPage.fields.zipCodeCensus, '12345');
    I.wait(4);
    I.click(ehmPage.fields.btnCensusNext);
    I.wait(6);
    //console.log("I am on quote page and closing Lead Form popup");
    //I.click(headerPage.fields.quoteLeadForm);
    //I.wait(6);
    console.log("I am checking Aetna filter");
    I.click(quotePageEHMP.fields.filterAetna);
    I.wait(6);
    //MA has blue3
    console.log("I am checking that only Aetna plans displayed");
    I.seeElement(quotePageEHMP.fields.logoAetna);
    I.seeInCurrentUrl('f6:3');
    console.log("I am checking plans for Compare");
    I.click(quotePageEHMP.fields.checkPlan1);
    I.wait(4);
    I.click(quotePageEHMP.fields.checkPlan2);
    I.wait(4);
    I.click(quotePageEHMP.fields.checkPlan3);
    I.wait(4);
    console.log("I am clicking Compare btn");
    I.click(quotePageEHMP.fields.bthCompare);
    I.wait(4);
    console.log("I am checking that Compare page is loaded");
    I.see("Compare Plans", quoteComparePage.fields.comparePageRedesign);
    I.seeInCurrentUrl(quoteComparePage.fields.checkURLCompare);
    console.log("I am clicking Back btn on Compare");
    I.click(quoteComparePage.fields.bthBackCompareRedesign);
    I.wait(4);
    console.log("I am checking MA quote is loaded");
    I.seeInCurrentUrl('/MA/');
    headerPage.verifyQuotePage('Medicare Advantage Plans');

});