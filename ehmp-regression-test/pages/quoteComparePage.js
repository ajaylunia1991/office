'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {

        //EHMP Compare page locators
        bthBackCompare: '.ehi-top-tool-back',
        addDrugsCompare: '//a[contains(text(),\'+ Add rx drugs\')]',
        backToCompareLink: '.drug-tool-back-link',
        // Drugs locators
        editDrugCompare: '//a[contains(text(),"(Edit)")]',
        drugName1Compare: '.group:nth-child(2) > .crow:nth-child(2) > .cheader > label',
        drugName2Compare: '.group:nth-child(2) > .crow:nth-child(3) > .cheader > label',
        drugName3Compare: '.group:nth-child(2) > .crow:nth-child(4) > .cheader > label',
        drugsNumCoveredComp1: '.group:nth-child(2) > .crow:nth-child(1) .ccol:nth-child(1) > p',
        drugsNumCoveredComp2: '.group:nth-child(2) > .crow:nth-child(1) .ccol:nth-child(2) > p',
        drugsNumCoveredComp3: '.group:nth-child(2) > .crow:nth-child(1) .ccol:nth-child(3) > p',
        drugPrescriptionLabel: '.group:nth-child(2) > .crow > .attrname',

        //Compare general locators
        //comparePage: "//div[@id='ehimcPlanCompareDisclose']/h1",
        checkURLCompare: 'pH3312-062-000,H5521-119-000,H5521-110-000',
        comparePageRedesign: "//div[@id='compareHeaderFixed']/div/div/div/h2",
        bthBackCompareRedesign: 'a.btn-back.ehi-top-tool-back',
        checkURLCompareMD: 'pS5601-006-000,S5601-007-000',

        // Doctors
        nameDoc: '.compare-table-cont:nth-child(2) .cheader > label',
        editDocLInk: '.compare-table-cont:nth-child(2) .edit-doctor',

        // Plan Benefits
        dentalServicesCmpr: '//a[contains(text(),"Dental Services")]',
        visionServicesCmpr: '//a[contains(text(),"Vision Services")]',
        hearingServicesCmpr: '.collapse-wrapper:nth-child(3) .row:nth-child(3) a',
        silverSneakersCmpr: '//a[contains(text(),"SilverSneakers")]',
        fitnessBenefitsCmpr: '.collapse-wrapper:nth-child(3) .panel-content-wrapper > .row:nth-child(4) a',
        planCarrier1: '.col-xs-6:nth-child(2) > .plan-carrier > div',
        planCarrier2: '.col-xs-6:nth-child(3) > .plan-carrier > div',
        gyms: '//a[contains(text(),"Find participating gyms")]',







    },

        someFunction() {

    },


}