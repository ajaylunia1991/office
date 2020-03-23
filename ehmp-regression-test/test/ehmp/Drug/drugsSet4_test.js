Feature('ehmp - drug');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHMP');

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Drug - This scenario edits drugs (Brand/Generic/Package), goes to MA/MD, refreshes and verifies drugs are updated', async function(I, quotePageEHMP) {
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
    await quotePageEHMP.addingDrug('l','i','p','i','brand',null,null);
    I.see('Lipitor', quotePageEHMP.fields.drugTitle);
    I.click(quotePageEHMP.fields.addDrugBtn);
    I.wait(3);
    I.click(quotePageEHMP.fields.backToPlansLink);
    I.wait(4);
    I.waitForVisible(quotePageEHMP.fields.drugSavings,10);
    I.refreshPage();
    I.wait(4);
    I.waitForVisible(quotePageEHMP.fields.drugSavings,10);
    I.click(quotePageEHMP.fields.editDrugCovered);
    I.wait(3);
    I.see("Topamax 15 mg sprinkle capsule", quotePageEHMP.fields.drugName);
    I.see("Lipitor", quotePageEHMP.fields.drugName);
    I.wait(2);
    I.click(quotePageEHMP.fields.editDrugLink);
    I.wait(1);
    I.click(quotePageEHMP.fields.switchToGenLink); // switching Topa drug to generic
    I.wait(4);
    I.see('atorvastatin (generic for Lipitor)', quotePageEHMP.fields.drugNameEdit);
    I.selectOption(quotePageEHMP.fields.drugDosageEdit, 'Topamax 25 mg tablet');
    I.wait(3);
    I.fillField(quotePageEHMP.fields.drugQuantityEdit, '5'); // for atorvastatin
    //I.click(quotePageEHMP.fields.drugToolEdit);
    I.wait(5);
    I.click(quotePageEHMP.fields.addMoreDrugsEdit);
    await quotePageEHMP.addingDrug('a','m','i','n','brand',null,'25.0 Gram Jar');
    I.see('Aminosalicylic Acid-5', quotePageEHMP.fields.drugTitle);
    I.click(quotePageEHMP.fields.addDrugBtn);
    I.wait(3);
    I.click(quotePageEHMP.fields.backToPlansLink);
    I.wait(4);
    I.waitForVisible(quotePageEHMP.fields.drugSavings,10);
    I.refreshPage();
    I.wait(4);
    I.click(quotePageEHMP.fields.quoteTypeSelect);
    I.wait(3);
    I.waitForVisible(quotePageEHMP.fields.drugSavings,10);
    I.click(quotePageEHMP.fields.editDrugMDPlanUnit);
    I.wait(3);
    let url = await I.grabCurrentUrl();
    console.log("Final URL with drugs: " + url);
    I.see("atorvastatin 10 mg tablet", quotePageEHMP.fields.drugName);
    I.see("25.0 Gram Jar", quotePageEHMP.fields.drugPackageName);
    I.see("305 per month", quotePageEHMP.fields.drugQuantity);
    I.see("Topamax 25 mg tablet", quotePageEHMP.fields.drugName);
    I.see("Aminosalicylic Acid-5 powder", quotePageEHMP.fields.drugName);
    I.click(quotePageEHMP.fields.drugTolEditMD);
    I.wait(5);
    //I.seeElement(quotePageEHMP.fields.switchToBrandLink); Known issue that cannot be fixed now with current drug tool implementation
    //I.see('atorvastatin (generic for Lipitor)', quotePageEHMP.fields.drug2NameEdit); //Uncomment after defect is fixed
    I.see('Aminosalicylic Acid-5', quotePageEHMP.fields.drugNamePacEdit);
    I.see('Topamax', quotePageEHMP.fields.drug3NameEdit);
    I.see('Aminosalicylic Acid-5 powder', quotePageEHMP.fields.drugDosageNameEdit);

});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Drug - This scenario deletes Brand/Generic/Dosage/Package drugs with Pharmacy on MA Plan Detail, refreshes, goes to Plan Detail and MA quote and checks that drugs are deleted', async function(I, quotePageEHMP, quotePlanDetailPage) {
    I.amOnPage(domain + '/?&forceV1=true#plan-benefits/MA/44444/36790/TRUMBULL/R5495/001/000');
    I.wait(5);
    console.log("I am adding drug on MA Plan Detail");
    I.click(quotePlanDetailPage.fields.addDrugsPlanDetail);
    /////addingDrug(l1, l2, l3, l4, type, dosage, pack)
    await quotePageEHMP.addingDrug('l','i','a','l','brand',null,null);
    I.see('Lialda', quotePageEHMP.fields.drugTitle);
    I.click(quotePageEHMP.fields.addDrugBtn);
    I.wait(5);
    I.click(quotePageEHMP.fields.pharmacy);
    I.wait(5);
    I.click(quotePageEHMP.fields.selectPharmacy);
    I.wait(3);
    I.click(quotePageEHMP.fields.addDrugMore);
    await quotePageEHMP.addingDrug('r','e','t','i','brand',null,'45.0 Gram Tube');
    I.see('Retin-A', quotePageEHMP.fields.drugTitle);
    I.click(quotePageEHMP.fields.addDrugBtn);
    I.wait(3);
    I.click(quotePageEHMP.fields.addDrugMore);
    await quotePageEHMP.addingDrug('f','e','l','b','generic',null,null);
    I.see('felbamate (generic for Felbatol)', quotePageEHMP.fields.drugTitle);
    I.click(quotePageEHMP.fields.addDrugBtn);
    I.wait(3);
    I.click(quotePageEHMP.fields.backToPlansLink);
    I.wait(4);
    I.waitForVisible(quotePlanDetailPage.fields.editDrugsLink,10);
    I.refreshPage();
    I.wait(4);
    let url = await I.grabCurrentUrl();
    console.log("Final URL with drugs: " + url);
    I.waitForVisible(quotePlanDetailPage.fields.editDrugsLink,10);
    I.see('0 of 3 covered', quotePlanDetailPage.fields.drugsNumCovered);
    I.wait(3);
    I.see("Lialda 1.2 gram tablet,delayed release", quotePlanDetailPage.fields.drugName2PlanDetail);
    I.see("Retin-A 0.01 % topical gel", quotePlanDetailPage.fields.drugName3PlanDetail);
    I.see("felbamate 600 mg/5 mL oral suspension", quotePlanDetailPage.fields.drugName1PlanDetail);
    I.wait(2);
    I.click(quotePlanDetailPage.fields.editDrugsLink);
    I.wait(1);
    I.click(quotePlanDetailPage.fields.drugRemoveIcon);
    I.wait(2);
    I.click(quotePageEHMP.fields.drugTolEditMD);
    I.wait(1);
    I.click(quotePlanDetailPage.fields.drugRemoveLink);
    I.wait(2);
    I.click(quotePageEHMP.fields.backToPlansLink);
    I.wait(4);
    I.see("Lialda 1.2 gram tablet,delayed release", quotePlanDetailPage.fields.drugName1PlanDetail);
    I.click(quotePlanDetailPage.fields.editDrugsLink);
    I.wait(2);
    I.click(quotePlanDetailPage.fields.drugRemoveIcon);
    I.wait(2);
    I.see("Your drug list is empty. Please add more drugs.", quotePlanDetailPage.fields.drugSummaryList);
    I.click(quotePlanDetailPage.fields.backToPlansBtn);
    I.wait(2);
    I.see('+ Add rx drugs', quotePlanDetailPage.fields.addDrugsPlanDetail);
    I.click(quotePlanDetailPage.fields.backToPlans);
    I.wait(2);
    I.see('Add Your Rx Drugs', quotePageEHMP.fields.addDrug);


});



