Feature('ehmp - census');

var config = require('config');
var domain = config.get('EHMP');

Scenario('Vivian - CensusHeader - top header should be clickable',{retries: 0}, async(I, censusPage, quotePage,leadPage) => {
  //www.cm.ehealthmedicareplans.com/?type=MA
  I.amOnPage(domain +'/?type=MA&qascript=Y&detailCompareRedesign=false&planUnitRedesign=false&leadFormEnabled=true&defaultThrottle=GREEN');
  I.wait(1);I.see('Medicare Advantage plan');I.wait(1);
  I.seeInCurrentUrl('ehealthmedicareplans.com/v2?type=MA');  
  censusPage.ClickHeaderlinks(); //click MDMSMA 'my plans' and  initial enrollment links under learn about medicare
  I.see('Find your Medicare Advantage plan');//could go back to MA census page from EHM


  //fill census info
  censusPage.FillMAMDCensus('89199');
   //lead form
   I.wait(3);
   const leadFormEnabled = await I.grabSource();
   if (leadFormEnabled.includes('continue-btn')) {
       I.wait(3);
       I.waitForElement(leadPage.fields.continueBtn, 10);
       I.click(leadPage.fields.continueBtn);
   }
  I.waitForVisible(quotePage.fields.enrollBtn, 10);
  //verify title
  I.seeTitleEquals('Medicare Insurance Program');
  //quotePage.checkDetailAndCompare();
});


Scenario('Vivian - CensusHeader - top header should be clickable for mini site',{retries: 0}, async(I, censusPage, quotePage,leadPage,minisitePage) => {
  //www.cm.ehealthmedicareplans.com/?type=MA
  I.amOnPage(domain +'/ehi/medicare/mini-site?allid=GHC41626&msType=msc-ghc-50');
  
  I.waitForVisible(minisitePage.fields.startComparingNowBtn,20);
    I.click(minisitePage.fields.startComparingNowBtn);I.wait(2);
    I.see('Medicare Advantage plan');I.wait(1);
  //I.seeInCurrentUrl('ehealthmedicareplans.com/v2/mini-site?');  
  censusPage.ClickHeaderlinks(); //click MDMSMA 'my plans' and  initial enrollment links under learn about medicare
  I.waitForVisible(minisitePage.fields.startComparingNowBtn,20);;//could go back to Mini site landing page from EHM

 
});