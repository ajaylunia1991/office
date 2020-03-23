'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {

        requestaCall: '.request-call-link',

        firstNameField: '#lead-form > div:nth-child(1) > div > #first_name',
        fnm_error: '#lead-form > div:nth-child(1) > div > p',

        lastNameField: '#lead-form > div:nth-child(2) > div > #last_name',
        lnm_error: '#lead-form > div:nth-child(2) > div > p',
        
        phoneNo: '#lead-form > div:nth-child(3) > div > #phone_number',
        ph_error: '#lead-form > div:nth-child(3) > div > p',

        zipCode: '#lead-form > div:nth-child(4) > div > #zip_code_aep_lead',
        zip_error: '#lead-form > div:nth-child(4) > div > p',

        county: '#lead-form > div:nth-child(5) > div',

        submit: '#submit-lead-form-button'





    }
}