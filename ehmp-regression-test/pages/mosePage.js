'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    fields: {
        //applicant
        fname: '//*[@id="coreData.members.member[0].name.firstName"]',
        lname: '//*[@id="coreData.members.member[0].name.lastName"]',
        male: '//*[@id="ApplicantInformation"]/div/div/div[4]/div/div/div/div[2]/div/label[1]/span[1]/input',
        female: '//*[@id="ApplicantInformation"]/div/div/div[4]/div/div/div/div[2]/div/label[2]/span[1]/input',
        Mr: '//*[@id="ApplicantInformation"]/div/div/div[5]/div/div/div/div[2]/div/label[1]/span[1]/input',
        Mrs: '//*[@id="ApplicantInformation"]/div/div/div[5]/div/div/div/div[2]/div/label[2]/span[1]/input',
        Ms: '//*[@id="ApplicantInformation"]/div/div/div[5]/div/div/div/div[2]/div/label[3]/span[1]/input',
        dob: '//*[@id="ApplicantInformation"]/div/div/div[6]/div/div/div/div[2]/input',
        street: '//*[@id="coreData.homeAddress.street"]',
        city: '//*[@id="coreData.homeAddress.city"]',
        mailingAddressCheckBox: '//*[@id="application.otherData.miscData.mailingAddressIsSame"]/span[1]/input',
        mailingAddressStreet: '//*[@id="coreData.mailingAddress.street"]',
        mailingAddressCity: '//*[@id="coreData.mailingAddress.city"]',
        mailingAddressState: '//*[@id="coreData.mailingAddress.state"]',
        mailingAddressZip: '//*[@id="coreData.mailingAddress.zip"]',
        homePhone: '//*[@id="coreData.homePhone"]',
        email: '//*[@id="coreData.email"]',
        language: '//*[@id="otherData.miscData.preferredLanguage"]',
        languageConfirm: '.cube-picker-confirm',
        applicantMobileNextBtn: 'body > div.app > div.page-view.container > div > form > div.btn-group.cf > button',
        applicantNextBtn: 'body > div.app > div.page-view.container > div > form > div.btn-group.cf > button',

        //eligibility page
        medicareClaimNumber: '//*[@id="otherData.miscData.medicareClaimNumber"]',
        parta: '//*[@id="MedicareInformation"]/div/div/div[3]/div/div/div/div[2]/input',
        partaFeb: '/html/body/div[4]/div[1]/div/div[2]/table[3]/tbody/tr[1]/td[2]/div/a',
        partb: '//*[@id="MedicareInformation"]/div/div/div[4]/div/div/div/div[2]/input',
        partbFeb: '/html/body/div[5]/div[1]/div/div[2]/table[3]/tbody/tr[1]/td[2]/div/a',
        sepCheckBox: '#Eligibilityquestions > div > div > div:nth-child(1) > div > div > div > div > div.radio-box > div > div.radio-vertical-row.cf.sep-split.vertical > span.split-link.split-checked > b',
        NEW: '//*[@id="EligibilityQuestions"]/div/div/div[1]/div/div/div/div/div[2]/div/div[1]/label/span[1]/input',
        LCC: '//*[@id="EligibilityQuestions"]/div/div/div[1]/div/div/div/div/div[2]/div/div[2]/div/div[3]/label/span[1]/input',
        LEC: '//*[@id="Eligibilityquestions"]/div/div/div[1]/div/div/div/div/div[2]/div/div[3]/div/div[1]/label/span[1]/span',
        LCCdate: '//*[@id="EligibilityQuestions"]/div/div/div[1]/div/div/div/div/div[2]/div/div[2]/div/div[3]/div/div/div/div/div/div[2]/input',
        LECdate: '//*[@id="Eligibilityquestions"]/div/div/div[1]/div/div/div/div/div[2]/div/div[3]/div/div[1]/div/div/div/div/div/div[2]/input',
        ESRDYes: '//*[@id="Eligibilityquestions"]/div/div/div[2]/div/div/div/div[2]/div/label[1]/span[1]/span',
        ESRDNo: '//*[@id="Eligibilityquestions"]/div/div/div[2]/div/div/div/div[2]/div/label[2]/span[1]/span',
        //eligibilityQuestionSection
        eligibilityQuestionSection: '//*[@id="Moreeligibilityquestions"]/h2',
        medicaidYes: '//*[@id="Moreeligibilityquestions"]/div/div/div[1]/div/div/div/div[2]/div/label[1]/span[1]/span',
        medicaidNumber: '//*[@id="otherData.coverage.medicaid.medicaidNumber"]',
        medicaidNo: '//*[@id="Moreeligibilityquestions"]/div/div/div[1]/div/div/div/div[2]/div/label[2]/span[1]/span',
        longTermYes: '//*[@id="Moreeligibilityquestions"]/div/div/div[2]/div/div/div/div[2]/div/label[1]/span[1]/span',
        nameInstitution: '//*[@id="otherData.coverage.longTerm.nameInstitution"]',
        phoneNumber: '//*[@id="otherData.coverage.longTerm.phoneNumber"]',
        longTermStreet: '//*[@id="otherData.coverage.longTerm.address.street"]',
        longTermCity: '//*[@id="otherData.coverage.longTerm.address.city"]',
        longTermState: '//*[@id="otherData.coverage.longTerm.address.state"]',
        longTermZip: '//*[@id="otherData.coverage.longTerm.address.zip"]',
        longTermNo: '//*[@id="Moreeligibilityquestions"]/div/div/div[2]/div/div/div/div[2]/div/label[2]/span[1]/span',
        employerHealthYes: '//*[@id="Moreeligibilityquestions"]/div/div/div[4]/div/div/div/div[2]/div/label[1]/span[1]/span',
        employerHealthNo: '//*[@id="Moreeligibilityquestions"]/div/div/div[4]/div/div/div/div[2]/div/label[2]/span[1]/span',
        workYes: '//*[@id="Moreeligibilityquestions"]/div/div/div[5]/div/div/div/div[2]/div/label[1]/span[1]/span',
        workFollowYes: '//*[@id="Moreeligibilityquestions"]/div/div/div[5]/div/div/div/div[2]/div/div/div/div/div/div/div[2]/div/label[1]/span[1]/span',
        workFollowNo: '//*[@id="Moreeligibilityquestions"]/div/div/div[5]/div/div/div/div[2]/div/div/div/div/div/div/div[2]/div/label[2]/span[1]',
        workNo: '//*[@id="Moreeligibilityquestions"]/div/div/div[5]/div/div/div/div[2]/div/label[2]/span[1]/span',
        drugCoverageYes: '//*[@id="Moreeligibilityquestions"]/div/div/div[6]/div/div/div/div[2]/div/label[1]/span[1]/span',
        drugCoverageNo: '//*[@id="Moreeligibilityquestions"]/div/div/div[6]/div/div/div/div[2]/div/label[2]/span[1]/span',
        //pcp section
        fullName: '//*[@id="otherData.miscData.providerInfo.name"]',
        physicianId: '//*[@id="otherData.miscData.providerInfo.pcpId"]',
        physicianPhone: '//*[@id="otherData.miscData.providerInfo.phone"]',
        seeDoctorYes: '//*[@id="Physicianinformation"]/div/div/div/div[4]/div/div/div/div[2]/div/label[1]/span[1]/span',
        seeDoctorNo: '//*[@id="Physicianinformation"]/div/div/div/div[4]/div/div/div/div[2]/div/label[2]/span[1]/span',
        //rider
        riderSectionTitle:'//*[@id="AddSupplementalBenefits"]',
        riderPlanForBscaHMO: '//span[contains(text(),"Optional Supplemental Dental HMO Plan")]',
        riderPlanForBscaHMO_1: '//span[contains(text(),"Optional Supplemental Dental PPO Plan")]',
        riderPlanForBscaPPO: '//span[contains(text(),"Optional Supplemental Dental PPO Plan")]',
        riderPlanForStandford: '//span[contains(text(),"Dental and Vision")]',
        dentistName:'//*[@id="otherData.miscData.dentalInfo.name"]',
        providerId:'//*[@id="otherData.miscData.dentalInfo.providerId"]',
        //payment
        billm: '//*[@id="Howtopay"]/div/div/div/div/div/div/div[2]/div/div[1]/label/span[1]/span',
        ssbm: '//*[@id="Howtopay"]/div/div/div/div/div/div/div[2]/div/div[2]/label/span[1]/span',
        rrbm: '//*[@id="Howtopay"]/div/div/div/div/div/div/div[2]/div/div[3]/label/span[1]/span',
        eligibilityNextBtn: 'body > div.app > div.page-view.container > div > form > div.btn-group.cf > button > span',

        
        //submit page
        reviewLink:'#ReviewYourApplication > div > div > ul > li:nth-child(5) > label > a',
        editMedicareInformation:'#ReviewYourApplication > div > div > div.el-dialog__wrapper > div > div.el-dialog__body > div > div.review-box > div:nth-child(2) > div:nth-child(1) > h3 > a',
        saveEdit:'body > div.app > div.page-view.container > div > form > div.btn-group.cf > button > span',
        reviewGoodBtn:'#ReviewYourApplication > div > div > div.el-dialog__wrapper > div > div.el-dialog__body > div > div.dialog-footer > button',
        self:'//*[@id="Relationshiptoapplicant"]/div/div/div/div/div/div/div[2]/div/div[1]/label/span[1]/span',
        representative:'//*[@id="Relationshiptoapplicant"]/div/div/div/div/div/div/div[2]/div/div[2]/label/span[1]/span',
        representativefn:'//*[@id="otherData.miscData.representativeName.firstName"]',
        representativeln:'//*[@id="otherData.miscData.representativeName.lastName"]',
        representativeRelationship:'//*[@id="otherData.miscData.representativeRelationship"]',
        representativeStreet:'//*[@id="otherData.miscData.representativeAddress.street"]',
        representativeCity:'//*[@id="otherData.miscData.representativeAddress.city"]',
        representativeState:'//*[@id="otherData.miscData.representativeAddress.state"]',
        representativeZip:'//*[@id="otherData.miscData.representativeAddress.zip"]',
        representativePhone:'//*[@id="otherData.miscData.representativePhone"]"]',
        akAgree:'//*[@id="Agreements"]/div/div/div[2]/div/div/div/label/span[1]/span',
        submitNextBtn: 'body > div.app > div.page-view.container > div > form > div.btn-group.cf > button > span',
        reviewAllAnswers: '//*[@id="ReviewYourApplication"]/div/div/ul/li[5]/label/a',
        applicationLooksGood: '//*[@id="ReviewYourApplication"]/div/div/div[2]/div/div[2]/div/div[2]/button',
        expandPremiumInfoArrow: '.el-icon-arrow-down',
        riderPremium: '//*[@id="ReviewYourApplication"]/div/div/ul/li[3]/div/div/ul[2]/li[2]',
        //congrats page
        congratsWord: 'body > div.app > div.page-view.container > div > div.confirmation-num-box > p',
        confirmationNo: 'div.confirmation-num-box > p > span'
    },

    fillApplicantInfo(fn,ln,gender,birthdate){
        I.fillField(this.fields.fname,fn);I.wait(1);
        I.fillField(this.fields.lname,ln);I.wait(1);
        // I.fillField(this.fields.dob,birthdate);I.wait(1);
        I.click(this.fields.Mr);I.wait(1);
        if(gender === 'M'){
            I.click(this.fields.male);I.wait(1);
        }
        if(gender === 'F'){
            I.click(this.fields.female);I.wait(1);
        }

    },

    fillContactInfo(phone,email){
        I.fillField(this.fields.street,'2');I.wait(2);
        I.pressKey('ArrowDown');
        I.pressKey('Enter');
        I.fillField(this.fields.homePhone,phone);I.wait(1);
        I.fillField(this.fields.email,email);I.wait(1);
        I.click(this.fields.language);I.wait(2);
        I.click(this.fields.languageConfirm);I.wait(1);
    },

    fillMailingAddress(){
        I.click(this.fields.mailingAddressCheckBox);I.wait(1);
        I.fillField(this.fields.mailingAddressStreet,'3');I.wait(2);
        I.pressKey('ArrowDown');
        I.pressKey('Enter');

    },

    fillMedicareInfo(medicareId, parta, partb){

    },

    fillSep(){

    },

    fillEligibility(){

    },

    fillPcp(){

    },

    fillPay(method){

    },

    checkAndEditReviewForm(){
        I.see('Review All Answers');
        I.click(this.fields.reviewLink);I.wait(2);
        I.scrollTo(this.fields.editMedicareInformation);I.wait(1);
        I.see('1A01-Q31-RT45');I.wait(1);
        I.click(this.fields.editMedicareInformation);I.wait(1);
        I.seeInCurrentUrl('#/Eligibility');
        I.fillField(this.fields.medicareClaimNumber,'6A01-Q89-RT00');I.wait(1);
        I.click(this.fields.saveEdit);I.wait(1);
        I.see('6A01-Q89-RT00');I.wait(1);
        I.click(this.fields.reviewGoodBtn);I.wait(1);
        I.see('Review All Answers');
    },

    submitBySelf(){

    },

    submitByOther(){

    }
}