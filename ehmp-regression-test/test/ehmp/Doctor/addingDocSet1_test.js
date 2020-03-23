Feature('ehmp - doctor');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHMP');

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Doctor - This scenario adds Doctor within 50 miles on MA quote page, refreshes and verifies Doctor on MA quote, Plan Detail and Compare', async function(I, quotePageEHMP, quotePlanDetailPage, quoteComparePage) {
    I.amOnPage(domain + '/?&qascript=Y&forceV1=true#quote-plans/MA/12345/33650/SCHENECTADY/1/p1');
    I.wait(5);
    console.log("I am adding Doctor on MA Plan");
    I.click(quotePageEHMP.fields.addDocTopLink);
    I.wait(3);
    // addingDoctor(zip, name, radius, location)
    await quotePageEHMP.addingDoctor('12345','Lee, Jason ','50 miles',null);

    I.click(quotePageEHMP.fields.seeDocPlans);
    I.wait(3);
    I.refreshPage();
    I.wait(7);

    I.see('Edit Your Doctors', quotePageEHMP.fields.editDocLink);
    I.see('Jason Lee', quotePageEHMP.fields.docNameInPlan);
    I.see('(Edit)', quotePageEHMP.fields.docEditInPlan);

    I.click(quotePageEHMP.fields.planCDPHP);
    I.wait(2);
    I.see('Jason Lee', quotePlanDetailPage.fields.nameDoc);
    I.see('Edit', quotePlanDetailPage.fields.editDocLInk);
    I.click(quotePlanDetailPage.fields.backToPlans);
    I.wait(2);
    I.click(quotePageEHMP.fields.planCDPHPCompare);
    I.wait(1);
    I.click(quotePageEHMP.fields.bthCompare);
    I.wait(4);

    I.see('Jason Lee', quoteComparePage.fields.nameDoc);
    I.see('(Edit)', quoteComparePage.fields.editDocLInk);


});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Doctor - This scenario verify message is Doctor is not found within specific miles', async function(I, quotePageEHMP) {
    I.amOnPage(domain + '/?qascript=Y&forceV1=true#quote-plans/MA/12345/33650/SCHENECTADY/1/p1/f0');
    I.wait(5);
    console.log("I am searching for Doctor that is not available for that zip/mile");
    I.click(quotePageEHMP.fields.addDocTopLink);
    I.wait(3);
    I.fillField(quotePageEHMP.fields.docLoc, '10001');
    I.wait(2);
    I.pressKey('ArrowDown');
    I.pressKey('Enter');
    I.wait(1);
    I.click(quotePageEHMP.fields.nextBtnZip);
    I.wait(2);
    I.fillField(quotePageEHMP.fields.docName, 'Petersen, Scott ');
    I.pressKey('ArrowDown');
    I.wait(2);
    I.click(quotePageEHMP.fields.nextBtnDoc);
    I.wait(2);
    I.see('No results were found for “Petersen, Scott ” in “New York, NY 10001”.', quotePageEHMP.fields.noDocResult);
    I.click(quotePageEHMP.fields.btnReturnToPlans);
    I.wait(1);
    I.see('Add Your Doctors', quotePageEHMP.fields.editDocLink);



});