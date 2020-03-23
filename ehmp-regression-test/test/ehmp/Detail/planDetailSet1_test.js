Feature('ehmp - detail');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHMP');
//var assert = require('assert');
var ehmp = config.get('EHMP');

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - PlanDetail - This scenario verifies Plan Detail Redesign loads without error from MA quote and allid', async function(I, quotePageEHMP, headerPage, ehmPage, quotePlanDetailPage) {

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
    //I.wait(2);
    console.log("I am checking MA quote is loaded");
    I.seeInCurrentUrl('/MA/');
    headerPage.verifyQuotePage('Medicare Advantage Plans');
    //console.log("I am checking that no shownPlans element");
    //I.dontSeeElement(quotePageEHMP.fields.shownPlans);
    I.wait(2);
    console.log("I am checking Aetna filter");
    I.click(quotePageEHMP.fields.filterAetna);
    I.wait(4);
    //MA has blue3
    console.log("I am clicking plan");
    I.click(quotePageEHMP.fields.selectPlan);
    I.wait(5);
    I.see("Aetna Medicare Value Plan (HMO)", quotePlanDetailPage.fields.planDetailRedesign);
    I.seeInCurrentUrl('ehealthmedicareplans.com'); // verifying URL
    I.seeInCurrentUrl('#plan-benefits/');
    // checking allid
    I.click(headerPage.fields.whatIsMedicare);
    I.wait(4);
    I.click(ehmPage.fields.getStartedBtn);
    I.wait(4);
    I.seeInCurrentUrl(ehmp);
    I.seeInCurrentUrl('/?allid=EHM39972');


});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - PlanDetail - This scenario verifies Plan Detail (regular) loads without error from MA quote', async function(I, quotePageEHMP, headerPage, ehmPage, quotePlanDetailPage) {

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
    //I.wait(2);
    console.log("I am checking MA quote is loaded");
    I.seeInCurrentUrl('/MA/');
    headerPage.verifyQuotePage('Medicare Advantage Plans');
    //console.log("I am checking that no shownPlans element");
    //I.dontSeeElement(quotePageEHMP.fields.shownPlans);
    I.wait(2);
    console.log("I am checking Aetna filter");
    I.click(quotePageEHMP.fields.filterAetna);
    I.wait(4);
    //MA has blue3
    console.log("I am clicking plan");
    I.click(quotePageEHMP.fields.selectPlan);
    I.wait(5);
    I.see("Aetna Medicare Value Plan (HMO)", quotePlanDetailPage.fields.planDetailRedesign);
    I.seeInCurrentUrl('ehealthmedicareplans.com'); // verifying URL
    I.seeInCurrentUrl('#plan-benefits/');


});
