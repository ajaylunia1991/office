Feature('ehmp - filter');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHMP');
//var assert = require('assert');
var ehmp = config.get('EHMP');

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - Filter - This scenario verifies filtered plans by multiple selection on MA quote including new plan EmblemHealth', async function(I, quotePageEHMP, headerPage, ehmPage) {
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
    //I.wait(2);
    console.log("I am checking MA quote is loaded");
    I.seeInCurrentUrl('/MA/');
    headerPage.verifyQuotePage('Medicare Advantage Plans');
    console.log("I am checking that no shownPlans element");
    I.dontSeeElement(quotePageEHMP.fields.shownPlans);
    I.wait(2);
    console.log("I am checking Aetna filter");
    I.click(quotePageEHMP.fields.filterAetna);
    I.wait(4);
    I.click(quotePageEHMP.fields.filterEmblemHealth);
    I.wait(4);
    //MA has blue3
    console.log("I am checking that only Aetna plans displayed");
    I.seeElement(quotePageEHMP.fields.logoAetna);
    I.seeElement(quotePageEHMP.fields.logoEmblemHealth);
    I.seeInCurrentUrl('f6:3,51');
    I.dontSeeElement(quotePageEHMP.fields.logoHumana);
    I.dontSeeElement(quotePageEHMP.fields.logoWellCare);
    I.dontSeeElement(quotePageEHMP.fields.logoUnited);
    I.dontSeeElement(quotePageEHMP.fields.logoCDPHP);
    I.seeElement(quotePageEHMP.fields.shownPlans);
    I.seeElement(quotePageEHMP.fields.totalPlans);
    I.seeElement(quotePageEHMP.fields.allCarriers);

});

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - Filter - This scenario verifies filtered plans by single selection on MD quote', async function(I, quotePageEHMP, headerPage, ehmPage) {
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
    console.log("I am checking that no shownPlans element");
    I.dontSeeElement(quotePageEHMP.fields.shownPlans);
    I.wait(2);
    console.log("I am checking Aetna filter");
    I.click(quotePageEHMP.fields.filterSSMD);
    I.wait(4);
    //MA has blue3
    console.log("I am checking that only Aetna plans displayed");
    I.seeElement(quotePageEHMP.fields.logoSSMD);
    I.seeInCurrentUrl('f6:140');
    I.dontSeeElement(quotePageEHMP.fields.logoHumanaMD);
    I.dontSeeElement(quotePageEHMP.fields.logoWellCareMD);
    I.dontSeeElement(quotePageEHMP.fields.logoUnitedMD);
    I.dontSeeElement(quotePageEHMP.fields.logoExpressMD);
    I.seeElement(quotePageEHMP.fields.shownPlans);
    I.seeElement(quotePageEHMP.fields.totalPlans);

});

