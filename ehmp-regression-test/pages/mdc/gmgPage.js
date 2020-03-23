'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {


        //GMG Home page

        GetstartedBtn: '/html/body/div[1]/div/section/div/a[1]',
        BackBtn:'//*[@id="dt-drug-manual-entry-area"]/div[3]/div/a/span[2]',
        BacktoplanBth: '//*[@id="dt-header"]/a/span',


           NomedicationBtn: '/html/body/div[1]/div/section/div/a[2]',
           BackBtn02:'/html/body/div[1]/div/a',
           ViewplanBtn:'/html/body/div[1]/section/div[2]/a[1]',
           CancelBtn: '/html/body/div[1]/section/div[2]/a[2]',

	   firstLetter: '//*[@id="ehi-firstletter"]',
        secondLetter: '//*[@id="ehi-secondletter"]',
        thirdLetter: '//*[@id="ehi-thirdletter"]',
        fourthLetter: '//*[@id="ehi-fourthletter"]',
             selectBtn: '//*[@id="dt-disambig-area"]/div/div[3]/div/div[5]/a',
             adddrugBtn: '//*[@id="add-drug-btn"]',
             pharmacyBtn: '//*[@id="page1"]/li[1]/div/div[2]/div/a',
             selectpharmacyBtn: '//*[@id="btn-done"]',

             back2planBtn: '//*[@id="dt-drug-summary-area"]/div/div[4]/div/div'




    }



}