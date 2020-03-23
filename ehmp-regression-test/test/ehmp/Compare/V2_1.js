//carol
Feature('ehmp - compare');

var config = require('config');
var EHMP = config.get('EHMP');
var randomInfo = require(process.cwd() +'/utils/random').randomInfo();


Scenario('new compare page to quote, to details, to enrollment', async(I, compareV2Page, quotePage, leadPage, drugPage, pharmacyPage) => {
    I.amOnPage(EHMP + '/?detailCompareRedesign=true&qascript=Y&doctorSearch=v2&planUnitRedesign=blue#plan-compare/MA/90001/05200/LOS%20ANGELES/pH0543-151-000');
    I.waitForElement(compareV2Page.fields.addFavoriteLink, 50);
    //add drug to do MAPD plan benefit fields check
    I.click(compareV2Page.fields.addDrugLink);
    I.wait(1);
    drugPage.addDrug();
    I.wait(3);
    //back to compare from drug page
    I.click(pharmacyPage.fields.backBtn);
    I.waitForText('Your Potential Drug Savings', 20);
    //to plan quote
    I.click(compareV2Page.fields.backBtn);
    I.wait(1);
    I.seeInCurrentUrl('quote-plans/MA/');
    I.wait(5);
    I.click(quotePage.fields.compareLink);
    I.wait(4);

    //to plan details
    I.click(compareV2Page.fields.planBenefitLink);I.wait(3);
    I.seeInCurrentUrl('plan-benefits');
    I.waitForElement(compareV2Page.fields.addDoctorV2,10);
    I.see('Gap coverage starts after the total drug costs paid by you and the plan reach $4,020, up to the out-of-pocket threshold of $6,350');
    I.see('Prescription Drug Deductible');//not for MAO
    //I.seeNumberOfVisibleElements("a[data-nav='drugCostsDetails']", 1);//not for MAO； 2020 plan does't have TCO for now
    I.see('Catastrophic coverage starts when your annual out-of-pocket costs exceed $6,350');
    I.click('#breadcrumb-back');I.wait(1);

    //to enrollment
    I.click(compareV2Page.fields.enrollBtn);I.wait(4);
    const pageSource = await I.grabSource();
    if (pageSource.includes('continue-btn')) {
        //leadPage.closeLeadForm();
        I.click(leadPage.fields.backBtn);I.wait(1);
        I.seeInCurrentUrl('plan-compare');
        I.click(compareV2Page.fields.enrollBtn);
        I.waitForElement(leadPage.fields.backBtn, 20);
        leadPage.typeLead(randomInfo.firstName, randomInfo.lastName, randomInfo.phone);
    };
    I.seeInCurrentUrl('enrollment');
});
