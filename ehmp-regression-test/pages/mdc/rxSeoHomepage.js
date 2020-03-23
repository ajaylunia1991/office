'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {

        searchFields: '.rx-search-form',
        drugNameText: '#drugname-field-rx',
        findDrugs: '.button-blue.find-Rx-Drugs',
        drugNameLabel: '#.rx-search-form',
        drugSuggestion: '#ui-id-1 > li',


        commonlySearchedRxRow: '.commonly-searched-rx.row',
        rowOne: 'div:nth-child(2)',
        rowTwo: 'div:nth-child(3)',

        viewByDrugNameLink: '.rx-search-link',
        viewRxDrugsByNameLink: 'span > a',

        matchingDrugSuggestion: '#main > div.fusion-row > div > div.rx-search > div.row.rx-search-row'


    },


    validateRxSeoHomepageElements() {

        I.waitForVisible(this.fields.searchFields, 50);
        I.waitForVisible(this.fields.commonlySearchedRxRow, 5);
        I.waitForVisible(this.fields.viewByDrugNameLink, 5);

    },

    searchDrugName(drugName) {
        I.waitForVisible(this.fields.searchFields, 50);
        I.fillField(this.fields.drugNameText, drugName);
        // I.wait(4);
        // I.click(this.fields.matchingDrugSuggestion);
        I.wait(1);
        I.click(this.fields.findDrugs);
        I.wait(2);
    }
}