Feature('ehmp - detail');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHMP');
//var assert = require('assert');
var ehmp = config.get('EHMP');

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - PlanDetail - This scenario verifies Plan Detail loads without error from MS quote', async function(I, quotePageEHMP, headerPage, ehmPage, quotePlanDetailPage) {
    I.amOnPage(domain);
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
    //I.wait(3);
    console.log("I am selecting MS from header");
    I.click(headerPage.fields.findMedicarePlans);
    I.wait(2);
    I.click(headerPage.fields.selectMS);
    I.wait(3);
    console.log("I am checking MS quote is loaded");
    I.seeInCurrentUrl('/MS/');
    headerPage.verifyQuotePage('Medicare Supplement Insurance Plans');
    //console.log("I am checking that no shownPlans element");
    //I.dontSeeElement(quotePageEHMP.fields.shownPlans);
    I.wait(2);
    console.log("I am checking Humana filter on MS");
    I.click(quotePageEHMP.fields.filterHumanaMS);
    I.wait(4);
    console.log("I am clicking plan");
    I.click(quotePageEHMP.fields.selectPlanMS);
    I.wait(5);
    I.see("Humana Medicare Supplement High Deductible Plan F", quotePlanDetailPage.fields.planDetail);
    I.seeInCurrentUrl('ehealthmedicareplans.com'); // verifying URL
    I.seeInCurrentUrl('#plan-benefits-ms/');


});

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - PlanDetail - This scenario verifies Plan Detail Redesign loads without error from MD quote', async function(I, quotePageEHMP, headerPage, ehmPage, quotePlanDetailPage) {
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
    I.seeInCurrentUrl('type=MD');
    headerPage.verifyQuotePage('Medicare Part D Plans');
    //console.log("I am checking that no shownPlans element");
    //I.dontSeeElement(quotePageEHMP.fields.shownPlans);
    I.wait(2);
    console.log("I am checking Aetna filter");
    I.click(quotePageEHMP.fields.filterSSMD);
    I.wait(4);

    //MD has blue
    console.log("I am clicking plan");
    I.click(quotePageEHMP.fields.selectPlanMD);
    I.wait(5);
    I.see("SilverScript Choice (PDP)", quotePlanDetailPage.fields.planDetailRedesign);
    I.seeInCurrentUrl('ehealthmedicareplans.com'); // verifying URL
    I.seeInCurrentUrl('#plan-benefits/');


});

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - PlanDetail - This scenario verifies Plan Detail (regular) loads without error from MD quote', async function(I, quotePageEHMP, headerPage, ehmPage, quotePlanDetailPage) {
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
    I.wait(2);
    console.log("I am checking Aetna filter");
    I.click(quotePageEHMP.fields.filterSSMD);
    I.wait(4);

    //MD has blue
    console.log("I am clicking plan");
    I.click(quotePageEHMP.fields.selectPlanMD);
    I.wait(5);
    I.see("SilverScript Choice (PDP)", quotePlanDetailPage.fields.planDetailRedesign);
    I.seeInCurrentUrl('ehealthmedicareplans.com'); // verifying URL
    I.seeInCurrentUrl('#plan-benefits/');


});

