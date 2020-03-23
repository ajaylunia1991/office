Feature('ehmp - census');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHMP');
//var assert = require('assert');
var ehmp = config.get('EHMP');

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - MultiCountyZip - This scenario verifies multi county zip code on MA census', async function(I, quotePageEHMP, headerPage, ehmPage) {

    I.amOnPage(domain + "/?qascript=Y");
    I.wait(4);
    ehmPage.verifyCensusPage('Find your Medicare Advantage plan');
    I.fillField(ehmPage.fields.zipCodeCensus, '44444');
    I.wait(2);
    I.click(quotePageEHMP.fields.countyZip);
    I.wait(2);
    I.seeElement(quotePageEHMP.fields.countyList);
    I.click(quotePageEHMP.fields.countyItem1); //'MAHONING'
    I.wait(2);
    I.click(ehmPage.fields.btnCensusNext);
    //I.click(quotePageEHMP.fields.btnZipUpdate);
    I.wait(5);
    headerPage.verifyQuotePage('Medicare Advantage Plans');
    I.seeInCurrentUrl('#quote-plans/MA/44444/36510/MAHONING/1/p1');
    I.see('44444 - MAHONING   County', '.zip');


});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - MultiCountyZip - This scenario verifies multi county zip code on MD census', async function(I, quotePageEHMP, headerPage, ehmPage) {

    I.amOnPage(domain + "/v2?type=MD&qascript=Y#/loc/MD");
    I.wait(4);
    ehmPage.verifyCensusPage('Find your Medicare Part D plan');
    I.fillField(ehmPage.fields.zipCodeCensus, '23455');
    I.wait(2);
    I.click(quotePageEHMP.fields.countyZip);
    I.wait(2);
    I.seeElement(quotePageEHMP.fields.countyList);
    I.click(quotePageEHMP.fields.countyItem2); //'VIRGINIA BEACH CITY'
    I.wait(2);
    I.click(ehmPage.fields.btnCensusNext);
    //I.click(quotePageEHMP.fields.btnZipUpdate);
    I.wait(5);
    headerPage.verifyQuotePage('Medicare Part D Plans');
    I.seeInCurrentUrl('#quote-plans/MD/23455/49921/VIRGINIA BEACH CITY/1/p1');
    I.see('23455 - VIRGINIA BEACH CITY   County', '.zip');


});
