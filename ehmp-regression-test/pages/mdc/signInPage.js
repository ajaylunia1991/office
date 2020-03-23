'use strict';

let I;

module.exports = {

        _init() {
            I = actor();
        },

        // insert your locators and methods here

        fields: {

            signInElements: '.content-panel',
            email: '#userName',
            password: '#password',
            signIn: '#Login',
            forgotemail:'div.fade.in.modal > .forgot-password-modal.modal-dialog > .modal-content > .modal-body > .forgot-password > div:nth-child(3) >.email.textbox-wrapper>input',
            forgotPassword: ' .link[data-analytics-link="ForgotPassword"]',
            resetPassword: '.fade.in.modal >.forgot-password-modal.modal-dialog > .modal-content > .modal-body > .forgot-password >.buttons-area>div>#resetPassword',
            forgotPasswordpopup: '.forgot-password',
            confirmationscreen:'.confirm-sent-password',
            confirmbutton: '.fade.in.modal>.confirmation-modal.modal-dialog >.modal-content >.modal-body >.confirm-sent-password>.buttons-area>div>.primary-button',

            //SignUP link on sign in page
            signUp: ' .link[data-analytics-link="SignUp"]',

            //signInLink on MDC Home page
            signInLink: '/html/body/nav/section/ul[4]/li[2]/a',
               //Sign UP page
            FirstName: '#firstName',
            LastName: '#lastName',
            emailID: '#email',

            //sign up button on signUP page
            signUpBtn: '//*[@id="main"]/div/div[1]/div[1]/div[1]/div[1]/div/div[1]/a'



    },

    signIn(username, password) {

        I.waitForVisible(this.fields.signInElements, 30);
        I.waitForVisible(this.fields.email, 30);
        I.waitForVisible(this.fields.password, 30);
        I.waitForVisible(this.fields.signIn, 30);
        I.wait(1);
        I.fillField(this.fields.email, username);
        I.fillField(this.fields.password, password);
        I.click(this.fields.signIn);
        I.wait(1);
    }

    
}