Feature('ehmp - sanity');

var config = require('config');
var EHMPdomain = config.get('EHMP');

Scenario('carrier minisite with css customization(button), Aetna@C12761', {retries: 1}, async(I, censusPage, leadPage, quotePage) =>{
    //Open minisite landing Page
    I.amOnPage(EHMPdomain + '/ehi/medicare/mini-site?allid=Aet32546&leadFormEnabled=false&msType=msc-aetna-3&qascript=Y&leadFormEnabled=true&defaultPlanYear='+ config.get('defaultPlanYear')+'&defaultThrottle=GREEN&hideEnrollPage=true');
    
    //Verified words and fill zip then goto quote page
    I.wait(2);I.see("Aetna Medicare Plans");
    
    I.waitForElement(censusPage.fields.zip, 10);
    I.fillField(censusPage.fields.zip, '90001');I.wait(2);
    I.waitForElement(censusPage.fields.startComparingNowBtn, 10);
    I.click(censusPage.fields.startComparingNowBtn);I.wait(10);

    I.seeInCurrentUrl('#quote-plans/MA');I.wait(2);

    //add drug/pharmacy
    quotePage.addDrug();
    quotePage.addPharmacy();
    //back to quote page 
    I.wait(2);I.click('#dt-drug-summary-area > div > div.dt-summary-savings.v5 > div > div > div.dt-btn.col-md-5.col-sm-3 > div');
    I.wait(3);I.dontSee('Add Rx Drugs');
    //add doctor
    quotePage.addDocs();
    
    //ehmp quote page
    I.waitForVisible(quotePage.fields.enrollBtn, 20);I.wait(1);
    I.click(quotePage.fields.enrollBtn);I.wait(2);

    //enter the first page of app flow
    let url = await I.grabCurrentUrl();
    if(url.includes('/enrollment/desktop')){
        I.seeInCurrentUrl('ehealthmedicareplans.com/enrollment/desktop?appId=')
        I.seeInCurrentUrl('#/Applicant')
        console.log('Aetna Minisite appId: ' + `${url.split("?")[1].replace(/\#\/Applicant/g,'')}`);
    }else{
        I.waitForElement(leadPage.fields.element, 50);
        let castroUrl = await I.grabCurrentUrl();
        console.log('Aetna Minisite castro appId: ' + `${castroUrl.split("&")[2]}`);
        I.click(leadPage.fields.page2Link);I.wait(5);
        I.seeTitleEquals('Medicare and Coverage Info');
    }

});

/*
Scenario('carrier minisite without css customization(button), all is customized now', {retries: 3}, async(I, leadPage, quotePage) =>{


});*/
