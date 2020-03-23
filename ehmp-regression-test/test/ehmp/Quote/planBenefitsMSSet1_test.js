Feature('ehmp - quote');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHMP');

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - PlanBenefits - This scenario verifies plan benefits on MS quote page (zip only) for Blue Shield', async function(I, quotePageEHMP) {
    I.amOnPage(domain + '/?&qascript=Y&forceV1=true#quote-plans/MS/90001/05200/LOS ANGELES/1/p1/f6:32');
    I.wait(5);
    console.log("I am checking plan benefits for Blue Shield Plan G");
    I.see('Plan G', quotePageEHMP.fields.planName);
    I.see('SilverSneakers', quotePageEHMP.fields.blueShieldBnf1);
    I.see('Fitness Benefits', quotePageEHMP.fields.blueShieldBnf2);
    I.see('Part B Excess Charges', quotePageEHMP.fields.blueShieldBnf3);
    I.see('Skilled Nursing Facilities', quotePageEHMP.fields.blueShieldBnf4);
    I.see('Foreign Travel Emergency', quotePageEHMP.fields.blueShieldBnf5);


});

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - PlanBenefits - This scenario verifies plan benefits on MS quote page (full census) for Blue Shield', async function(I, quotePageEHMP) {
    I.amOnPage(domain + '/?&qascript=Y&forceV1=true#quote-plans/MS/90001/05200/LOS ANGELES/F/false/1940/01/01/1/p1/f6:32');
    I.wait(5);
    console.log("I am checking plan benefits for Blue Shield Plan F Extra");
    I.see('Plan F Extra', quotePageEHMP.fields.planNameFExtra);
    I.see('Vision', quotePageEHMP.fields.blueShieldFBnf1);
    I.see('Hearing', quotePageEHMP.fields.blueShieldFBnf2);
    I.see('SilverSneakers', quotePageEHMP.fields.blueShieldFBnf3);
    I.see('Fitness Benefits', quotePageEHMP.fields.blueShieldFBnf4);
    I.see('Part B Excess Charges', quotePageEHMP.fields.blueShieldFBnf5);
    I.see('Skilled Nursing Facilities', quotePageEHMP.fields.blueShieldFBnf6);
    I.see('Foreign Travel Emergency', quotePageEHMP.fields.blueShieldFBnf7);


});

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - PlanBenefits - This scenario verifies plan benefits (not covered) on MS Plan Detail page for Blue Shield Plan G', async function(I, quotePlanDetailPage) {
    I.amOnPage(domain + '/?&qascript=Y&forceV1=true#plan-benefits-ms/MS/90001/05200/LOS ANGELES/90130200/76');
    I.wait(5);
    console.log("I am checking plan benefits (not covered) for Blue Shield Plan G on Plan Detail");
    I.see('Dental Services', quotePlanDetailPage.fields.dentalServices);
    I.see('Vision Services', quotePlanDetailPage.fields.visionServices);
    I.see('Hearing Services', quotePlanDetailPage.fields.hearingServices);
    I.see('SilverSneakers', quotePlanDetailPage.fields.silverSneakers);
    I.see('Not covered', quotePlanDetailPage.fields.visionServicesCoverage);
    I.see('Not covered', quotePlanDetailPage.fields.hearingServicesCoverage);
    I.see('You pay $0', quotePlanDetailPage.fields.silverSneakersCoverage);
    I.see('Not covered', quotePlanDetailPage.fields.dentalServicesCoverage);


});