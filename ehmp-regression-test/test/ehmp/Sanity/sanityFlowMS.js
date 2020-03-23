Feature('ehmp - sanity');

var config = require('config');
var EHMPdomain = config.get('EHMP');

Scenario('MS sanity Flow@C12775', {retries: 0}, async(I, leadPage, censusPage, quotePage) =>{
    //Open MS Census Page
    I.amOnPage(EHMPdomain + '/?type=MS&qascript=Y&detailCompareRedesign=false&leadFormEnabled=false&planUnitRedesign=false&defaultThrottle=GREEN&hideEnrollPage=true&defaultPlanYear='+ config.get('defaultPlanYear')+'&turnOnPlanReview=N');I.wait(3);
    
    //Verified words and fill zip then goto quote page
    I.see("Find your Medicare Supplement");
    censusPage.FillMSCensus('90001','09/01/1951','4/2018','M','N');
    //Verified words on quote page
    I.seeTitleEquals('Medicare Insurance Program');
    I.seeInCurrentUrl('#quote-plans/MS/');
    //edit census
    I.waitForVisible(quotePage.fields.msEditCensus, 20);I.wait(1);
    I.click(quotePage.fields.msEditCensus);I.wait(1);
    I.executeScript(function() {
        $('#ehi-btnCensusUpdate').click();
    });I.wait(5);

    //check detail & compare 
    quotePage.checkDetailAndCompare('MS');
    //ehmp quote page
    I.waitForVisible(quotePage.fields.enrollBtn, 20);I.wait(1);
    I.click(quotePage.fields.enrollBtn);I.wait(2);

    //enter the first page of app flow
    I.waitForElement(leadPage.fields.element, 50);
    let url = await I.grabCurrentUrl();
    console.log('Sanity MS :' + `${url.split("&")[2]}`);

    I.click('#main > div.hidden-phone.progressPc.cf > ul > li:nth-child(2) > a');I.wait(5);
    I.seeTitleEquals('View/Edit Application');
    I.see('Coverage');

});