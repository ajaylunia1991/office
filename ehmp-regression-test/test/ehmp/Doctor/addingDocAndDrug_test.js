Feature('ehmp - doctor');
/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHMP');

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Doctor - This scenario adds Doctor and Drug on MA quote page, refreshes, adds one more Doctor/Drug and verifies them on MA quote', async function(I, quotePageEHMP) {
    I.amOnPage(domain + '/?qascript=Y&forceV1=true#quote-plans/MA/12345/33650/SCHENECTADY/1/p1/f0');
    I.wait(5);
    console.log("I am adding Doctor");
    I.click(quotePageEHMP.fields.addDocTopLink);
    I.wait(3);
    await quotePageEHMP.addingDoctor('12345','Lee, Jason ','50 miles',null);
    I.click(quotePageEHMP.fields.seeDocPlans);
    I.wait(3);
    console.log("I am adding Drug");
    I.click(quotePageEHMP.fields.addDrug);
    /////addingDrug(l1, l2, l3, l4, type, dosage, pack)
    await quotePageEHMP.addingDrug('w','e','l','l','brand',null,null);
    I.click(quotePageEHMP.fields.addDrugBtn);
    I.wait(3);
    I.click(quotePageEHMP.fields.backToPlansLink);
    I.wait(4);
    I.refreshPage();
    I.wait(7);
    let url = await I.grabCurrentUrl();
    console.log("Final URL with drugs: " + url);
    I.click(quotePageEHMP.fields.editDocLink);
    I.wait(3);
    I.click(quotePageEHMP.fields.addMoreDoc);
    I.wait(1);
    await quotePageEHMP.addingDoctor('44444','Petersen, Scott ','25 miles','1st location');
    I.click(quotePageEHMP.fields.seeDocPlans);
    I.wait(3);

    console.log("I am adding drug");
    I.click(quotePageEHMP.fields.editDrug);
    I.click(quotePageEHMP.fields.addDrugMore);
    /////addingDrug(l1, l2, l3, l4, type, dosage, pack)
    await quotePageEHMP.addingDrug('f','e','l','b','generic',null,null);
    I.click(quotePageEHMP.fields.addDrugBtn);
    I.wait(3);
    I.click(quotePageEHMP.fields.backToPlansLink);
    I.wait(4);
    I.see('Edit Your Doctors', quotePageEHMP.fields.editDocLink);
    I.see('Scott Petersen', quotePageEHMP.fields.docNameInPlanUnit);
    //I.see('Scott Petersen');
    I.see('Jason Lee', quotePageEHMP.fields.docNameInPlanUnit);
    //I.see('Jason Lee');
    I.waitForVisible(quotePageEHMP.fields.drugSavings,10);
    I.click(quotePageEHMP.fields.addDrug);
    I.wait(3);
    I.see("Wellbutrin SR 100 mg tablet, 12 hr sustained-release", quotePageEHMP.fields.drugName);
    I.see("felbamate 600 mg/5 mL oral suspension", quotePageEHMP.fields.drugName);

});