Feature('mdc');

/**
*old address: https://git.ehealthinsurance.com/projects/MU/repos/automation-tests/browse/ehi-ehim-tests/apps/mdc/mdc/recommendation/test/uitests/recoHomePageTest.js
*/

var config = require('config');
var domain = config.get('MDC');
var ehmp = config.get('EHMP');
var assert = require('assert');

var randomInfo = require('../../../utils/random').randomInfo();
var leadSearch = require('../../../utils/mdc_lead_search');

Scenario('ENV: ' +process.env.NODE_ENV + ' Willis -SearchArtical@mdcHomePageBasic', async function (I, recommendation_homePage) {

   // search a invalid artical
    I.amOnPage(domain);
    I.wait(2);

    I.fillField('/html/body/nav/section/div/form/input','abcdef');


    I.click('/html/body/nav/section/div/form/button');
    I.wait(2);

    I.seeInCurrentUrl( domain + '/search/abcdef');
    let url = await I.grabCurrentUrl();
    console.log(`Current URL is [${url}]`);
    I.see('0 Results for "abcdef"');
        I.see('Find and compare Medicare plans and save up to');




   // search valid artical 'medicare'
     I.amOnPage(domain);
           I.wait(2);

        I.fillField('/html/body/nav/section/div/form/input','medicare');


        I.click('/html/body/nav/section/div/form/button');
        I.wait(2);

        I.seeInCurrentUrl( domain + '/search/medicare');
        url = await I.grabCurrentUrl();
        console.log(`Current URL is [${url}]`);
          I.click('//*[@id="main"]/div/div[1]/div[2]/div[2]/div/ul/li[7]/a');
         I.wait(2);
    I.seeInCurrentUrl( domain + '/search/medicare/page/2/');







})