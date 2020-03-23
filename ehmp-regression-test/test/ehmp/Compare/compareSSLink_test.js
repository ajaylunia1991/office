Feature('ehmp - compare');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHMP');
//var assert = require('assert');
var ehmp = config.get('EHMP');

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - BenefitsGym - This scenario verifies "Find participating gyms" link availability on Compare and its reference to Location Search', async function(I, quoteComparePage, quotePlanDetailPage) {

    I.amOnPage(domain + "/?&qascript=Y?type=MS&forceV1=true#plan-compare/MS/90001/05200/LOS%20ANGELES/p90130200-77");
    I.wait(4);
    I.see('SilverSneakers', quoteComparePage.fields.silverSneakersCmpr);
    I.see('Find participating gyms', quoteComparePage.fields.gyms);
    I.wait(1);
    I.click(quoteComparePage.fields.gyms);
    I.wait(5);
    I.switchToNextTab(1);
    I.wait(3);
    I.seeInCurrentUrl(quotePlanDetailPage.fields.silverSneakersLink);

});

