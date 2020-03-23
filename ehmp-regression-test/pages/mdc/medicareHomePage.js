'use strict';

let I, rxPage, doctorPage;

module.exports = {

    _init() {
        I = actor();

        rxPage = require('../mdc/rxSeoHomepage');
        rxPage._init();

       // doctorPage = require('../mdc/doctorSearchHomePage');
       // doctorPage._init();
    },

    // insert your locators and methods here

    fields: {

        topHeaderElements: '.site-header',
        // Home Page, Saving Text Statement element - ALGO-508 TestCase-@C24668
        homeSavingText : '/html/body/div[2]/div/div[4]',
        // Home Page, Disclaimer Text Statement element - ALGO-508 TestCase-@C24669
        disclaimerText1 : 'body > div.site-what-about > div > p.disclaimer-section-v1',        

        // Articles Page, Saving Text Statement element - ALGO-508 TestCase-@C24668
        articleSavingText1: '//*[@id="main"]/div/div[1]/div[2]/div/div[3]/h2',
        articleSavingText2: '//*[@id="main"]/div/div[1]/div[2]/div/div[3]/h2/b',
    },



 /*   goToFindDoctorsPage() {

        I.waitForVisible(this.fields.topHeaderElements, 50);
        I.wait(1);
        I.click('//a[text()="Find Doctors"]');
        doctorPage.validateDoctorHomepageElements();

    },*/

    goToRxSeoPage() {

        I.waitForVisible(this.fields.topHeaderElements, 50);
        I.wait(1);
        I.click('//a[text()="Prescription Drug Pages"]');
        rxPage.validateRxSeoHomepageElements();
    },

    // Function used to Verify Savings statement text on homepage- ALGO-508 TestCase-@C24668
    validateHomeSavingText(homeSaveText) {
            I.wait(1);
            I.see(homeSaveText, this.fields.homeSavingText);
    },

    // Function used to Verify Savings statement text on All Articles page- ALGO-508 TestCase-@C24668
    validateArticleSavingText(articleSaveText1, articleSaveText2) {
        I.wait(1);
        I.see(articleSaveText1, this.fields.articleSavingText1);
        I.see(articleSaveText2, this.fields.articleSavingText2);
    },

    // Function used to Verify Disclaimer text on Home page- ALGO-508 TestCase-@C24669
        validateDisclaimerText(discText1,discText2) {
        I.wait(2);
        var disclaimerText2 = this.fields.disclaimerText1.split("<br>");
        I.see(discText1, this.fields.disclaimerText1);
        I.see(discText2, disclaimerText2[1]);
    },

    

}