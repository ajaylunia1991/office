Feature('ehmp - compare');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHMP');
//var assert = require('assert');
var ehmp = config.get('EHMP');

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - Compare - This scenario verifies Compare page (redesign) from MD quote', async function(I, quotePageEHMP, headerPage, ehmPage, quoteComparePage) {

    I.amOnPage(domain + "/?type=MD");
    I.wait(5);
    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am navigating to quote page");
    I.fillField(ehmPage.fields.zipCodeCensus, '12345');
    I.wait(4);
    I.click(ehmPage.fields.btnCensusNext);
    I.wait(4);
    //console.log("I am on quote page and closing Lead Form popup");
    //I.click(headerPage.fields.quoteLeadForm);
    //I.wait(2);
    I.seeInCurrentUrl('/MD/');
    headerPage.verifyQuotePage('Medicare Part D Plans');
    //console.log("I am checking that no shownPlans element");
    //I.dontSeeElement(quotePageEHMP.fields.shownPlans);
    I.wait(6);
    console.log("I am checking Aetna filter");
    I.waitForVisible(quotePageEHMP.fields.filterSSMD,20);
    I.click(quotePageEHMP.fields.filterSSMD);
    I.wait(6);
    console.log("I am checking plans for Compare");
    /////
    I.click(quotePageEHMP.fields.checkPlan1MD);
    I.wait(4);
    I.click(quotePageEHMP.fields.checkPlan2MD);
    I.wait(4);
    console.log("I am clicking Compare btn");
    I.click(quotePageEHMP.fields.bthCompare);
    I.wait(4);
    console.log("I am checking that Compare page is loaded");
    I.see("Compare Plans", quoteComparePage.fields.comparePageRedesign);
    I.seeInCurrentUrl(quoteComparePage.fields.checkURLCompareMD);
    console.log("I am clicking Back btn on Compare");
    I.click(quoteComparePage.fields.bthBackCompareRedesign);
    I.wait(4);
    console.log("I am checking MD quote is loaded");
    I.seeInCurrentUrl('/MD/');
    headerPage.verifyQuotePage('Medicare Part D Plans');


});

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - Compare - This scenario verifies Compare Page (regular version) on MD quote', async function(I, quotePageEHMP, headerPage, ehmPage, quoteComparePage) {

    I.amOnPage(domain + "/?type=MD");
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
    I.seeInCurrentUrl('/MD/');
    headerPage.verifyQuotePage('Medicare Part D Plans');
    //console.log("I am checking that no shownPlans element");
    //I.dontSeeElement(quotePageEHMP.fields.shownPlans);
    //I.wait(2);
    console.log("I am checking Aetna filter");
    I.waitForVisible(quotePageEHMP.fields.filterSSMD,20);
    I.click(quotePageEHMP.fields.filterSSMD);
    I.wait(4);
    //MA has blue3
    console.log("I am checking that only Aetna plans displayed");
    I.seeElement(quotePageEHMP.fields.logoSSMD);
    I.seeInCurrentUrl('f6:140');
    I.wait(6);
    console.log("I am checking plans for Compare");
    I.waitForVisible(quotePageEHMP.fields.checkPlan1MD,20);
    I.click(quotePageEHMP.fields.checkPlan1MD);
    I.wait(4);
    I.click(quotePageEHMP.fields.checkPlan2MD);
    I.wait(4);
    console.log("I am clicking Compare btn");
    I.click(quotePageEHMP.fields.bthCompare);
    I.wait(4);
    console.log("I am checking that Compare page is loaded");
    I.see("Compare Plans", quoteComparePage.fields.comparePageRedesign);
    I.seeInCurrentUrl(quoteComparePage.fields.checkURLCompareMD);
    console.log("I am clicking Back btn on Compare");
    I.click(quoteComparePage.fields.bthBackCompare);
    I.wait(4);
    console.log("I am checking MD quote is loaded");
    I.seeInCurrentUrl('/MD/');
    headerPage.verifyQuotePage('Medicare Part D Plans');

});