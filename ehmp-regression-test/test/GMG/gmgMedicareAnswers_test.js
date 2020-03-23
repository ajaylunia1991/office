Feature('Verify GMG Medicare answers page');

var config = require('config');
var domain = config.get('GMG');

Scenario('Verify the medicare answers link is displayed in home page',{retries: 1}, async function(I,gmgHomePage){  
  I.amOnPage(domain);
  I.wait(1);
  I.seeElement(gmgHomePage.homePage.medicareAnswersBtn);
});

Scenario('Verify the navigation to medicare answers page',{retries: 1}, async function(I,gmgHomePage){  
  I.amOnPage(domain);
  I.wait(1);
  I.click(gmgHomePage.homePage.medicareAnswersBtn);
  I.seeInCurrentUrl(domain + '/medicare-answers/');
});

Scenario('Verify the banner image displayed',{retries: 1}, async function(I,gmgHomePage,gmgMedicareAnswers){  
    I.amOnPage(domain);
    I.wait(1);
    I.click(gmgHomePage.homePage.medicareAnswersBtn);
    I.wait(1);
    I.seeElement(gmgMedicareAnswers.elements.bannerImage);
});

Scenario('Verify the banner heading text displayed',{retries: 1}, async function(I,gmgHomePage,gmgMedicareAnswers){  
    I.amOnPage(domain);
    I.wait(1);
    I.click(gmgHomePage.homePage.medicareAnswersBtn);
    I.wait(1);
    I.seeElement(gmgMedicareAnswers.elements.bannerTextHeading);
});

Scenario('Verify the banner heading paragraph displayed',{retries: 1}, async function(I,gmgHomePage,gmgMedicareAnswers){  
    I.amOnPage(domain);
    I.wait(1);
    I.click(gmgHomePage.homePage.medicareAnswersBtn);
    I.wait(1);
    I.seeElement(gmgMedicareAnswers.elements.bannerTextParagraph);
});

Scenario('Verify the ask anything CTA is displayed',{retries: 1}, async function(I,gmgHomePage,gmgMedicareAnswers){  
    I.amOnPage(domain);
    I.wait(1);
    I.click(gmgHomePage.homePage.medicareAnswersBtn);
    I.wait(1);
    I.seeElement(gmgMedicareAnswers.elements.askAnythingCTA);
});
