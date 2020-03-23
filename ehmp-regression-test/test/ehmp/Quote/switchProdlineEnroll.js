/**
 * Created by cherrieg on 2019/8/31.
 */
Feature('ehmp - quote');

var config = require('config');
var EHMP = config.get('EHMP');
var randomInfo = require(process.cwd() +'/utils/random').randomInfo();

Scenario('Cherrie - switchProdlineEnroll - click ma enrollment after switch from ms product line',{retries: 0}, async(I,censusPage,quotePage,leadPage,mosePage) =>{

    I.amOnPage(EHMP + '?leadFormEnabled=false&qascript=Y');I.wait(1);
    //MA census
    censusPage.FillMAMDCensus('90001');I.wait(3);
    I.seeInCurrentUrl('ehealthmedicareplans.com');I.wait(2);
    I.see('Medicare Advantage Plans');
    //change to ms type
    I.click('#content > div.plan-types-with-counts.hidden-xs.clearfix > div > div.counted-plan-type.ms');I.wait(2);
    I.click('#edit-census > span.hidden-xs');I.wait(1);
    censusPage.EditMSCensus('89199','11/09/1950','10/2016','F','N');I.wait(3);
    I.see('Medicare Supplement Insurance Plans');I.wait(1);
    //change to ma type 
    I.click('.counted-plan-type-count.ma');I.wait(3);
    I.see('Medicare Advantage Plans');I.wait(4);
    //click to enroll
    quotePage.clickToEnroll();
    //lead page
    const enrollPage = await I.grabSource();
    if (enrollPage.includes('Provide Your Information')) {
        leadPage.typeLead(randomInfo.firstName, randomInfo.lastName, randomInfo.phone);I.wait(5);
    }
    //plan review page
    const pageSource = await I.grabSource();
    if (pageSource.includes('Start Secure Application')) {
        I.wait(2);
        I.click('#ehimcPlanReviewView > div > div.review-container.cf > div.review-medicare-card.cf > div > div.review-card-msg > button')
    }
    //enter the first page of app flow
    I.waitForElement(mosePage.fields.fname, 50);
    let url = await I.grabCurrentUrl();
    console.log('Sanity MA ' + `${url.split("?")[1].replace('#/Applicant','.')}`);
});