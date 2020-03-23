Feature('ehmp - header');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHMP');
var assert = require('assert');
var ehmp = config.get('EHMP');
var ehm = config.get('EHM');

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria Header - This scenario verifies MA/MS/MD quote from Header and allid defaultThrottle in URL and allid', async function(I, headerPage, ehmPage) {
    I.amOnPage(domain + '/?allid=seo5804000&defaultThrottle=GREEN');
    I.wait(5);

    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am navigating to quote page");
    I.fillField(ehmPage.fields.zipCodeCensus, '90001');
    I.wait(4);
    I.click(ehmPage.fields.btnCensusNext);
    I.wait(4);
    //console.log("I am on quote page and closing Lead Form popup");
    //I.click(headerPage.fields.quoteLeadForm);
    //I.wait(2);
    console.log("I am checking MA quote is loaded");
    I.seeInCurrentUrl('/MA/');
    headerPage.verifyQuotePage('Medicare Advantage Plans');
    I.wait(2);
    console.log("I am selecting MD from header");
    I.click(headerPage.fields.findMedicarePlans);
    I.wait(2);
    I.click(headerPage.fields.selectMD);
    I.wait(3);
    console.log("I am checking MD quote is loaded");
    I.seeInCurrentUrl('/MD/');
    headerPage.verifyQuotePage('Medicare Part D Plans');
    console.log("I am checking allid and defaultThrottle in URL");
    I.seeInCurrentUrl(ehmp + '/?allid=seo5804000');
    I.seeInCurrentUrl('defaultThrottle=GREEN');
    I.wait(2);
    console.log("I am selecting MS from header");
    I.click(headerPage.fields.findMedicarePlans);
    I.wait(2);
    I.click(headerPage.fields.selectMS);
    I.wait(3);
    console.log("I am checking MS quote is loaded");
    I.seeInCurrentUrl('/MS/');
    headerPage.verifyQuotePage('Medicare Supplement Insurance Plans');
    console.log("I am checking allid and defaultThrottle in URL");
    I.seeInCurrentUrl(ehmp + '/?allid=seo5804000');
    I.seeInCurrentUrl('defaultThrottle=GREEN');
    I.wait(2);
    console.log("I am selecting MA from header");
    I.click(headerPage.fields.findMedicarePlans);
    I.wait(2);
    I.click(headerPage.fields.selectMA);
    I.wait(3);
    console.log("I am checking MA quote is loaded");
    I.seeInCurrentUrl('/MA/');
    headerPage.verifyQuotePage('Medicare Advantage Plans');
    console.log("I am checking allid and defaultThrottle in URL");
    I.seeInCurrentUrl(ehmp + '/?allid=seo5804000');
    I.seeInCurrentUrl('defaultThrottle=GREEN');
    I.wait(2);

});

    Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - Header - This scenario verifies that only MD is available under Header on quote if showPdpOnly=true', async function(I, headerPage, ehmPage) {
        I.amOnPage(domain + '/?showPdpOnly=true');
        I.wait(5);

        let url = await I.grabCurrentUrl();
        console.log(url);
        console.log("I am navigating to quote page");
        I.fillField(ehmPage.fields.zipCodeCensus, '90001');
        I.wait(4);
        I.click(ehmPage.fields.btnCensusNext);
        I.wait(6);
        //console.log("I am on quote page and closing Lead Form popup");
        //I.click(headerPage.fields.quoteLeadForm);
        //I.wait(4);
        console.log("I am checking MD quote is loaded");
        I.seeInCurrentUrl('/MD/');
        I.seeInCurrentUrl('showPdpOnly=true');
        headerPage.verifyQuotePage('Medicare Part D Plans');
        I.click(headerPage.fields.findMedicarePlans);
        I.wait(4);
        I.seeElement(headerPage.fields.selectMD);
        I.dontSeeElement(headerPage.fields.selectMA);
        I.dontSeeElement(headerPage.fields.selectMS);


    });
