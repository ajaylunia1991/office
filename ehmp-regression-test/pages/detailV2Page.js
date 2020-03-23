'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    fields: {
        highLightAddDoc: '#plan-details > div.detail-container > div:nth-child(1) > div:nth-child(2) > div > div.detail-composite-row.cf.provider-search > dl > dd > a',
        highLightAddDrug: '#plan-details > div.detail-container > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(2) > dl > dd > a',
        addDrug: '#drugCostsDetails > div.detail-composite-row.cf > dl > dd > a',
        addPharmacy: "a.select-pharmacy",
        editPharmacy: "a.edit-pharmacy",
        addCurrentPlan: '.add-current-plan',
        editCurrentPlan: ".edit-current-plan",
        backBtn: '#breadcrumb-back',
        enrollBtn: 'button.btn.btn-primary.ehi-btn-enroll'
    }
}