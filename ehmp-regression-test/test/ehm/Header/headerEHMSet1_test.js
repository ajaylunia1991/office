Feature('ehm - Header');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHM');
var ehmp = config.get('EHMP');

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Header - This scenario verifies MA/MS/MD from EHM Find Medicare Plans including allid and redirect to MD quote', async function(I, headerPage, ehmPage, censusPage) {
    I.amOnPage(domain);
    I.wait(5);

    let url = await I.grabCurrentUrl();
    console.log(url);
    console.log("I am selecting MA from EHM Find Medicare Plans");
    I.click(headerPage.fields.findMedicarePlans);
    I.wait(4);
    I.click(headerPage.fields.selectMA_EHM);
    I.wait(4);
    console.log("I am checking MA Census is loaded");
    I.seeInCurrentUrl(ehmp);
    I.seeInCurrentUrl('type=MA');
    I.seeInCurrentUrl('allid=EHM39972');
    I.dontSeeInCurrentUrl('#quote-plans/');
    ehmPage.verifyCensusPage('Find your Medicare Advantage plan');
    I.wait(2);
    I.click(ehmPage.fields.censusCancelBtn);
    I.wait(3);
    I.seeInCurrentUrl(domain);
    console.log("I am selecting MS from EHM Find Medicare Plans");
    I.click(headerPage.fields.findMedicarePlans);
    I.wait(2);
    I.click(headerPage.fields.selectMS_EHM);
    I.wait(3);
    console.log("I am checking MS Census is loaded");
    I.seeInCurrentUrl('type=MS');
    ehmPage.verifyCensusPage('Find your Medicare Supplement');
    I.wait(2);
    I.click(ehmPage.fields.censusCancelBtn);
    I.wait(3);
    I.seeInCurrentUrl(domain);
    console.log("I am selecting MD from EHM Find Medicare Plans");
    I.click(headerPage.fields.findMedicarePlans);
    I.wait(2);
    I.click(headerPage.fields.selectMD_EHM);
    I.wait(3);
    console.log("I am checking MD Census is loaded");
    I.seeInCurrentUrl('type=MD');
    ehmPage.verifyCensusPage('Find your Medicare Part D plan');
    I.wait(2);
    //I.click(ehmPage.fields.censusCancelBtn);
    //I.wait(3);
    //I.seeInCurrentUrl(domain);
    console.log("I am filling in zip code on MD census page");
    I.fillField(censusPage.fields.zip, '12345');
    I.wait(3);
    console.log("I am on MD census page and clicking Find Plans button");
    I.click(censusPage.fields.nextBtn);
    I.wait(15);
    console.log("I am on EHMP with type=MD");
    I.seeInCurrentUrl(ehmp + '/?type=MD');
    I.seeInCurrentUrl('allid=EHM39972');
    I.seeInCurrentUrl('#quote-plans/');
    I.seeInCurrentUrl('/MD/');
    I.seeInCurrentUrl('/12345');
    I.see('Medicare Part D Plans', headerPage.fields.planTitle);


});

