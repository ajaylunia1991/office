Feature('ehmp - quote');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHMP');
//var assert = require('assert');
var ehmp = config.get('EHMP');

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - ZipUpdate - This scenario verifies that Filter is cleared after updating zip code on MA quote page', async function(I, quotePageEHMP, headerPage) {

    I.amOnPage(domain + "/?&forceV1=true&qascript=Y#quote-plans/MA/98101/50160/KING/1/p1/f6:50");
    I.wait(4);
    I.seeInCurrentUrl('/f6:50');
    headerPage.verifyQuotePage('Medicare Advantage Plans');
    quotePageEHMP.updateZipOnQuote("90001");
    I.click(quotePageEHMP.fields.btnZipUpdate);
    I.wait(5);
    I.dontSeeInCurrentUrl('/f6:50');
    I.seeInCurrentUrl('#quote-plans/MA/90001/05200/LOS ANGELES/1/p1');
    headerPage.verifyQuotePage('Medicare Advantage Plans');


});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - ZipUpdate - This scenario verifies that Filter is cleared after updating zip code on MD quote page', async function(I, quotePageEHMP, headerPage) {

    I.amOnPage(domain + "/?&forceV1=true&qascript=Y#quote-plans/MD/98101/50160/KING/1/p1/f6:1022");
    I.wait(4);
    I.seeInCurrentUrl('/f6:1022');
    headerPage.verifyQuotePage('Medicare Part D Plans');
    quotePageEHMP.updateZipOnQuote("90001");
    I.click(quotePageEHMP.fields.btnZipUpdate);
    I.wait(5);
    I.dontSeeInCurrentUrl('/f6:50');
    I.seeInCurrentUrl('#quote-plans/MD/90001/05200/LOS ANGELES/1/p1');
    headerPage.verifyQuotePage('Medicare Part D Plans');


});
