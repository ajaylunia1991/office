'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {

        phoneNo: '.call-box',

        requestLeadForm: '//a[contains(text(),\'Request a Call\')]',

        zipCode: '#zipCodeBanner',

        findPlansBtn: '#findPlansBtn',

        firstNameField: '.request-call-form input#firstName',

        lastNameField: '.request-call-form input#lastName',

        phNumberField: '.request-call-form input#phoneNumber',

        zipcodeLead: '.request-call-form input#zipCode',

        callMeBtn: '[data-wa-link="Click:EHIM:LeadForm:Call Me"].initial',

        tcpa: 'div.leadform-disclaimer',

        successLeadTxt: '.request-call div.thank-you > h1',

        successleadFormBtn: '#comparePlansBtn',

        leadClose: '#dialogClose',

        compareMSPlanLink: '//*[@id="ehim-wrap"]/div[3]/div[5]/div/div/div[2]/div[2]',

        comparePlansBtn: '.ma .btn-primary',
        //homeMSPlansLink: '//div[@id=\'ehim-wrap\']/div[4]/div[5]/div/div/div[2]/div[2]',
        homeMSPlansLink: '.plan-link:nth-child(2)',

        msComparePlansBtn: '//a[contains(@href, \'#MS\')]',

        //cmCompareMSPlanLink: '#ehim-wrap > div.main > div.plan-info > div > div > div.row.plan-links.hidden-sm.hidden-xs > div:nth-child(2)',
        homeMDPlansLink: '.plan-link:nth-child(3)',

        mdComparePlansBtn: '//a[contains(@href, \'#MD\')]',

        //learnMoreBtn: '[data-wa-link="Click:EHIM:Learnmore"].btn btn-tertiary hidden-sm hidden-xs',
        learnMoreBtnMS: '(//a[contains(text(),\'Learn More\')])[4]',
        learnMoreBtnMA: '(//a[contains(text(),\'Learn More\')])[2]',
        learnMoreBtnMD: '(//a[contains(text(),\'Learn More\')])[6]',
        zipCodeCategoryBanner: '.hidden-xs #zipCodeCategory\\ Banner',
        zipCodeNeedHelp: '#zipCodeNeedHelp',
        browsePlansBtn: '#browsePlansBtn',
        zipCodeZipCode: '#zipCodeZipCode',
        articlezipcode: '#zipCodeFindPlan',
        getStartedBtn: '#getStartedBtn',
        leadGMGTitle: 'div.med-sup-slide-title',

        //GTM Lead form for MS article
        zipcode: '#zipcode',
        //startSavingNowBtn: 'div.med-sup-slide > form > div.btn.btn-primary',
        startSavingNowBtn: 'div.scroll-box > form > div.btn.btn-primary',
        fname: '#elfFirstName',
        lname: '#elfLastName',
        email: '#email',
        dob: '#dob',
        //phoneNumber: '#phoneNumber',
        phoneNumber: '(//input[@id="phoneNumber"])[2]',
        gender: '//div[@id=\'gender\']/label/input',
        //continueBtn: '#continueBtn',
        continueBtn: '(//div[@id=\'continueBtn\']/span)[4]',
        pageTitleGTM: 'h1.page-title',
        someMSArticle: '//a[contains(text(),\'Medicare Advantage vs. Medicare Supplement Insurance Plans\')]',

        allArticles: '//a[contains(text(),\'All Medicare Articles\')]',
        articlesTitle: 'h1',
        searchArticlesField: '.search-articles',

        articlesList: '.article-excerpts',

        articlesDisplay: '.article-excerpts .item',

        articlesMenu: '#menu-articles',

        articlesByState: '//*[@id="menu-item-191"]/a',

        stateArticlesHeading: 'h1.by-state',

        alabamaArticlePage: '//*[contains(text(), \'Alabama Medicare Plans\')]',

        alabamaLink: '#ehim-wrap > div.main > div.container.with-sidebar > div > div.col-lg-9.col-sm-7.content > div.state-list.row > div.col1.col-md-6 > a:nth-child(1)',

        stateArticleHeading: '#ehim-wrap > div.main > div.container > div:nth-child(2) > div.col-lg-9.col-md-8.col-sm-7.content > div.content-inner > div.the-content > h1',

        stateFindPlansWidget: '.state-find-plans-widget',

        stateNeedHelpWidget: '.need-help-widget',

        articleVote: '.vote-container',

        agentCallWidget: '.agent-call-widget',

        widgetLeadForm: '.widget_leadform',

        learnAboutMedicareLink : '//*[@id="menu-item-56"]/a',

        closeIconFMP : '#menu-item-55 > div:nth-child(2) > ul:nth-child(1) > div:nth-child(8)',

        closeIcon:'#menu-item-56 > div:nth-child(2) > ul:nth-child(1) > div:nth-child(5)',

        findMedicarePlans:'//*[@id="menu-item-55"]/a',

        fmaPlansLink:'//*[@id="menu-item-62"]/a',

        fmsPlansLink:'//*[@id="menu-item-70"]/a',

        fmdPlansLink:'//*[@id="menu-item-64"]/a',

        ehimDisclaimerText:'#ehm-disclaimer > .disclaimer-section > p:nth-child(3)',

    }
}