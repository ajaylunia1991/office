Feature('ehmp - sanity');

var config = require('config');
var domain = config.get('EHM');
var EHMPdomain = config.get('EHMP');
var assert = require('assert');
var randomInfo = require(process.cwd() +'/utils/random').randomInfo();
var leadSearch = require(process.cwd() +'/utils/LeadSearch');

Scenario('MA sanity Flow @C12774', {retries: 1}, async(I, leadPage, censusPage, quotePage) =>{
    //Open MA Census Page
    I.amOnPage(EHMPdomain + '/?type=MA&qascript=Y&turnOnPlanReview=Y&leadFormEnabled=true&defaultThrottle=GREEN&defaultPlanYear='+ config.get('defaultPlanYear'));
    
    //Verified words and fill zip then goto quote page
    I.wait(5);I.see("Find your Medicare Advantage plan");
    censusPage.FillMAMDCensus('90001');

    I.seeTitleEquals('Medicare Insurance Program');
    //lead form will be always enabled because "leadFormEnabled=true" in url.
    I.wait(3);
    console.log('First name is :' + randomInfo.firstName + '; Last name is :' + randomInfo.lastName + '; phone is :' + randomInfo.phone);
    leadPage.typeLead(randomInfo.firstName, randomInfo.lastName, randomInfo.phone);
    
    //click humana filter
    quotePage.filterHumanaPlans();I.wait(2);
    //add drug/pharmacy
    quotePage.addDrug();
    quotePage.addPharmacy();
    //back to quote page 
    I.wait(2);I.click('#dt-drug-summary-area > div > div.dt-summary-savings.v5 > div > div > div.dt-btn.col-md-5.col-sm-3 > div');
    I.wait(3);I.dontSee('Add Rx Drugs');
    //add doctor
    quotePage.addDocs();
    //check detail & compare & drug cost page
    quotePage.checkDetailAndCompare();
    //ehmp quote page
    I.waitForVisible(quotePage.fields.enrollBtn, 20);I.wait(1);
    I.click(quotePage.fields.enrollBtn);I.wait(2);

    //plan review page
    const pageSource = await I.grabSource();
    if (pageSource.includes('Start Secure Application')) {
        I.wait(2);
        I.click('#ehimcPlanReviewView > div > div.review-container.cf > div.review-medicare-card.cf > div > div.review-card-msg > button')
    }

    //enter the first page of app flow
    let url = await I.grabCurrentUrl();
    if(url.includes('/enrollment/desktop')){
        I.seeInCurrentUrl('ehealthmedicareplans.com/enrollment/desktop?appId=')
        I.seeInCurrentUrl('#/Applicant')
        console.log('Sanity MA appId: ' + `${url.split("?")[1].replace(/\#\/Applicant/g,'')}`);
    }else{
        I.waitForElement(leadPage.fields.element, 50);
        let castroUrl = await I.grabCurrentUrl();
        console.log('Sanity MA castro appId: ' + `${castroUrl.split("&")[2]}`);
        I.click(leadPage.fields.page2Link);I.wait(5);
        I.seeTitleEquals('Medicare and Coverage Info');
    }

    //check created lead
    if (process.env.NODE_ENV != 'gpa' && process.env.NODE_ENV != 'prod') {
        let rows = await leadSearch.search(randomInfo);
        console.log("rows: " + rows);
        assert(rows == 1)
    };

});