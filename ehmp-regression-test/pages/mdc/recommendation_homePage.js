'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {


        //home page version1

        viewplanbtn:'/html/body/div[2]/div/div[3]/div/div/a',
        //btn on partner site
        viewplanbtnpartner: '//a[@class="view-plans-button"]',
        viewplanbtn2nd:'//*[@id="viewPlans"]',

        //home page version2
        zipcode02:'#zipCode',
        viewplanbtn02:'/html/body/div[3]/div/div/div[1]/div[2]/div/a',

        //home paeg version3
        zipcode03:'/html/body/div[4]/div[1]/div/div[1]/div[2]/div/div/',
        viewplanbtn03:'/html/body/div[4]/div[1]/div/div[1]/div[2]/div/input',

        //request a call lead form
        requestACallBtn: '//*[@id="requestCallLink"]',
        requestFN: '//*[@id="first_name"]',
        requestLN: '//*[@id="last_name"]',
        requestPhoneNumber: '//*[@id="phone_number"]',
        requestZip: '//*[@id="zip_code_aep_lead"]',
        RequestSubmitBtn: '//*[@id="submit-lead-form-button"]',
        Schedule1Call: '//a[@class="request-call-link"]',

        //Get a report in reco flow
        reportFN: '//*[@id="first_name_report"]',
        reportLN: '//*[@id="last_name_report"]',
        reportEMAIL: '//*[@id="email_report"]',
        reportBtn: '//*[@id="plan-reco-personalized-card"]/span/div[1]/div[1]/ul/li[2]/a',


        selectMedicareNewOrOld: '.select-medicare',
        header: 'h1',
        tagLine: '.tagline',
        newToMedicare: '#new-to-medicare',
        haveMedicare: '#have-medicare',
        nextButton: '.btn-next',

        selectMedicareNewOrOld: '.select-medicare',
        header: 'h1',
        tagLine: '.tagline',
        haveMedicare: '#have-medicare',
        zipSection: '.zipcode-section',
        zipText: '#zipcode-input',
        zipSubmit: 'a',
        countyDisplay: '#county-wrapper',

        areaOverview: '.main-content',
        locationPointer: '.location-pointer.centered',
        maProductCard: '.product-card-wrapper .product-card:nth-child(1)',
        mdProductCard: '.product-card-wrapper .product-card:nth-child(2)',
        msProductCard: '.product-card-wrapper .product-card:nth-child(3)',
        continueButton: '.btn-next',
        backButton: '.back-btn',



        productLineIntroCard: '.product-line-intro-card',
        startButton: '.btn-next',

        questionGeneric: '.content-container .card',
        title: '.card-title',
        answer1: '.answers >li:nth-child(1) .radio',
        answer2: '.answers >li:nth-child(2) .radio',
        answer3: '.answers >li:nth-child(3) .radio',
        answer4: '.answers >li:nth-child(4) .radio',
        whyItMatters: '#cardContentInner',


        productLineResultCard: '.content-container .product-line-result-card',
        productLineTitle: '.product-line-title',

        reasons: '.reasons',
        planIntroCard: '.plan-intro-card',
        planIntroPoints: '.plan-intro-points',

        drugsCard: '.drugs-card',
        title: 'h2',
        drugsAutoComplete: '#drugs-autocomplete',
        quantity: '#quantity-input',
        addDrugs: '.btn-next',

        drugSuggestion: '.textbox-wrapper .item',
        drugsSummaryCard: '.drug-summary-card',
        drugList: '.drug-list',
        addDrug: '.add-drug span',
        addPharmacy: '.pharmacy-content a',
        selectedPharmacy: '.selected-pharmacy',
        drugSavingsCard: '.drug-savings-card',
        savingsInfo: '.drug-savings-box-wrapper',
        savingContinueButton: 'div.btn-wrapper:nth-child(5) > a',
        drugsCount: '.subtitle>span',
        savingsAmount: 'h1 >span',
        doctorsCard: '.doctors-card',
        title: 'h1',
        tagLine: '.tagline',
        doctorSearchZipCode: '#doctor_search_zipcode',
        doctorSearchName: '#doctor_search_name',
        findDoctorsButton: '.btn-next',


        doctorResults: '.doctor-results-modal',
        results: '.doctor-results-modal .left-container',
        map: '.doctor-results-modal .right-container',
        firstDoctor: '.doctor-list .clearfix:first-child .doctor-item .left .radio',
        addDoctorButton: '.bottom .btn-next',
        doctorSummaryCard: '.doctor-summary-card',
        title: 'h1',
        selectedDoctor: '.doctor-list .clearfix:first-child .doctor-item .left .radio .radio-on',
        addDoctor: '.doctor-list a',
        seeResultsButton: '.btn-next',
        doctorListPlansCovered: '.doctor-list-card',
        title: 'h1',
        listOfDoctorsAndPlansCovered: '#mdc_rec_app > div > div.map-background-wrapper.doctors-template.version.product-line-MA > div.main-content > div.content-wrapper > div.content-container.clearfix > div > div > div:nth-child(1) > div > ul',
        viewPlans: '.btn-next',

        planRecoPage: '.plan-result-card',
        firstPlan: '#plan0',
        carrierLogo: '.plan-carrier-logo',
        planName: '.plan-name',
        planRating: '.plan-rating',
        planType: '.plan-type',
        premium: ' .plan-card-details .premium',
        benefits: '.benefits',
        viewDetails: '.btn-next',

        MDCenrollBtn: '//*[@id="plan0"]/div/span[3]/a', // MDC RECO Flow last page enroll button

        EHMPenrollBtn: '//*[@id="sticky-hdr-pd"]/div/div[1]/div[3]/button', // Redesigned EHMP plan detail page enroll button
        OldEHMPenrollBtn: '//*[@id="sidebar"]/div[1]/div[4]', // old EHMP plan detail page enroll button

        //Seo updated sitemap xpatch
        // this is used by the script "SiteMap_test.js" under MDC SEO
        SiteMap:'.collapsible',
//         SiteMap: '//span[text()="https://medicare.com/"]',
    },

    validateMedicareEligibilitySelections() {

        I.waitForVisible(this.fields.header, 30);
        I.waitForVisible(this.fields.tagLine, 30);
        I.waitForVisible(this.fields.newToMedicare, 30);
        I.waitForVisible(this.fields.haveMedicare, 30);
        I.waitForVisible(this.fields.nextButton, 30);

    },

   clickNewToMedicare() {
        //click new
        I.click(this.fields.newToMedicare);
        I.wait(1);
        I.click(this.fields.nextButton);
        I.wait(1);
        //fill zip
        I.click(this.fields.zipText);
        I.wait(1);
        I.fillField(this.fields.zipText, '10007');
        I.wait(3);
        I.click(this.fields.nextButton);
        I.wait(1);
        //can see MA/MD/MS card
        I.waitForVisible(this.fields.maProductCard, 50);
        I.waitForVisible(this.fields.msProductCard, 10);
        I.waitForVisible(this.fields.mdProductCard, 10);
        I.wait(1);
        I.click(this.fields.continueButton);

        I.wait(1);
        I.click(this.fields.startButton);
        //answer 4 questions
        I.click(this.fields.answer1);
        I.click(this.fields.nextButton);
        I.wait(1);
        I.click(this.fields.answer1);
        I.click(this.fields.nextButton);
        I.wait(1);
        I.click(this.fields.answer1);
        I.click(this.fields.nextButton);
        I.wait(1);
        I.click(this.fields.answer1);
        I.click(this.fields.nextButton);

        I.waitForVisible(this.fields.productLineTitle, 30);
        I.waitForVisible(this.fields.reasons, 30);
        I.wait(1);
        I.click(this.fields.continueButton);
        I.wait(1);
        I.click(this.fields.nextButton);
        //add drug
        I.waitForVisible(this.fields.drugsAutoComplete, 30);
        I.click(this.fields.drugsAutoComplete);
        I.fillField(this.fields.drugsAutoComplete, 'Cre');
        I.wait(2);
        I.click('#mdc_rec_app > div > div.map-background-wrapper.drugs-template.version.product-line-MA > div.main-content > div.content-wrapper > div.content-container.clearfix > div > div > div.drugs-card.clearfix > ul > li.textbox-wrapper.drug-name-wrapper > div > div > div:nth-child(3)');
        I.fillField(this.fields.quantity, '30');
        // I.wait(1);
        // I.click(this.fields.drugSuggestion);

        I.wait(1);
        I.click(this.fields.addDrugs);

        //can see druglist and savinginfo
        I.wait(1);
        I.waitForVisible(this.fields.drugList, 30);
        I.click(this.fields.continueButton);
        I.wait(1);
        I.waitForVisible(this.fields.savingsInfo, 30);
        I.wait(1);
        I.click(this.fields.savingContinueButton);

        //Add first doctor
        I.wait(1);
        I.waitForVisible(this.fields.doctorSearchName, 30);
        I.fillField(this.fields.doctorSearchName, 'smith');
        I.click(this.fields.findDoctorsButton);

        I.wait(1);
        I.waitForVisible(this.fields.results, 30);
        I.click(this.fields.firstDoctor);
        I.wait(2);
        I.click(this.fields.addDoctorButton);

        I.wait(1);
        I.waitForElement(this.fields.selectedDoctor, 30);
        I.waitForVisible(this.fields.addDoctor, 30);
        I.click(this.fields.addDoctor);

        //Add second doctor

        I.wait(1);
        I.waitForVisible(this.fields.doctorSearchName, 30);
        I.fillField(this.fields.doctorSearchName, 'king');
        I.click(this.fields.findDoctorsButton);

        I.wait(1);
        I.waitForVisible(this.fields.results, 30);
        I.wait(1);
        I.click(this.fields.firstDoctor);
        I.wait(2);
        I.click(this.fields.addDoctorButton);

        I.wait(1);
        I.waitForElement(this.fields.selectedDoctor, 30);
        I.waitForVisible(this.fields.addDoctor, 30);
        I.click(this.fields.addDoctor);

        //Add third doctor

        I.wait(1);
        I.waitForVisible(this.fields.doctorSearchName, 30);
        I.fillField(this.fields.doctorSearchName, 'john');
        I.click(this.fields.findDoctorsButton);
        I.wait(1);
        I.waitForVisible(this.fields.results, 30);
        I.wait(1);
        I.click(this.fields.firstDoctor);
        I.wait(2);
        I.click(this.fields.addDoctorButton);

        I.wait(1);
        I.waitForElement(this.fields.selectedDoctor, 30);
        I.waitForVisible(this.fields.addDoctor, 30);
        I.click(this.fields.addDoctor);

        //Add Fourth doctor

        I.wait(1);
        I.waitForVisible(this.fields.doctorSearchName, 30);
        I.fillField(this.fields.doctorSearchName, 'reddy');
        I.click(this.fields.findDoctorsButton);

        I.wait(1);
        I.waitForVisible(this.fields.results, 30);
        I.wait(1);
        I.click(this.fields.firstDoctor);

        I.wait(1);
        I.click(this.fields.addDoctorButton);

        I.wait(1);
        I.click(this.fields.seeResultsButton);
        I.waitForVisible(this.fields.listOfDoctorsAndPlansCovered, 30);
        I.wait(1);
        I.click(this.fields.viewPlans);
        I.wait(1);

        I.waitForVisible(this.fields.planName, 50);
        I.waitForVisible(this.fields.planType, 10);
        I.waitForVisible(this.fields.premium, 10);
        I.waitForVisible(this.fields.benefits, 10);
        I.waitForVisible(this.fields.viewDetails, 10);

    },
    

    clickIamNewToMedicare() {
        //click new
        I.click(this.fields.newToMedicare);
        I.wait(1);
        I.click(this.fields.nextButton);
        I.wait(1);
    },

clickZipCode(){
        //fill zip
        I.click(this.fields.zipText);
        I.wait(1);
        I.fillField(this.fields.zipText, '10007');
        
    },
clickLocationOverview(){
        //can see MA/MD/MS card
        I.wait(3);
        I.click(this.fields.nextButton);

    },
    clickProdLineIntroQuestions(){
        I.wait(1);
        I.waitForVisible(this.fields.maProductCard, 50);
        I.waitForVisible(this.fields.msProductCard, 10);
        I.waitForVisible(this.fields.mdProductCard, 10);
        I.wait(1);
        I.click(this.fields.continueButton);
        I.wait(1);
        I.click(this.fields.startButton);

        //answer 4 questions
        I.click(this.fields.answer1);
        I.click(this.fields.nextButton);
        I.wait(1);
        I.click(this.fields.answer1);
        I.click(this.fields.nextButton);
        I.wait(1);
        I.click(this.fields.answer1);
        I.click(this.fields.nextButton);
        I.wait(1);
        I.click(this.fields.answer1);
        I.click(this.fields.nextButton);

        I.waitForVisible(this.fields.productLineTitle, 30);
        I.waitForVisible(this.fields.reasons, 30);
      
        
    },
    clickAddDrugs(){
        //add drug
          I.wait(1);
        I.click(this.fields.continueButton);
        I.wait(1);
        I.click(this.fields.nextButton);
        I.waitForVisible(this.fields.drugsAutoComplete, 30);
        I.click(this.fields.drugsAutoComplete);
        I.fillField(this.fields.drugsAutoComplete, 'Cre');
        I.wait(2);
        I.click('#mdc_rec_app > div > div.map-background-wrapper.drugs-template.version.product-line-MA > div.main-content > div.content-wrapper > div.content-container.clearfix > div > div > div.drugs-card.clearfix > ul > li.textbox-wrapper.drug-name-wrapper > div > div > div:nth-child(3)');
        I.executeScript(function(){
            $('#quantity-input').val('');
        });I.wait(1);
        I.fillField(this.fields.quantity, '30');
        // I.wait(1);
        // I.click(this.fields.drugSuggestion);

        I.wait(1);
        I.click(this.fields.addDrugs);

        //can see druglist and savinginfo
        I.wait(1);
        I.waitForVisible(this.fields.drugList, 30);
        I.click(this.fields.continueButton);
        I.wait(1);
        I.waitForVisible(this.fields.savingsInfo, 30);
        
    },

    clickAddDoctors(){
        I.wait(1);
        I.click(this.fields.savingContinueButton);
        //Add first doctor
        I.wait(1);
        I.waitForVisible(this.fields.doctorSearchName, 30);
        I.fillField(this.fields.doctorSearchName, 'smith');
        I.click(this.fields.findDoctorsButton);

        I.wait(1);
        I.waitForVisible(this.fields.results, 30);
        I.click(this.fields.firstDoctor);
        I.wait(2);
        I.click(this.fields.addDoctorButton);

        I.wait(1);
        I.waitForElement(this.fields.selectedDoctor, 30);
        I.waitForVisible(this.fields.addDoctor, 30);
        I.click(this.fields.addDoctor);

        //Add second doctor

        I.wait(1);
        I.waitForVisible(this.fields.doctorSearchName, 30);
        I.fillField(this.fields.doctorSearchName, 'king');
        I.click(this.fields.findDoctorsButton);

        I.wait(1);
        I.waitForVisible(this.fields.results, 30);
        I.wait(1);
        I.click(this.fields.firstDoctor);
        I.wait(2);
        I.click(this.fields.addDoctorButton);

        I.wait(1);
        I.waitForElement(this.fields.selectedDoctor, 30);
        I.waitForVisible(this.fields.addDoctor, 30);
        I.click(this.fields.addDoctor);

        //Add third doctor

        I.wait(1);
        I.waitForVisible(this.fields.doctorSearchName, 30);
        I.fillField(this.fields.doctorSearchName, 'john');
        I.click(this.fields.findDoctorsButton);
        I.wait(1);
        I.waitForVisible(this.fields.results, 30);
        I.wait(1);
        I.click(this.fields.firstDoctor);
        I.wait(2);
        I.click(this.fields.addDoctorButton);

        I.wait(1);
        I.waitForElement(this.fields.selectedDoctor, 30);
        I.waitForVisible(this.fields.addDoctor, 30);
        I.click(this.fields.addDoctor);

        //Add Fourth doctor

        I.wait(1);
        I.waitForVisible(this.fields.doctorSearchName, 30);
        I.fillField(this.fields.doctorSearchName, 'reddy');
        I.click(this.fields.findDoctorsButton);

        I.wait(1);
        I.waitForVisible(this.fields.results, 30);
        I.wait(1);
        I.click(this.fields.firstDoctor);

        I.wait(1);
        I.click(this.fields.addDoctorButton);

        I.wait(1);
        I.click(this.fields.seeResultsButton);
        I.waitForVisible(this.fields.listOfDoctorsAndPlansCovered, 30);
        I.wait(1);
        I.click(this.fields.viewPlans);
        I.wait(1);

        I.waitForVisible(this.fields.planName, 50);
        I.waitForVisible(this.fields.planType, 10);
        I.waitForVisible(this.fields.premium, 10);
        I.waitForVisible(this.fields.benefits, 10);
        I.waitForVisible(this.fields.viewDetails, 10);


    }

}