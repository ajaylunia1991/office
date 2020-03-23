Feature('Ehim- homepage');

var config = require('config');
var domain = config.get('EHIM');

//ALGO-1331, Testcase-C24733
Scenario('ENV:' + process.env.NODE_ENV + '-GCK - this script verifies user should not be able to add special chars in zipcode field',async(I, ehmPage,ehimPage)=>{

    I.amOnPage(domain + '/?mboxDisable=true');
    I.see('Medicare Made Easy');    
    I.click(ehimPage.fields.zipCode);
    I.fillField(ehimPage.fields.zipCode, '@#@&%');
    I.wait(2);
    I.click(ehimPage.fields.findPlansBtn);
    I.wait(2);
    I.seeInCurrentUrl('ehealthmedicareplans.com');
    I.wait(2);
    I.fillField(ehmPage.fields.zipCodeCensus, '@#@&%');
    I.click(ehmPage.fields.btnCensusNext);
    I.see('Please enter a valid zip code');

})