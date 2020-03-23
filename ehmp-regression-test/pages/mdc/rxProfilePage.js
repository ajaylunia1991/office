'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {

        priceAndSavings: '.rx-retail-info',
        priceInfo: '.price-info',
        findSavingsButton: '.rx-saving-button > a',
        yearlySavings: '.price-per-year',
        howIsItCalculatedLink: '.fusion-modal-text-link.quantity-tip-link',

        drugName: '.row.rx-name',
        drugNameActual: 'div > h1',

        drugInfo: '.rx-info',
        drugTitle: '.rx-title',
        activeIngredient: '.rx-active-ingredient',
        info: '.base-part',

        drugSavings: '.rx-medicareplan-search',
        savingsTitle: '.rx-saving-title',
        savingText: '.rx-saving-text',
        zip: '#zip_code_rx',
        county: '#county',
        quantity: '#quantity_rx',
        findSavingsBtn: '.rx-saving-button > button',

        drugInfo :  '.rx-info',
        drugTitle:  '.rx-title',
        activeIngredient :  '.rx-active-ingredient',
        info :  '.base-part'

    },


    validateRxProfilePageElements() {

        I.waitForVisible(this.fields.priceAndSavings, 50);
        I.waitForVisible(this.fields.drugName, 5);
        I.waitForVisible(this.fields.drugInfo, 5);
        I.waitForVisible(this.fields.drugSavings, 5);

    },

    validateDrugPriceSavingsInfo() {

        I.waitForVisible(this.fields.priceInfo, 50);
        I.waitForVisible(this.fields.findSavingsButton, 5);
        I.waitForVisible(this.fields.yearlySavings, 5);
        I.waitForVisible(this.fields.howIsItCalculatedLink, 5);
    },

    validateDrugNameInfo(){

        I.waitForVisible(this.fields.drugNameActual, 50);

    },

    validateDrugPlanSavings(){
        I.waitForVisible(this.fields.savingsTitle, 50);
        I.waitForVisible(this.fields.savingText, 5);
        I.waitForVisible(this.fields.zip, 5);
        I.waitForVisible(this.fields.quantity, 5);
        I.waitForVisible(this.fields.findSavingsBtn, 5);
        I.waitForVisible(this.fields.county, 5);
    },

    validateDrugInfo(){
        I.waitForVisible(this.fields.drugTitle, 50);
        I.waitForVisible(this.fields.activeIngredient, 5);
        I.waitForVisible(this.fields.info, 5);
    }

}