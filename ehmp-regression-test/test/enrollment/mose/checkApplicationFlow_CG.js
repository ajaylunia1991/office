/**
 * Created by cherrieg on 06/26/2019.
 */
Feature('enrollment - mose');

var config = require('config');
var ehmp = config.get('EHMP');

Scenario('check 2020 application flow from url', async(I) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'  ){
        I.wait(1);
        console.log("We can't enroll 2020 plan!")
    }else{
        //without applicationFlow para, the app flow should be mose flow.
        I.amOnPage(ehmp + '/?isShowPlanYearElement=true&previewPeriod=false&hideEnrollPage=true&turnOnPlanReview=Y&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MD/90001/05200/LOS%20ANGELES/S5921/413/000');
        I.wait(5);I.waitForVisible('.ehi-btn-enroll',50);I.click('.ehi-btn-enroll');

        //plan review
        // I.wait(5);I.seeInCurrentUrl('#plan-review', 40);
        // I.click('#ehimcPlanReviewView > div > div.review-container.cf > div.review-medicare-card.cf > div > div > button');I.wait(2);
        
        //filled out applicant info
        I.wait(5);I.seeInCurrentUrl('/Applicant', 40);
        I.see('AARP MedicareRx Walgreens (PDP)');
    }

});

