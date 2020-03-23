Feature('ehmp - sanity');

var config = require('config');
var EHMPdomain = config.get('EHMP');

Scenario('Kmart Pharmacy Tool@C12773', {retries: 0}, async(I, censusPage, quotePage) =>{
    //Open Tool page
    I.amOnPage(EHMPdomain + '/pharmacy?allid=pha5542000&leadFormEnabled=false&qascript=Y&detailCompareRedesign=false&leadFormEnabled=true&defaultPlanYear='+ config.get('defaultPlanYear')+'&planUnitRedesign=false&defaultThrottle=GREEN&hideEnrollPage=true&turnOnPlanReview=N');
    
    //Verified words and fill zip then goto quote page
    I.wait(5);I.see("Calculate My Annual Savings");
    //fill zip
    I.fillField(censusPage.fields.zipName, '90001');I.wait(1);

    //view plans
    I.click(censusPage.fields.viewPlans);
    I.waitForVisible(censusPage.fields.viewAllPlans, 20);
    I.click(censusPage.fields.viewAllPlans);I.wait(2);
    //go to quote page
    I.seeInCurrentUrl('#quote-plans/MD');I.wait(2);
    
    //check enroll function
    I.waitForVisible(quotePage.fields.enrollBtn, 20);I.wait(1);
    I.click(quotePage.fields.enrollBtn);I.wait(2);
    //can see popup and not enroll
    I.see('Print Medicare Plan Report');
});