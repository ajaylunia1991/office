
Feature('ehim - LeadSubmission');
/**
 * Created by Ajay Lunia
 */
var assert = require('assert');
var config = require('config');
var domain = config.get('EHIM');

//Testcase @C49479 - Verify on clicking on compare plans button under Medicare Supplement Insurance Plans should make user to redirect to EHMP Medicare Supplement Insurance Plans
Scenario('ENV: ' + process.env.NODE_ENV + ' - Ajay - LeadSubmit - This scenario verifies on clicking on compare plans button under Medicare Supplement Insurance Plans should make user to redirect to EHMP Medicare Supplement Insurance Plans', async function(I, ehimPageNew,censusPage) {
    I.amOnPage(domain);
    I.waitForVisible(ehimPageNew.fields.coronaVirusBanner,5);
    I.click(ehimPageNew.fields.coronaVirusBanner);  
    I.wait(5);

    I.scrollTo(ehimPageNew.fields.mdComparePlansBtn)
    I.waitForVisible(ehimPageNew.fields.msComparePlansBtn);
    I.click(ehimPageNew.fields.msComparePlansBtn);

    url = await I.grabCurrentUrl();
    console.log(url);
    I.seeInCurrentUrl('ehealthmedicareplans.com/v2?type=MS');
    censusPage.FillMSCensus('20635','11/09/1910','12/2014','F','N');

    I.waitForVisible(censusPage.fields.mSText,10);
    I.see("Medicare Supplement Insurance");
    I.waitForVisible(ehimPageNew.fields.showPlanCount,10);
    I.see('plans found in 20635');
});    

//Testcase @C50062 - Verify on Entering ZipCode and Clicking on Get Started Button for Medicare Advantage Articles in EHIM. User should be redirected EHMP Plans Page
Scenario('ENV: ' + process.env.NODE_ENV + ' - Ajay - LeadSubmit - This scenario verifies on Entering ZipCode and Clicking on Get Started Button for Medicare Advantage Articles in EHIM. User should be redirected EHMP Plans Page', async function(I, ehimPageNew,censusPage) {
    I.amOnPage(domain);
    I.waitForVisible(ehimPageNew.fields.coronaVirusBanner,5);
    I.click(ehimPageNew.fields.coronaVirusBanner);  
    I.wait(5);

    I.scrollTo(ehimPageNew.fields.medicareCoverage);
    I.waitForVisible(ehimPageNew.fields.medicareResources);
    I.click(ehimPageNew.fields.medicareResources);

    I.waitForVisible(ehimPageNew.fields.mALink);
    I.click(ehimPageNew.fields.mALink);

    url = await I.grabCurrentUrl();
    console.log(url);
    I.seeInCurrentUrl('medicare-advantage');

    I.see('Medicare Advantage (Part C)','h1.title');
    I.fillField(ehimPageNew.fields.articlezipcode,'90001');
    I.click(ehimPageNew.fields.getStartedBtn);

    url = await I.grabCurrentUrl();
    console.log(url);
    I.seeInCurrentUrl('ehealthmedicareplans.com');

    I.waitForVisible(censusPage.fields.mAText,10);
    I.see("Medicare Advantage Plans");
    I.waitForVisible(ehimPageNew.fields.showPlanCount,10);
    I.see('plans found in 90001');
});    

//Testcase @C50082 - Verify on Entering ZipCode and Clicking on Browse  Plans Button for Medicare Advantage Articles in EHIM. User should be redirected EHMP Plans Page
Scenario('ENV: ' + process.env.NODE_ENV + ' - Ajay - LeadSubmit - This scenario verifies on Entering ZipCode and Clicking on Browse  Plans Button for Medicare Advantage Articles in EHIM. User should be redirected EHMP Plans Page', async function(I, ehimPageNew,censusPage) {
    I.amOnPage(domain);
    I.waitForVisible(ehimPageNew.fields.coronaVirusBanner,5);
    I.click(ehimPageNew.fields.coronaVirusBanner);  
    I.wait(5);

    I.scrollTo(ehimPageNew.fields.medicareCoverage);
    I.waitForVisible(ehimPageNew.fields.medicareResources);
    I.click(ehimPageNew.fields.medicareResources);

    I.waitForVisible(ehimPageNew.fields.mALink);
    I.click(ehimPageNew.fields.mALink);

    url = await I.grabCurrentUrl();
    console.log(url);
    I.seeInCurrentUrl('medicare-advantage');

    I.see('Medicare Advantage (Part C)',ehimPageNew.fields.medicarePartCText);
    I.scrollTo(ehimPageNew.fields.browsePlansBtn);
    I.waitForVisible(ehimPageNew.fields.browsePlansBtn);
    I.fillField(ehimPageNew.fields.zipCodeNeedHelp,'90001');
    I.click(ehimPageNew.fields.browsePlansBtn);

    url = await I.grabCurrentUrl();
    console.log(url);
    I.seeInCurrentUrl('ehealthmedicareplans.com');

    I.waitForVisible(censusPage.fields.mAText,10);
    I.see("Medicare Advantage Plans");
    I.waitForVisible(ehimPageNew.fields.showPlanCount,10);
    I.see('plans found in 90001');
});