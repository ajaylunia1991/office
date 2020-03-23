'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {

        //EHMP Plan Detail locators
        addDrugsPlanDetail: '.add-drugs',
        benefitHighlights: '//a[contains(text(),"Benefit Highlights")]',
        drugsNumCovered: '.detail-composite-row:nth-child(2) > .cf:nth-child(1) > dd',
        editDrugsLink: '.edit-drugs',
        drugName1PlanDetail: '.cf:nth-child(2)',
        drugName2PlanDetail: '.cf:nth-child(3)',
        drugName3PlanDetail: '.cf:nth-child(4)',
        backToPlans: '#breadcrumb-back',
        drugRemoveIcon: '.dt-summary-item:nth-child(1) .dt-summary-remove', // removing 1st drug by clicking X
        drugRemoveLink: '(//a[contains(text(),"Remove")])[2]', // removing drug by clicking Remove
        drugSummaryList: '.dt-empty-summary-list',
        backToPlansBtn: '.dt-btn > .btn-back',
        enrollBtn: '.ehi-btn-enroll',
        benefitHighlightsDetail: '#bh > span',
        planType: '.detail-plan-type',

        //
        planDetailRedesign: '.detail-plan-name',
        planDetail: '.ehi-pd-name',

        // Doctor locators
        nameDoc: '.detail-composite-row > .detail-short-row span',
        editDocLInk: '.detail-composite-row .edit-doctors',
        addDocPlanDetail: '.add-doctor-v2:nth-child(1)',
        nameDoc1: '.detail-composite-row > .cf:nth-child(2) span',
        nameDoc2: '.detail-composite-row > .cf:nth-child(3) span',
        nameDoc3: '.detail-composite-row > .cf:nth-child(4) span',
        docAndCoverage: '//a[contains(text(),"Doctor & Hospital Coverage")]',
        editLinkDoc: '.detail-row .edit-doctors',
        docCoveredLabel: '.detail-table:nth-child(2) > .provider-search > .cf:nth-child(1) > dd',

        // Benefits
        dentalServices: '//a[contains(text(),"Dental Services")]',
        visionServices: '//a[contains(text(),"Vision Services")]',
        hearingServices: '//a[contains(text(),"Hearing Services")]',
        silverSneakers: '//a[contains(text(),"SilverSneakers")]',
        dentalServicesCoverage: '.collapse-wrapper:nth-child(4) .row:nth-child(1) > .col-sm-8',
        visionServicesCoverage: '.collapse-wrapper:nth-child(4) .row:nth-child(2) > .col-sm-8',
        hearingServicesCoverage: '.collapse-wrapper:nth-child(4) .row:nth-child(3) > .col-sm-8',
        silverSneakersCoverage: '.collapse-wrapper:nth-child(4) .row:nth-child(4) > .col-sm-8',
        gyms: '.col-sm-8 > .feature-definition',
        silverSneakersLink: 'https://tools.silversneakers.com/LocationSearch',
        inpatientHospitalCoverage: '//a[contains(text(),\"Inpatient Hospital Coverage\")]',







    },



}