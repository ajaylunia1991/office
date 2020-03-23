//carol
Feature('ehmp - detail');

var config = require('config');
var EHMP = config.get('EHMP');
var randomInfo = require(process.cwd() +'/utils/random').randomInfo();

Scenario('new detail page/MD case components ', async(I, detailV2Page, quotePage, doctorPage, leadPage, drugPage, pharmacyPage, currentPlanPage) => {
    I.amOnPage(EHMP + '?qascript=Y&detailCompareRedesign=true&doctorSearch=v2&planUnitRedesign=blue#plan-benefits/MD/90001/05200/LOS%20ANGELES/S4802/163/000');
    I.waitForElement('.add-favorite', 50);
    
    //components check
  	I.wait(5);
    I.dontSee("//a[text()='Doctor & Hospital Coverage']");
    I.dontSee("for someone in \'good\' health");
    I.see('Medicare Part D');
    I.see('monthly premium');
    I.see('Benefit Highlights');
    I.see('Drug Coverage');
    I.see('Plan Brochures');
    I.seeElement('.print');
    I.seeElement('.nav-container.clear')

    //standard drug benefit check
    I.see('Greater of 5% coinsurance or $3.60 copay');//Catastrophic Coverage/Generic Drugs
    I.see('Greater of 5% coinsurance or $8.95 copay');//Catastrophic Coverage/Brand-Name Drugs
    I.see('Applies to Tier 3: Preferred Brand, Tier 4: Non-Preferred Drug, Tier 5: Specialty Tier');

    //add drug
    I.click("//a[@data-wa-link='Click:MD:BenefitHighlights:AddRxDrugs']");
    I.wait(1);
    drugPage.addDrug();
    I.wait(4);
    //back to detail from drug page
    I.click(pharmacyPage.fields.backBtn);
    I.waitForText('Your Annual Drug Costs', 20);
    I.see('B-12 Compliance 1,000 mcg/mL injection kit');
    I.see('Total Drug Costs');
    I.see('$4,299');
    I.seeElement("//a[@data-wa-link='Click:MD:DrugCoverage:EditRxDrugs']")


    //edit pharmacy
    I.click(detailV2Page.fields.addPharmacy);
    I.waitForElement('#ehi-popupDialog', 10);
    I.wait(3);
    pharmacyPage.addPharmacy();I.wait(2);
    I.see('In Network, Non-preferred');

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

Scenario('new detail page to quote', {retries: 2}, async(I, detailV2Page, quotePage, leadPage, drugPage, pharmacyPage) => {
    I.amOnPage(EHMP + '/?qascript=Y&detailCompareRedesign=true&forceV1=true#plan-benefits/MA/90001/05200/LOS%20ANGELES/H0562/044/000');
    I.waitForElement('.add-favorite', 50);
    //to plan quote
    I.click(detailV2Page.fields.backBtn);
    I.wait(1);
    I.seeInCurrentUrl('quote-plans/MA/');
});
