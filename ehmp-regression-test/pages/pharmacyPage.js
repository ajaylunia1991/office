'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    fields: {
        enrollBtn: '*[data-mediator="enroll"]',
        companyBtn: '#carrier_filter > h4',
        backBtn: '#dt-header > a > span'
    },

    addPharmacy(){
        I.click('#page1 > li:nth-child(1) > div > div.col-xs-11 > div > label.hidden-xs.ehi-pharm-addr');
        I.wait(2);
        I.click('#btn-done');
        I.wait(2);
    }
}