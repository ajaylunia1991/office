Feature('ehmp - filter');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHMP');
//var assert = require('assert');
var ehmp = config.get('EHMP');

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - Filter - This scenario verifies filtered plans by single selection on MS quote', async function(I, quotePageEHMP, headerPage, ehmPage) {
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
    console.log("I am checking that no shownPlans element");
    I.dontSeeElement(quotePageEHMP.fields.shownPlans);
    I.wait(2);
    console.log("I am checking Humana filter on MS");
    I.click(quotePageEHMP.fields.filterHumanaMS);
    I.wait(4);
    //MA has blue3
    console.log("I am checking that only Humana plans displayed");
    I.seeElement(quotePageEHMP.fields.logoHumanaMS);
    I.seeInCurrentUrl('f6:175');
    I.dontSeeElement(quotePageEHMP.fields.logoEmpireMS);
    I.dontSeeElement(quotePageEHMP.fields.logoMutualOO);
    I.seeElement(quotePageEHMP.fields.shownPlans);
    I.seeElement(quotePageEHMP.fields.totalPlans);

});

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - Filter - This scenario verifies filters in URL by multiple selection/unselection on MA quote', async function(I, quotePageEHMP, headerPage, ehmPage) {
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
    console.log("I am checking that no shownPlans element");
    I.dontSeeElement(quotePageEHMP.fields.shownPlans);
    I.wait(2);
    console.log("I am checking Aetna,Humana and Empire filter");
    I.click(quotePageEHMP.fields.filterAetna);
    I.wait(4);
    I.click(quotePageEHMP.fields.filterHumana);
    I.wait(4);
    I.click(quotePageEHMP.fields.filterEmpire);
    I.wait(4);
    //MA has blue3
    console.log("I am checking filters in URL");
    I.seeInCurrentUrl('f6:3,66,113');
    console.log("I am unchecking Aetna and Empire  filter");
    I.click(quotePageEHMP.fields.filterAetna);
    I.wait(4);
    I.click(quotePageEHMP.fields.filterEmpire);
    I.wait(4);
    console.log("I am checking filters in URL");
    I.seeInCurrentUrl('f6:66');

});



