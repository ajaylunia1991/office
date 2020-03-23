'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {

        getStarted: '.btn',
        personalCode: '#personalCode',
        birthYear: '#birthYear',
        zipCode: '#zipCode',
        pageText:'#hero-section > p.web-content > span',
        browsePlans:'*//a[@data-wa-link=\'EHM:lead form:browse plans\']',
        editDoctors:'//*[@id="calcDoctor"]//span[@class="edit"]',
        editRxDrugs:'//*[@id="calc"]//span[@class="edit"]',
        backEditDoctor:'#ehi-doctorSection > div > div.container > div > a',
        backEditDrugs:'#dt-header > a > span',
        summitCarrierClover:'#carrier_filter > div > ul > li:nth-child(2) > label > span > span.carrier-name',
        summitCarrierAetna:'#carrier_filter > div > ul > li:nth-child(3) > label > span > span.carrier-name',
        summitCarrierHorizon:'#carrier_filter > div > ul > li:nth-child(4) > label > span > span.carrier-name',
        summitCarrierUnited:'#carrier_filter > div > ul > li:nth-child(5) > label > span > span.carrier-name',
       


    },

    //Fill lead info

        fillngpileadform(personalCode, birthYear, zipCode,allId) {
        if (process.env.NODE_ENV == 'cm' | process.env.NODE_ENV == 'qa' ) {
            I.say("I am filling in NGPI Lead form");
            I.fillField(this.fields.personalCode, personalCode);
            I.fillField(this.fields.birthYear, birthYear);
            I.fillField(this.fields.zipCode, zipCode);
            I.say('PersonalCode is :' + personalCode + ';birth year is :' + birthYear + '; Zip Code is :' + zipCode + ';');
           console.log("about to click getstarted");
            I.wait(1);
            I.seeElement(this.fields.getStarted);
            I.click(this.fields.getStarted);
            I.wait(2);
            I.switchToNextTab(); 
            I.seeInCurrentUrl(allId);
         //   I.closeCurrentTab();

        }else{
            I.wait(1);
            I.click(this.fields.getStarted);
            I.wait(8);
        }

    },
    //Validate the text on the page
    validateNGPIPageText(textData){
         console.log('Text on page is  :' + textData);
        I.see(textData,this.fields.pageText);
        I.wait(2);

    },
    //Validate that the clicking on browse plans open in new tab and to medicareplans page 
    validateBrowseplans(allId){
        console.log('click on browse plans');
        I.seeElement(this.fields.browsePlans);
        I.click(this.fields.browsePlans);
        I.wait(2);
        I.switchToNextTab(); 
        I.wait(2);
        I.seeInCurrentUrl(allId);
        I.closeCurrentTab();
        I.wait(1);
    },
    //Validate that the clicking on Edit your Drugs can be clicked
    validateEditRxDrugs(drugName){
        console.log('click on Edit drugs');
        I.wait(5);
        I.waitForElement(this.fields.editRxDrugs);
        I.click(this.fields.editRxDrugs);
        I.wait(2);
        I.see(drugName);
        I.wait(2);
        I.click(this.fields.backEditDrugs);
        I.wait(2);
       
    },

    //validate that the clicking on edit your doctors can be clicked
    validateDoctors(drName){
        console.log('click on Edit Your doctors');
        I.wait(5);
        I.waitForElement(this.fields.editDoctors);
        I.click(this.fields.editDoctors);
        I.wait(2);
        I.see(drName);
        I.wait(2);
        I.click(this.fields.backEditDoctor);
        I.wait(2);
    },
    //validate the carrier Name on the page
    validateCarriersforSummitOnly(){
        I.wait(2);
        /* if( process.env.NODE_ENV == 'cm') {
        console.log('Check Clover Health exists');
      //  I.waitForElement(this.fields.summitCarrierClover, 5);
        I.see('Clover Health');
        
        } */
        console.log('Check Aetna Inc exists');
      //  I.waitForElement(this.fields.summitCarrierAetna, 5);
        I.see('Aetna Inc.');
        console.log('Check Horizon Health exists');
      //  I.waitForElement(this.fields.summitCarrierHorizon, 5);
        I.see('Horizon Healthcare Services, Inc.');
        console.log('Check United Health exists');
      //  I.waitForElement(this.fields.summitCarrierUnited, 5);
        I.see('UnitedHealthcare');
        I.wait(2);
    }

}