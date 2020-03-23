Feature('mdc');

/**
*old address: https://git.ehealthinsurance.com/projects/MU/repos/automation-tests/browse/ehi-ehim-tests/apps/mdc/mdc/mdc-homepage-tests/test/uitests/comparePlansPageTest.js
*/

var config = require('config');
var domain = config.get('MDC');
var assert = require('assert');
var ehmp = config.get('EHMP');


var randomInfo = require('../../../utils/random').randomInfo();
var leadSearch = require('../../../utils/lead_search');

 var aetna = 'Aetna Medicare is a PDP, HMO, PPO plan with a Medicare contract. Our SNPs also have contracts with State Medicaid programs. Enrollment in our plans depends on contract renewal.';
 var humana = 'Humana is a Medicare Advantage [HMO, PPO and PFFS] organization and a stand-alone prescription drug plan with a Medicare contract. Enrollment in any Humana plan depends on contract renewal. This information is not a complete description of benefits. Contact the plan for more information. Limitations, copayments and restrictions may apply. [Benefits, premiums and/or member cost-share] may change on January 1 of each year. The [Formulary, pharmacy network, and/or provider network] may change at any time. You will receive notice when necessary.';
 var united = 'Plans are insured through UnitedHealthcare Insurance Company or one of its affiliated companies, a Medicare Advantage organization with a Medicare contract and a Medicare-approved Part D sponsor. Enrollment in the plan depends on the plan’s contract renewal with Medicare.';


Scenario('ENV: ' +process.env.NODE_ENV + ' Willis - Compare Plans Page Elements Test @partnerhomepagetest',  async function (I, comparePlansPage) {

     I.amOnPage(domain　+ '/partner/?allid=che7678000');
     I.wait(2);
     // console.log("Recommendation Home Page Opened");

     I.click('//*[@id="menu-item-355197"]/a'); //click on Recommandation

     I.wait(2);

    comparePlansPage.validateElements();

    //Compare Plans Page Disclaimers Test
    comparePlansPage.validateDisclaimerText(aetna,humana,united);

    //Compare Plans Page Create Lead Test Test

        I.wait(2);
        if (process.env.NODE_ENV == 'prod' ) {


          I.seeInSource('https://partner.ehealth.com/documents/10280/1630850/HORIZONTAL_FULL_COLOR');

           I.click(comparePlansPage.fields.button);
                I.wait(8);
                I.see('Find Medicare Plans');
                I.see('Learn About Medicare');
                I.seeInCurrentUrl( ehmp + '/v2?medicarecom=2&allid=che7678000&roundrobin=1#/');

          I.seeInSource('https://partner.ehealth.com/documents/10280/1630850/HORIZONTAL_FULL_COLOR');

        }else if (process.env.NODE_ENV != 'prod' ) {

        I.fillField(comparePlansPage.fields.fn, randomInfo.firstName);
        I.fillField(comparePlansPage.fields.ln, randomInfo.lastName);
        I.fillField(comparePlansPage.fields.phone, randomInfo.phone);
        console.log('First name is :' + randomInfo.firstName + '; Last name is :' + randomInfo.lastName + '; Phone num is :' + randomInfo.phone + ';');

        I.fillField(comparePlansPage.fields.zip, '90001');
        I.wait(2);
        I.click(comparePlansPage.fields.button);
        I.wait(8);
        I.see('Find Medicare Plans');
        await I.see('Learn About Medicare');

        //verify lead was created
        let rows = await leadSearch.search(randomInfo);
        console.log("rows: " + rows);
        assert (rows == 1);

        //Verify the EHMP URL is expected
        I.seeInCurrentUrl( ehmp + '/?typeDefaulted=true&type=MA&medicarecom=2&allid=che7678000&roundrobin=1&leadFormEnabled=false&forceV1=true#quote-plans/MA/90001/05200/LOS ANGELES/1/p1');
        let url = await I.grabCurrentUrl();
        console.log(`Current URL is [${url}]`);
}
       // I.wait(8);


    //Compare Plans Page Product Plan Types Fast Quote Test
    comparePlansPage.validateFastQuoteUrlForMaProductTypeFindPlans();
    comparePlansPage.validateFastQuoteUrlForMsProductTypeFindPlans();
    comparePlansPage.validateFastQuoteUrlForMdProductTypeFindPlans();
    
})