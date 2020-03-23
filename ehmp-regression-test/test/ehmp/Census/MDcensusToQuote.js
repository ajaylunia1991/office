Feature('ehmp - census');

var config = require('config');
var domain = config.get('EHMP');

Scenario('Vivian - MAcensusToQuote - should check flow from MD census page to quote page successfully@groupA',{retries: 3}, async(I, censusPage, quotePage,leadPage) => {
  //www.cm.ehealthmedicareplans.com/?type=MA
  I.amOnPage(domain +'/?type=MD&qascript=Y&detailCompareRedesign=false&planUnitRedesign=false&leadFormEnabled=true&defaultThrottle=GREEN');
  I.wait(1);I.see('Medicare Part D plan');I.wait(1);
  I.seeInCurrentUrl('ehealthmedicareplans.com/v2?type=MD');
  censusPage.FillMAMDCensus('10001');
  I.wait(3);
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