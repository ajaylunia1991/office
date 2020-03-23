/**
 * Created by carolx on 2019/3/25.
 */

Feature('ehmp - detail');

var config = require('config');
var EHMP = config.get('EHMP');

Scenario('V1 detail, MA case', async(I, doctorPage, drugPage, pharmacyPage) =>{

    I.amOnPage(EHMP +'?qascript=Y&detailCompareRedesign=false#plan-benefits/MA/90001/05200/LOS%20ANGELES/H0504/021/000');I.wait(5);
    I.see('Medicare Advantage Plans (Part C) Detail page');
    I.see('Monthly Premium');
    I.see('plus Part B premium');
    I.see('Your Doctors');

    //add doctor
    I.click("//a[text()='Add your doctor to see if they accept this plan']");
    I.waitForVisible('#ds-loc', 30);
    doctorPage.addDocs();
    I.seeElement("//p[@class='doc-name not-covered']");
    
    //add drug
    I.click("//div[@class='btn-annual-savings btn three-line-btn']");
    I.wait(1);
    drugPage.addDrug();
    I.wait(2);
    pharmacyPage.addPharmacy();
    I.waitForVisible('//*[@id="dt-drug-summary-area"]/div/div[3]/div/div/div[2]/div')
    I.click('//*[@id="dt-drug-summary-area"]/div/div[3]/div/div/div[2]/div');
    I.wait(3);
    I.waitForElement("//a[@id='ehi-btnShowMonthlyCosts']")
});

Scenario('V1 Detail, MS case ', async(I) =>{

    I.amOnPage(EHMP +'?qascript=Y&type=MS#plan-benefits-ms/MS/90001/05200/LOS%20ANGELES/M/false/1950/01/01/90107300/61');I.wait(5);
    I.see('Medicare Supplement Insurance Plan Details');
    I.see('Monthly Premium');
    I.see('Annual Deductible');
    I.dontSee('Tier 4');

});

Scenario('V1 detail, MD case', async(I, doctorPage, drugPage, pharmacyPage) =>{

    I.amOnPage(EHMP +'?qascript=Y&detailCompareRedesign=false#plan-benefits/MD/90001/05200/LOS%20ANGELES/S5810/295/000');I.wait(5
        );
    I.see('Medicare Prescription Drug Plans (Part D) Detail page');
    I.see('Monthly Premium');
    I.see('Prescription Drug Coverage');

    //add drug
    I.click("//div[@class='btn-annual-savings btn three-line-btn']");
    I.wait(1);
    drugPage.addDrug();
    I.wait(2);
    pharmacyPage.addPharmacy();
    I.waitForVisible('//*[@id="dt-drug-summary-area"]/div/div[3]/div/div/div[2]/div');
    I.click('//*[@id="dt-drug-summary-area"]/div/div[3]/div/div/div[2]/div');
    I.wait(3);
    I.seeElement("//div[@id='plan-details']")
});

