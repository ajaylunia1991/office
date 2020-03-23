Feature('mdc');
/**
*old address: https://git.ehealthinsurance.com/projects/MU/repos/automation-tests/browse/ehi-ehim-tests/apps/mdc/mdc/recommendation/test/uitests/recoHomePageTest.js
*/

var config = require('config');
var domain = config.get('MDC');
var ehmp = config.get('EHMP');

var assert = require('assert');



//just for prod testing.
Scenario('ENV: ' +process.env.NODE_ENV + ' Willis - MainURLRedirect@mdcBasic08', async function (I, recommendation_homePage) {


 if (process.env.NODE_ENV == 'prod' ) {

    I.amOnPage( 'http://www.medicare.com');
       I.wait(2);

     I.seeInCurrentUrl( 'https://medicare.com/');


    I.amOnPage( 'http://medicare.com');
       I.wait(2);
     I.seeInCurrentUrl( 'https://medicare.com/');



    I.amOnPage( 'http://medicare.com/');
       I.wait(2);
     I.seeInCurrentUrl( 'https://medicare.com/');

//seleinum cannot open URL with http. it's selenium bug.
 //  I.amOnPage('medicare.com');
     //  I.wait(2);
   //  I.seeInCurrentUrl( 'https://medicare.com/');

 //  I.amOnPage( 'www.medicare.com');
       I.wait(2);
   //  I.seeInCurrentUrl( 'https://medicare.com/');

//   I.amOnPage( 'www.medicare.com/');
//       I.wait(2);
//     I.seeInCurrentUrl( 'https://medicare.com/');




    I.amOnPage( 'https://www.medicare.com');
       I.wait(2);

     I.seeInCurrentUrl( 'https://medicare.com/');

    I.amOnPage( 'https://medicare.com');
       I.wait(2);
     I.seeInCurrentUrl( 'https://medicare.com/');

    I.amOnPage( 'https://medicare.com/');
       I.wait(2);
     I.seeInCurrentUrl( 'https://medicare.com/');

//test partner
     I.amOnPage( 'http://medicare.com/ChenMed');
       I.wait(2);
     I.seeInCurrentUrl( 'https://medicare.com/partner/?allid=che7678000');

     I.amOnPage( 'http://www.medicare.com/ChenMed');
       I.wait(2);
     I.seeInCurrentUrl( 'https://medicare.com/partner/?allid=che7678000');



 //   I.amOnPage( 'medicare.com/ChenMed');
       I.wait(2);
   //  I.seeInCurrentUrl( 'https://medicare.com/partner/?allid=che7678000');


//    I.amOnPage( 'www.medicare.com/ChenMed');
//       I.wait(2);
//     I.seeInCurrentUrl( 'https://medicare.com/partner/?allid=che7678000');


    I.amOnPage( 'https://www.medicare.com/ChenMed');
       I.wait(2);
     I.seeInCurrentUrl( 'https://medicare.com/partner/?allid=che7678000');

    I.amOnPage( 'https://medicare.com/ChenMed');
       I.wait(2);
     I.seeInCurrentUrl( 'https://medicare.com/partner/?allid=che7678000');

    I.amOnPage( 'https://medicare.com/ChenMed/');
       I.wait(2);
     I.seeInCurrentUrl( 'https://medicare.com/partner/?allid=che7678000');






}
})