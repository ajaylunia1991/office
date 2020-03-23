Feature('mdc');

/**
*old address: https://git.ehealthinsurance.com/projects/MU/repos/automation-tests/browse/ehi-ehim-tests/apps/mdc/mdc/recommendation/test/uitests/recoHomePageTest.js
*/

var config = require('config');
var domain = config.get('MDC');
var ehmp = config.get('EHMP');

var assert = require('assert');

var randomInfo = require('../../../utils/random').randomInfo();
var leadSearch = require('../../../utils/reco_lead_search');

Scenario('ENV: ' +process.env.NODE_ENV + ' Willis -Recommendation Homepage UI Test@RecoFlowToEHMP', async function (I, recommendation_homePage) {
    I.amOnPage(domain　+ '/recommendation');
    I.wait(2);
    // console.log("Recommendation Home Page Opened");

    recommendation_homePage.validateMedicareEligibilitySelections();
    // console.log("Validated Reco recommendation_homePageElements");

    recommendation_homePage.clickNewToMedicare();
    // console.log("Whoo..Whoo...Reco Home Page is up and running");



    I.click(recommendation_homePage.fields.viewDetails); //click on viewDetails to get into EHMP
    I.wait(8);
    I.switchToNextTab(); //switch to new tab on EHMP plan detail page


// verify it's on plan detail page
    I.see("Find Medicare Plans");

    var _ehiAppConfig;
    await I.see("Learn About Medicare");

   //Verify the EHMP URL is expected
     I.seeInCurrentUrl( ehmp + '/?medicarecom=3&allid=Med40680&planYear=2020');
     let url = await I.grabCurrentUrl();
     console.log(`Current URL is [${url}]`);

      //determine it's A flow or B flow for AB test

    _ehiAppConfig = await I.executeScript(function() {
      return ehiAppConfig.detailCompareRedesign;
    });

    console.log( "old plan detail page or new plan detail page??" + _ehiAppConfig);

// click on enroll btn on plan detail page
//     if (_ehiAppConfig) {
        console.log("this is redesigned plan detail page");

          I.wait(2);

     //I.see('Benefit Highlights');

      I.click(recommendation_homePage.fields.EHMPenrollBtn);  //click on ENROLL btn on EHMP redesigned plan detail page to get into EHMP application
      I.wait(8);
//       }
//    else {
//        console.log("this is old plan detail page");
//      I.see("Find Medicare Plans");
//        I.see("Learn About Medicare");
//      I.click(homePage.fields.OldEHMPenrollBtn);  //click on oldENROLL btn on EHMP plan detail page to get into EHMP application
//      I.wait(8);
//    }



    //determine if the plan review page was turned on or not.
//     appPlanReview = await I.executeScript(function() {
//      return ehiAppConfig.turnOnPlanReview;
//      determine it's A flow or B flow for AB test
//    });
//    console.log( "turn on plan review page???" + appPlanReview);

// verify the page after clicking on enroll btn on plan detail page
//    if (appPlanReview == 'Y'){
//     I.see("The enrollment process should take no more than"); // check lead form before getting into application.
//      console.log("this is planreview page");
//
//    }
//    else{
//     I.see("Provide Your Information to Get Started With Your Enrollment"); // check lead form before getting into application.
//
//    }

  // switch back to MDC page.
    I.closeCurrentTab();

  //click on enroll btn on MDC RECO last page to get into EHMP application
    I.click(recommendation_homePage.fields.MDCenrollBtn);
    I.wait(18);
    I.switchToNextTab();
    // check info in application.
    I.see("Applicant Info");


    // switch back to MDC page.  test get report lead creation.
    I.closeCurrentTab();
    //clicking on get report and create lead.
    I.fillField(recommendation_homePage.fields.reportFN,randomInfo.firstName);
    I.fillField(recommendation_homePage.fields.reportLN, randomInfo.lastName);
    I.fillField(recommendation_homePage.fields.reportEMAIL, randomInfo.email);
    if (process.env.NODE_ENV == 'cm' | process.env.NODE_ENV == 'qa' ) {

    I.click(recommendation_homePage.fields.reportBtn);
    await I.wait(8);

      //validate the lead is being created in the DB

      //verify lead was created
      let rows = await leadSearch.recosearch(randomInfo);
            console.log("rows: " + rows);
            assert (rows == 1);

}


})