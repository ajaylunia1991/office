Feature('mdc');

var config = require('config');
var domain = config.get('MDC');
// Home Page, Saving  and disclaimer Text Statement element text For Test cases - @C24668 , @C24669
var homeSaveText = "People who shopped with us found an average $531 in potential average annual savings.*";
var discText1 = "* eHealth's Medicare Choice and Impact report examines user sessions from more than 45,000 eHealth Medicare visitors who used the company's Medicare prescription drug coverage comparison tool in the fourth quarter of 2018, including Medicare's 2019 Annual Election Period (October 15 – December 7, 2018).";
var discText2 = "** We have served more than 3 Million Leads since 2013. Serving a lead means engaging with the customer telephonically or following online consent for eHealthInsurance Services, Inc. to contact.";

// ALGO-508- Test case : @C24668- Verify Savings statements on medicare page
Scenario('ENV: ' +process.env.NODE_ENV + 'Reena -@C24668- Verify Savings statements on medicare page @homepage', (I, medicareHomePage) => { 
	I.amOnPage(domain); 
    console.log('Medicare Home Page Opened');
    console.log('Medicare Homepage Savings statement Test Started');
    medicareHomePage.validateHomeSavingText(homeSaveText);

})

// ALGO-508- Test case : @C24668- Verify Footer disclaimers text on medicare page
Scenario('ENV: ' +process.env.NODE_ENV + '@C24669- Test Footer disclaimers text @homepage', (I, medicareHomePage) => { 
	I.amOnPage(domain); 
    console.log('Medicare Home Page Opened');
    console.log('Medicare Homepage Disclaimer Test Started');
    medicareHomePage.validateDisclaimerText(discText1,discText2);

})