'use strict';

let I;

module.exports = {

    //GMG
    
    _init() {
        I = actor();
    },

    // GMG WEB ELEMENT LOCATORS

    homePageElements: {
        homePageHeader: '.app-header__container',
        findYourPlanHeaderButton: '.navigation-bar__link--outlined',
        medicareAnswersHeaderLink: '(//a[@data-wa-link="top nav: Medicare Answers"])[1]',
        headerPhoneNumber: '//a[contains(@class, "site-identity__phone--long gmg-phone")]//span'
    },

    medicareAnswersElements:{
        submitAQuestionHeader: '//button[@data-wa-link="Submit a Question"]',
        askUsAnythingName: '//input[@id="askUsAnythingName"]',
        askUsAnythingEmail: '//input[@id="askUsAnythingEmail"]',
        askUsAnythingQuestion: '//textarea[@id="askUsAnythingQuestion"]',
        askUsAnythingCheckbox: '//span[@class="gmg-checkbox__label"]',
        askUsAnythingSubmit: '//button[@id="submitAskUs"]',
        contactUsFooter: '//span[contains(text(),"Contact Us")]',
        contactUsName: '//input[@id="contactUsName"]',
        contactUsEmail: '//input[@id="contactUsEmail"]',
        contactUsQuestion: '//textarea[@id="contactUsQuestion"]',
        contactUsSubmit: '//button[@id="submitContactUs"]'
    },

    qualifiersPageElements: {
        letsStartButton:'//button[@data-wa-link="lets start"]',
        zipCodeField: '#zipCodeid',
        usStateText: '.label-zipcode',
        dateField:{
            monthField: '#monthElementInputDateBorn',
            dayField: '#dayElementInputDateBorn',
            yearField: '#yearElementInputDateBorn'
        },
        partBMonth: '(//select[@data-v-5f62fde2])[1]', 
        partBYear: '(//select[@data-v-5f62fde2])[2]',
        partAMonth: '(//select[@data-v-5f62fde2])[3]',
        partAYear: '(//select[@data-v-5f62fde2])[4]',
        doIQualifyButton: '//button[@data-wa-link="Do I Qualify?"]',
        maleGenderRadioButton: '//label[@for="genderRadioOption1_group"]',
        NoTobaccoRadioButton: '//label[@for="tobaccoRadioOption2_group"]',
        selectAPlanButton: '//button[@data-wa-link="select a plan"]'
    },

    planSelectionPageElements:{
        planFText: '//h3[contains(text(),"Plan F")]',
        firstPlanSelectButton: '(//aside//button)[1]'

    },

    carrierSelectionPageElements:{
        firstViewSumaryLink: '//div[@id="gmg-list-row_0"]//span[@class="label-ehealth button-container__green"]'
    },

    summaryPageElements:{
        enrollNowButton: '//div[@class="plan-summary__button--sticky"]/button',
        goToSecureEnrollmentButton: '.summary-modal__cta'
    },

    //GMG TO EHMP FAST APPLY WEB ELEMENTS LOCATORS
    EHMPWebElements:{
        applicantSection:{
            firstNameField: '#input1',
            lastNameField: '#input3',
            streetField: '#input11',
            cityField: '#input12',
            phoneField: '#input8',
            email: '#input10',
            nextButton: '.nextBtn'
        },
        medicareInformationSection:{
            medicareCardExampleImg:'.right-wrap',
            claimNumberField: '#input1',
            partAMonth:'#input3',
            partAYear:'#input4',
            partBMonth:'#input6',
            partBYear:'#input7',
            effectiveDate: '//select[@id="input8"]'
        },
        coverageSection:{
             listOfQuestions: '.ques-list',
             otherInformationcontainer: '.app-form',
             noRadioDynamicButton:'//label[@for="r*"]',
             radioButtonSize: 7

        },
        historySection:{
            radioButtonSize: 12
        },
        additionalSection:{
            checkbox: '//label[contains(text(),"English")]',
            radioButtonSize: 2
        },
        paymentSection:{
            paperBillRadioButton: '//label[@for="r2"]',
            quartelyRadioButton: '//label[@for="r3"]'
        },
        summarySection:{
            continueButton: '.summarySubmitButton',
            iUnderstandCheckbox1: '//label[@for="input2"]',
            iUnderstandCheckbox2: '//label[@for="input3"]',
            iUnderstandCheckbox3: '//label[@for="input4"]',
            firstNameField: '#input5',
            lastNameField: '#input7',
            secondNameField:'#input8',
            secondLastNameField:'#input10',
            cityField: '#input11',
            stateDropdown: '//select[@id="input12"]',
            sucessBaner: '.success-info'
        }

    }

}