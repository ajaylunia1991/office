'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    fields: {
        enrollBtn: '*[data-mediator="enroll"]',
        companyBtn: '#carrier_filter > h4'
    },

    addDrug(){
        I.waitForElement('#ehi-firstletter', 50);
        I.fillField('#ehi-firstletter', 'L');
        I.wait(1);
        I.fillField('#ehi-secondletter', 'I');
        I.wait(1);
        I.fillField('#ehi-thirdletter', 'A');
        I.wait(3);
        I.waitForElement('//*[@id="dt-disambig-area"]/div/div[3]/div[2]/div[5]/a', 50);I.wait(3);
        I.click('//*[@id="dt-disambig-area"]/div/div[3]/div[2]/div[5]/a');
        I.wait(2);
        I.see('Dosage');
        I.click('#add-drug-btn');
        I.wait(3);
    }
}