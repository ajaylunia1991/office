Feature('GMG Career page');

var config = require('config');
var domain = config.get('GMG');

Scenario('Verify navigation to career page',{retries: 1}, async function(I,gmgCareerPage){  
  I.amOnPage(domain);
  gmgCareerPage.navigateToCareerPage();
  I.seeInCurrentUrl(domain + "/careers/");
  I.see("Homepage Careers")
});

Scenario('Verify the element visibility - bannerImage',{retries: 1}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);
    gmgCareerPage.navigateToCareerPage();
    I.seeElement(gmgCareerPage.elements.bannerImage);
  });
  
  Scenario('Verify the element visibility -bannerHeader',{retries: 1}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);    
    gmgCareerPage.navigateToCareerPage();
    I.seeElement(gmgCareerPage.elements.bannerHeader);
  });
  Scenario('Verify the element visibility -bannerParagraph',{retries: 1}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);
    gmgCareerPage.navigateToCareerPage();
    I.seeElement(gmgCareerPage.elements.bannerParagraph);
  });
  Scenario('Verify the element visibility -seeAllOpeningBannerButton',{retries: 1}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);
    gmgCareerPage.navigateToCareerPage();
    I.seeElement(gmgCareerPage.elements.seeAllOpeningBannerButton);
  });
  Scenario('Verify the element visibility -breadcrumb',{retries: 1}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);
    gmgCareerPage.navigateToCareerPage();
    I.seeElement(gmgCareerPage.elements.breadcrumb);
  });
  Scenario('Verify the element visibility -bannerTwoTextContainer',{retries: 1}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);
    gmgCareerPage.navigateToCareerPage();
    I.seeElement(gmgCareerPage.elements.bannerTwoTextContainer);
  });
  Scenario('Verify the element visibility -bannerTwoTitle',{retries: 1}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);
    gmgCareerPage.navigateToCareerPage();
    I.seeElement(gmgCareerPage.elements.bannerTwoTitle);
  });
  Scenario('Verify the element visibility -bannerTwoDescription',{retries: 1}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);
    gmgCareerPage.navigateToCareerPage();
    I.seeElement(gmgCareerPage.elements.bannerTwoDescription);
  });
  Scenario('Verify the element visibility -sideQuoteOne',{retries: 1}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);
    gmgCareerPage.navigateToCareerPage();
    I.seeElement(gmgCareerPage.elements.sideQuoteOne);
  });
  Scenario('Verify the element visibility -sideNameOne',{retries: 1}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);
    gmgCareerPage.navigateToCareerPage();
    I.seeElement(gmgCareerPage.elements.sideNameOne);
  });
  Scenario('Verify the element visibility -sideTagOne',{retries: 1}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);
    gmgCareerPage.navigateToCareerPage();
    I.seeElement(gmgCareerPage.elements.sideTagOne);
  });
  Scenario('Verify the element visibility -sideQuoteTwo',{retries: 1}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);
    gmgCareerPage.navigateToCareerPage();
    I.seeElement(gmgCareerPage.elements.sideQuoteTwo);
  });
  Scenario('Verify the element visibility -sideNameTwo',{retries: 1}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);
    gmgCareerPage.navigateToCareerPage();
    I.seeElement(gmgCareerPage.elements.sideNameTwo);
  });
  Scenario('Verify the element visibility -sideTagTwo',{retries: 1}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);
    gmgCareerPage.navigateToCareerPage();
    I.seeElement(gmgCareerPage.elements.sideTagTwo);
  });
  Scenario('Verify the element visibility -sideQuoteThree',{retries: 1}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);
    gmgCareerPage.navigateToCareerPage();
    I.seeElement(gmgCareerPage.elements.sideQuoteThree);
  });
  Scenario('Verify the element visibility -sideNameThree',{retries: 1}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);
    gmgCareerPage.navigateToCareerPage();
    I.seeElement(gmgCareerPage.elements.sideNameThree);
  });
  Scenario('Verify the element visibility -sideTagThree',{retries: 1}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);
    gmgCareerPage.navigateToCareerPage();
    I.seeElement(gmgCareerPage.elements.sideTagThree);
  });
  Scenario('Verify the element visibility -bannerFourTitle',{retries: 1}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);
    gmgCareerPage.navigateToCareerPage();
    I.seeElement(gmgCareerPage.elements.bannerFourTitle);
  });
  Scenario('Verify the element visibility -bannerFourDescription',{retries: 1}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);
    gmgCareerPage.navigateToCareerPage();
    I.seeElement(gmgCareerPage.elements.bannerFourDescription);
  });
  Scenario('Verify the element visibility -badge',{retries: 1}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);
    gmgCareerPage.navigateToCareerPage();
    I.seeElement(gmgCareerPage.elements.badge);
  });
  Scenario('Verify the element visibility -badgeOneTitle',{retries: 1}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);
    gmgCareerPage.navigateToCareerPage();
    I.seeElement(gmgCareerPage.elements.badgeOneTitle);
  });
  Scenario('Verify the element visibility -badgeOneDescription',{retries: 1}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);
    gmgCareerPage.navigateToCareerPage();
    I.seeElement(gmgCareerPage.elements.badgeOneDescription);
  });
  Scenario('Verify the element visibility -badgeTwoTitle',{retries: 1}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);
    gmgCareerPage.navigateToCareerPage();
    I.seeElement(gmgCareerPage.elements.badgeTwoTitle);
  });
  Scenario('Verify the element visibility -badgeTwoDescription',{retries: 1}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);
    gmgCareerPage.navigateToCareerPage();
    I.seeElement(gmgCareerPage.elements.badgeTwoDescription);
  });
  Scenario('Verify the element visibility -badgeThreeTitle',{retries: 1}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);
    gmgCareerPage.navigateToCareerPage();
    I.seeElement(gmgCareerPage.elements.badgeThreeTitle);
  });
  Scenario('Verify the element visibility -badgeThreeDescripton',{retries: 1}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);
    gmgCareerPage.navigateToCareerPage();
    I.seeElement(gmgCareerPage.elements.badgeThreeDescripton);
  });
  Scenario('Verify the element visibility -ctaHeading',{retries: 1}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);
    gmgCareerPage.navigateToCareerPage();
    I.seeElement(gmgCareerPage.elements.ctaHeading);
  });
  Scenario('Verify the element visibility - seeAllOpeningFooterButton',{retries: 1}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);
    gmgCareerPage.navigateToCareerPage();
    I.seeElement(gmgCareerPage.elements.seeAllOpeningFooterButton);
  });
  Scenario('Verify the navigation to the career site from see all opening button on the banner',{retries: 0}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);
    gmgCareerPage.navigateToCareerPage();
    gmgCareerPage.clickSeeAllOpeningInBanner();
    I.waitForTabLoading(2, 1);
    I.changeToTab(2);
    I.waitForUrl("ehealthinsurance", 1);
    I.seeInCurrentUrl('https://ehealthinsurance.wd5.myworkdayjobs.com/EHI');
  });
  Scenario('Verify the navigation to the career site from see all opening button on the footer',{retries: 0}, async function(I,gmgCareerPage){  
    I.amOnPage(domain);
    gmgCareerPage.navigateToCareerPage();
    gmgCareerPage.clickSeeAllOpeningInFooter();
    I.waitForTabLoading(2, 1);
    I.changeToTab(2);
    I.waitForUrl("ehealthinsurance", 1);
    I.seeInCurrentUrl('https://ehealthinsurance.wd5.myworkdayjobs.com/EHI');
  });

 