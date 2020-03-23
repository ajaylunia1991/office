'use strict';

let I, rxPage;

module.exports = {

    _init() {
        I = actor();

        rxPage = require('../mdc/rxSeoHomepage');
        rxPage._init();
    },

    // insert your locators and methods here

    fields: {

        breadcrumbs: '#breadcrumbs',

        drugsIndex: '.rx.rx-search-result',
        header: '.small-12.medium-12.large-12.columns>h1',
        alphaIndex: '.alphabet-list',
        drugListColumns: '.drug-list.columns',
        drugName: '//a[contains(text(),"Abilify")',

        pagination: '.new-pagination',
        prescriptionDrugLink:  '#breadcrumbs>li:nth-child(1)>a'


    },


    validateDrugListPageElements() {

        I.waitForVisible(this.fields.breadcrumbs,50);
        I.waitForVisible(this.fields.drugsIndex,5);
        I.waitForVisible(this.fields.pagination,5);
        I.waitForVisible(this.fields.header,5);
        I.waitForVisible(this.fields.alphaIndex,5);
        I.waitForVisible(this.fields.drugListColumns,5);
        I.see('Abilify','//*[@id="main"]/div/div/div[2]/div/div[6]/a');

    },

    validateBreadcrumb(){
        I.waitForVisible(this.fields.prescriptionDrugLink,5);
        I.click(this.fields.prescriptionDrugLink);
        I.wait(2);
        rxPage.validateRxSeoHomepageElements();
    }

}