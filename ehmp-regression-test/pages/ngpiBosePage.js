'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {

        loginUserId: '#userId',
        loginPwd:'#password',
        loginButton:'#BOLogin',
        firstName:'#firstName26',
        lastName:'#lastName32',
        newApplicantBttn:'//*[contains(text(), \'New Applicant\')]',
        selfChoice:'//*[contains(text(), \'Self\')]',
        medicarePartDontKnow:'//span[@value=\'D\']/label',
        medicarePartBoth:'//span[@label=\'Both\']/label',
     // medicarePartBoth:'#main > div.page > div.panel.panel-default > div.ng-scope > form > div.panel-body > div.ng-scope > div.part.ng-scope > radio-group > div > fieldset > div > span:nth-child(1) > label',
      // selectPrimaryPhoneType:'//li[@uib-tooltip=\'Cell Phone\']/label',     
         selectPrimaryPhoneType: '#main > div.page > div.panel.panel-default > div.ng-scope > form > div.panel-body > div.ng-scope > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > span > ul > li:nth-child(1) > div > ul > li:nth-child(1) > label > svg',
       emailAddress:'//input[@type=\'email\']',
         zipcode:'//input[@name=\'home_address_zip\']',
        county:'#home_address_county',
        tricareSelect:'//checkbox[@name=\'existing_coverage_tricare\']/div/label',
        //medicaidExtraHelpNo:'//span[@value=\'N\']/label',
        medicaidExtraHelpQuestion:'#main > div.page > div.panel.panel-default > div.ng-scope > form > div.panel-body.ng-scope > div:nth-child(2) > div:nth-child(3) > radio-group > div > fieldset > legend > span > span',
        medicaidExtraHelpNo:'#main > div.page > div.panel.panel-default > div.ng-scope > form > div.panel-body.ng-scope > div:nth-child(2) > div:nth-child(3) > radio-group > div > fieldset > div > span:nth-child(1) > label',
        popUpMaMSPlansAllOpt:'//checkbox[@label=\'All options\']/div/label',
        eligibilityPage3MA:'//span[@value=\'MA\']/label',
        eligibilityPage3PDP:'//span[@value=\'PDP\']/label',
        eligibilityPage3ESRDNo:'//span[@value=\'N\']/label',
        eligibilityPage3IEPICEP:'//span[@value=\'I\']/label',
        personalcode:'//input[@name=\'core_data.ngpi.personal_code\']',
        yearOfBirth:'//input[@name=\'core_data.ngpi.birthYear\']',
        validateButtn:'#main > div.page > div.panel.panel-default > div.ng-scope > form > div.panel-body > div.part.ng-scope > div > button',
        doctorListDisplayYes:'//span[@name=\'doctor_provided\']/label',
        drugsListDisplayYes:'//span[@name=\'drug_provided\']/label',
        nextBttn:'//*[contains(text(), \'Next\')]',
        drugTovalidate:'#pioglitazone\ 15\ mg\ tablet > td:nth-child(1)',
        doctorToValidate:'#main > div.page > div.panel.panel-default > div.ng-scope > form > div.panel-body > div:nth-child(4) > div > div.ng-pristine.ng-valid.ng-valid-pattern.ng-valid-required > div > div.modal-body > div:nth-child(4) > dl > dd:nth-child(2) > ul > li:nth-child(2)',
        checkBoxNoEmail:'//checkbox[@name=\'have_no_email\']/div/label',
        checkBoxOptOutEmail:'//checkbox[@name=\'ok_to_sent_info_via_email\']/div/label',
      //  providersTxt:'//dl[@class=\'doctor-hospital-list\']/dt',
        providerTxt:'//*[contains(text(),\'Providers\')]',
        backButton:'#main > div.page > div.panel.panel-default > div.ng-scope > form > div.panel-footer > div > div.pull-left > button:nth-child(1)',
        healthConditionsWG:'//span[@name=\'ok_to_ask_csnp_questions\' and @value=\'N\']/label'


    },

    loginToBose(userId,pwd){
        I.say("I am Logging in to the BOSE Application with user id and password");
        I.fillField(this.fields.loginUserId, userId);
        I.fillField(this.fields.loginPwd, pwd);
        I.click(this.fields.loginButton);
        I.wait(10);
    },

    fillNameToApplication(fName,lName){
        I.say("Enter the First Name and Last Name to start the Application");
        I.fillField(this.fields.firstName, fName);
        I.fillField(this.fields.lastName, lName);
        I.wait(30);
        I.click(this.fields.newApplicantBttn);
        I.wait(8);
        I.see('Will we be discussing Medicare options for yourself or for someone else?');
        I.say('Succesfully started the New Application');
    },

    selectPage1Details(zcode){
        I.say("Page1 - Introduction and Identify Caller");
        I.click(this.fields.selfChoice);
        I.wait(2);
        I.click(this.fields.medicarePartBoth);
        I.click(this.fields.selectPrimaryPhoneType);
       if(process.env.NODE_ENV != 'qa'){
            I.wait(2);
           I.fillField(this.fields.emailAddress,'aneesha@ehealth.com');

        }
        I.fillField(this.fields.zipcode,zcode);
        I.wait(2);
        I.click(this.fields.county);
        I.wait(2);
        I.scrollPageToBottom();
        I.wait(2);
        I.click(this.fields.nextBttn);
        I.wait(4);
        I.see('Discovery & Needs Analysis');
        I.say("Page 1 details are succesfully entered")

    },
    selectPage2Details(){
        I.say("Page2 - Discovery & Needs Analysis");
        I.click(this.fields.tricareSelect);
        I.wait(4);
        I.scrollTo(this.fields.medicaidExtraHelpQuestion);
        I.wait(4);
      //  pause();
        I.click(this.fields.medicaidExtraHelpNo);
        I.wait(4);
        I.scrollPageToBottom();
        I.wait(2);
        I.click(this.fields.nextBttn);
        I.wait(4);
        //first pop up
        I.click(this.fields.popUpMaMSPlansAllOpt);
        I.wait(2);
        I.click(this.fields.nextBttn);
        I.wait(3);
        //second pop up
        I.click(this.fields.nextBttn);
        I.wait(3);
        I.see('Eligibility');

        I.say("Page 2 details are succesfully entered")

    },
    selectPage3Details(){
        I.say("Page3 - Eligibility");
        I.click(this.fields.eligibilityPage3MA);
    //    I.click(this.fields.eligibilityPage3PDP);
        I.wait(2);
        I.click(this.fields.eligibilityPage3ESRDNo);
        I.wait(3);
        I.scrollTo(this.fields.eligibilityPage3IEPICEP);
        I.wait(3);
       I.click(this.fields.eligibilityPage3IEPICEP);
        I.wait(2);
        I.scrollPageToBottom();
        I.wait(2);
        I.click(this.fields.nextBttn);
        I.wait(3);
        I.see('Doctors & Prescriptions');
        I.say("Page3 - Eligibility Completed");


    },
    selectPage3DetailsWG(){
      I.say("Page3 - Eligibility");
      I.click(this.fields.eligibilityPage3MA);
  //    I.click(this.fields.eligibilityPage3PDP);
      I.wait(2);
      I.click(this.fields.eligibilityPage3ESRDNo);
      I.wait(3);
      I.scrollTo(this.fields.eligibilityPage3IEPICEP);
      I.wait(3);
      I.click(this.fields.healthConditionsWG);
      I.wait(3);
      I.click(this.fields.eligibilityPage3IEPICEP);
      I.wait(2);
      I.scrollPageToBottom();
      I.wait(2);
      I.click(this.fields.nextBttn);
      I.wait(3);
      I.see('Doctors & Prescriptions');
      I.say("Page3 - Eligibility Completed");


  },

selectPage4Details(personalCode,yob,dr,drug){
    I.say("Page4 - Doctors and Prescriptions");
    I.fillField(this.fields.personalcode,personalCode);
    I.fillField(this.fields.yearOfBirth,yob);
    I.pressKey('Tab');
    I.click(this.fields.validateButtn);
     I.wait(10);
    I.see('Personal Code Validated');
    I.click(this.fields.doctorListDisplayYes);
    I.wait(4);
    //added this to as the doctorinformation was not getting loaded through the automation.
    I.scrollPageToBottom();
    I.wait(4);
    I.click(this.fields.backButton);
    I.wait(4);
    I.scrollPageToBottom();
    I.wait(4);
    I.click(this.fields.nextBttn);
    I.wait(4);
    //validate the doctor
    
    
    // I.scrollTo(this.fields.doctorToValidate);
    I.scrollTo(this.fields.providerTxt);
    //pause();
    I.wait(5);
   // I.see(dr);
   I.see(dr);
    I.wait(5);
   // I.seeElement(this.fields.doctorToValidate);
    //I.click(this.fields.doctorToValidate);

    
     //validate the drugs
     I.scrollPageToBottom();
     if( process.env.NODE_ENV != 'cm') {
      I.scrollTo(this.fields.drugsListDisplayYes);
      I.wait(5);
      I.click(this.fields.drugsListDisplayYes);
      I.wait(2);
      I.scrollPageToBottom();
     }
     I.wait(2);
     I.see(drug);
   //  I.seeElement(this.fields.drugTovalidate);
    // I.click(this.fields.drugTovalidate);
     I.wait(2);

     
     I.say("Page4 - Doctors and Prescriptions completed");

}

}