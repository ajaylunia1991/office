Feature('ehm - Footer Disclaimer Test');

/*** created by Reena Sharma ***/

var config = require('config');
var domain = config.get('EHM');

var disclaimer_text = "eHealth's Medicare website is operated by eHealthInsurance Services, Inc., a licensed health insurance agency doing business as eHealth. The purpose of this site is the solicitation of insurance. Contact may be made by an insurance agent/producer or insurance company. eHealth and Medicare supplement insurance plans are not connected with or endorsed by the U.S. government or the federal Medicare program. We offer plans from a number of insurance companies.";

//ALGO-537- @C24807 : This Scenario to verify Footer disclaimer text on EHM pages

Scenario('ENV: ' +process.env.NODE_ENV + '- Reena -ALGO-537- @C24807 : This Scenario to verify Footer disclaimer text on EHM pages', async function(I,ehmPage) {    
    // Verify Disclaimer text on EHM Home Page
    I.amOnPage(domain);
    I.wait(2);
    I.waitForVisible(ehmPage.fields.ehmDisclaimerText, 2);
    I.scrollTo(ehmPage.fields.ehmDisclaimerText);
    I.see(disclaimer_text,ehmPage.fields.ehmDisclaimerText); 

    // Verify Disclaimer Text on EHM Article Page
    I.amOnPage(domain　+ '/medicare-advantage-articles/medicare-advantage-part-c-plans/');
    I.wait(2);
    I.waitForVisible(ehmPage.fields.ehmDisclaimerText, 2);
    I.scrollTo(ehmPage.fields.ehmDisclaimerText);
    I.see(disclaimer_text,ehmPage.fields.ehmDisclaimerText); 
   
    // Verify Disclaimer Text on EHM About US Page
    I.amOnPage(domain　+ '/about-us/');
    I.wait(2);
    I.waitForVisible(ehmPage.fields.ehmDisclaimerText, 2);
    I.scrollTo(ehmPage.fields.ehmDisclaimerText);
    I.see(disclaimer_text,ehmPage.fields.ehmDisclaimerText); 
   
})