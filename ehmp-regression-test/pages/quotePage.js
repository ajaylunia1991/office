'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {
        aetnaFilter: '//input[@id="3"]',
        humanaFilter: '//*[@id="66"]',
        filterAetna: '#3',
        enrollBtn: '*[data-mediator="enroll"]',
        companyBtn: '#carrier_filter > h4',
        msEditCensus: '#edit-census',

        //detail page enroll btn
        // detailEnrollBtn: 'section#sidebar-ms > div.pd-summary.pd-summary-2 > div[data-mediator="enroll"]',
        detailEnrollBtn: '#sidebar-ms > div.pd-summary.pd-summary-2 > div.btn.btn-primary.ehi-btn-enroll.ehi-btn-ms-enroll',
        detailLink: 'a[data-mediator="details"]',
        msDetailLink: 'a[title="Details"][data-mediator="details"]',
        backBtn: '#breadcrumb-back',
        compareLabel: 'label.compare-label',
        compareLink: '//*[@id="compare-tool"]/div/div',
        compareBack: '//*[@id="ehimcPlanCompareFixed"]/div/div/div[1]/div/div[4]',
        newCompareBack: '.ehi-top-tool-back',

        //minisite elements
        zip: '#ehi-txtZipCode',
        continueBtn: '#continue-btn',

        //OmnicarePharmacyTool
        enrollOmnicare: '//*[@id="ehi-mdPlanList"]/div[1]/div[1]/div[1]/div[3]/div[2]',
        compareLabelOmnicare: '//*[@id="ehi-lbl23754"]',
        compareLinkOmnicare: '//*[@id="ehi-btn23754"]',
        compareBackOmnicare: '//*[@id="ehimcPlanCompareRoot"]/div[1]/div[1]/a[1]',
        backBtnOmnicare: '//*[@id="ehimcPlanBenefitsRoot"]/div[1]/a[1]',
        planCount: "#sort-bar .plans-showing-counts span.total-plan-count",
        msPlanType: '.counted-plan-type.ms',
        mdPlanType: '.counted-plan-type-count.md',
        navPanel :'#nav-secondary',
        // maPlan :'a#link-shop-ma',
        maPlan :'#nav-med-menu > li:nth-child(3) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2)',
        //drug info
        addDrug: '#calc',
        drugSearchForm: '#form-drug-search',
        drugOne: "#ehi-firstletter",
        drugTwo: "#ehi-secondletter",
        drugThree: "#ehi-thirdletter",
        nxtBtn: "#next-btn",

        drugSelection: '#medicare-plan-tool',
        drugList: '#ehi-medList',
        selDrug: '#dt-disambig-area > div > div.dt-disambig-list.overflow > div:nth-child(2) > div.dt-disambig-link.col-sm-3.hidden-xs > a',
        nxtDrugBtn: '.btn-group #next-btn',
        dosage: '#dosage-field',
        drugQty: '#quantity-field',
        drugSelectionAddDrug: '#dt-drug-dosage-area #add-drug-btn',
        seePlans: '.dt-summary-savings .btn-view-plans',
        drugSavings: 'a.see-savings',

        //shopping cart
        planCart: '#planCartSection',
        // myPlansCartCount: '#nav-med-cart > a.plan-cart > span.num-plans',
        myPlansCartCount: '#nav-med-menu > li:nth-child(5) > a:nth-child(1) > span:nth-child(2)',
        getHelpLink: '#tab',
        recommendedPlanSection: '.recommended-plans-section',               
        favoritePlanSection: '.favored-plans-section',                
        recentlyViewedPlanSection: '.viewed-plans-section',                
        emptyFavoritePlansSection: '.favored-plans.section .no-favored-plans',
        myPlans: '#nav-med-cart > .plan-cart',
        msPlans: 'div#ehi-msPlanList.ehi-plan-list > ul',
        maPlans: 'div#ehi-maPlanList.ehi-plan-list > ul',
        mdPlans: 'div#ehi-mdPlanList.ehi-plan-list > ul'
    },

    //Click to detail page then back to quote page ,then click compare label to compare plan and then go 
    checkDetailAndCompare(productType) {

        //detail
        if(productType != null && productType == 'MS'){
            I.waitForVisible(this.fields.msDetailLink, 50);
            I.executeScript(function() {
                $('a[title="Details"][data-mediator="details"]').click();
            });
        }else{
            I.waitForVisible(this.fields.detailLink, 50);
            I.click(this.fields.detailLink);
        }
        I.wait(2);
        I.seeInCurrentUrl('#plan-benefits');
        I.wait(2);//MS no words like 'Detail Page' and V2 MA/MD no words like"plan details"
        I.click(this.fields.backBtn);
        I.wait(2);

        //compare
        I.waitForVisible(this.fields.compareLabel, 100);
        // I.click(this.fields.compareLabel);//ms has too many compare labels
        let compLabel=this.fields.compareLabel
        I.executeScript(function(compLabel) {
            $(compLabel)[0].click();
        },compLabel);
        I.waitForVisible(this.fields.compareLink, 50);
        I.click(this.fields.compareLink);
        I.waitForVisible(this.fields.newCompareBack, 50);
        I.seeInCurrentUrl('#plan-compare');
        I.click(this.fields.newCompareBack);
        I.wait(5);    
        
    },

    filterHumanaPlans(carrierFamilyId){
        I.waitForVisible('#carrier_filter > h4', 50);I.wait(3);
        I.executeScript(function() {
        $('#66').click();
    });
    },

    addDrugAndDocInPharmacyMinisite() {
        
        this.addDrug();
        //back to plans
        I.waitForVisible('//*[@id="dt-drug-summary-area"]/div/div[2]/div/div/div[2]/div', 50);
        I.click('//*[@id="dt-drug-summary-area"]/div/div[2]/div/div/div[2]/div');
        I.wait(3); 
        this.addDocs();
        //verify drug info
        I.click('.see-savings');
        I.wait(2);
        I.see('Annual Costs');
        I.click('#breadcrumb-back')
        I.wait(2);
    },

    addDrugAndDocInPharmacyTool() {
        
        this.addDrugForTool();
        //back to plans
        I.waitForVisible('#btn-drug-view-plans', 50);
        I.click('#btn-drug-view-plans');
        I.wait(3); 
        //verify drug info
        I.click('.see-savings');
        I.wait(2);
        I.see('Annual Costs');
        I.click('#breadcrumb-back')
        I.wait(2);
    },

    addDrugAndDocInCarrierMinisite() {
        
        this.addDrug();
        this.addPharmacy();
        //back to plans
        I.waitForVisible('//*[@id="dt-drug-summary-area"]/div/div[2]/div/div/div[2]/div', 50);
        I.click('//*[@id="dt-drug-summary-area"]/div/div[2]/div/div/div[2]/div');
        I.wait(3); 
        this.addDocs();
        //verify drug info
        I.click('.see-savings');
        I.wait(2);
        I.see('Annual Costs');
        I.click('#breadcrumb-back')
        I.wait(2);
    },

    addDrug(){
        I.waitForElement('#calc', 50);
        I.executeScript(function() {
            $('#calc').click();
        });
        I.wait(1);

        //add drug page
        I.waitForElement('#ehi-firstletter', 50);
        I.fillField('#ehi-firstletter', 'L');
        I.wait(1);
        I.fillField('#ehi-secondletter', 'I');
        I.wait(1);
        I.fillField('#ehi-thirdletter', 'P');
        I.wait(3);
        I.waitForElement('//*[@id="dt-disambig-area"]/div/div[3]/div[2]/div[5]/a', 50);I.wait(3);
        I.click('//*[@id="dt-disambig-area"]/div/div[3]/div[2]/div[5]/a');
        I.wait(2);
        I.see('Dosage');
        I.click('#add-drug-btn');
        I.wait(3);
    },

    addDrugForTool(){
        I.waitForElement('#calc', 50);
        I.executeScript(function() {
            $('#calc').click();
        });
        I.wait(1);

        //add drug page
        I.waitForElement('#ehi-firstletter', 50);
        I.fillField('#ehi-firstletter', 'L');
        I.wait(1);
        I.fillField('#ehi-secondletter', 'I');
        I.wait(1);
        I.fillField('#ehi-thirdletter', 'P');
        I.wait(1);
        I.waitForElement('#next-btn > span.hidden-xs', 50);
        I.click('#next-btn > span.hidden-xs');I.wait(1);
        I.click('#ehi-medList > div > div.form-wrapper > div.drug-list-select > div.drug-list-view > ul > li:nth-child(1)');I.wait(1);
        I.waitForVisible('#next-btn', 5);
        I.leftClick(null,1304,640);//点击不了 页面空白
        I.wait(8);
        I.waitForElement('#add-drug-btn', 5);
        I.see('Dosage');
        I.click('#add-drug-btn');
        I.wait(3);
    },

    addPharmacy(){
        I.wait(2);
        I.click('#page1 > li:nth-child(1) > div > div.col-xs-11 > div > label.hidden-xs.ehi-pharm-addr');
        I.wait(2);
        I.click('#btn-done');
        I.wait(2); 
    },

    addDocs(){
        //add doc
        I.waitForElement('#calcDoctor', 50);
        I.executeScript(function() {
            $('#calcDoctor').click();
        });
        I.wait(3);

        //add doctor page zip
        I.waitForVisible('#ds-loc', 30);
        I.fillField('#ds-loc', '90001');
        I.wait(2);

        I.pressKey('ArrowDown');
        I.pressKey('Enter');

        //doc name
        I.executeScript(function() {
            $('#ds-entry > div > section > div > div > div').click();
        });
        I.waitForVisible('#ds-name', 30);
        I.fillField('#ds-name', 'Na, Soon');
        I.wait(1);
        I.executeScript(function() {
            $('#ds-name-entry > div > section > div > div > div.btn.btn-next.btn-primary.btn-large').click();
        });
        I.wait(3);

        I.waitForElement('//*[@id="ds-doctor-select"]/div/section/div/div[2]/div[1]/div/div[2]/div[1]', 50);
        I.click('//*[@id="ds-doctor-select"]/div/section/div/div[2]/div[1]/div/div[2]/div[1]'); //select doctor
        I.waitForElement('//*[@id="ds-summary"]/div/section/div/div[5]/div[1]', 50);
        I.click('//*[@id="ds-summary"]/div/section/div/div[5]/div[1]');
        I.wait(5); //Show Doctor Coverage
        //verify doc info
        I.see('Soon Na');
        I.wait(2);
    },

    switchPlanYear(yearPath){
        I.waitForVisible(yearPath, 10);
        I.click(yearPath);
        I.wait(2);
        I.scrollPageToTop();
    },

    clickToEnroll(){
        I.executeScript(function(){
            $('.btn-enroll')[0].click();
        })
    }
}