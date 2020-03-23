'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here
    headerElements: {
        headerLogo: '//a[@class="site-identity__logo"]',
        headerPhone: '//a[contains(@class,"site-identity__phone--long gmg-phone")]',
        headerWhoWeAreLink: '//a[contains(@class,"navigation-bar__link")][contains(text(),"Who We Are")]',
        headerMedicareAnswersLink: '//a[@class="navigation-bar__link"][contains(text(),"Medicare Answers")]',
        headerFindYourPlanButton: '//a[@class="navigation-bar__link--outlined"]'
    },

    footerElements: {
        footerLogo: '//a[@class="app-footer__logo"]',
        contactUsButton: '//button[@id="contact-us-button"]',
        businessHours: '//div[@class="business-hours"]',
        facebookIcon: '//li[contains(@class, "app-footer__icon-item")]//a[@href="https://www.facebook.com/gomedigap/"]',
        linkedinIcon: '//li[contains(@class, "app-footer__icon-item")]//a[@href="https://www.linkedin.com/company/gomedigap"]',
        youtubeIcon: '//li[contains(@class, "app-footer__icon-item")]//a[@href="https://www.youtube.com/channel/UCk1Nc929L2QVeKR-tYrm8BQ"]',
        twitterIcon: '//li[contains(@class, "app-footer__icon-item")]//a[@href="https://twitter.com/gomedigap?lang=en"]',
        disclaimer: '//p[contains(@class,"app-footer__disclaimer")]',
        copyright: '//p[contains(@class,"app-footer__copyright")]',
        siteMap:{
            medicareHeading: '//h2[contains(text(),"MEDICARE SUPPLEMENT")]',
            findYourPlanLink: '//ul[@class="app-footer__sitemap-ul"]//a[contains(text(),"Find Your Plan")]',
            medicareAnswersLink: '//ul[@class="app-footer__sitemap-ul"]//a[contains(text(),"Medicare Answers")]',
            companyHeading: '//h2[contains(text(),"COMPANY")]',
            whoWeAreLink: '//ul[@class="app-footer__sitemap-ul"]//a[contains(text(),"Who We Are")]',
            careersLink: '//a[contains(text(),"Careers")]',
            eHealthLink: '//a[contains(text(),"eHealth")]',
            legalHeading: '//h2[contains(text(),"LEGAL")]',
            licensingLink: '//a[contains(text(),"Licensing")]',
            nonDiscriminationLink: '//a[contains(text(),"Nondiscrimination")]',
            termsConditionsLink: '//a[contains(text(),"Terms & Conditions")]',
            privacyPolicyLink: '//a[contains(text(),"Privacy Policy")]'
        }
    },
    //Header & Footer elments global layout validation
    validateHeaderLayout(){
        I.seeElement(this.headerElements.headerLogo);
        I.seeElement(this.headerElements.headerPhone);
        I.seeElement(this.headerElements.headerWhoWeAreLink);
        I.seeElement(this.headerElements.headerMedicareAnswersLink);
        I.seeElement(this.headerElements.headerFindYourPlanButton);
    },
    
    validateFooterLayout(){
        I.seeElement(this.footerElements.footerLogo);
        I.seeElement(this.footerElements.contactUsButton);
        I.see('Monday-Friday',this.footerElements.businessHours);
        I.seeElement(this.footerElements.facebookIcon);
        I.seeElement(this.footerElements.linkedinIcon);
        I.seeElement(this.footerElements.youtubeIcon);
        I.seeElement(this.footerElements.twitterIcon);
        I.see('eHealth’s GoMedigap website is operated by eHealthInsurance Services, Inc.', this.footerElements.disclaimer);
        I.see('GoMedigap. All rights reserved.',this.footerElements.copyright);
        I.seeElement(this.footerElements.siteMap.medicareHeading);
        I.seeElement(this.footerElements.siteMap.findYourPlanLink);
        I.seeElement(this.footerElements.siteMap.medicareAnswersLink);
        I.seeElement(this.footerElements.siteMap.companyHeading);
        I.seeElement(this.footerElements.siteMap.whoWeAreLink);
        I.seeElement(this.footerElements.siteMap.careersLink);
        I.seeElement(this.footerElements.siteMap.eHealthLink);
        I.seeElement(this.footerElements.siteMap.legalHeading);
        I.seeElement(this.footerElements.siteMap.licensingLink);
        I.seeElement(this.footerElements.siteMap.nonDiscriminationLink);
        I.seeElement(this.footerElements.siteMap.termsConditionsLink);
        I.seeElement(this.footerElements.siteMap.privacyPolicyLink);
    }
}

