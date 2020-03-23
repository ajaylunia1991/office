
Feature('omnicare minisite');

var config = require('config');
var domain = config.get('EHM');

/**  MEDI-17265
*Scenario('test pharmacy minisite cvs @sanity1', (I, quotePage, censusPage) => {
  
  //https://www.cm.ehealthmedicareplans.com/cvs
  I.amOnPage(domain +'/cvs');
  I.waitForElement(censusPage.fields.enterLink, 50);
  I.click(censusPage.fields.enterLink);
  I.waitForElement(censusPage.fields.zipName, 50);
  I.fillField(censusPage.fields.zipName,'04240');
  //此处还可以加一个page object 去添加drug和pharmacy
  I.wait(1);//
  I.click(censusPage.fields.viewPlans);
  //I.wait(2);
  I.waitForElement(censusPage.fields.viewAllPlans, 50); 
  I.click(censusPage.fields.viewAllPlans);
  //I.wait(5);
  quotePage.checkDetailAndCompare();
  });*/

Scenario('should check detail and compare page successfully for pharmacy minisite Omnicare @sanity1', (I, quotePage, censusPage, leadPage) => {

    I.amOnPage(domain + '/omnicare');
    I.waitForElement(censusPage.fields.zip, 50);
    I.fillField(censusPage.fields.zip, '14224');
    I.wait(1);
    I.click(censusPage.fields.nextBtn);
    quotePage.checkDetailAndCompare();
});

/* already moved to pharmacy data script.
Scenario('test pharmacy minisite kroger for prodSanity @sanity1', (I, quotePage, censusPage, leadPage) => {

    I.amOnPage(domain + '/ehi/medicare/mini-site?allid=Kro37462&msType=msp-kroger&defaultThrottle=GREEN');
    I.waitForElement(censusPage.fields.zip, 50);
    I.fillField(censusPage.fields.zip, '37066');
    I.wait(1);
    I.click(censusPage.fields.nextBtn);
    I.waitForVisible(leadPage.fields.continueBtn, 50);
    I.click(leadPage.fields.continueBtn);
    quotePage.checkDetailAndCompare();
});*/