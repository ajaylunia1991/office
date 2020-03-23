Feature('ehmp - doctor');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHMP');

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Doctor - This scenario adds multiple Doctors within 25/5/50 miles, edit/delete Doctor, and verifies Doctor on Plan Detail', async function(I, quotePageEHMP, quotePlanDetailPage) {
    I.amOnPage(domain + '/?qascript=Y&forceV1=true#plan-benefits/MA/90001/05200/LOS ANGELES/H5087/017/000');
    I.wait(5);
    console.log("I am adding Doctor on Plan Detail");
    I.click(quotePlanDetailPage.fields.addDocPlanDetail);
    I.wait(3);
    // addingDoctor(zip, name, radius, location)
    await quotePageEHMP.addingDoctor('44444','Petersen, Scott ','25 miles','1st location');

    I.click(quotePageEHMP.fields.addMoreDoc);
    I.wait(1);

    await quotePageEHMP.addingDoctor('94085','Bracamonte, Cristina ','5 miles', null);

    I.click(quotePageEHMP.fields.addMoreDoc);
    I.wait(1);

    await quotePageEHMP.addingDoctor('94085','Riccoboni, Carl ','50 miles', null);

    I.see('Petersen, Scott', quotePageEHMP.fields.nameDoc1);
    I.see('Bracamonte, Cristina', quotePageEHMP.fields.nameDoc2);
    I.see('Riccoboni, Carl', quotePageEHMP.fields.nameDoc3);

    // there is issue on Refresh MEDI-24575

    I.wait(2);
    I.click(quotePageEHMP.fields.rmDoc3);
    I.wait(2);

    I.see('Petersen, Scott', quotePageEHMP.fields.nameDoc1);
    I.see('Bracamonte, Cristina', quotePageEHMP.fields.nameDoc2);
    I.dontSeeElement(quotePageEHMP.fields.nameDoc3);
    I.dontSee('Riccoboni, Carl');

    I.click(quotePageEHMP.fields.seeDocPlans);
    I.wait(3);
    I.click(quotePlanDetailPage.fields.docAndCoverage);
    I.wait(2);
    I.see('0 of 2 covered', quotePlanDetailPage.fields.docCoveredLabel);
    I.wait(2);

    I.seeElement(quotePlanDetailPage.fields.nameDoc1);
    I.seeElement(quotePlanDetailPage.fields.nameDoc2);
    I.dontSeeElement(quotePlanDetailPage.fields.nameDoc3);
    I.dontSee('Riccoboni, Carl');
    I.see('Edit', quotePlanDetailPage.fields.editDocLInk);


});

