'use strict';

let I;
var randomInfo = require('../utils/random').randomInfo();

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {

        //EHM site locators
        phone: '888-296-0117',
        headerPhone: '//ul[@id="gn-right"]/li[2]/p[1]',
        agentPhone: 'p.agent-phone',
        ctaPhone: 'div.phone-wrap > p.phone',
        footerPhone: '//p[@id="footer-contact"]/span[1]',
        MApagePhone: '//div[@class="phone"]/li[1]',
        MDpagePhone: '//div[@class="phone"]/li[1]',
        MSpagePhone: '//div[@class="phone"]/li[1]',
        detailLink: 'a[data-mediator="details',
        seePlansBtn: '//*[@id="home-hero-content"]/div/section/div/a[1]',

        zipCode: '#zipCodeHomeTopCompare',
        phoneNo: '.call-box',
        aboutUsLink: '#homeAboutUS',
        faqLink: '#homeFrequentQuestions a.btn',
        faqLearnMore: '//a[@href="/faq/how-does-medicare-work/"]',
        msFindPlans: '#homeMedicareSupplement a.find-plans',
        msLearnMore: '#homeMedicareSupplement a.btn-tertiary',
        maFindPlans: '#homeMedicareAdvantage a.find-plans',
        maLearnMore: '#homeMedicareAdvantage a.btn-tertiary',
        mdFindPlans: '#homeMedicarePartD a.find-plans',
        mdLearnMore: '#homeMedicarePartD a.btn-tertiary',
        articlesLink: '.medicare-articles a.btn',
        topComparePlansBtn: '#homeComparePlansTopBtn',
        learnMore: '#homeAboutUS a.btn-secondary',
        eHealthMedicareTitle: 'h2.section-title',
        howMedicareWorkTitle: 'h1.title',
        faqPageTitle: 'h1.page-title',
        learnAboutMedicareLink : '//*[@id="menu-item-56"]/a',
        closeIcon:'#menu-item-56 > div:nth-child(2) > ul:nth-child(1) > div:nth-child(8)',
        findMedicarePlans:'//*[@id="menu-item-55"]/a',
        fmaPlansLink:'//*[@id="menu-item-62"]/a',
        fmsPlansLink:'//*[@id="menu-item-70"]/a',
        fmdPlansLink:'//*[@id="menu-item-64"]/a',


        //Articles
        articlesMenu: '#menu-articles',
        searchArticlesField: '/html[1]/body[1]/div[1]/main[1]/article[1]/div[2]/div[1]/div[1]/form[1]/div[1]/input[1]',
        searchList: '//ul[@id="ui-id-1"]//li[2]',
        searchBtn: '/html[1]/body[1]/div[1]/main[1]/article[1]/div[2]/div[1]/div[1]/form[1]/div[1]/a[1]',
        zipCodeCategoryBanner: '#zipCodeCategoryBanner',
        zipcodebanner: '#zipCodeFindPlan',// created by gck for algo-1331 for MA
        zipCodeZipCode: '#zipCodeZipCode',
        getStartedBtn: '#getStartedBtn',
        zipCodeNeedHelp: '#zipCodeNeedHelp',
        browsePlansBtn: '#browsePlansBtn',
        articleTitle: 'h1',
        statesMSArticle: '.article-excerpts > .item:nth-child(1) span:nth-child(2)',
        californiaMSArticle: "//a[contains(text(),'California Medicare Supplement Insurance')]",
        leadGMGTitle: 'div.med-sup-slide-title',
        pageTitleGTM: 'h1.page-title',
        zipcode: '#zipcode',
        //startSavingNowBtn: 'div.med-sup-slide > form > div.btn.btn-primary',
        startSavingNowBtn: 'div.scroll-box > form > div.btn.btn-primary',

        //lead form
        requestLeadForm: '.btn.btn-secondary.appt-link.hidden-xs',
        tcpa: 'div.leadform-disclaimer',
        firstNameField: '.request-call-form input#firstName',
        lastNameField: '.request-call-form input#lastName',
        phNumberField: '.request-call-form input#phoneNumber',
        zipcodeLead: '.request-call-form input#zipCode',
        callMeBtn: '#racLeadForm #continueBtn',
        successLeadTxt: '.request-call div.thank-you > h1',
        successleadFormBtn: '#comparePlansBtn',
        leadClose: '#dialogClose',

        //GMG Lead
        fname: '#elfFirstName',
        lname: '#elfLastName',
        //email: '#email',
        dob: '#dob',
        //phoneNumberGMG: '#phoneNumber',
        phoneNumberGMG: '.lf-field:nth-child(2) > #phoneNumber',
        gender: '//div[@id=\'gender\']/label/input',
        //continueBtn: '#continueBtn',
        continueBtn: '#msEmailLeadForm #continueBtn',

        // AEP page
        shopPlansBtn: '#shopForPlans',

        // Census Page when navigating from EHM to EHMP
        censusTextMedicare: 'h1.no-edit',
        censusCancelBtn: '#link-cancel',
        //zipCodeCensus: '#ehi-txtZip',
        zipCodeCensus: '.zip',
        btnCensusNext: '#ehi-btnCensusNext',
        zipQuote: '.zip',

        //How can we help?
        HowCanWeHelpText: '#RecoBaseHome > p.title',
        //Shop for a Medicare Plan
        flowAShopMedicare: '#FlowAShopMedicare',
        flowAFindPlanOnline: '#FlowAFindPlanOnline',
        recoAComparePlansBtn: '#recoAComparePlansBtn',
        zipCodeRecoACompare: '#zipCodeRecoACompare',

        flowATalkTOPerson: '#FlowATalkTOPerson',
        // for Lead submitting on flowATalkTOPerson
        firstNameFlowA: '#flowAShopLeadForm > div.two-col.clearfix > div.lf-field > #firstName',
        lastNameFlowA: '#flowAShopLeadForm > div.two-col.clearfix > div.lf-field > #lastName',
        phoneNumber: '#flowAShopLeadForm > div.two-col.clearfix > div.lf-field > #phoneNumber',
        zipCodeFlowA: '#flowAShopLeadForm > div.two-col.clearfix > div.lf-field > #zipCode',
        agentCallMeBtn: '#flowAShopLeadForm > div.btn-wrap > #continueBtn > span.initial',
        noThanksBtnFlowA: '#FlowALeadFormConfirm',
        zipCodeToEHMP: 'input#zipCodeRecoACompareConfirm',
        recoAComparePlansBtnConfirm: '#recoAComparePlansBtnConfirm',

        flowBTalkTOPerson: '#FlowBTalkTOPerson > p.card-text',
        // for Lead submitting on flowBTalkTOPerson
        firstNameFlowB: '#flowBShopLeadForm > div.two-col.clearfix > div.lf-field > #firstName',
        lastNameFlowB: '#flowBShopLeadForm > div.two-col.clearfix > div.lf-field > #lastName',
        phoneNumberB: '#flowBShopLeadForm > div.two-col.clearfix > div.lf-field > #phoneNumber',
        zipCodeFlowB: '#flowBShopLeadForm > div.two-col.clearfix > div.lf-field > #zipCode',
        agentCallMeBtnB: '#flowBShopLeadForm > div.btn-wrap > #continueBtn > span.initial',

        //I want a Medicare plan recommendation
        flowCMedicareRecommendation: '#FlowCMedicareRecommendation',
        flowCTalkTOPerson: '#FlowCTalkTOPerson',
        getRecommendationOnline: '#GetRecommendationOnline',
        recoFlowCOverlayClose: '#RecoFlowCOverlayClose',
        recoFlowCMedicareRecommendLanding: '#RecoFlowCMedicareRecommendLanding > p.title',
        // for Lead submitting on flowBTalkTOPerson
        firstNameFlowC: '#flowCRecommendLeadForm > div.two-col.clearfix > div.lf-field > #firstName',
        lastNameFlowC: '#flowCRecommendLeadForm > div.two-col.clearfix > div.lf-field > #lastName',
        phoneNumberC: '#flowCRecommendLeadForm > div.two-col.clearfix > div.lf-field > #phoneNumber',
        zipCodeFlowC: '#flowCRecommendLeadForm > div.two-col.clearfix > div.lf-field > #zipCode',
        agentCallMeBtnC: '#flowCRecommendLeadForm > div.btn-wrap > #continueBtn > span.initial',

        //I have a question about Medicare
        flowBQuestionsAboutMedicare: '#FlowBQuestionsAboutMedicare',
        flowBFindAnswersOnline: '#FlowBFindAnswersOnline',
        flowBFindAnswersOnlineConfirm: '#FlowBFindAnswersOnlineConfirm',

        learnAboutMA: 'a.articles-link > div.select-card > div.image-wrapper',
        learnAboutMS: 'a.articles-link.texas-ms-link > div.select-card > div.image-wrapper',
        learnAboutMD: '.col-sm-4:nth-child(4) > .articles-link .image-wrapper',

        articles_EHM: '.title-show > h1:nth-child(1)',

        //Download Guide
        sendMedicareGuide: '#FlowBGuideToMedicare > div.image-wrapper > img.hidden-xs',
        elfFirstName: '#elfFirstName',
        //lastName: '.lf-field input#lastName',
        elfLastName: '#elfLastName',
        //zipCodeFlowADownlod: '.lf-field input#zipCode',
        elfZipCode: '#elfZipCode',
        email: '#email',
        downloadBtn: '#downloadBtn > span.initial',
        recoFlowBEmailLeadFormConfirm: '#RecoFlowBEmailLeadFormConfirm > p.title',

        //Find out more about Medicare
        frstName:  '#sidebarLeadform > div.lf-field > #firstName',
        latName: '#sidebarLeadform > div.lf-field > #lastName',
        contactNumber: '#sidebarLeadform > div.lf-field > #phoneNumber',
        zCode:'#sidebarLeadform > div.lf-field > #zipCode',
        requestaCall: '#sidebarLeadform > div.btn-wrap > #continueBtn',

        // Disclaimer locator
        ehmDisclaimerText: '.disclaimer-section>p',

           //Walgreens HomePage
           ZipcodeWG: '/html[1]/body[1]/div[1]/main[1]/article[1]/main[1]/article[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/form[1]/fieldset[1]/div[1]/div[1]/div[1]/input[1]',
           FindPlansWG: '#ehi-btnSaveSmartly',
           WGLogo: '//img[@id=$partner-logo-img]',
           SeeMore: 'body.page-template.page-template-page-savesmartly.page-template-page-savesmartly-php.page.page-id-2261.throttle-GREEN:nth-child(2) main.main div.save-smartly-wrapper div.container section.blue-collapse-wrapper div.drawer-outer div.drawer-inner.row div.control-show-more.white.col-sm-2 > span.show-if-closed',

        //Beginners Guide Locator
          fstName :'#ehi-txtFirstName', 
          lstName :'#ehi-txtLastName',
          phone :'#ehi-txtPhoneNumber',
          mail :'#ehi-txtEmailAddress',
          code :'#ehi-txtZipCode',
          submitbtn:'#continue-btn',   
    
        },


    verifyHomePhone() {

        I.waitForElement(this.fields.headerPhone);
        // I.see(this.fields.phone,this.fields.headerPhone);//Global Header
        // I.see(this.fields.phone,this.fields.agentPhone);//agentPhone
        // I.see(this.fields.phone,this.fields.ctaPhone);//ctaPhone
        I.see(this.fields.phone, this.fields.footerPhone); //Global Footer
    },

    verifyCensusPage(value) {
        console.log('I am on ' + value + ' census page');
        I.waitForElement(this.fields.censusTextMedicare);
        I.see(value, this.fields.censusTextMedicare); // comparing text on Census page
        I.seeInCurrentUrl('ehealthmedicareplans.com'); // verifying that URL is EHMP
        //console.log("I am clicking Cancel button on census page");
        //I.click(this.fields.censusCancelBtn);
    },

    verifyEHMHomePage() {
        console.log("I am on EHM home page");
        I.seeInCurrentUrl('ehealthmedicare.com');
        I.seeElementInDOM(this.fields.zipCode); //zipCode
        I.seeElementInDOM(this.fields.phoneNo); //phoneNo


    },

    verifyEHM_ArticlesPage(val1, val2) {
        console.log('I am on EHM ' + val1 +  ' Articles page');
        I.see(val1, this.fields.articles_EHM); //articles_EHM
        I.seeInCurrentUrl(val2);

    },

    fillLeadForm(fn, ln, ph, zip) {
        console.log("I am filling in Lead form");
        I.fillField(ph, randomInfo.phone);
        I.fillField(fn, randomInfo.firstName);
        I.fillField(ln, randomInfo.lastName);
        console.log('First name is :' + randomInfo.firstName + '; Last name is :' + randomInfo.lastName + '; Phone num is :' + randomInfo.phone + ';');
        I.fillField(zip, '12345');

    }

}