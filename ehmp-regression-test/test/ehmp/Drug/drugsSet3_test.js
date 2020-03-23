Feature('ehmp - drug');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHMP');

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Drug - This scenario verifies that multiple Brand/Generic/Dosage/Package drugs with Pharmacy are added and refreshed on MA Plan Detail Plan and then available on MA quote', async function(I, quotePageEHMP, quotePlanDetailPage) {
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
    I.wait(1);
    I.click(quotePlanDetailPage.fields.backToPlans);
    I.wait(2);
    I.click(quotePageEHMP.fields.editDrugCovered);
    I.wait(3);
    I.see("felbamate 600 mg/5 mL oral suspension", quotePageEHMP.fields.drugName);
    I.see("45.0 Gram Tube", quotePageEHMP.fields.drugPackageName);
    I.see("lda 1.2 gram tablet,delayed release", quotePageEHMP.fields.drugName);
    I.wait(1);


});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Drug - This scenario verifies that multiple Brand/Generic/Dosage/Package drugs with Pharmacy are added and refreshed on MA Compare Page and then available on MA quote', async function(I, quotePageEHMP, quoteComparePage) {
    I.amOnPage(domain + '/?&forceV1=true#plan-compare/MA/90001/05200/LOS ANGELES/pH5087-017-000,H4982-001-000,H0544-007-000');
    I.wait(5);
    console.log("I am adding drug on MA Compare");
    I.click(quoteComparePage.fields.addDrugsCompare);
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
    I.click(quoteComparePage.fields.backToCompareLink);
    I.wait(4);
    I.waitForVisible(quoteComparePage.fields.editDrugCompare,10);
    I.refreshPage();
    I.wait(4);
    let url = await I.grabCurrentUrl();
    console.log("Final URL with drugs: " + url);
    I.waitForVisible(quoteComparePage.fields.editDrugCompare,10);
    I.see('Your Prescription Drugs (Edit)', quoteComparePage.fields.drugPrescriptionLabel);
    I.see('1 of 3 covered', quoteComparePage.fields.drugsNumCoveredComp1);
    I.see('1 of 3 covered', quoteComparePage.fields.drugsNumCoveredComp2);
    I.see('1 of 3 covered', quoteComparePage.fields.drugsNumCoveredComp3);
    I.wait(3);
    I.see("Lialda 1.2 gram tablet,delayed release", quoteComparePage.fields.drugName3Compare);
    I.see("Retin-A 0.01 % topical gel", quoteComparePage.fields.drugName2Compare);
    I.see("felbamate 600 mg/5 mL oral suspension", quoteComparePage.fields.drugName1Compare);
    I.wait(1);
    I.click(quoteComparePage.fields.bthBackCompare);
    I.wait(2);
    I.click(quotePageEHMP.fields.editDrugCovered);
    I.wait(3);
    I.see("felbamate 600 mg/5 mL oral suspension", quotePageEHMP.fields.drugName);
    I.see("45.0 Gram Tube", quotePageEHMP.fields.drugPackageName);
    I.see("lda 1.2 gram tablet,delayed release", quotePageEHMP.fields.drugName);
    I.wait(1);


});

