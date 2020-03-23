Feature('ehmp - detail');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHMP');
//var assert = require('assert');
var ehmp = config.get('EHMP');

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - BenefitsGym - This scenario verifies "Find participating gyms" link availability on MS Plan Detail and its reference to Location Search', async function(I, quotePlanDetailPage) {

    I.amOnPage(domain + "/?type=MS&forceV1=true&qascript=Y#plan-benefits-ms/MS/90001/05200/LOS%20ANGELES/90130200/77");
    I.wait(4);
    I.see('SilverSneakers', quotePlanDetailPage.fields.silverSneakers);
    I.see('Find participating gyms', quotePlanDetailPage.fields.gyms);
    I.wait(1);
    I.scrollTo(quotePlanDetailPage.fields.inpatientHospitalCoverage);
    I.wait(1);
    I.click(quotePlanDetailPage.fields.gyms);
    I.wait(5);
    I.switchToNextTab(1);
    I.wait(3);
    I.seeInCurrentUrl(quotePlanDetailPage.fields.silverSneakersLink);

});

