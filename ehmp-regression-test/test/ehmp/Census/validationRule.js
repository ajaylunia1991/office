Feature('ehmp - census');

var config = require('config');
var domain = config.get('EHMP');


Scenario('Vivian - validationRule - MA/MD census', async(I, censusPage, quotePage, leadPage) => {
    I.amOnPage(domain +'/?qascript=Y&type=MA&detailCompareRedesign=false&planUnitRedesign=false&leadFormEnabled=false&defaultThrottle=GREEN');
    // zip with 00000, invalid
    censusPage.FillMAMDCensus('00000');
    I.wait(2);
    I.see('Please enter a valid zip code');
    I.wait(2);

    //zip with multiple counties, county selection required
    //censusPage.FillMAMDCensus('53952');
    I.fillField(censusPage.fields.zip, '53952');
    I.wait(2);
    I.click(censusPage.fields.nextBtn);
    I.wait(2);
    I.see('Please select your county');
    I.click(censusPage.fields.drillDownBox);//click drill down box for county
    I.wait(2);
    I.click(censusPage.fields.oneCounty);// select 'MARQUETTE'
    I.wait(2);
    // I.executeScript(function () {
    //     // $('#countySelectHolder > div > div > span > i').click();
    //     // $('#countySelectHolder > div > div > ul > li:nth-child(3)').click();
    //     $('#ehiSelect > span > i').click();
    //     pause();
    //     $('#ehiSelect > ul > li:nth-child(2)').click();
    //     pause();
    // });
    I.click(censusPage.fields.nextBtn);

    //lead form
    I.wait(5);
    const leadFormEnabled = await I.grabSource();
    if (leadFormEnabled.includes('continue-btn')) {
       I.wait(3);
       I.waitForElement(leadPage.fields.continueBtn, 10);
       I.click(leadPage.fields.continueBtn);
    }
   //quote page
    
    I.waitForVisible(quotePage.fields.enrollBtn,10);
    I.seeTitleEquals('Medicare Insurance Program');
});


Scenario('Vivian - validationRule - MS census @only', async(I, censusPage, quotePage, leadPage) => {
    I.amOnPage(domain +'/?qascript=Y&type=MS&detailCompareRedesign=false&planUnitRedesign=false&leadFormEnabled=false&defaultThrottle=GREEN');

    //partB year, there should be 50 options, 
    //not test able for #ehiSelect-jlnjmtao4o > ul > li:nth-child(49) is not always there for different visit
    //I.click('.partB-effective-year .ehi-select-fa');
    //I.seeElement('#partb-effective > div.partB-effective-year.form-field > div > ul > li:nth-child(50)');
    //I.dontSeeElement('#partb-effective > div.partB-effective-year.form-field > div > ul > li:nth-child(51)');
    //I.seeElement('#ehiSelect-1mcqdt0suzm > ul > li:nth-child(49)');


    //zip, gender,dob,partB required to be filled out
    I.wait(3);
    I.click(censusPage.fields.msnextBtn);//click 'find plans' button 
    I.wait(1);
    I.see('Please enter a valid zip code.');
    I.see('Please select your gender.');
    I.see('Please enter a valid date of birth.');
    I.see('Please select a valid Part A effective date.');
    I.see('Please select a valid Part B effective date.');

    // zip with 00000, invalid
    censusPage.FillMSCensus('00000','11/09/1910','12/2014','F','N');
    I.wait(1);
    I.see('Please enter a valid zip code');

    //zip with multiple counties, county selection required
    censusPage.FillMSCensus('53952','11/09/1910','12/2014','F','N');
    I.wait(1);
    I.see('Please select your county');

    //DOB, year should not be 120+ years ago, date should be valid
    censusPage.FillMSCensus('53952','11/09/1898','12/2014','F','N');
    I.wait(1);
    I.see('Please enter a valid date of birth.');

    censusPage.FillMSCensus('53952','02/29/1898','12/2014','F','N');
    I.wait(1);
    I.see('Please enter a valid date of birth.');

    //zip with multiple counties to quote
    censusPage.FillMSCensus('53952','11/09/1910','12/2014','F','N');
    I.click(censusPage.fields.drillDownBox);//click drill down box for county
    I.wait(2);
    I.click(censusPage.fields.oneCounty);// select 'MARQUETTE'
    I.wait(2);


    // I.executeScript(function () {
    //     $('#countySelectHolder > div > div > span > i').click();
    //     $('#countySelectHolder > div > div > ul > li:nth-child(3)').click();
    // });
    I.click(censusPage.fields.msnextBtn);
    //pause ()
    //I.waitForVisible(quotePage.fields.enrollBtn,15);  
    I.wait(10);
    I.see('Medicare Supplement Insurance Plans');
    I.seeTitleEquals('Medicare Insurance Program');
});