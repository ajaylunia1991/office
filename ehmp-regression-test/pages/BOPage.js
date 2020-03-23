'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {

        // boUserName: 'input[name= \'mcei.bo.username\']',
        boUserName: '#userId',

        // boPassword: 'input[name= \'mcei.bo.password\']',
        boPassword: '#password',

        // loginBtn: 'input[name= \'Click here to login\']',
        loginBtn: '#BOLogin',

        userRole: ".user-role",

        selectMediSalesRole: '//*[contains(text(), \'Medicare Sales\')]',

        agentDashboardLeads: '//*[contains(text(), \'Leads\')]',

        agentDashboardEnrollScript: '//*[contains(text(), \'Inbound Enrollment Script\')]',

        leadSearchlink: '//*[contains(text(), \'Individual Lead Search\')]',

        searchBtn: '.btn.btn-primary.btn-embossed',

        tollFreeNo: '#tollFreeNumber',

        recordCall: 'input[id=\'continueCallYes\']',

        lastName: '#lastName',

        firstName: '#firstName',

        userPhone: '#phone',

        userFirstName: '#first-name-change',

        userLastName: '#last-name-change',

        newApplicant: '#new_applicant',

        newBOAllOptions: '//input[@type="checkbox" and @name="for_ma_only_plans"]',

        newBoNextBtn: '(//button[@type=\'button\'])[2]',

        newBOYesChoice: 'label.choice > span.ng-binding',

        newBOCallAnswer: 'span[name=\"identity_call_for_answer\"] > label.choice > span.ng-binding',

        newBOCallPermission: 'span[name=\"identity_permission_call_back\"] > label.choice',

        newBOPhone: '.phone-field',

        newBOZipCode: ' input[name=\'home_address_zip\']',

        newBOPlanSelection: 'span[name="have_healthcare_plan"] > label.choice > span.ng-binding',

        newNextBtn: '.pull-right > .btn.btn-primary',

        newOtherBtn: '#header-other',

        newViewQuotesBtn: 'li.mobile-view.ng-scope > a',

        bmCloseDialog: '#ehi-dialogClose',

        birthMonth: '#ehi-popupDialog #census-upper-form .dob-field #ehi-birthMonth',

        birthDay: '#ehi-popupDialog #census-upper-form .dob-field #ehi-birthDay',

        birthYear: '#ehi-popupDialog #census-upper-form .dob-field #ehi-birthYear',

        tobaccoUse: '#census_primary_tobacco',

        radioNonSmoker: '#ehi-rdoSmokerNo',

        radioSmoker: '#ehi-rdoSmoker',

        findPlansBtn: '#ehi-popupDialog #ehi-btnCensusNext'

    },

    validateBOPhoneNumber(phone, firstName, lastName, leadStatus) {

        //BO登录页面
        I.waitForVisible(this.fields.boUserName);
        I.fillField(this.fields.boUserName, 'bov2test');
        I.fillField(this.fields.boPassword, 'BO@test#1');
        I.click(this.fields.loginBtn);
        I.waitForVisible(this.fields.userRole, 1000);
        //lead search
        I.waitForElement(this.fields.leadSearchlink, 5000);
        I.click(this.fields.leadSearchlink);
        I.waitForVisible(this.fields.userPhone, 5000);
        if (lastName != 0 && firstName != 0) {
            I.wait(1);
            I.fillField(this.fields.userFirstName, firstName);
            I.fillField(this.fields.userLastName, lastName);
        } else {
            I.fillField(this.fields.userPhone, phone);
        }
        I.wait(2);
        I.click(this.fields.searchBtn);
        I.wait(15);
        I.see(phone);
        I.see(leadStatus);

    }
}