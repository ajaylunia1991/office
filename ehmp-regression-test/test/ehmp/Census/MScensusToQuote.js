Feature('ehmp - census');

var config = require('config');
var domain = config.get('EHMP');

Scenario('Vivian - MAcensusToQuote - should check flow from MS census page to quote page successfully@groupA',{retries: 3}, async(I, censusPage, quotePage,leadPage) => {
 //to test MS quote page
  I.amOnPage(domain +'/?type=MS&qascript=Y&planUnitRedesign=false&leadFormEnabled=true&defaultThrottle=GREEN');
  I.wait(1);I.see('Medicare Supplement');I.wait(1);
  I.seeInCurrentUrl('ehealthmedicareplans.com/v2?type=MS');
  censusPage.FillMSCensus('20635','11/09/1910','12/2014','F','N');
  
	//lead form
  const leadFormEnabled = await I.grabSource();
  if (leadFormEnabled.includes('continue-btn')) {
      I.wait(3);
      I.waitForElement(leadPage.fields.continueBtn, 10);
      I.click(leadPage.fields.continueBtn);
  }
  I.waitForVisible(quotePage.fields.enrollBtn, 10);
  I.seeTitleEquals('Medicare Insurance Program');
  quotePage.checkDetailAndCompare();
});
