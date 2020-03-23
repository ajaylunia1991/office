Feature('ehm - LeadSubmit');
/**
 * Created by Ajay Lunia 
 */
var assert = require('assert');
var config = require('config');
var domain = config.get('EHM')

Scenario('ENV: ' + process.env.NODE_ENV + ' - Ajay - @24924 - LeadSubmit - This scenario verifies Ensure page has been loaded fine and pop up is appearing fine', async function(I, ehmPage) {
    I.amOnPage(domain + '/beginners-guide-to-medicare-download/');
    I.see("Beginner's Guide to Medicare");
    if (process.env.NODE_ENV == 'cm' | process.env.NODE_ENV == 'qa' ) {
    I.fillField(ehmPage.fields.fstName,'testuser');
    I.fillField(ehmPage.fields.lstName,'testuserlastname');
    I.fillField(ehmPage.fields.phone,'3540392832');
    I.fillField(ehmPage.fields.mail,'test_user@gmail.com');
    I.fillField(ehmPage.fields.code,'90001');
    I.click(ehmPage.fields.submitbtn);    
    I.wait(5);
    let tabs = await I.grabNumberOfOpenTabs();
    console.log(tabs);
    I.switchToPreviousTab(0);
    I.wait(5);    
    I.see("Thank you for downloading the Beginner's Guide to Medicare!");
    }
});    