Feature('ehmp - leadform');

/**
 * created by mmelnyk
 */

var assert = require('assert');
var config = require('config');
var domain = config.get('EHMP');
var randomInfo = require(process.cwd() +'/utils/random').randomInfo();
var leadSearch = require(process.cwd() +'/utils/lead_search');

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - LeadForm - This scenario verifies Have questions and submit a Lead on MD Plan Detail without Prod', async function(I, quotePageEHMP, headerPage, ehmPage) {

    I.amOnPage(domain + '/?type=MD&forceV1=true#plan-benefits/MD/12345/33650/SCHENECTADY/S4802/138/000');
    I.wait(5);

    let url = I.grabCurrentUrl();
    console.log(url);
    console.log("I am checking Have questions? section text");
    I.seeElement(quotePageEHMP.fields.haveQuestions, 'Have questions? Talk to a licensed insurance agent.');
    I.wait(4);
    if( process.env.NODE_ENV != 'prod') {
        console.log("I am submitting a Lead from Have questions?");
        I.click(quotePageEHMP.fields.requestCallBtn);
        I.wait(4);
        I.fillField(quotePageEHMP.fields.fName, randomInfo.firstName);
        I.wait(3);
        I.fillField(quotePageEHMP.fields.lName, randomInfo.lastName);
        I.wait(2);
        I.executeScript(function(phone) {
            $('#ehi-txtPhoneNumber').val(phone);
        },randomInfo.phone);
        //I.fillField(quotePageEHMP.fields.phoneNumber, randomInfo.phone);
        I.wait(2);
        console.log('First name is :' + randomInfo.firstName + '; Last name is :' + randomInfo.lastName + '; Phone num is :' + randomInfo.phone + ';');
        //I.fillField(ehimPageNew.fields.zipcodeLead, '90001');
        I.click(quotePageEHMP.fields.continueBtn);
        I.wait(8);
        I.seeElement(quotePageEHMP.fields.leadFormThanks, 'Thank you!');

        await I.wait(3);

        let rows = await leadSearch.search(randomInfo);
        console.log("rows: " + rows);
        assert(rows == 1);
    }


});

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria LeadForm - This scenario submits a Lead from Get Help on MA quote without Prod', async function(I, quotePageEHMP, headerPage, ehmPage) {

    I.amOnPage(domain + '/?&forceV1=true#quote-plans/MA/12345/33650/SCHENECTADY/1/p1');
    I.wait(5);

    let url = I.grabCurrentUrl();
    console.log(url);
    console.log("I am clicking Get Help");
    I.wait(4);
    if( process.env.NODE_ENV != 'prod') {
        console.log("I am submitting a Lead from Get Help");
        I.click(quotePageEHMP.fields.getHelp);
        I.wait(4);
        I.fillField(quotePageEHMP.fields.fName, randomInfo.firstName);
        I.wait(3);
        I.fillField(quotePageEHMP.fields.lName, randomInfo.lastName);
        I.wait(2);
        I.executeScript(function(phone) {
            $('#ehi-txtPhoneNumber').val(phone);
        },randomInfo.phone);
        //I.fillField(quotePageEHMP.fields.phoneNumber, randomInfo.phone);
        I.wait(2);
        console.log('First name is :' + randomInfo.firstName + '; Last name is :' + randomInfo.lastName + '; Phone num is :' + randomInfo.phone + ';');
        //I.fillField(ehimPageNew.fields.zipcodeLead, '90001');
        I.click(quotePageEHMP.fields.continueBtn);
        I.wait(8);
        I.seeElement(quotePageEHMP.fields.leadFormThanks, 'Thank you!');

        await I.wait(3);

        let rows = await leadSearch.search(randomInfo);
        console.log("rows: " + rows);
        assert(rows == 1);
    }


});

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - LeadForm - This scenario submits a Lead from Get Help on MS quote without Prod', async function(I, quotePageEHMP, headerPage, ehmPage) {

    I.amOnPage(domain + '?type=MS&forceV1=true#quote-plans/MS/12345/33650/SCHENECTADY/11/p1');
    I.wait(5);

    let url = I.grabCurrentUrl();
    console.log(url);
    console.log("I am clicking Get Help");
    I.wait(4);
    if( process.env.NODE_ENV != 'prod') {
        console.log("I am submitting a Lead from Get Help");
        I.click(quotePageEHMP.fields.getHelp);
        I.wait(4);
        I.fillField(quotePageEHMP.fields.fName, randomInfo.firstName);
        I.wait(3);
        I.fillField(quotePageEHMP.fields.lName, randomInfo.lastName);
        I.wait(2);
        I.executeScript(function(phone) {
            $('#ehi-txtPhoneNumber').val(phone);
        },randomInfo.phone);
        //I.fillField(quotePageEHMP.fields.phoneNumber, randomInfo.phone);
        I.wait(2);
        console.log('First name is :' + randomInfo.firstName + '; Last name is :' + randomInfo.lastName + '; Phone num is :' + randomInfo.phone + ';');
        //I.fillField(ehimPageNew.fields.zipcodeLead, '90001');
        I.click(quotePageEHMP.fields.continueBtn);
        I.wait(8);
        I.seeElement(quotePageEHMP.fields.leadFormThanks, 'Thank you!');

        await I.wait(3);

        let rows = await leadSearch.search(randomInfo);
        console.log("rows: " + rows);
        assert(rows == 1);
    }


});