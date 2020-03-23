'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    fields: {
        addDocLink: '#ehimcPlanCompareTable > div:nth-child(2) > div.group.provider-search > div > div.ccont > div:nth-child(1) > a',
        addDrugLink: '#ehimcPlanCompareTable > div:nth-child(2) > div:nth-child(2) > div > div.ccont > div:nth-child(1) > a',
        addPharmacyLink: '.add-pharmacy',
        addFavoriteLink: '.add-favorite',
        addCurrentLink: '.add-current',
        addDoctorV2: '.add-doctor-v2',
        currentPlanEdit: '.current-plan-edit',
        addCurrentPlanLink: '.current-plan-edit:nth-of-type(1)',
        editCurrentPlanLink: "a[class='current-plan-edit']:nth-of-type(1)",
        planBenefitLink: '#compareHeaderFixed > div > div.hdr-box-container.ccont > div:nth-child(1) > div > div.plan-name > a',
        backBtn: '.btn-back-wrap > a',
        topToolBack: '.ehi-top-tool-back',
        enrollBtn: '.compare-to-enroll:nth-of-type(1)'
    }
}