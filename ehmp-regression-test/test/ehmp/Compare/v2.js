//component check
//mao special case
//drug section
//doctor section
//show diff
//print function
//pharmacy section
//health status
//original column
//current plan
//session save
//drug saving rule
//standard drug benefit get from configure file based on year

Feature('ehmp - compare');

var config = require('config');
var EHMP = config.get('EHMP');
var randomInfo = require(process.cwd() +'/utils/random').randomInfo();

Scenario('MA new compare page/components, drug, doctor, pharmacy, current plan, print, health status features', async(I, compareV2Page, quotePage, doctorPage, leadPage, drugPage, pharmacyPage, currentPlanPage) => {
   //note: need find a plan that which may in-network of added doctor
   I.amOnPage(EHMP + '/?detailCompareRedesign=true&qascript=Y&doctorSearch=v2&planUnitRedesign=blue#plan-compare/MA/90001/05200/LOS%20ANGELES/pH0524-003-000,H0543-001-000');
   I.waitForElement('.add-favorite', 50);

   //components check
   I.see('Show benefit differences only');
   I.see('Original Medicare');
   I.seeElement('.current-plan-edit');
   I.see('Benefit Highlights - Your Personalized Benefits');
   I.see('Benefit Highlights - Plan Coverage Overview');
   I.see('Drug Coverage - Your Prescription Drug Costs and Savings');
   I.see('Drug Coverage - Prescription Drug Coverage');
   I.see('Initial Coverage');//for MAPD, not MAO
   I.see('Doctor & Hospital Coverage - Your Doctors');
   I.see('Doctor & Hospital Coverage - Medical and Hospital Coverage');
   I.see('Doctor & Hospital Coverage - Additional Coverage');
   I.see('Plan Brochures');
   I.seeElement('.original-title');
   I.seeTextEquals('Any doctor that accepts Medicare', "#ehimcPlanCompareTable > div:nth-child(10) > div.group.provider-search > div > div.ccont > div.ccol.has-plan");

   //standard drug benefit check
   I.see('Greater of 5% coinsurance or $3.60 copay');//Catastrophic Coverage/Generic Drugs
   I.see('Greater of 5% coinsurance or $8.95 copay');//Catastrophic Coverage/Brand-Name Drugs

   //health status //no health status for 2020 for now
   // I.see('$325.50/mo for someone in good health');
   // I.click('.edit-health');I.wait(1);
   // I.click('.health-status-options > label:nth-child(1)');//excellent status
   // I.click('.save-link');I.wait(5);
   // I.see('$257.50/mo for someone in excellent health');
   // I.wait(1);

   //add doctor
   I.click(compareV2Page.fields.addDocLink);
   I.waitForVisible('#ds-loc', 30);
   doctorPage.addDocs();
   I.wait(1);
   I.see('Your doctor may be in-network');
   I.see('Not accepted by Original Medicare');
   I.see('Contact a licensed insurance agent to find doctors in network');
   I.click('.contact-agent');
   leadPage.typeLead(randomInfo.firstName, randomInfo.lastName, randomInfo.phone);
   I.click('#ehi-popdialogClose');

   //add drug
   I.click(compareV2Page.fields.addDrugLink);
   I.wait(1);
   drugPage.addDrug();
   I.wait(2);
   //back to compare from drug page
   I.click(pharmacyPage.fields.backBtn);
   I.waitForText('Your Potential Drug Savings', 20);
   I.see('This savings is calculated comparing to Original Medicare');

   //add pharmacy
   I.click(compareV2Page.fields.addPharmacyLink);
   I.waitForElement('#ehi-popupDialog', 10);
   I.wait(5);
   pharmacyPage.addPharmacy();
   I.wait(2);
   I.see('In Network, Non-preferred');

   //add current plan, drug saving based on current plan
   I.click(compareV2Page.fields.editCurrentPlanLink);I.wait(2);
   currentPlanPage.addSpecificCurrentPlan();I.wait(3);
   I.see('This savings is calculated comparing to AARP Medicare Advantage SecureHorizons Essential (HMO)');

   //print
});

Scenario('new compare page/MD case components ', {retries: 2}, async(I, quotePage, doctorPage, leadPage, drugPage, pharmacyPage, currentPlanPage) => {
   I.amOnPage(EHMP + '?detailCompareRedesign=true&qascript=Y&doctorSearch=v2&planUnitRedesign=blue#plan-compare/MD/90001/05200/LOS%20ANGELES/pS4802-163-000');
   I.waitForElement('.add-favorite', 50);

   I.dontSee('Show benefit differences only');//1+ plans then show diff
   I.dontSee('Original Medicare');
   I.see('Add Current Plan');
   I.see('Benefit Highlights - Your Personalized Benefits');
   I.see('Benefit Highlights - Plan Coverage Overview');
   I.see('Drug Coverage - Your Prescription Drug Costs and Savings');
   I.see('Drug Coverage - Prescription Drug Coverage');
   I.see('Initial Coverage');//for MAPD,MD, not MAO
   I.dontSee('Doctor & Hospital Coverage - Your Doctors');
   I.dontSee('Doctor & Hospital Coverage - Medical and Hospital Coverage');
   I.dontSee('Doctor & Hospital Coverage - Additional Coverage');
   I.see('Plan Brochures');
   I.dontSeeElement('.original-title');


});

 

// Scenario('new compare page to quote, to details, to enrollment', {retries: 1}, async(I, compareV2Page, quotePage, leadPage, drugPage, pharmacyPage) => {
//     I.amOnPage(EHMP + '/?detailCompareRedesign=true&doctorSearch=v2&planUnitRedesign=blue#plan-compare/MA/90001/05200/LOS%20ANGELES/pH0543-151-000');
//     I.waitForElement('.add-favorite', 50);
//     //add drug to do MAPD plan benefit fields check
//     I.click(compareV2Page.fields.addDrugLink);
//     I.wait(1);
//     drugPage.addDrug();
//     I.wait(3);
//     //back to compare from drug page
//     I.click(pharmacyPage.fields.backBtn);
//     I.waitForText('Your Potential Drug Savings', 20);
//     //to plan quote
//     I.click(compareV2Page.fields.backBtn);
//     I.wait(1);
//     I.seeInCurrentUrl('quote-plans/MA/');
//     I.wait(5);
//     I.click(quotePage.fields.compareLink);
//     I.wait(4);

//     //to plan details
//     I.click(compareV2Page.fields.planBenefitLink);I.wait(3);
//     I.seeInCurrentUrl('plan-benefits');
//     I.waitForElement('.add-doctor-v2',10);
//     I.see('Gap coverage starts after the total drug costs paid by you and the plan reach $3,820, up to the out-of-pocket threshold of $5,100');
//     I.see('Prescription Drug Deductible');//not for MAO
//     I.seeNumberOfVisibleElements("a[data-nav='drugCostsDetails']", 1);//not for MAO
//     I.see('Catastrophic coverage starts when your annual out-of-pocket costs exceed $5,100');
//     I.click('#breadcrumb-back');I.wait(1);

//     //to enrollment
//     I.click(compareV2Page.fields.enrollBtn);I.wait(4);
//     const pageSource = await I.grabSource();
//     if (pageSource.includes('continue-btn')) {
//         //leadPage.closeLeadForm();
//         I.click(leadPage.fields.backBtn);I.wait(1);
//         I.seeInCurrentUrl('plan-compare');
//         I.click(compareV2Page.fields.enrollBtn);
//         I.waitForElement(leadPage.fields.backBtn, 20);
//         leadPage.typeLead(randomInfo.firstName, randomInfo.lastName, randomInfo.phone);I.wait(2);
//     };
//     I.seeInCurrentUrl('plan-review');
//     I.click('#ehimcPlanReviewView > div > div.review-container.cf > div.review-medicare-card.cf > div > div > button');
//     I.wait(2);
//     I.seeInCurrentUrl('appId');
// });
