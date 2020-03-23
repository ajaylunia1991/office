Feature('mdc - carrierProfilePageLeadFormTest');

/**
 *old address: https://git.ehealthinsurance.com/projects/MU/repos/automation-tests/browse/ehi-ehim-tests/apps/mdc/mdc/carriers/test/uitests/carrierProfilePageLeadFormTest.js
 */

var config = require('config');
var domain = config.get('MDC');

var randomInfo = require('../../../utils/random').randomInfo();

Scenario('ENV: ' +process.env.NODE_ENV + ' - Willis - Carrier Profile Page Lead Form Test @carriers', {retries: 3}, async function(I, carrierProfilePage) {
    
    I.amOnPage(domain　 + '/carriers/aetna/');
        I.wait(1);
if( process.env.NODE_ENV != 'prod') {
    console.log('First name is :' + randomInfo.firstName + '; Last name is :' + randomInfo.lastName + '; Phone num is :' + randomInfo.phone + ';');
    
    carrierProfilePage.createLeadFromCarrierProfilePage(randomInfo.firstName, randomInfo.lastName, randomInfo.phone, '94043');
    // I.wait(5);
    // I.see('You can also find plans online');
    //find plan btn
    I.waitForVisible('div.lead-submitted div.see-plans a',50);
    I.wait(1);

    carrierProfilePage.validateFastQuoteUrlForFindPlansButton();

    //how to catch the cookie of the domain ???
    // let cookie = await I.grabCookie('cmmedicare.wpengine.com');
    // assert(cookie.value, 'true');
    // assert(cookie.name, 'leadFormEnabled');
    // assert(cookie.value, 'junk');

    carrierProfilePage.validateTCPAText();

    carrierProfilePage.validateProductPlanTypesElements();

//    carrierProfilePage.validateFastQuoteUrlForMaProductTypeFindPlans();
//    carrierProfilePage.validateFastQuoteUrlForMdProductTypeFindPlans();
//    carrierProfilePage.validateFastQuoteUrlForMsProductTypeFindPlans();
//
//    carrierProfilePage.validateFastQuoteUrlForMaProductTypeSymbol();
//    carrierProfilePage.validateFastQuoteUrlForMdProductTypeSymbol();
//    carrierProfilePage.validateFastQuoteUrlForMsProductTypeSymbol();
//
//    carrierProfilePage.validateFastQuoteUrlForMaProductTypeLink();
//    carrierProfilePage.validateFastQuoteUrlForMdProductTypeLink();
//    carrierProfilePage.validateFastQuoteUrlForMsProductTypeLink();
}
})

// The above test case has included the below,so comment out the below test case.

// Scenario('Carrier Profile Page Product Plan Types Test', async function(I, carrierProfilePage) {
//     I.amOnPage(domain　 + '/carriers/aetna/');

//     carrierProfilePage.validateProductPlanTypesElements();

//     carrierProfilePage.validateFastQuoteUrlForMaProductTypeFindPlans();
//     carrierProfilePage.validateFastQuoteUrlForMdProductTypeFindPlans();
//     carrierProfilePage.validateFastQuoteUrlForMsProductTypeFindPlans();

//     carrierProfilePage.validateFastQuoteUrlForMaProductTypeSymbol();
//     carrierProfilePage.validateFastQuoteUrlForMdProductTypeSymbol();
//     carrierProfilePage.validateFastQuoteUrlForMsProductTypeSymbol();

//     carrierProfilePage.validateFastQuoteUrlForMaProductTypeLink();
//     carrierProfilePage.validateFastQuoteUrlForMdProductTypeLink();
//     carrierProfilePage.validateFastQuoteUrlForMsProductTypeLink();

// })

    