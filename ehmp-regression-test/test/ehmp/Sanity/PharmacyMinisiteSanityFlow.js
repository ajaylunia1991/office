Feature('ehmp - sanity');

var config = require('config');
var EHMPdomain = config.get('EHMP');

Scenario('pharmacy minisite with css customization(disclaimer), cvs Pharmacy minisite@C12771',  async(I, leadPage, censusPage, quotePage) =>{
    //Open minisite Page
    I.amOnPage(EHMPdomain + '/ehi/medicare/mini-site?type=MD&allid=CVS36534&msType=msp-cvs&showSSLink=true&leadFormEnabled=false&applicationFlow=C&qascript=Y&detailCompareRedesign=false&leadFormEnabled=true&planUnitRedesign=false&defaultPlanYear='+ config.get('defaultPlanYear')+'&defaultThrottle=GREEN&hideEnrollPage=true&turnOnPlanReview=N');

    //Verified words and fill zip then goto quote page
    I.wait(5);
    I.waitForElement('.cvs-disclaimers', 50);
    I.seeElement('.cvs-disclaimers');
    I.see("Find your Medicare Part D plan");
    I.see("This Plan Finder Tool is set by default to search for only those plans in which CVS Pharmacy is an in-network pharmacy. On the quote results page, you may change this by using the filter function on the left side of the page to select and view all available contracted eHealth plans in your service area or filter for other selected in-network pharmacies.");
    censusPage.FillMAMDCensus('90001');I.wait(5);
    I.seeInCurrentUrl('#quote-plans/MD');I.wait(2);

    I.waitForVisible(quotePage.fields.enrollBtn, 20);I.wait(1);
    I.click(quotePage.fields.enrollBtn);I.wait(2);

    //enter the first page of app flow
    let url = await I.grabCurrentUrl();
    if(url.includes('/enrollment/desktop')){
        I.seeInCurrentUrl('ehealthmedicareplans.com/enrollment/desktop?appId=')
        I.seeInCurrentUrl('#/Applicant')
        console.log('CVS Minisite appId: ' + `${url.split("?")[1].replace(/\#\/Applicant/g,'')}`);
    }else{
        I.waitForElement(leadPage.fields.element, 50);
        let castroUrl = await I.grabCurrentUrl();
        console.log('CVS Minisite castro appId: ' + `${castroUrl.split("&")[2]}`);
        I.click(leadPage.fields.page2Link);I.wait(5);
        I.seeTitleEquals('Medicare and Coverage Info');
    }



});

Scenario('pharmacy minisite without css customization(button), RitaAid Pharmacy minisite@C12772', async(I, leadPage, censusPage, quotePage) =>{
    //Open minisite Page
    I.amOnPage(EHMPdomain + '/ehi/medicare/mini-site?allid=Rit36455&msType=msp-riteaid&leadFormEnabled=false&qascript=Y&applicationFlow=C&detailCompareRedesign=false&leadFormEnabled=true&planUnitRedesign=false&&defaultThrottle=GREEN&hideEnrollPage=true&turnOnPlanReview=N');

    //Verified words and fill zip then goto quote page
    I.wait(5);
    I.see("Find your Medicare Part D plan");
    censusPage.FillMAMDCensus('90001');I.wait(5);
    I.seeInCurrentUrl('#quote-plans/MD');I.wait(2);

    //add drug/vefiry default pharmacy
    quotePage.addDrug();
    I.see('Rite Aid Pharmacy');I.wait(1);
    //back to quote page
    I.click('#dt-drug-summary-area > div > div.dt-summary-savings.v5 > div > div > div.dt-btn.col-md-5.col-sm-3 > div');I.wait(2);
   // I.see('Potential Drug Costs');I.wait(2);//lia,lip drug have been removed average pricing for frontend testing

    //ehmp quote page
    I.waitForVisible(quotePage.fields.enrollBtn, 20);I.wait(1);
    I.click(quotePage.fields.enrollBtn);I.wait(2);

    //enter the first page of app flow
    let url = await I.grabCurrentUrl();
    if(url.includes('/enrollment/desktop')){
        I.seeInCurrentUrl('ehealthmedicareplans.com/enrollment/desktop?appId=')
        I.seeInCurrentUrl('#/Applicant')
        console.log('RitaAid Minisite appId: ' + `${url.split("?")[1].replace(/\#\/Applicant/g,'')}`);
    }else{
        I.waitForElement(leadPage.fields.element, 50);
        let castroUrl = await I.grabCurrentUrl();
        console.log('RitaAid Minisite castro appId: ' + `${castroUrl.split("&")[2]}`);
        I.click(leadPage.fields.page2Link);I.wait(5);
        I.seeTitleEquals('Medicare and Coverage Info');
    }

});
