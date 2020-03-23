Feature('ehmp - drug');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHMP');

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Drug - This scenario adds multiple drugs (Brand/Generic/Package), goes to MA, refreshes and verifies drugs on edit drug page', async function(I, quotePageEHMP) {
    I.amOnPage(domain + '/?&forceV1=true#quote-plans/MA/76621/45651/HILL/1/p1');
    I.wait(5);
    I.waitForVisible(quotePageEHMP.fields.addDrug,10);
    console.log("I am adding drug");
    I.click(quotePageEHMP.fields.addDrug);
    /////addingDrug(l1, l2, l3, l4, type, dosage, pack)
    await quotePageEHMP.addingDrug('t','o','p','a','brand',null,null);
    I.see('Topamax', quotePageEHMP.fields.drugTitle);
    I.click(quotePageEHMP.fields.addDrugBtn);
    I.wait(5);
    I.click(quotePageEHMP.fields.pharmacy);
    I.wait(5);
    I.click(quotePageEHMP.fields.selectPharmacy);
    I.wait(3);
    I.click(quotePageEHMP.fields.addDrugMore);
    await quotePageEHMP.addingDrug('l','i','p','i','generic',null,null);
    I.see('atorvastatin (generic for Lipitor)', quotePageEHMP.fields.drugTitle);
    I.click(quotePageEHMP.fields.addDrugBtn);
    I.wait(3);
    I.click(quotePageEHMP.fields.addDrugMore);
    await quotePageEHMP.addingDrug('a','m','i','n','brand',null,'25.0 Gram Jar');
    I.see('Aminosalicylic Acid-5', quotePageEHMP.fields.drugTitle);
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
    I.click(quotePageEHMP.fields.editDrugCovered);
    I.wait(3);
    I.see("Topamax 15 mg sprinkle capsule", quotePageEHMP.fields.drugName);
    I.see("atorvastatin 10 mg tablet", quotePageEHMP.fields.drugName);
    I.see("Aminosalicylic Acid-5", quotePageEHMP.fields.drugName);
    I.wait(1);
});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Drug - This scenario adds Brand/Dosage drug with Pharmacy from MA, goes to MD quote, refreshes and verifies drug on edit drug page', async function(I, quotePageEHMP) {
    I.amOnPage(domain + '/?&forceV1=true#quote-plans/MA/10001/33420/NEW YORK/1/p1s');
    I.wait(5);
    I.waitForVisible(quotePageEHMP.fields.addDrug,10);
    console.log("I am adding drug");
    I.click(quotePageEHMP.fields.addDrug);
    /////addingDrug(l1, l2, l3, l4, type, dosage, pack)
    await quotePageEHMP.addingDrug('t','o','p','a','brand',null,null);
    I.see('Topamax', quotePageEHMP.fields.drugTitle);
    I.click(quotePageEHMP.fields.addDrugBtn);
    I.wait(7);
    I.click(quotePageEHMP.fields.pharmacy);
    I.wait(7);
    I.click(quotePageEHMP.fields.selectPharmacy);
    I.wait(5);
    I.click(quotePageEHMP.fields.backToPlansLink);
    I.wait(4);
    I.waitForVisible(quotePageEHMP.fields.drugSavings,10);
    I.refreshPage();
    I.wait(4);
    let url = await I.grabCurrentUrl();
    console.log("Final URL with drugs: " + url);
    I.click(quotePageEHMP.fields.quoteTypeSelect);
    I.wait(3);
    I.see('Medicare Part D Plans',quotePageEHMP.fields.quoteTypeMD);
    I.waitForVisible(quotePageEHMP.fields.drugSavings,10);
    I.click(quotePageEHMP.fields.addDrug);
    I.wait(3);
    I.see("Topamax 15 mg sprinkle capsule", quotePageEHMP.fields.drugName);
    I.wait(1);
});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Drug - This scenario adds Generic/Dosage/Package drug with Pharmacy, goes to MD quote, refreshes and verifies drug on edit drug page', async function(I, quotePageEHMP) {
    I.amOnPage(domain + '/?&forceV1=true#quote-plans/MA/65201/26090/BOONE/1/p1');
    I.wait(5);
    I.waitForVisible(quotePageEHMP.fields.addDrug,10);
    console.log("I am adding drug");
    I.click(quotePageEHMP.fields.addDrug);
    /////addingDrug(l1, l2, l3, l4, type, dosage, pack)
    await quotePageEHMP.addingDrug('b','u','m','i','generic',null,'100.0 Milliliter Glass Container');
    I.see('albumin, human 25 % (generic for Buminate 25 %)', quotePageEHMP.fields.drugTitle);
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
    I.click(quotePageEHMP.fields.quoteTypeSelect);
    I.wait(3);
    I.see('Medicare Part D Plans',quotePageEHMP.fields.quoteTypeMD);
    I.waitForVisible(quotePageEHMP.fields.drugSavings,10);
    I.click(quotePageEHMP.fields.addDrug);
    I.wait(3);
    I.see("albumin, human 25 % intravenous solution", quotePageEHMP.fields.drugName);
    I.see("100.0 Milliliter Glass Container", quotePageEHMP.fields.drugPackageName);
    I.wait(1);
});
