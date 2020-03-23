Feature('GMG');

var config = require('config');
var domain = config.get('GMG');

Scenario('verify the layouts of the GMG Home page - get started button top',{retries: 1}, async function(I,gmgHomePage){  
  I.amOnPage(domain);
  I.wait(1);
  // Element
  I.seeElement(gmgHomePage.homePage.getStartedTopButton);
});

Scenario('verify the layouts of the GMG Home page - banner',{retries: 1}, async function(I,gmgHomePage){  
  I.amOnPage(domain);
  I.wait(1);
  // Element
  I.seeElement(gmgHomePage.homePage.bannerHeading);
});

Scenario('verify the layouts of the GMG Home page - header container',{retries: 1}, async function(I,gmgHomePage){  
  I.amOnPage(domain);
  I.wait(1);
  // Element
  I.seeElement(gmgHomePage.homePage.headerContainer);
});
Scenario('verify the layouts of the GMG Home page - GMG logo',{retries: 1}, async function(I,gmgHomePage){  
  I.amOnPage(domain);
  I.wait(1);
  // Element
  I.seeElement(gmgHomePage.homePage.goMedigapLogo);
});
Scenario('verify the layouts of the GMG Home page - medicare question first row',{retries: 1}, async function(I,gmgHomePage){  
  I.amOnPage(domain);
  I.wait(1);
  // Element
  I.seeElement(gmgHomePage.homePage.firstAnswerRow);
});
Scenario('verify the layouts of the GMG Home page - more medicare answers button',{retries: 1}, async function(I,gmgHomePage){  
  I.amOnPage(domain);
  I.wait(1);
  // Element
  I.seeElement(gmgHomePage.homePage.moreMedicareAnswersButton);
});
Scenario('verify the layouts of the GMG Home page - control of your coverage banner',{retries: 1}, async function(I,gmgHomePage){  
  I.amOnPage(domain);
  I.wait(1);
  // Element
  I.seeElement(gmgHomePage.homePage.controlOfYourCoverageBannerText);
});
Scenario('verify the layouts of the GMG Home page - read more about medicare supplement plan button',{retries: 1}, async function(I,gmgHomePage){  
  I.amOnPage(domain);
  I.wait(1);
  // Element
  I.seeElement(gmgHomePage.homePage.readMoreMedicareSupplementPlansBtn);
});
Scenario('verify the layouts of the GMG Home page - read more insurance companies button',{retries: 1}, async function(I,gmgHomePage){  
  I.amOnPage(domain);
  I.wait(1);
  // Element
  I.seeElement(gmgHomePage.homePage.readMoreInsuranceCompaniesBtn);
});
Scenario('verify the layouts of the GMG Home page - bubble section',{retries: 1}, async function(I,gmgHomePage){  
  I.amOnPage(domain);
  I.wait(1);
  // Element
  I.seeElement(gmgHomePage.homePage.bubleSection);
});
Scenario('verify the layouts of the GMG Home page - get started button container',{retries: 1}, async function(I,gmgHomePage){  
  I.amOnPage(domain);
  I.wait(1);
  // Element
  I.seeElement(gmgHomePage.homePage.getStartedContainerBottom);
});

// verify the action on clicking get started button
Scenario('verify the navigation to shopping flow from home page using getstarted button - top - ',{retries: 1}, async function(I,gmgHomePage){  
  I.amOnPage(domain);
  I.wait(1);
  gmgHomePage.clickTopGetStartedButton();
  I.seeInCurrentUrl(domain + '/shopping/#/find-plan/getting-started');
});

Scenario('verify the navigation to shopping flow from home page using getstarted button - bottom - ',{retries: 1}, async function(I,gmgHomePage){  
  I.amOnPage(domain);
  I.wait(1);
  gmgHomePage.clickBottomGetStartedButton();
  I.seeInCurrentUrl(domain + '/shopping/#/find-plan/getting-started');
});

Scenario('Verify the navigation to medicare answers using more medicare answers button',{retries: 1}, async function(I,gmgHomePage){  
  I.amOnPage(domain);
  I.wait(1);
  gmgHomePage.clickMoreMedicareAnswersButton();
  I.seeInCurrentUrl(domain + '/medicare-answers/');
});
Scenario('Verify the navigation to medicare medicare supplement plans using read more button in home page',{retries: 1}, async function(I,gmgHomePage){  
  I.amOnPage(domain);
  I.wait(1);
  gmgHomePage.clickReadMoreMedicareSupplementPlansBtn();
  I.seeInCurrentUrl(domain + '/medicare-answers/medicare-supplement-plans/medicare-supplement-plans/');
});
Scenario('Verify the navigation to medicare  insurance companies using read more button in home page',{retries: 1}, async function(I,gmgHomePage){  
  I.amOnPage(domain);
  I.wait(1);
  gmgHomePage.clickReadMoreInsuranceCompaniesBtn();
  I.seeInCurrentUrl(domain + '/medicare-answers/insurance-companies/10-popular-medicare-supplement-companies/');
});

Scenario('Verify the navigation to medicare supplement using read more button in home page',{retries: 1}, async function(I,gmgHomePage){  
  I.amOnPage(domain);
  I.wait(1);
  gmgHomePage.clickReadMoreMedicareSupplementInsuranceBtn();
  I.seeInCurrentUrl(domain + '/medicare-answers/enrollment/enroll-in-medicare-supplement-plan/');
});