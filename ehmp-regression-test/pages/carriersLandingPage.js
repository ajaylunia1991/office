'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {

        //locators
        carrierLogo: '#partner-logo-img',
        // locators for Template 1 Edit Boxes
        firstNameEditBox: '#firstName',
        lastNameEditBox: '#lastName',
        phoneNumberEditBox: '#phoneNumber',
        emailEditBox: '#email',
        zipCodeEditBox: '.zip',
        btnStartComparing: '.btn-text-holder',
        leadFormPanel: '.lead-form-panel',
        //Labels
        //firstNameTxt:"//label[contains(text(),'First name')]",
        firstNameTxt: '.form-group:nth-child(2) > .ehi-label',
        lastNameTxt: '.form-group:nth-child(3) > .ehi-label',
        phoneNumberTxt: '.form-group:nth-child(4) > .ehi-label',
        emailTxt: '.form-group:nth-child(5) > .ehi-label',
        zipText: '#zipBox > label',
        //lastNameTxt:"//label[contains(text(), 'Last Name')]",
        //phoneNumberTxt:"//label[contains(text(),'Phone number')]",
       // emailTxt:"//label[contains(text(),'Email address')]",
        //zipText:"//label[contains(text(),'Zip code')]",
        /// Shop now template
        title: '.cta-button-wrap > h1',
        text: '.cta-button-wrap > p',
        picture: '.mini-site-wrap',

        zipCodeField: '#zip_code_carrier',
        updateResultsbtn: '.button-blue.carrier-btn',
        selectCountyField: '#county',

    },

    checkingEditBoxes(){
        I.wait(2);
        console.log("Checking Edit Boxes on Template 1");
        I.seeElement(this.fields.firstNameEditBox);
        I.seeElement(this.fields.lastNameEditBox);
        I.seeElement(this.fields.phoneNumberEditBox);
        I.seeElement(this.fields.emailEditBox);
        I.seeElement(this.fields.zipCodeEditBox);
        I.seeElement(this.fields.btnStartComparing);
        I.seeElement(this.fields.leadFormPanel);

    },

    checkShopNow(){
        I.wait(2);
        console.log("Checking Zip Code Box on Template2");
        I.seeElement(this.fields.title);
        I.seeElement(this.fields.text);
        I.seeElement(this.fields.zipCodeEditBox);
        I.seeElement(this.fields.btnStartComparing);
        I.seeElement(this.fields.picture);
        },

   checkingEditLabels(){
   I.wait(3);
    console.log("Checking Edit Labels on Template 1");
    I.see('First name', this.fields.firstNameTxt);
    I.see('Last name', this.fields.lastNameTxt);
    I.see('Phone number', this.fields.phoneNumberTxt);
    I.see('Email address', this.fields.emailTxt);
    I.see('Zip code', this.fields.zipText);
    I.seeElement(this.fields.leadFormPanel);
    }



}