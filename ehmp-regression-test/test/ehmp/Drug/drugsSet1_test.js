Feature('ehmp - drug');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHMP');

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Drug - This scenario adds Brand/Dosage drug without Pharmacy, goes to MA quote, refreshes and verifies drug on edit drug page', async function(I, quotePageEHMP) {
    I.amOnPage(domain + '/?&forceV1=true#quote-plans/MA/12345/33650/SCHENECTADY/1/p1');
    I.wait(5);
    I.waitForVisible(quotePageEHMP.fields.addDrug,10);
    console.log("I am adding drug");
    I.click(quotePageEHMP.fields.addDrug);
    /////addingDrug(l1, l2, l3, l4, type, dosage, pack)
    await quotePageEHMP.addingDrug('w','e','l','l','brand',null,null);
    I.see('Wellbutrin SR', quotePageEHMP.fields.drugTitle);
    I.click(quotePageEHMP.fields.addDrugBtn);
    I.wait(3);
    I.click(quotePageEHMP.fields.backToPlansLink);
    I.wait(4);
    I.waitForVisible(quotePageEHMP.fields.drugSavings,10);
    I.refreshPage();
    I.wait(4);
    let url = await I.grabCurrentUrl();
    console.log("Final URL with drugs: " + url);
    I.waitForVisible(quotePageEHMP.fields.drugSavings,10);
    I.click(quotePageEHMP.fields.addDrug);
    I.wait(3);
    I.see("Wellbutrin SR 100 mg tablet, 12 hr sustained-release", quotePageEHMP.fields.drugName);
    I.wait(1);


});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Drug - This scenario adds Generic/Dosage drug with Pharmacy, goes to MA quotes and verifies drug on edit drug page', async function(I, quotePageEHMP) {
    I.amOnPage(domain + '/?&forceV1=true#quote-plans/MA/76621/45651/HILL/1/p1');
    I.wait(5);
    I.waitForVisible(quotePageEHMP.fields.addDrug,10);
    console.log("I am adding drug");
    I.click(quotePageEHMP.fields.addDrug);
    /////addingDrug(l1, l2, l3, l4, type, dosage, pack)
    await quotePageEHMP.addingDrug('w','e','l','l','generic',null,null);
    I.see('bupropion HCl (generic for Wellbutrin SR)', quotePageEHMP.fields.drugTitle);
    I.click(quotePageEHMP.fields.addDrugBtn);
    I.wait(5);
    I.click(quotePageEHMP.fields.pharmacy);
    I.wait(5);
    I.click(quotePageEHMP.fields.selectPharmacy);
    I.wait(3);
    I.click(quotePageEHMP.fields.backToPlansLink);
    I.wait(4);
    I.waitForVisible(quotePageEHMP.fields.drugSavings,10);
    I.refreshPage();
    I.wait(4);
    let url = await I.grabCurrentUrl();
    console.log("Final URL with drugs: " + url);
    I.waitForVisible(quotePageEHMP.fields.drugSavings,10);
    I.click(quotePageEHMP.fields.addDrug);
    I.wait(3);
    I.see("bupropion HCl SR 100 mg tablet,12 hr sustained-release", quotePageEHMP.fields.drugName);
    I.wait(1);
});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Drug - This scenario verifies message when no pricing for Package drug, then adds Package with pricing, goes to MA quote and verifies drug on edit drug page', async function(I, quotePageEHMP) {
    I.amOnPage(domain + '/?&forceV1=true#quote-plans/MA/90001/05200/LOS%20ANGELES/1/p1');
    I.wait(5);
    I.waitForVisible(quotePageEHMP.fields.addDrug,10);
    console.log("I am adding drug");
    I.click(quotePageEHMP.fields.addDrug);
    /////addingDrug(l1, l2, l3, l4, type, dosage, pack)
    await quotePageEHMP.addingDrug('p','o','p','r','no type',null,'50.0 Milliliter Vial');
    I.click(quotePageEHMP.fields.addDrugBtn);
    I.wait(3);
    I.see("Unfortunately, we do not currently have pricing information for your selected drug. Please select another dosage or package type or add a different drug.", quotePageEHMP.fields.priceMissingMessage);
    I.wait(1);
    I.selectOption(quotePageEHMP.fields.drugPackage, '50.0 Milliliter Vial (2 Vials per package)');
    I.click(quotePageEHMP.fields.addDrugBtn);
    I.wait(5);
    I.click(quotePageEHMP.fields.pharmacy);
    I.wait(5);
    I.click(quotePageEHMP.fields.selectPharmacy);
    I.wait(3);
    I.click(quotePageEHMP.fields.backToPlansLink);
    I.wait(4);
    I.waitForVisible(quotePageEHMP.fields.drugSavings,10);
    I.refreshPage();
    I.wait(4);
    let url = await I.grabCurrentUrl();
    console.log("Final URL with drugs: " + url);
    I.waitForVisible(quotePageEHMP.fields.drugSavings,10);
    I.click(quotePageEHMP.fields.addDrug);
    I.wait(2);
    I.see("50.0 Milliliter Vial (2 Vials per package)", quotePageEHMP.fields.drugPackageName);
});