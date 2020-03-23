'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {
        carrierProfilePageLeadForm: 'div.layer:nth-child(3) > div:nth-child(2) > form',
        firstName: '//*[@id="carrier-lead-form"]/div[1]/div[1]/input',
        lastName: '//*[@id="carrier-lead-form"]/div[1]/div[2]/input',
        phone: '//*[@id="carrier-lead-form"]/div[2]/div/input',
        zipcode: '//*[@id="carrier-lead-form"]/div[3]/div/input',
        submitButton: '//*[@id="carrier-lead-form"]/div[4]/input',
        tcpaText: 'div.lead-disclaimer:nth-child(4)',

        postLeadSubmissionFields: '.agent-find-plan',
        submittedZip: '#zip_code_submitted',
        submittedCounty: '#county_submitted',
        successMessage: 'div:nth-child(2) .find-plan-text',
        findPlansOnlineButton: '#main > div.fusion-row > div > div.carrier-left-2.small-12.medium-9.large-9.columns.hide-768less > div.row.agent-find-plan > div.layer.article-banner > div.agent-find-plan-submitted.row.hide.lead-submitted > div > form > div.button-div.small-12.medium-12.large-3.columns.small-text-center.large-text-left.see-plans > a',

        productPlanTypesModule: '.plantype-wrap',
        maProductType: 'div.plantype-wrap>div.row:nth-child(2)>div.one-plan-type.small-12.medium-4.columns.text-center.large-4:nth-child(2)>div.medicare-plans:nth-child(1)',
        maSymbol: '.plan-type-icon > a',
        maLink: '.plan-type-title > a',
        maFindPlans: '.plan-type-find-plan > a',
        mdProductType: 'div.plantype-wrap>div.row:nth-child(2)>div.one-plan-type.small-12.medium-4.columns.text-center.large-4:nth-child(3)>div.medicare-plans:nth-child(1)',
        mdSymbol: '.plan-type-icon > a',
        mdLink: '.plan-type-title > a',
        mdFindPlans: '.plan-type-find-plan > a',
        msProductType: 'div.plantype-wrap>div.row:nth-child(2)>div.one-plan-type.small-12.medium-4.columns.text-center.large-4:nth-child(4)>div.medicare-plans:nth-child(1)',
        msSymbol: '.plan-type-icon > a',
        msLink: '.plan-type-title > a',
        msFindPlans: '.plan-type-find-plan > a'


    },

    createLeadFromCarrierProfilePage(fn, ln, ph, zip) {

//        I.waitForVisible('#main > div.fusion-row > div > div:nth-child(1) > div.carrier-left-1.small-12.medium-9.large-9.columns > div.row.carrier-article > div.articles > div:nth-child(13) > a > li', 30);
//        I.scrollTo('#main > div.fusion-row > div > div:nth-child(1) > div.carrier-left-1.small-12.medium-9.large-9.columns > div.row.carrier-article > div.articles > div:nth-child(13) > a > li');
     //   I.waitForVisible(this.fields.carrierProfilePageLeadForm, 30);
        I.wait(1);
        I.fillField(this.fields.firstName, fn);
//                I.wait(21);

        I.fillField(this.fields.lastName, ln);
        I.fillField(this.fields.phone, ph);
        I.fillField(this.fields.zipcode, zip);
        I.wait(1);
        I.click(this.fields.submitButton);
        I.wait(5);
    },

    validateTCPAText(){
        I.seeElementInDOM(this.fields.tcpaText, 30);
    },

    validateProductPlanTypesElements() {
        I.seeElementInDOM(this.fields.productPlanTypesModule, 30);
        I.seeElementInDOM(this.fields.maSymbol, 30);
        I.seeElementInDOM(this.fields.maFindPlans, 30);
        I.seeElementInDOM(this.fields.maSymbol, 30);
        I.seeElementInDOM(this.fields.maLink, 30);
        I.seeElementInDOM(this.fields.msFindPlans, 30);
        I.seeElementInDOM(this.fields.msSymbol, 30);
        I.seeElementInDOM(this.fields.msLink, 30);
        I.seeElementInDOM(this.fields.mdFindPlans, 30);
        I.seeElementInDOM(this.fields.mdSymbol, 30);
        I.seeElementInDOM(this.fields.mdLink, 30);
    },

    validateFastQuoteUrlForFindPlansButton(){
        //how to catch the value of "href" in findPlansOnlineButton ???
    // I.seeInCurrentUrl('medicarecom=2');
    // I.seeInCurrentUrl('msType=msc-aetna');
    // I.seeInCurrentUrl('leadFormEnabled=false');
    // I.seeInCurrentUrl('allid=AOL20659');
    },

    validateFastQuoteUrlForMaProductTypeFindPlans() {
        //how to catch the value of "href" in maFindPlans ???
        // I.seeInCurrentUrl('allid=Med40680')；
        // I.seeInCurrentUrl('medicarecom=2')；
        // I.seeInCurrentUrl('msType=msc-aetna')；
        // I.seeInCurrentUrl('allid=Med40680')；
        // I.seeInCurrentUrl('type=MA');
    },

    validateFastQuoteUrlForMdProductTypeFindPlans() {
        //how to catch the value of "href" in mdFindPlans ???
        // I.seeInCurrentUrl('allid=Med40680')；
        // I.seeInCurrentUrl('medicarecom=2')；
        // I.seeInCurrentUrl('msType=msc-aetna')；
        // I.seeInCurrentUrl('allid=Med40680')；
        // I.seeInCurrentUrl('type=MD');
    },

    validateFastQuoteUrlForMsProductTypeFindPlans() {
        //how to catch the value of "href" in msFindPlans ???
        // I.seeInCurrentUrl('allid=Med40680')；
        // I.seeInCurrentUrl('medicarecom=2')；
        // I.seeInCurrentUrl('msType=msc-aetna')；
        // I.seeInCurrentUrl('allid=Med40680')；
        // I.seeInCurrentUrl('type=MS');
    },

    validateFastQuoteUrlForMaProductTypeSymbol() {
        //how to catch the value of "href" in maSymbol ???
        // I.seeInCurrentUrl('allid=Med40680')；
        // I.seeInCurrentUrl('medicarecom=2')；
        // I.seeInCurrentUrl('msType=msc-aetna')；
        // I.seeInCurrentUrl('allid=Med40680')；
        // I.seeInCurrentUrl('type=MA');

    },

    validateFastQuoteUrlForMdProductTypeSymbol() {
        //how to catch the value of "href" in mdSymbol ???
        // I.seeInCurrentUrl('allid=Med40680')；
        // I.seeInCurrentUrl('medicarecom=2')；
        // I.seeInCurrentUrl('msType=msc-aetna')；
        // I.seeInCurrentUrl('allid=Med40680')；
        // I.seeInCurrentUrl('type=MD');
    },

    validateFastQuoteUrlForMsProductTypeSymbol() {
        //how to catch the value of "href" in msSymbol ???
        // I.seeInCurrentUrl('allid=Med40680')；
        // I.seeInCurrentUrl('medicarecom=2')；
        // I.seeInCurrentUrl('msType=msc-aetna')；
        // I.seeInCurrentUrl('allid=Med40680')；
        // I.seeInCurrentUrl('type=Ms');
    },

    validateFastQuoteUrlForMaProductTypeLink(){
        //how to catch the value of "href" in maLink ???
        // I.seeInCurrentUrl('allid=Med40680')；
        // I.seeInCurrentUrl('medicarecom=2')；
        // I.seeInCurrentUrl('msType=msc-aetna')；
        // I.seeInCurrentUrl('allid=Med40680')；
        // I.seeInCurrentUrl('type=MA');
    },

    validateFastQuoteUrlForMdProductTypeLink(){
        //how to catch the value of "href" in mdLink ???
        // I.seeInCurrentUrl('allid=Med40680')；
        // I.seeInCurrentUrl('medicarecom=2')；
        // I.seeInCurrentUrl('msType=msc-aetna')；
        // I.seeInCurrentUrl('allid=Med40680')；
        // I.seeInCurrentUrl('type=MD');
    },

    validateFastQuoteUrlForMsProductTypeLink(){
        //how to catch the value of "href" in msLink ???
        // I.seeInCurrentUrl('allid=Med40680')；
        // I.seeInCurrentUrl('medicarecom=2')；
        // I.seeInCurrentUrl('msType=msc-aetna')；
        // I.seeInCurrentUrl('allid=Med40680')；
        // I.seeInCurrentUrl('type=MS');
    }




}