'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {

        //All articles Page
        medicarePartDArticlesText : 'div.articles:nth-child(1) > div:nth-child(1) > h1:nth-child(1)',
        callCenterHours1 : '.ehi-call-center-hours1',
        callCenterHours2 : '.ehi-call-center-hours2',
        choseAHealthInsuranceProviderText : 'div.article-detail-mobile-space:nth-child(1) > h1:nth-child(1)',
    },

    //Function to verify that Full hours of operation is displaying on category and Article page

    validateFullHours() {
        I.scrollTo(this.fields.callCenterHours1);
        I.waitForVisible(this.fields.callCenterHours1, 5);
        I.see('Mon - Fri, 8am - 8pm',this.fields.callCenterHours1);
        I.waitForVisible(this.fields.callCenterHours2, 5);
        I.see('Sat - Sun, 8am - 5pm ET',this.fields.callCenterHours2);
    },
}

