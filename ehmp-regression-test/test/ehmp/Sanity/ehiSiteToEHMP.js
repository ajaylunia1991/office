
Feature('ehmp - sanity');

/*
Created by cherrieg at 08/29/19
*/

var config = require('config');
var ehimDomain = config.get('EHIM');
var ehiDomain = config.get('EHI');


//EHI to EHMP (DOB>65)
Scenario('EHI to EHMP@C12763', {retries: 1}, (I) => {

    I.amOnPage(ehiDomain + '/individual-family-health-insurance#welcome');I.wait(2);
    I.seeInCurrentUrl('ehealthinsurance.com');I.wait(2);

    //ifp census page 
    I.fillField('#hero > div > div > div > div > div:nth-child(1) > input','90001');I.wait(2);
    I.click('#hero > div > div > div > div > div:nth-child(2) > button');I.wait(2);
    //not a biz owner
    I.click('#census > div > div > div > div.mt-md.flex > p.flex-1.border-gray-dark.border.border-solid.rounded-r-sm.px-xl.py-sm.outline-none.font-md.text-center.cursor-pointer');I.wait(2);
    I.click('#census > div > div > div > div.pt-sm > button');I.wait(2);
    //female
    I.click('#census > div > div > div:nth-child(2) > div.border-gray-dark.border.border-solid.rounded-l-sm.bg-grey-dark.w-full.py-sm.ml-auto.text-center.font-md.cursor-pointer');I.wait(2);
    //fill birthdate
    // if(process.env.NODE_ENV == 'cm' || process.env.NODE_ENV == 'qp'){
        I.fillField('#census--application--primary--dob--month','01');I.wait(2);
        I.fillField('#census--application--primary--dob--day','01');I.wait(2);
        I.fillField('#census--application--primary--dob--year','1952');I.wait(2);
    // }else{
    //     I.fillField('#month','01');I.wait(2);
    //     I.fillField('#census > div > div > div.w-full.bg-white.rounded-sm.border-none > div > div > div > input:nth-child(3)','02');I.wait(2);
    //     I.fillField('#census > div > div > div.w-full.bg-white.rounded-sm.border-none > div > div > div > input.w-1-4.border-none.outline-none.font-md.year.bg-white','1950');I.wait(2);    
    // }
    //no smoker
    I.click('#census > div > div > div:nth-child(6) > p.border-gray-dark.border.border.border-solid.rounded-r-sm.bg-grey-dark.w-full.py-sm.mr-auto.text-center.font-md.cursor-pointer');I.wait(2);
    I.click('#census > div > div > div.flex.flex-row.justify-between.items-center.w-full.text-gray-dark.pt-md > button.button-primary.whitespace-no-wrap.w-2-3');I.wait(2);

    // I.waitForElement('#content-ifp > div.button-set > a.btn.btn-primary.btn-track-link', 50);
    // I.click('#content-ifp > div.button-set > a.btn.btn-primary.btn-track-link');I.wait(2);
    // I.fillField('#census_zip','90001');I.wait(2);
    // I.click('#segment-smb-selector > div > label:nth-child(2)');I.wait(2);
    // I.click('#next-step-btn');I.wait(2);
    // I.click('#primary > fieldset > div.btn-group.gender-input.form-field.customize > label:nth-child(2)');I.wait(2);
    // I.fillField('#census_primary_month','01');I.wait(1);
    // I.fillField('#census_primary_day','02');I.wait(1);
    // I.fillField('#census_primary_year','1951');I.wait(1);
    // I.click('#continue-btn');I.wait(2);

    I.seeInCurrentUrl('ehealthmedicareplans.com');

});



//EHIM to EHMP
Scenario('EHIM to EHMP @C12764', {retries: 0},async (I) => {

    I.amOnPage(ehimDomain);
    I.wait(2);
    I.seeInCurrentUrl('ehealthinsurance.com/medicare');
    I.wait(2);
    let url = await I.grabCurrentUrl();
    let title = await I.grabTextFrom("div.banner-title > h1");
    console.log(`Current title is [${title}]`);I.wait(2);
    
    if(url.includes('aep') || title.includes('Let Us Help You')){
        I.executeScript(function() {
            $('#zipCodeBanner').val('90001');
            $('#shopForPlans').click();//aep2020
        });
    }else{
        I.executeScript(function() {
            $('#zipCodeBanner').val('90001');
            $('#findPlansBtn').click();
        });
        
    }
    I.wait(2);
    I.seeInCurrentUrl('ehealthmedicareplans.com');
    I.seeInCurrentUrl('#quote-plans');

});

