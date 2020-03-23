Feature('ehmp - filter');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHMP');

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - Filter - This scenario verifies Plan Features on MS quote for single county zip code', async function(I, quotePageEHMP, headerPage, ehmPage) {
    I.amOnPage(domain + '/?&forceV1=true?qascript=Y#quote-plans/MS/90001/05200/LOS ANGELES/1/p1');
    I.wait(5);
    console.log("I am checking MS quote is loaded");
    I.seeInCurrentUrl('/MS/');
    headerPage.verifyQuotePage('Medicare Supplement Insurance Plans');
    console.log("I am checking that no shownPlans element");
    I.dontSeeElement(quotePageEHMP.fields.shownPlans);
    I.wait(2);
    I.dontSeeInCurrentUrl('/f2:vision,hearing,silverSneakersMs,fitnessBenefits,partBExcess,skilledNursing,foreignTravel');
    console.log("I am checking Plan Filters on MS");
    I.click(quotePageEHMP.fields.vision);
    I.wait(2);
    I.seeInCurrentUrl('vision');
    I.click(quotePageEHMP.fields.hearing);
    I.wait(2);
    I.seeInCurrentUrl('hearing');
    I.click(quotePageEHMP.fields.silverSneakers);
    I.wait(2);
    I.seeInCurrentUrl('silverSneakersMs');
    I.click(quotePageEHMP.fields.fitnessBenefits);
    I.wait(2);
    I.seeInCurrentUrl('fitnessBenefits');
    I.click(quotePageEHMP.fields.partBExcess);
    I.wait(2);
    I.seeInCurrentUrl('partBExcess');
    I.click(quotePageEHMP.fields.skilledNursing);
    I.wait(2);
    I.seeInCurrentUrl('skilledNursing');
    I.click(quotePageEHMP.fields.foreignTravel);
    I.wait(2);
    I.seeInCurrentUrl('/f2:vision,hearing,silverSneakersMs,fitnessBenefits,partBExcess,skilledNursing,foreignTravel');
    I.seeElement(quotePageEHMP.fields.shownPlans);


});

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - Filter - This scenario verifies that Plan Features filter can be unselected on MS quote', async function(I, quotePageEHMP, headerPage, ehmPage) {
    I.amOnPage(domain + '/?&forceV1=true?qascript=Y#quote-plans/MS/90001/05200/LOS ANGELES/1/p1');
    I.wait(5);
    console.log("I am checking MS quote is loaded");
    I.seeInCurrentUrl('/MS/');
    headerPage.verifyQuotePage('Medicare Supplement Insurance Plans');
    console.log("I am checking that no shownPlans element");
    I.dontSeeElement(quotePageEHMP.fields.shownPlans);
    I.wait(2);
    console.log("I am checking Plan Filters on MS");
    I.click(quotePageEHMP.fields.vision);
    I.wait(2);
    I.click(quotePageEHMP.fields.hearing);
    I.wait(2);
    I.seeInCurrentUrl('/f2:vision,hearing');
    I.seeElement(quotePageEHMP.fields.shownPlans);
    I.click(quotePageEHMP.fields.vision);
    I.wait(2);
    I.click(quotePageEHMP.fields.hearing);
    I.wait(2);
    I.dontSeeInCurrentUrl('/f2:vision,hearing');
    I.seeInCurrentUrl('#quote-plans/MS/90001/05200/LOS ANGELES/1/p1');

});


