'use strict';

let I;
const quotePage = require(process.cwd() +'/pages/quotePage');

module.exports = {

    _init() {
        I = actor();
    },

    fields: {
        enrollBtn: '*[data-mediator="enroll"]',
        companyBtn: '#carrier_filter > h4',
        calDoctor: '#calcDoctor',
        addDoctor: '#user-info-inner > span.add-doctors.hidden-xs > a',
        editDoctor: '#calcDoctor .edit',
        backLink: '#ehi-doctorSection > div > div.container > div > a',
        fillDocZip: '#ds-loc',
        fillDocName: '#ds-name',
        location: '#loc0',
        location1: '#loc1',
        delDoctor: '*[data-docid="M_1390f"][data-addrid="M_02m610syiW"]',
        selectLocation: '#ehi-dialog > div.btn-row.hidden-xs > div',
        addAnotherDoc: '#ds-summary > div > section > div > div.btn.btn-tertiary.add-another',
        nextBtn: '#ds-entry > div > section > div > div > div',
        entryBtn: '#ds-name-entry > div > section > div > div > div.btn.btn-next.btn-primary.btn-large',
        seePlansBtn: '#ds-summary > div > section > div > div.btn-wrap > div.btn.btn-primary.btn-large.see-plans',
        editDocBtn: '.address-wrap.col-sm-5.col-xs-12.multi-loc span',
        selectDoc: '#ds-doctor-select > div > section > div > div.doctor-list > div.doctor-block.current > div > div.btn-col.col-sm-3 > div.btn.btn-primary.btn-small.select-doctor1.hidden-xs'
    },

    addDocs(){
        I.fillField('#ds-loc', '90001');
        I.wait(2);

        I.pressKey('ArrowDown');
        I.pressKey('Enter');

        I.executeScript(function() {
            $('#ds-entry > div > section > div > div > div').click();
        });
        I.waitForVisible('#ds-name', 30);
        I.fillField('#ds-name', 'James, Francis');
        I.wait(1);
        I.executeScript(function() {
            $('#ds-name-entry > div > section > div > div > div.btn.btn-next.btn-primary.btn-large').click();
        });
        I.wait(3);

        I.waitForElement('//*[@id="ds-doctor-select"]/div/section/div/div[2]/div[1]/div/div[2]/div[1]', 50);
        I.click('//*[@id="ds-doctor-select"]/div/section/div/div[2]/div[1]/div/div[2]/div[1]'); //select doctor
        I.waitForElement('//*[@id="ehi-dialog"]/div[3]/label[1]/span', 50);
        I.click('//*[@id="ehi-dialog"]/div[3]/label[1]/span');
        I.click("//div[text()='Select This Location']");
        I.waitForElement('//*[@id="ds-summary"]/div/section/div/div[5]/div[1]', 50);
        I.click('//*[@id="ds-summary"]/div/section/div/div[5]/div[1]');
        I.wait(5); //Show Doctor Coverage
        //verify doc info
        I.see('Francis James');
        I.wait(2);
    },
    clickAddLinkToDocTool(){
        I.waitForVisible(this.fields.addDoctor,30);
        I.click(this.fields.addDoctor);//top add-doc link
        I.seeInCurrentUrl('#doctor/quote-plans');I.wait(2);
        I.see('Where Is Your Doctor Located?');
    },

    clickZipNextBtn(){
        I.executeScript(function() {
            $('#ds-entry > div > section > div > div > div').click();
        });
        I.wait(2);
    },
    clickNameNextBtn(){
        I.wait(1);
        I.executeScript(function() {
            $('#ds-name-entry > div > section > div > div > div.btn.btn-next.btn-primary.btn-large').click();
        });
        I.wait(1);
    },
    fillZip(zip){
        I.click(this.fields.fillDocZip);
        I.fillField(this.fields.fillDocZip,zip);
        // I.pressKey('ArrowDown');
        // I.pressKey('Enter');
        I.wait(1);
    },
    fillDocName(name){
        I.click(this.fields.fillDocName);
        I.fillField(this.fields.fillDocName,name);
        // I.pressKey('ArrowDown');
        // I.pressKey('Enter');
        I.wait(1);
    },
    checkDetailCompareDoctorInfo(doc1,doc2,doc3){
        I.wait(1);
        //detail
        I.waitForVisible(quotePage.fields.detailLink, 50);
        I.click(quotePage.fields.detailLink);I.wait(2);
        I.seeInCurrentUrl('#plan-benefits');I.wait(2);
        I.see(doc1);
        if(doc2 != undefined){ I.see(doc2);}
        if(doc3 != undefined){ I.see(doc3);}
        I.click(quotePage.fields.backBtn);I.wait(2);
    
        //compare
        I.waitForVisible(quotePage.fields.compareLabel, 50);
        I.click(quotePage.fields.compareLabel);
        I.waitForVisible(quotePage.fields.compareLink, 50);
        I.click(quotePage.fields.compareLink);
        I.seeInCurrentUrl('#plan-compare');I.wait(3);
        I.scrollTo('.edit-doctor');I.wait(1);
        I.see(doc1);
        if(doc2 != undefined){ I.see(doc2);}
        if(doc3 != undefined){ I.see(doc3);}  

    }
}