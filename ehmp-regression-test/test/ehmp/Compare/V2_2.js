
Feature('ehmp - compare');

var config = require('config');
var EHMP = config.get('EHMP');
var randomInfo = require(process.cwd() +'/utils/random').randomInfo();

Scenario('new compare page/MAO case, save session, show diff ', {retries: 1}, async(I, compareV2Page, drugPage, pharmacyPage, currentPlanPage) => {
    I.amOnPage(EHMP + '/?detailCompareRedesign=true&qascript=Y&doctorSearch=v2&planUnitRedesign=blue#plan-compare/MA/90001/05200/LOS%20ANGELES/pH0543-121-000');
    I.waitForElement(compareV2Page.fields.addFavoriteLink, 50);
    //save session once add current plan
     I.click(compareV2Page.fields.addCurrentPlanLink);
     I.wait(2);
     currentPlanPage.addCurrentPlan();
     I.wait(1);
     I.seeInCurrentUrl('ssd');
 
    //add drug to check MAO drug related benefit fields
    I.click(compareV2Page.fields.addDrugLink);
    I.wait(1);
    drugPage.addDrug();
    I.wait(2);
    I.click(pharmacyPage.fields.backBtn);
    I.waitForText('Your Potential Drug Savings', 20);
 
    //MAO case, and will go to plan details to check MAO features
    I.dontSee('Initial Coverage');
    I.click(compareV2Page.fields.planBenefitLink);I.wait(3);
    I.seeInCurrentUrl('plan-benefits');
    I.waitForElement(compareV2Page.fields.addDoctorV2,10);
    I.see('Prescription Drug Coverage');
    I.dontSee('Prescription Drug Deductible');//not for MAO
    //I.dontSeeElement("a[data-nav='drugCostsDetails']");//not for MAO
    I.click('#breadcrumb-back');I.wait(1);
 
    //show diff
 
 });