//carol
Feature('ehmp - detail');

var config = require('config');
var EHMP = config.get('EHMP');
var randomInfo = require(process.cwd() +'/utils/random').randomInfo();

Scenario('MA new detail page/components, drug, doctor, pharmacy, current plan, print, health status features', {retries: 0}, async(I, quotePage, detailV2Page, doctorPage, leadPage, drugPage, pharmacyPage, currentPlanPage) => {
    //note: need find a plan that which may in-network of added doctor
    I.amOnPage(EHMP + '?qascript=Y&detailCompareRedesign=true&forceV1=true#plan-benefits/MA/90001/05200/LOS%20ANGELES/H0543/001/000');
    I.waitForElement('.add-favorite', 50);

    //components check
  	I.wait(5);
    I.see('Medicare Advantage');
    I.see('monthly premium');
    //I.see('(plus Part B premium)');
    I.see('Your Doctors');
    I.see('Benefit Highlights');
    I.see('Drug Coverage');
    I.see('Doctor & Hospital Coverage');
    I.see('Plan Brochures');
    I.seeElement('.print');
    I.seeElement('.nav-container.clear')

    //standard drug benefit check
    I.see('Greater of 5% coinsurance or $3.60 copay');//Catastrophic Coverage/Generic Drugs
    I.see('Greater of 5% coinsurance or $8.95 copay');//Catastrophic Coverage/Brand-Name Drugs

    // //health status
    // //I.see('for someone in \'good\' health');
  	// I.click("//a[@data-wa-link='Click:MA:CategoryNavi:BenefitHighlights']");I.wait(3);
    // I.click("//a[@data-wa-link='Click:MA:BenefitHighlights:EditHealthStatus']");I.wait(3);
    // I.click('.health-status-options > label:nth-child(1)');//excellent status
    // I.click('.save-link');I.wait(10);
    // I.see('$69.00 for someone in \'excellent\' health');
    // I.wait(1);

    //add doctor
  	I.click("//a[@data-wa-link='Click:MA:CategoryNavi:BenefitHighlights']");I.wait(1);
    I.click(detailV2Page.fields.highLightAddDoc);
    I.waitForVisible('#ds-loc', 30);
    doctorPage.addDocs();
    I.wait(1);
    I.see('0 of 1 covered');
    I.see('Not covered');
    I.seeElement("//a[@data-wa-link='Click:MA:BenefitHighlights:EditDoctors']")

    //add drug
  	I.click("//a[@data-wa-link='Click:MA:CategoryNavi:BenefitHighlights']");I.wait(1);
    I.click(detailV2Page.fields.highLightAddDrug);
    I.wait(1);
    drugPage.addDrug();
    I.wait(2);
    //back to detail from drug page
    I.click(pharmacyPage.fields.backBtn);
    I.waitForText('Your Annual Drug Costs', 20);
    I.see('B-12 Compliance 1,000 mcg/mL injection kit');
    I.see('Total Drug Costs');
    I.see('$4,299');
    I.seeElement("//a[@data-wa-link='Click:MA:DrugCoverage:EditRxDrugs']")

    //edit pharmacy
  	I.click("//a[@data-wa-link='Click:MA:CategoryNavi:DrugCoverage']");I.wait(1);
    I.click(detailV2Page.fields.addPharmacy);
    I.waitForElement('#ehi-popupDialog', 10);
  	I.wait(5);
    pharmacyPage.addPharmacy();I.wait(2);
    I.see('In Network, non-preferred');

    //add current plan, drug saving based on current plan
    I.click(detailV2Page.fields.addCurrentPlan);I.wait(2);
    currentPlanPage.addSpecificCurrentPlan();I.wait(3);
    I.see('This savings is calculated comparing to AARP Medicare Advantage SecureHorizons Essential (HMO)');

    //enrollment
    I.click(detailV2Page.fields.enrollBtn);I.wait(2);
    const pageSource = await I.grabSource();
    if (pageSource.includes('continue-btn')) {
        I.see('Provide Your Information to Get Started With Your Enrollment');
        console.log('First name is :' + randomInfo.firstName + '; Last name is :' + randomInfo.lastName + '; phone is :' + randomInfo.phone);
        leadPage.typeLead(randomInfo.firstName, randomInfo.lastName, randomInfo.phone);I.wait(2);
    };
    I.see('Applicant Information');
});


Scenario('new detail page/MAO case', {retries: 1}, async(I, detailV2Page, quotePage, doctorPage, leadPage, drugPage, pharmacyPage, currentPlanPage) => {
    I.amOnPage(EHMP + '?qascript=Y&detailCompareRedesign=true&doctorSearch=v2&planUnitRedesign=blue#plan-benefits/MA/90001/05200/LOS%20ANGELES/H0543/121/000');
    I.waitForElement('.add-favorite', 50);
    I.see('Your Prescription Drugs');
    I.dontSee('Initial Coverage');
    I.dontSee('Prescription Drug Deductible');
    I.dontSeeElement("//a[text()='Drug Coverage']");

    //add drug to check MAO drug related benefit fields
    I.click(detailV2Page.fields.highLightAddDrug);
    I.wait(1);
    drugPage.addDrug();
    I.wait(2);
    I.click(pharmacyPage.fields.backBtn);
    I.waitForText('0 of 1 covered', 20);
});


Scenario('new detail page to quote', {retries: 2}, async(I, detailV2Page, quotePage, leadPage, drugPage, pharmacyPage) => {
    I.amOnPage(EHMP + '/?qascript=Y&detailCompareRedesign=true&forceV1=true#plan-benefits/MA/90001/05200/LOS%20ANGELES/H0562/044/000');
    I.waitForElement('.add-favorite', 50);
    //to plan quote
    I.click(detailV2Page.fields.backBtn);
    I.wait(1);
    I.seeInCurrentUrl('quote-plans/MA/');
});
