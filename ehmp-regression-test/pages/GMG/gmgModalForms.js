'use strict';

let I;

module.exports = {

    //GMG
    _init() {
        I = actor();
    },

    // insert your locators and methods here
    homePageElements: {
        homePageHeader: '.app-header__container',
        findYourPlanHeaderButton: '.navigation-bar__link--outlined',
        medicareAnswersHeaderLink: '(//a[@data-wa-link="top nav: Medicare Answers"])[1]' 

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
}