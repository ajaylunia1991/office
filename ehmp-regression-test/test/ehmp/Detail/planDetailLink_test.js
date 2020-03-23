Feature('ehmp - detail');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHMP');


Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - MoreDetailLink - This scenario verifies View More Details link on MA quote', async function(I, quotePageEHMP, headerPage) {

    I.amOnPage(domain + "/?type=MS&forceV1=true&qascript=Y#quote-plans/MA/90001/05200/LOS ANGELES/1/p1/f6:70");
    I.wait(3);
    console.log("I am checking MA quote is loaded");
    I.seeInCurrentUrl('/MA/');
    headerPage.verifyQuotePage('Medicare Advantage Plans');
    I.wait(2);
    I.see('View More Details', quotePageEHMP.fields.viewMoreLink);
    I.click(quotePageEHMP.fields.viewMoreLink);
    I.wait(3);
    I.dontSee('View More Details', quotePageEHMP.fields.viewMoreLink);
    I.see("Star Rating", quotePageEHMP.fields.starRatingDetail);
    I.see("Coverage Highlights", quotePageEHMP.fields.coverageHighlights);
    I.see("Prescription Drug Coverage (Initial Coverage, Standard Retail Cost-Sharing, 30 Day)", quotePageEHMP.fields.drugCoverageMA);
    I.see("Other Coverage Highlights", quotePageEHMP.fields.otherCoverage);
    I.see('Add to Favorites', quotePageEHMP.fields.addToFavorite);
    I.see('View All Coverage Details >', quotePageEHMP.fields.viewDetails);
    I.see('View Less', quotePageEHMP.fields.viewLessExpanded);


});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - MoreDetailLink - This scenario verifies View More Details link on MD quote', async function(I, quotePageEHMP, headerPage) {

    I.amOnPage(domain + "/?type=MS&forceV1=true&qascript=Y#quote-plans/MD/44444/36510/MAHONING/1/p1/f6:1022");
    I.wait(3);
    console.log("I am checking MD quote is loaded");
    I.seeInCurrentUrl('/MD/');
    headerPage.verifyQuotePage('Medicare Part D Plans');
    I.wait(2);
    I.click(quotePageEHMP.fields.viewMoreLink);
    I.wait(3);
    I.see("Star Rating", quotePageEHMP.fields.starRatingDetail);
    I.see("Coverage Highlights", quotePageEHMP.fields.coverageHighlights);
    I.see("Initial Coverage (31-Day Supply, Standard Retail Cost-Sharing)", quotePageEHMP.fields.initialCoverageMD);
    I.see("Tier 1: Preferred Generic", quotePageEHMP.fields.preferredGeneric);
    I.see('Add to Favorites', quotePageEHMP.fields.addToFavorite);
    I.see('View All Coverage Details >', quotePageEHMP.fields.viewDetails);
    I.see('View Less', quotePageEHMP.fields.viewLessExpanded);


});


Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - MoreDetailLink - This scenario verifies that Plan Detail is loaded after selecting View More Details -> View All Coverage Details on MD quote', async function(I, quotePageEHMP, headerPage, quotePlanDetailPage) {

    I.amOnPage(domain + "/?type=MS&forceV1=true&qascript=Y#quote-plans/MD/44444/36510/MAHONING/1/p1/f6:1022");
    I.wait(3);
    console.log("I am checking MD quote is loaded");
    I.seeInCurrentUrl('/MD/');
    headerPage.verifyQuotePage('Medicare Part D Plans');
    I.wait(2);
    I.click(quotePageEHMP.fields.viewMoreLink);
    I.wait(3);
    I.click(quotePageEHMP.fields.viewDetails);
    I.wait(3);
    I.see("EnvisionRxPlus (PDP)", quotePlanDetailPage.fields.planDetailRedesign);
    I.seeInCurrentUrl('ehealthmedicareplans.com'); // verifying URL
    I.seeInCurrentUrl('#plan-benefits/');
    I.see('Enroll' , quotePlanDetailPage.fields.enrollBtn);
    I.see('Benefit Highlights' , quotePlanDetailPage.fields.benefitHighlightsDetail);
    I.see("Medicare Part D i", quotePlanDetailPage.fields.planType);
    I.click(quotePlanDetailPage.fields.backToPlans);
    I.wait(2);
    headerPage.verifyQuotePage('Medicare Part D Plans');

});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - LessDetailLink - This scenario verifies View Less Details on MA quote', async function(I, quotePageEHMP, headerPage) {

    I.amOnPage(domain + "/?type=MS&forceV1=true&qascript=Y#quote-plans/MA/90001/05200/LOS ANGELES/1/p1/f6:70");
    I.wait(3);
    I.click(quotePageEHMP.fields.viewMoreLink);
    I.wait(3);
    I.see('View Less', quotePageEHMP.fields.viewLessExpanded);
    I.dontSee('View More Details', quotePageEHMP.fields.viewMoreLink);
    I.click(quotePageEHMP.fields.viewLessExpanded);
    I.wait(2);
    I.dontSeeElement(quotePageEHMP.fields.viewLessExpanded);
    I.dontSee("Star Rating", quotePageEHMP.fields.starRatingDetail);
    I.dontSee("Coverage Highlights", quotePageEHMP.fields.coverageHighlights);
    I.dontSee("Prescription Drug Coverage (Initial Coverage, Standard Retail Cost-Sharing, 30 Day)", quotePageEHMP.fields.drugCoverageMA);
    I.dontSee("Other Coverage Highlights", quotePageEHMP.fields.otherCoverage);
    I.dontSee('Add to Favorites', quotePageEHMP.fields.addToFavorite);
    I.dontSee('View All Coverage Details >', quotePageEHMP.fields.viewDetails);
    I.dontSeeElement(quotePageEHMP.fields.viewLessExpanded);

});


