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

Scenario('ENV: ' +process.env.NODE_ENV + '- Willis - GMGShoppingflow@mdcHomePageBasic', async function (I, gmgPage ) {
    I.amOnPage(domain　+ '/pdp-only/?allid=gom7852000&zip=63042&userName=Gary&sid=teby');
    I.wait(1);

    I.see("Compare Part D Prescription Drug Plans");
    I.see("Once you’ve gathered your list of medications, it should take no more than 5-10 minutes to shop for and enroll in the plan that makes the most sense for you");
    I.seeInSource('ehm-colorful-logo.png');


    //now automate I don't have medications shopping flow
    I.click(gmgPage.fields.NomedicationBtn);
    I.seeInCurrentUrl( domain + '/pdp-no-medications/?allid=gom7852000&sid=teby&zip=63042&planUnitRedesign=');
    I.see("No medications? No worries, you can still browse plans with monthly premiums");
    I.see('We highly recommend that you get a prescription drug plan when you first enroll in a Medicare plan. Even if you')

    I.click(gmgPage.fields.BackBtn02)// click on back btn
    I.wait(1);
    I.click(gmgPage.fields.NomedicationBtn);
    I.wait(1)
    I.click(gmgPage.fields.CancelBtn) //click on cancel btn
    I.wait(1)
    I.click(gmgPage.fields.NomedicationBtn);
    I.wait(1)
    I.click(gmgPage.fields.ViewplanBtn);
    I.wait(1)
    I.seeInCurrentUrl( ehmp + '/?type=MD&showPdpOnly=true&hideContact=true&allid=gom7852000&sid=teby&forceV1=true#quote-plans/MD/63042/26940/SAINT LOUIS/1/p1');

    if (process.env.NODE_ENV == 'prod' ) {

    I.seeInSource('https://partner.ehealth.com/documents/10280/1758066/Logo_-_Color_with_Descriptor.png?version=1.0');
    console.log( "Go medigap logo is displaying");
}
    I.wait(1);

// get started flow
    I.amOnPage(domain　+ '/pdp-only/?allid=gom7852000&zip=63042&userName=Gary&sid=teby');
    I.click(gmgPage.fields.GetstartedBtn);
    I.wait(1)
    I.seeInCurrentUrl( ehmp + '/?type=MD&showPdpOnly=true&hideContact=true&allid=gom7852000&sid=teby&forceV1=true#drug/quote-plans/rf0/MD/63042/26940/SAINT LOUIS');

    if (process.env.NODE_ENV == 'prod' ) {

        I.seeInSource('https://partner.ehealth.com/documents/10280/1758066/Logo_-_Color_with_Descriptor.png?version=1.0');
        console.log( "Go medigap logo is displaying");
    }
    I.see("Calculate My Potential Annual Costs and Savings");
    I.see("Add the prescription drugs you would like covered to see how much a new plan could potentially cost");
    I.see("Enter the first 4 letters of the drug name.");
    I.click(gmgPage.fields.BackBtn)// click on back btn
    I.seeInCurrentUrl( ehmp + '/?type=MD&showPdpOnly=true&hideContact=true&allid=gom7852000&sid=teby&forceV1=true#quote-plans/MD/63042/26940/SAINT LOUIS/1/p1');


// get started flow with drug input
    I.amOnPage(domain　+ '/pdp-only/?allid=gom7852000&zip=63042&userName=Gary&sid=teby');
    I.click(gmgPage.fields.GetstartedBtn);
    I.wait(1)
    I.seeInCurrentUrl( ehmp + '/?type=MD&showPdpOnly=true&hideContact=true&allid=gom7852000&sid=teby&forceV1=true#drug/quote-plans/rf0/MD/63042/26940/SAINT LOUIS');

    if (process.env.NODE_ENV == 'prod' ) {

        I.seeInSource('https://partner.ehealth.com/documents/10280/1758066/Logo_-_Color_with_Descriptor.png?version=1.0');
        console.log( "Go medigap logo is displaying");
    }
    I.see("Calculate My Potential Annual Costs and Savings");
    I.see("Add the prescription drugs you would like covered to see how much a new plan could potentially cost");
    I.see("Enter the first 4 letters of the drug name.");

    I.fillField(gmgPage.fields.firstLetter,'A');
    I.fillField(gmgPage.fields.secondLetter,'P');
    I.fillField(gmgPage.fields.thirdLetter,'O');
    I.fillField(gmgPage.fields.fourthLetter,'K');
    I.wait(1);
    I.click(gmgPage.fields.selectBtn);
    I.see("Enter the dosage and quantity for your prescription drug");

})