Feature('Submit a question from Ask Us Anything & Contact Us Modal windows');

var config = require('config');
var domain = config.get('GMG');

Scenario('User opens Ask Us Anything modal and submits a question', async function(I,gmgHeaderFooter,gmgWhoWeArePage){
    I.amOnPage(domain);
    I.click(gmgHeaderFooter.footerElements.siteMap.whoWeAreLink);
    gmgHeaderFooter.validateHeaderLayout();
    I.see('We\'re here for you', gmgWhoWeArePage.whoWeAreElements.heroBanner);
    I.see('Who We Are', gmgWhoWeArePage.whoWeAreElements.breadcrumb);
    I.see('A simplified approach to Medicare', gmgWhoWeArePage.whoWeAreElements.topBanner);
    I.see('We listen to your needs',gmgWhoWeArePage.whoWeAreElements.bullets);
    I.see('We treat you like family',gmgWhoWeArePage.whoWeAreElements.bullets);
    I.see('Who we serve',gmgWhoWeArePage.whoWeAreElements.middleBanner);
    I.seeElement(gmgWhoWeArePage.whoWeAreElements.sideBySide1);
    I.seeElement(gmgWhoWeArePage.whoWeAreElements.sideBySide2);
    I.seeElement(gmgWhoWeArePage.whoWeAreElements.sideBySide3);
    I.see('We\'re the trusted Medicare professionals',gmgWhoWeArePage.whoWeAreElements.bottomBanner);
    I.seeElement(gmgWhoWeArePage.whoWeAreElements.badges);
    I.see('Let\'s find the right plan at the right price for you',gmgWhoWeArePage.whoWeAreElements.inLineCTA);
    gmgHeaderFooter.validateFooterLayout();
});