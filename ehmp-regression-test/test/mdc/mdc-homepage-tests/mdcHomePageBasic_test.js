Feature('mdc');

/**
*old address: https://git.ehealthinsurance.com/projects/MU/repos/automation-tests/browse/ehi-ehim-tests/apps/mdc/mdc/mdc-homepage-tests/test/uitests/comparePlansPageTest.js
*/

var config = require('config');
var domain = config.get('MDC');
var assert = require('assert');
var ehmp = config.get('EHMP');
// include data - just to make sure that each time we open home page, it will re-launch the browser and could get different home page version.
//try 15 times , make sure all 3 home page was tested.
var mdchomeretry = require('../../../data/mdcHomePageABTEST.js')();

// this parameter needs to be global outside of Scenario, when all homev1run,homev2run,homev3run are > 0, then all three home page was tested.
var homev1run = 0;
var homev2run = 0;
var homev3run = 0;

var result = 0;

/*var randomInfo = require('../../utils/random').randomInfo();
var leadSearch = require('../../../utils/lead_search');*/

var randomInfo = require('../../../utils/random').randomInfo();
var leadSearch = require('../../../utils/lead_search');

Data(mdchomeretry.Time).Scenario('ENV: ' +process.env.NODE_ENV + ' Willis -MDC home page AB test and navigate to EHMP@mdcHomePageBasic',  async function (I, recommendation_homePage, ehmPage, current) {

// homev1run means how many times the script hit home version1

//    while (homev1run < 1){   // using while loop is not working because it won't re-launch the browser so it won't randomly get into different home page version.

   I.amOnPage(domain + '/?mboxDisable=true');


    I.wait(2);

//determine what version of MDC home page it is
//    let v1 = await I.grabAttributeFrom('/html/body/div[2]/div', 'style');
//    console.log('v1 style is' + v1);
//    let v2 = await I.grabAttributeFrom('/html/body/div[3]/div', 'style');
//    console.log('v2 style is' + v2);
//    let v3 = await I.grabAttributeFrom('/html/body/div[4]/div[1]', 'style');
//        console.log('v3 style is' + v3);
//
//    var homeV;
//
//   if (v1 == '') {
//       console.log('it is homepage v1');
//     homeV = 'homeV1';
//   }
//  if (v2 == '') {
//       console.log('it is homepage v2');
//    homeV = 'homeV2';
//   }
//  if (v3 == '') {
//      console.log('it is homepage v3');
//     homeV = 'homeV3';
//      }
//  console.log('homeV = ' + homeV);


//
// test MDC Home page to EHMP


//    if ( homeV == 'homeV1'){
    I.see('Unsure about your Medicare plan options');
    console.log('land on homepage v1');
//    homev1run = homev1run + 1;

    I.click(recommendation_homePage.fields.viewplanbtn);
    I.wait(12);

    I.see('Find Medicare Plans');
    I.see('Learn About Medicare');
    I.see('Find your Medicare Advantage plan');
    I.seeInCurrentUrl( ehmp + '/v2?medicarecom=2&allid=Med40680&roundrobin=1');

 //click on cancel btn on census page and go back to Home page


   // I.click(ehmPage.fields.censusCancelBtn);    remove this for now due to defect MEDI-20911
    I.amOnPage(domain + '/?mboxDisable=true' );

    I.wait(4);
    I.click(recommendation_homePage.fields.viewplanbtn);
    I.wait(4);
    I.click(recommendation_homePage.fields.viewplanbtn2nd);
    I.wait(8);
    I.switchToNextTab(); //switch to new tab on EHMP plan detail page

     I.see('Find Medicare Plans');
    I.see('Learn About Medicare');
    I.see('Find your Medicare Advantage plan');
    I.seeInCurrentUrl( ehmp + '/v2?medicarecom=2&allid=Med40680&roundrobin=1');





    //I.wait(15);
     //I.seeInCurrentUrl( ehmp + '/?medicarecom=2&allid=Med41422&roundrobin=1');

//    }else if (homeV == 'homeV2'){
//    I.see('Browse financially top-rated Medicare plans at affordable');
//    console.log('land on homepage v2');
//     homev2run = homev2run + 1;

//    I.fillField(homePage.fields.zipcode02, '90001');
//
//    I.click(homePage.fields.viewplanbtn02);
//
//    I.wait(15);
//         I.seeInCurrentUrl( ehmp + '/?medicarecom=2&allid=Med41422&roundrobin=1&zip=89199#quote-plans/MA/89199/29010/CLARK/1/p1');
//
//    }else{
//    I.see('People who shopped with us found an average $541 in potential savings');
//    console.log('land on homepage v3');
//    homev3run = homev3run + 1;
//
//    I.fillField(homePage.fields.zipcode03, '90001');

//    I.click(homePage.fields.viewplanbtn03);
//
//    };
//
//    console.log('homev1run is' + homev1run);
//    console.log('homev2run is' + homev2run);
//    console.log('homev3run is' + homev3run);
//
//    if ( homev1run < 1 ){
//        console.log('rerun v1');
//
//    };
//     if ( homev2run < 1 ){
//            console.log('rerun v2');
//
//        };
// if ( homev3run < 1 ){
//            console.log('rerun v3');
//
//        };

// last run, let's check if all 3 home page was tested.

//    if((current.mdchomeretry == '10') && (homev1run >= 1) && (homev2run >=1) && (homev3run >= 1)){
//      if((current.mdchomeretry == '8') && (homev1run >= 1)){ //only test v1 home page
//
//          console.log('mdchomeretry=' + current.mdchomeretry + ' all home page version were hit');
//     result =1;
//     console.log('result=' + result);
//     assert(result == 1);
//    }else if (current.mdchomeretry == '8'){
//     console.log('mdchomeretry=' + current.mdchomeretry + 'but not all home page version were hit');
//     assert(result == 1);
//    }


//    I.wait(30);

//I.wait(80);
//}
})
