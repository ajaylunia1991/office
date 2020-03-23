'use strict';

let I;
var randomInfo = require('../utils/random').randomInfo();

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
        zipCode: '#ehi-txtZipCode',
        continueBtn: '#continue-btn',
        suttercontinueBtn: '#continue-btn-top',
        email: '#ehi-txtEmailAddress',
    },

    //Fill lead info

        fillleadform(firstName, lastName, phone) {
        if (process.env.NODE_ENV == 'cm' | process.env.NODE_ENV == 'qa' ) {
            I.say("I am filling in Lead form");
            // I.fillField(this.fields.phone, phone);
            // I.fillField(this.fields.firstName, firstName);
            // I.fillField(this.fields.lastName, lastName);
            let phonex = this.fields.phone;
            let firstNamex = this.fields.firstName;
            let lastNamex = this.fields.lastName;
            I.executeScript(function(phone,phonex) {
                $(phonex).val(phone);
            },phone,phonex);
            I.executeScript(function(firstName,firstNamex) {
                $(firstNamex).val(firstName);
            },firstName,firstNamex);
            I.executeScript(function(lastName,lastNamex) {
                $(lastNamex).val(lastName);
            },lastName,lastNamex);
            I.say('First name is :' + firstName + '; Last name is :' + randomInfo.lastName + '; Phone num is :' + randomInfo.phone + ';');
            I.fillField(this.fields.zipCode, '12345');
            I.wait(1);
            I.click(this.fields.continueBtn);
            I.wait(8);
        }else{
            I.wait(1);
            I.click(this.fields.continueBtn);
            I.wait(8);
        }

    }


}