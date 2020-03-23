'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {
        leadForm: '#compare-plans-form2',
        fn: '#first_name',
        ln: '#last_name',
        phone: '#phone_number',
        zip: '#zip_code',
        button: 'div > div:nth-child(5) > div > input',
        tcpa: '.text',

        topHeaderElements: '.site-header',
        logo: '.small-12.medium-6.large-7.columns>a',
        callAgent: '.header-tagline',

        topMenuBar: '#menu-medicare',
        mediaCarousel: '.owl-item',

        sideContent: '.side-content-compare',
        explanation: '.list-hero-agent.top-content>ul',

        productPlanTypesModule: 'div#main> div:nth-child(1)>div:nth-child(6)',
        maProductType: 'div:nth-child(1)>div>a',
        msProductType: 'div:nth-child(2)>div>a',
        mdProductType: 'div:nth-child(3)>div>a',

        comparePlansDisclaimer: '.disclaimer.show-for-large-up',
        aetnaDisc: '.disclaimer.show-for-large-up>p:nth-child(1)',
        humanaDisc: '.disclaimer.show-for-large-up>p:nth-child(2)',
        unitedDisc: '.disclaimer.show-for-large-up>p:nth-child(3)',

        // Compare Plans Page, Saving Text Statement element
        comparePlansSavingText1 :'//*[@id="main"]/div/div[1]/div[2]/div[1]/div/p',
        comparePlansSavingText2 : '//*[@id="main"]/div/div[1]/div[2]/div[1]/div/p/b',
 

    },



    validateElements() {
        I.wait(2);
        I.waitForVisible(this.fields.leadForm, 30);
        I.waitForVisible(this.fields.topHeaderElements, 30);
        I.waitForVisible(this.fields.topMenuBar, 30);
        I.waitForVisible(this.fields.mediaCarousel, 30);
        I.waitForVisible(this.fields.sideContent, 30);

        I.waitForVisible(this.fields.explanation, 30);
        I.waitForVisible(this.fields.maProductType, 30);
        I.waitForVisible(this.fields.msProductType, 30);
        I.waitForVisible(this.fields.mdProductType, 30);
        I.waitForVisible(this.fields.phone, 30);
        I.waitForVisible(this.fields.comparePlansDisclaimer, 30);
    },

    validateDisclaimerText(aetna, humana, united) {
        I.wait(2);
        I.see(aetna, this.fields.aetnaDisc);
        I.see(humana, this.fields.humanaDisc);
        I.see(united, this.fields.unitedDisc);
    },

    // Function used to Verify Savings statement on Compare Plans Page - ALGO-508 - Test case - @C24668
    validateSavingText(comparePlanSaveText1,comparePlanSaveText2) {
        I.wait(1);
        I.see(comparePlanSaveText1, this.fields.comparePlansSavingText1);
        I.see(comparePlanSaveText2, this.fields.comparePlansSavingText2);
    },   

    validateFastQuoteUrlForMaProductTypeFindPlans() {
        // how to verify "href" in an element "maProductType"
        // allid=Med41422
        // medicarecom=2  
        // allid=Med41422
        // type=MA 

    },

    validateFastQuoteUrlForMsProductTypeFindPlans() {
        // how to verify "href" in an element "maProductType"
        // allid=Med41422
        // medicarecom=2  
        // allid=Med41422
        // type=MS

    },

    validateFastQuoteUrlForMdProductTypeFindPlans() {

        // how to verify "href" in an element "maProductType"
        // allid=Med41422
        // medicarecom=2  
        // allid=Med41422
        // type=MD

    }


}