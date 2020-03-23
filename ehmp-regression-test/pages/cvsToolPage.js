'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {
        cvsSection: '#medicare-plan-tool',

        copayDrugInfo: '[data-wa-link="cvs:EnterInformation"].btn',

        savedSessionElement: '.ss-entry',

        ssPersonalCode: '.ss-label',

        sessionData: '//div[@id=\'ehi-drugSummary\']/div/div/h2',
        locateStrategy: 'xpath',

        saveSessionBtn: '[data-wa-link="cvs:Continue"].session-btn',

        drugSummary: '.drug-summary-section1>div.drug-summary-sec-head > h3',

        preferredPharmacy: '#selected-pharmacy-section > div',

        savedSessionPlan: '#selected-plan-section > div',

        savedSessionDrug: 'li.sel-drug-name',

        plansReportPage: '#btn-drug-view-plans',

        reportPageVerify: 'div.bottom-section > p',

        zipCode: '#zip-name',

        addDrugs: '#ehi-drugSummary #btn-add-more',

        addDrugsPage: '.drug-step-title.section-grey.hidden-xs>h2',

        drugOne: '#ehi-firstletter',

        drugTwo: '#ehi-secondletter',

        drugThree: '#ehi-thirdletter',

        nxtBtn: '#next-btn',

        drugList: '#ehi-medList',

        selDrug: 'input[name=\'Lipitor\']',

        nxtBtns: '.btn-group #next-btn',

        dosage: '#dosage-field',

        drugQty: '#quantity-field',

        addDrug: '#add-drug-btn'


    }
}