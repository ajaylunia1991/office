Feature('ehmp - header');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHMP');
var ehm = config.get('EHM');

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - Header - This scenario verifies that minisite param is not dropped through Header Humana', async function(I, headerPage, ehmPage) {
    I.amOnPage(domain + '/ehi/medicare/mini-site?allid=Hum32544&msType=msc-humana-66&forceV1=true&qascript=Y#quote-plans/MA/90001/05200/LOS ANGELES/1/p1/f6:66');
    I.wait(10);

    console.log("I am navigating to EHM from Header");
    I.waitForElement(headerPage.fields.learnAboutMedicare, 5);
    I.click(headerPage.fields.learnAboutMedicare);
    I.wait(5);
    I.click(headerPage.fields.medicareAdvantage);
    I.wait(6);
    I.seeInCurrentUrl(ehm + '/medicare-advantage-articles/medicare-advantage-part-c-plans/?allid=Hum32544&msType=msc-humana-66');
    I.click(ehmPage.fields.getStartedBtn);
    I.wait(8);
    I.seeInCurrentUrl(domain);
    I.seeInCurrentUrl('/ehi/medicare/mini-site?allid=Hum32544&msType=msc-humana-66');
    I.seeInCurrentUrl('#quote-plans/MA/90001/05200/LOS ANGELES/1/p1/f6:66');
    console.log("I am checking MA quote is loaded");
    I.seeInCurrentUrl('/MA/');
    headerPage.verifyQuotePage('Medicare Advantage Plans');
    I.wait(2);

});


Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - Header - This scenario verifies that minisite param is not dropped through Logo WellCare', async function(I, headerPage, ehmPage) {
    I.amOnPage(domain + '/ehi/medicare/mini-site?allid=Wel35109&msType=msc-wellcare-124&landingPage=LAHero&forceV1=true&qascript=Y#quote-plans/MD/12345/33650/SCHENECTADY/1/p1/f6:124');
    I.wait(10);
    console.log("I am navigating to EHM from Logo");
    I.waitForElement(headerPage.fields.ehmpLogo, 5);
    I.click(headerPage.fields.ehmpLogo);
    I.wait(5);
    //I.click(headerPage.fields.medicareAdvantage);
    //I.wait(6);
    I.seeInCurrentUrl(ehm + '/?allid=Wel35109&msType=msc-wellcare-124');
    I.click(ehmPage.fields.topComparePlansBtn);
    I.wait(8);
    I.seeInCurrentUrl(domain);
    I.seeInCurrentUrl('/ehi/medicare/mini-site?allid=Wel35109&msType=msc-wellcare-124');
    I.seeInCurrentUrl('#quote-plans/MD/12345/33650/SCHENECTADY/1/p1/f6:124');
    console.log("I am checking MD quote is loaded");
    I.seeInCurrentUrl('/MD/');
    headerPage.verifyQuotePage('Medicare Part D Plans');
    I.wait(2);

});