Feature('ehmp - quote');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHMP');

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - PlanBenefits - This scenario verifies plan benefits on MS Compare page for Blue Shield Plan N', async function(I, quoteComparePage) {
    I.amOnPage(domain + '/?&qascript=Y?type=MS&forceV1=true#plan-compare/MS/90001/05200/LOS%20ANGELES/p90130200-77');
    I.wait(6);
    console.log("I am checking plan benefits for Blue Shield Plan N on Compare");
    I.see('Dental Services', quoteComparePage.fields.dentalServicesCmpr);
    I.see('Vision Services', quoteComparePage.fields.visionServicesCmpr);
    I.see('Hearing Services', quoteComparePage.fields.hearingServicesCmpr);
    I.see('SilverSneakers', quoteComparePage.fields.silverSneakersCmpr);


});

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - PlanBenefits - This scenario verifies plan benefits on MS Compare page for AARP and Blue Shield Plan G', async function(I, quoteComparePage) {
    I.amOnPage(domain + '/?&qascript=Y?type=MS&forceV1=true#plan-compare/MS/90001/05200/LOS%20ANGELES/p90130200-77');
    I.wait(6);
    console.log("I am checking plan benefits for AARP and Blue Shield Plan N on Compare");
    I.see('Blue Shield of California Medicare Supplement', quoteComparePage.fields.planCarrier1);
    //I.see('AARP insured by UnitedHealthcare Medicare Supplement', quoteComparePage.fields.planCarrier2);
    I.see('Dental Services', quoteComparePage.fields.dentalServicesCmpr);
    I.see('Vision Services', quoteComparePage.fields.visionServicesCmpr);
    I.see('Hearing Services', quoteComparePage.fields.hearingServicesCmpr);
    //I.see('Fitness Benefits', quoteComparePage.fields.fitnessBenefitsCmpr);
    I.see('SilverSneakers', quoteComparePage.fields.silverSneakersCmpr);


});

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - PlanBenefits - This scenario verifies plan benefits (covered) on MS Plan Detail for Blue Shield Plan G Extra', async function(I, quotePageEHMP, quotePlanDetailPage) {
    I.amOnPage(domain + '/?&qascript=Y&forceV1=true#plan-benefits-ms/MS/90001/05200/LOS ANGELES/F/false/1940/01/01/90130200/78');
    I.wait(5);
    console.log("I am checking plan benefits (covered) for Blue Shield Plan G Extra");
    I.see('Plan G Extra', quotePlanDetailPage.fields.planDetail);
    I.see('Dental Services', quotePlanDetailPage.fields.dentalServices);
    I.see('Vision Services', quotePlanDetailPage.fields.visionServices);
    I.see('Hearing Services', quotePlanDetailPage.fields.hearingServices);
    I.see('SilverSneakers', quotePlanDetailPage.fields.silverSneakers);
    I.see('You pay $0-$25 and all costs above allowances for frames and lenses. Pls see Outline of Coverage for details.', quotePlanDetailPage.fields.visionServicesCoverage);
    I.see('Hearing Aid Services: $499 per aid for Vista 610 model or', quotePlanDetailPage.fields.hearingServicesCoverage);
    I.see('You pay $0', quotePlanDetailPage.fields.silverSneakersCoverage);


});


