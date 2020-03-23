Feature('ehmp - sanity');

/*
Created by Krystal Lu at 02/06/18
*/

var config = require('config');
var domain = config.get('MDC');

//medicare.com to EHMP
Scenario('medicare.com to EHMP @C12768', {retries: 1}, async(I, censusPage, quotePage, leadPage) => {
    I.amOnPage(domain);I.wait(5);
    // I.amOnPage('/' + domain + '/recommendation-homepage-aep-2018-v3/');
    //https://medicare.com/recommendation-homepage-aep-2018-v3/
    I.seeElementInDOM('#medicare-logo');//ALGO-49
    const url = await I.grabCurrentUrl();I.wait(5);
    // const pageSource = await I.grabSource();
    console.log('current url is: ' + url)
    if (url.includes('aep')) {
        I.fillField('#zipCode', '90001');
        I.click('body > div.section-banner-main-v3 > div.section-banner > div > div.banner-middle > div.zipcode-section > div > a');
        I.wait(5);
        I.waitForElement('#ehi-txtFirstName', 50);
        I.seeInSource('ehi-txtFirstName');
        I.click(leadPage.fields.continueBtn);
    // } else if(pageSource.includes('Annual Election Period') || pageSource.includes('Get more from your Medicare coverage.')){
    //     //MEDI-19562 "find plans" btn 每次xpath都不一样
    //     I.fillField('#zipCode', '90001');
    //     I.click('.submit-btn');
    //     I.wait(10);
    //     I.seeInCurrentUrl('ehealthmedicareplans.com');
    }else{
        I.click('.view-plans-button');
        I.wait(10);
        I.waitForText('Enter your zip code to see plans available in your area', 50);
        I.see('Enter your zip code to see plans available in your area');
        I.waitForVisible(censusPage.fields.zip, 50);
        I.fillField(censusPage.fields.zip, '90001');
        I.wait(1);
        I.click(censusPage.fields.nextBtn);
    }
    I.wait(5);
    I.seeInSource('partner-logo-img'); //quote page redesign just verify medicare.com logo
});

//PP site to EHMP
Scenario('PP to EHMP @C12769', (I) => {
    if(process.env.NODE_ENV == 'gpa'|| process.env.NODE_ENV =='prod'){
        I.amOnPage('/www.planprescriber.com');
        I.waitForText('Looking for Medicare Plans in Your Area', 50);
        I.see('Looking for Medicare Plans in Your Area');
        I.checkOption('#choice_4_1_0');
        I.fillField('#input_4_2', '90001');
        I.wait(1);
        I.click('#gform_submit_button_4');
        I.wait(1);
        I.seeInCurrentUrl('ehealthmedicareplans.com');
    }else{
        I.wait(1);
        console.log("No test env on pp site...")
    }
    
});

//Walgreens to EHMP
//https://www.ehealthmedicare.com/walgreens on every env will all redirect to https://medicare.com/partner/?allid=med559000
Scenario('Walgreen to EHMP @C12770', {retries: 1}, async(I, censusPage, quotePage, leadPage) => {
    I.amOnPage(domain + '/partner/?allid=med559000');
    I.waitInUrl('/partner/?allid=med559000', 50);
    I.seeInCurrentUrl('/partner/?allid=med559000');
    I.seeElementInDOM('#medicare-logo');//ALGO-49
    I.wait(1);
    I.click('.view-plans-button');
    // if(process.env.NODE_ENV == 'cm'){
    //     I.switchToNextTab();I.wait(1);//MEDI-19479
    // }
    I.waitInUrl('ehealthmedicare', 50);
    I.seeInCurrentUrl('allid=med559000');
    I.wait(5);
    I.see('Enter your zip code to see plans available in your area');
    I.waitForVisible(censusPage.fields.zip, 50);
    I.fillField(censusPage.fields.zip, '90001');
    I.wait(1);
    I.click(censusPage.fields.nextBtn);I.wait(2);
    const pageSource = await I.grabSource();
    //check if there is a lead form
    if (pageSource.includes('continue-btn')) {
        console.log('===========Walgreen to EHMP: There is a lead form here now.');
        I.click(quotePage.fields.continueBtn);
        I.wait(1);
    } else {
        console.log('===========Walgreen to EHMP: There is not a lead form here now.');
    }
    I.wait(1);
    I.waitForText('Medicare Advantage Plans', 50);
    I.see('Medicare Advantage Plans');
});
