'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {
        continueEnroll: '#ehi-btnEnrollOnline',
        firstName: '#ehi-txtFirstName',
        lastName: '#ehi-txtLastName',
        phone: '#ehi-txtPhoneNumber',
        continueBtn: '#continue-btn',
        closeBtn: '#ehi-dialogClose',
        backBtn: '.back-link:nth-of-type(1)',

        //shopping cart
        leadFormText: '#ehi-popupDialog .overlay-main.leadform>div>h1',
        successLeadTxt: 'section.overlay-main.leadform-thankyou > div > h1',
        emailIDField: '#ehi-txtEmailAddress',
        checkBoxText: 'ehi-chkEmailUpdates',
        leadForm: '#ehi-popupDialog',

        //application flow an element in first page
        element: '#input1',
        //application flow elementS in second page
        page2Link: '//*[@id="progress-bar"]/li[2]/a',
        element2: '#input1',

        //account info xpath
        email: '#email',
        emailAgain: '#confirmEmail',
        pw: '#password',
        pwAgain: '#confirmPassword',
        register: '//*[@id="mcRegisterForm"]/div[2]/input'
    },

    //Fill lead info	
    async typeLead(firstName, lastName, phone) {
        I.waitForElement(this.fields.firstName, 50);
        I.fillField(this.fields.firstName, firstName);
        I.fillField(this.fields.lastName, lastName);
        I.executeScript(function(phone) {
            $('#ehi-txtPhoneNumber').val(phone);
        },phone);
        I.wait(2);
        I.click(this.fields.continueBtn);
        I.wait(3);
    },

    ////Fill account info
    typeAccountInfo(email, firstName) {
        I.waitForElement(this.fields.email, 50);
        I.fillField(this.fields.email, email);
        I.fillField(this.fields.emailAgain, email);
        I.fillField(this.fields.pw, firstName + '123');
        I.fillField(this.fields.pwAgain, firstName + '123');
        I.wait(2);
        I.click(this.fields.register);
    },

    closeLeadForm(){
        I.waitForElement(this.fields.continueBtn, 50);
        I.click(this.fields.continueBtn);   
    }

}