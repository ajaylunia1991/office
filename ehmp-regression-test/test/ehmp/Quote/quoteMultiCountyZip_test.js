Feature('ehmp - quote');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHMP');
//var assert = require('assert');
var ehmp = config.get('EHMP');

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - ZipUpdate - This scenario update zip code to multy county zip on MA quote page', async function(I, quotePageEHMP, headerPage) {

    I.amOnPage(domain + "/?&forceV1=true&qascript=Y#quote-plans/MA/98101/50160/KING/1/p1");
    I.wait(4);
    headerPage.verifyQuotePage('Medicare Advantage Plans');
    quotePageEHMP.updateZipOnQuote("44444");
    I.wait(2);
    I.click(quotePageEHMP.fields.countyZip);
    I.wait(2);
    I.seeElement(quotePageEHMP.fields.countyList);
    I.click(quotePageEHMP.fields.countyItem1); //'MAHONING'
    I.wait(2);
    I.click(quotePageEHMP.fields.btnZipUpdate);
    I.wait(5);
    headerPage.verifyQuotePage('Medicare Advantage Plans');
    I.seeInCurrentUrl('#quote-plans/MA/44444/36510/MAHONING/1/p1');
    I.see('44444 - MAHONING   County', '.zip');


});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - ZipUpdate - This scenario update zip code to multy county zip on MD quote page', async function(I, quotePageEHMP, headerPage) {

    I.amOnPage(domain + "/?&forceV1=true&qascript=Y#quote-plans/MD/12345/33650/SCHENECTADY/1/p1");
    I.wait(4);
    headerPage.verifyQuotePage('Medicare Part D Plans');
    quotePageEHMP.updateZipOnQuote("23455");
    I.wait(2);
    I.click(quotePageEHMP.fields.countyZip);
    I.wait(2);
    I.seeElement(quotePageEHMP.fields.countyList);
    I.click(quotePageEHMP.fields.countyItem2); //'VIRGINIA BEACH CITY'
    I.wait(2);
    I.click(quotePageEHMP.fields.btnZipUpdate);
    I.wait(5);
    headerPage.verifyQuotePage('Medicare Part D Plans');
    I.seeInCurrentUrl('#quote-plans/MD/23455/49921/VIRGINIA BEACH CITY/1/p1');
    I.see('23455 - VIRGINIA BEACH CITY   County', '.zip');


});

/*
Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - ZipUpdate - This scenario verifies that Filter is cleared after updating zip code on MD quote page', async function(I, quotePageEHMP, headerPage) {

    I.amOnPage(domain + "/?&forceV1=true&qascript=Y#quote-plans/MD/98101/50160/KING/1/p1/f6:1022");
    I.wait(4);
    I.seeInCurrentUrl('/f6:1022');
    headerPage.verifyQuotePage('Medicare Part D Plans');
    quotePageEHMP.updateZipOnQuote("90001");
    I.dontSeeInCurrentUrl('/f6:50');
    I.seeInCurrentUrl('#quote-plans/MD/90001/05200/LOS ANGELES/1/p1');
    headerPage.verifyQuotePage('Medicare Part D Plans');


});

*/
