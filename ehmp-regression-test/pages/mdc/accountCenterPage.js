'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {

        topHeaderElements: '.site-header-inner',
        medicareLogo: '#medicare-logo',
        callAgent: '.call-center-info',
        coBrandingLogo: '#cobranding-main-header',

        recommendationProgress: '.recommendation-progress-card  ',
        title: '.section-title',
        recoSteps: ' .recommendation-steps',
        finishRecoButton: ' .primary-btn',

        yourInformation: '.user-requirements-card-container',
        currentPlan: '.simple-card:nth-child(3) > div',
        questions: '.simple-card:nth-child(4) > div',

        topMenuBar: '.navigation',
        menuItems: '#menu-medicare',
        home: '#menu-medicare >li:nth-child(1)',
        comparePlans: '#menu-medicare >li:nth-child(2)',
        articles: '#menu-medicare >li:nth-child(3)',
        licensedAgents: '#menu-medicare >li:nth-child(4)',
        carriers: '#menu-medicare >li:nth-child(5)',
        userActions: '.user-actions',
        signOut: 'a.logout-link',

        accountCenterApp: ' #account_center_app ',
        recommendationProgress: '.recommendation-progress-card  ',
        title: '.section-title',
        recoSteps: ' .recommendation-steps',
        finishRecoButton: ' .primary-btn',


        footerLinks: './/*[@id="main"]/div[2]/footer[1]/div/div/div[5]/div[3]/div[3]/div/div/div/div/div/div',
        siteMap: './/a[contains(text(),"Site Map")]',

        privacyAndSecurity: '.small-12.medium-12.large-4.columns:nth-child(1)',
        header: '.footer-title',
        nortonSymbol: '.sponsors>li:nth-child(1)>a',
        trustESymbol: '.sponsors>li:nth-child(2)>div>a',
        bbbSymbol: '.sponsors>li:nth-child(3)>a'


    },

    validateAccountCenterPageElements() {

        I.wait(3);
        I.waitForElement(this.fields.topHeaderElements, 50);
        I.waitForElement(this.fields.coBrandingLogo, 30);
        I.waitForElement(this.fields.medicareLogo, 30);
        I.waitForElement(this.fields.topMenuBar, 30);

        I.wait(1);
        I.waitForElement(this.fields.recommendationProgress, 30);
        // I.waitForElement(this.fields.yourInformation, 30);
        I.waitForElement(this.fields.recoSteps, 30);
        I.waitForElement(this.fields.finishRecoButton, 30);

        I.wait(1);
        // I.waitForElement(this.fields.currentPlan, 30);
        // I.waitForElement(this.fields.questions, 30);


    },

    signOut(){

        I.wait(1);
        I.click('.user-icon');
        I.wait(1);
        I.click(this.fields.signOut);

    },

    validatePrivacyAndSecurity(privacyText){

        I.waitForElement(this.fields.header, 30);   
        I.see(privacyText,this.fields.privacyAndSecurity);   
        I.waitForElement(this.fields.nortonSymbol, 30);   
        I.waitForElement(this.fields.trustESymbol, 30);   
        I.waitForElement(this.fields.bbbSymbol, 30);   

    }
}