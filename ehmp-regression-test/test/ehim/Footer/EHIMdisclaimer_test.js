Feature('ehim - Footer Disclaimer Test');

/*** created by Reena Sharma ***/

var config = require('config');
var domain = config.get('EHIM');

var disclaimer_text = "eHealth's Medicare website is operated by eHealthInsurance Services, Inc., a licensed health insurance agency doing business as eHealth. The purpose of this site is the solicitation of insurance. Contact may be made by an insurance agent/producer or insurance company. eHealth and Medicare supplement insurance plans are not connected with or endorsed by the U.S. government or the federal Medicare program. We offer plans from a number of insurance companies.";

//ALGO-537- @C24808 : This Scenario to verify Footer disclaimer text on EHIM pages

Scenario('ENV: ' +process.env.NODE_ENV + '- Reena -ALGO-537- @C24808 : This Scenario to verify Footer disclaimer text on EHIM pages', async function(I,ehimPageNew) {    
    // Verify Disclaimer text on EHM Home Page
    I.amOnPage(domain);
    I.wait(2);
    I.waitForVisible(ehimPageNew.fields.ehimDisclaimerText, 2);
    I.scrollTo(ehimPageNew.fields.ehimDisclaimerText);
    I.see(disclaimer_text,ehimPageNew.fields.ehimDisclaimerText); 

    // Verify Disclaimer Text on EHM Article Page
    I.amOnPage(domain　+ '/advantage-all/medicare-advantage?allid=Med37949');
    I.wait(2);
    I.waitForVisible(ehimPageNew.fields.ehimDisclaimerText, 2);
    I.scrollTo(ehimPageNew.fields.ehimDisclaimerText);
    I.see(disclaimer_text,ehimPageNew.fields.ehimDisclaimerText); 
      
})