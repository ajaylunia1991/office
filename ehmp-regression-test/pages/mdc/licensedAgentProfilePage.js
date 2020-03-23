'use strict';

let I;


var randomInfo = require('../../utils/random').randomInfo();
console.log('LiPage -- First name is :' + randomInfo.firstName + '; Last name is :' + randomInfo.lastName + '; Phone num is :' + randomInfo.phone + ';');

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {
        sideAgentContactInfo: 'div#main .row > div > div .text-center.profile:nth-child(1)',
        getPlansButton: '#main > div.fusion-row > div:nth-child(2) > div.small-12.medium-6.medium-pull-6.large-3.large-pull-0.columns > div.links > div > a.button-orange.text-center.expand',
        scheduleCall: '#main > div.fusion-row > div:nth-child(2) > div.small-12.medium-6.medium-pull-6.large-3.large-pull-0.columns > div.links > div > a:nth-child(3)',
        comparePlansButton: '#main > div.fusion-row > div:nth-child(2) > div.small-12.medium-6.medium-pull-6.large-3.large-pull-0.columns > div.links > div > a.button-basics.text-center.expand.fix-allid.ext-link',
        //page 1, fill info
        customer_contact_info_section: ' #Paso-01-div ',
        first_name: '#first_name',
        last_name: '#last_name ',
        emailId: ' #email',
        phone_number: '#phone_number',
        zip: '#zip_codeP1 ',
        county: '#county',
        date_of_birth: '#date_of_birthday',
//        c_nextButton: '#Paso-01-div > div.Btn-Box.clearfix > a.button-orange.Next.Paso-01',
        c_nextButton: '//*[@id="Paso-01-div"]/div[3]/button',

        //page 2, answer question
        tell_about_you: '#Paso-02',
        none_check: '#Paso-02 > div.Fila.clearfix > div > ul > li:nth-child(5) > div > label',
//        t_nextButton: '#Paso-02 > div.Btn-Box.clearfix > a.button-orange.Next',
        t_nextButton:'//*[@id="Paso-02"]/div[2]/button[1]',

        //page 3, answer question
        important_for_you: '#Paso-03',
        my_prescriptions: '#importantCheckList > li:nth-child(3) > div > label',
        i_nextButton: '//*[@id="Paso-03"]/div[2]/button[1]',

        //page 4, fill drugs
        myMedicines: '#Paso-myPrescriptions',
        medication: '#medication',
//        m_nextButton: '#Paso-myPrescriptions > div.Btn-Box.clearfix > a.button-orange.Next',
        m_nextButton: '//*[@id="Paso-myPrescriptions"]/div[2]/button[1]',


//        d_nextButton: '#Paso-myDosage > div.Btn-Box.clearfix > a.button-orange.Next',
            d_nextButton: '//*[@id="Paso-myDosage"]/div[2]/button[1]',


        //page 5
        myCoverage: '#Paso-Coverage',
        no_travel: '#Paso-Coverage > div:nth-child(2) > div > ul > li:nth-child(2) > div > label',
        renal_disease_no: '#Paso-Coverage > div:nth-child(4) > div > ul > li:nth-child(2) > div > label',
//        next_button: '#Paso-Coverage > div.Btn-Box.clearfix > a.button-orange.Next',
        
                next_button: '//*[@id="Paso-Coverage"]/div[3]/button[1]',


        // done page
        done_section: '#Paso-08',
        schedulePhoneCall: '#schedule_phone ',
        comparePlansOnline: ' #compare_online ',
        final_Message: '#final_message',

        //Agent Profile Page Elements
        topHeaderElements: '.site-header',
        topMenuBar: '#menu-medicare',

        sideAgentContactInfo: 'div#main .row > div > div .text-center.profile:nth-child(1)',
        getPlansButton: '#main > div.fusion-row > div:nth-child(2) > div.small-12.medium-6.medium-pull-6.large-3.large-pull-0.columns > div.links > div > a.button-orange.text-center.expand',
        scheduleCall: 'a:nth-child(3)',
        comparePlansButton: 'a:nth-child(4)',

        agentMainSection: 'div#main',
        agentDescriptionSmall: '.page-agent.description.small-text-center.medium-text-left',
        ratings: '.small-12.medium-6.medium-push-6.large-5.large-push-0.columns.hide-for-small',
        review: '.description>blockquote',
        moreAbout: '.page-agent>.row:nth-child(2)',

        agentHelp: '.gray',
        getPlans: '.button-orange.expand-for-small.small-text-center.medium-text-left',
        scheduleCall: 'div:nth-child(3) > a:nth-child(2)',
        comparePlans: 'div:nth-child(3) > a:nth-child(3)',

        // schedule-a-phone-call flow elements
        p_nextButton:'//*[@id="Paso-01"]/div[6]/button',

        dateText: '#date_1',
        dateFrame: '#ui-datepicker-div > table > tbody > tr:nth-child(4) > td:nth-child(4) > a',
        timeText: '#time_1',
        timeFrame: '#ui-datepicker-div > div.ui-datepicker-buttonpane.ui-widget-content > button.ui-datepicker-current.ui-state-default.ui-priority-secondary.ui-corner-all',
//        a_nextButton: '#Paso-02 > div.Btn-Box.clearfix > a.button-orange.Next',

        a_nextButton:'//*[@id="Paso-02"]/div[5]/button[1]',
        f_nextButton: '//*[@id="Paso-03"]/div[3]/button[1]'




    },



    clickGetPlanRecommendation() {
        I.wait(2);
        I.waitForVisible(this.fields.sideAgentContactInfo, 15);
        I.click(this.fields.getPlansButton);
        I.wait(2);
    },

    clickScheduleCall(){
        I.wait(2);
        I.waitForVisible(this.fields.sideAgentContactInfo, 15);
        I.click(this.fields.scheduleCall);
        I.wait(2);
    },


    getPlanRecommendation() {
        I.wait(1);

        I.fillField(this.fields.first_name, randomInfo.firstName);
        I.fillField(this.fields.last_name, randomInfo.lastName);
        I.fillField(this.fields.emailId, randomInfo.firstName + '@60ehealth.com');
        I.fillField(this.fields.phone_number, randomInfo.phone);
        I.fillField(this.fields.zip, '94555');
        I.wait(1);
        I.fillField(this.fields.date_of_birth, '01011942');
        I.wait(1);
        I.click(this.fields.c_nextButton);
        I.wait(1);
        //answer  tell_about_you
        I.waitForVisible(this.fields.tell_about_you, 30);
        I.wait(1);
        I.click(this.fields.none_check);
        I.wait(1);
        I.click(this.fields.t_nextButton);
        I.wait(1);
        //answer  important_for_you
        I.waitForVisible(this.fields.important_for_you, 30);
        I.wait(1);
        I.click(this.fields.my_prescriptions);
        I.wait(1);
        I.click(this.fields.i_nextButton);
        I.wait(1);

        //answer myMedicines
        I.waitForVisible(this.fields.myMedicines, 30);
        I.fillField(this.fields.medication, 'Lipitor');
        I.wait(1);
        I.click('#ui-id-2');
        I.wait(1);
        I.click(this.fields.m_nextButton);
        I.wait(1);
        I.click(this.fields.d_nextButton);
        I.wait(1);


        //answer myCoverage
        I.waitForVisible(this.fields.myCoverage, 30);
        I.wait(1);
        I.click(this.fields.no_travel);
        I.wait(1);
        I.click(this.fields.renal_disease_no);
        I.wait(1);
        I.click(this.fields.next_button);
        I.wait(1);

        I.waitForVisible(this.fields.done_section, 30);
        I.waitForVisible(this.fields.comparePlansOnline, 30);
        I.waitForVisible(this.fields.schedulePhoneCall, 30);
        I.waitForVisible(this.fields.final_Message, 30);


    },

    getCallFlow(){
        I.wait(1);
        I.fillField(this.fields.first_name, randomInfo.firstName);
        I.fillField(this.fields.last_name, randomInfo.lastName);
        I.fillField(this.fields.phone_number, randomInfo.phone);
        I.fillField(this.fields.zip, '94555');
        I.wait(1);
        I.click('#main > div > div');
        I.waitForVisible(this.fields.p_nextButton, 15);
        I.click(this.fields.p_nextButton);
        I.wait(5);
        //date
        I.wait(1);
        I.click(this.fields.dateText);
        I.wait(1);
        I.click('//*[@id="ui-datepicker-div"]/div/a[2]/span');
        I.click(this.fields.dateFrame);
        I.wait(1);
        I.click(this.fields.timeText);
        I.wait(1);
        I.click(this.fields.timeFrame);
        I.wait(1);
        I.click(this.fields.a_nextButton);
        I.wait(1);

        I.waitForVisible(this.fields.emailId, 15);
        I.fillField(this.fields.emailId, 'ssasaas@60ehealth.com');
        I.wait(1);
        I.click(this.fields.f_nextButton);

        I.wait(2);
        I.see('Thanks!');
    },

    validateLicensedAgentProfilePageElements() {

        I.waitForVisible(this.fields.topHeaderElements, 5);
        I.waitForVisible(this.fields.topMenuBar, 5);
        I.waitForVisible(this.fields.sideAgentContactInfo, 5);
        I.waitForVisible(this.fields.agentMainSection, 5);

        I.waitForVisible(this.fields.getPlansButton, 5);
        I.waitForVisible(this.fields.scheduleCall, 5);
        I.waitForVisible(this.fields.comparePlansButton, 5);
        I.waitForVisible(this.fields.agentDescriptionSmall, 5);
        I.waitForVisible(this.fields.ratings, 5);
        I.waitForVisible(this.fields.review, 5);
        I.waitForVisible(this.fields.moreAbout, 5);
        I.waitForVisible(this.fields.getPlans, 5);
        I.waitForVisible(this.fields.scheduleCall, 5);
        I.waitForVisible(this.fields.comparePlans, 5);
    }
}