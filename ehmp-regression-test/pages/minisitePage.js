'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {
        //carrier minisite
        zip: '#ehi-txtZipCode',
        continueBtn: '#continue-btn',
        zipCensus:'#zipBox > input',
        continueBtnCensus:'#ehi-btnCensusNext',
        findPlans: '.btn-find-plans',
        //carrier minisite v2 landing page
        startComparingNowBtn:'#ehi-btnLeadFormSubmit',
        // multiCounty: '#countySelectHolder > div > div > span > i',
        multiCounty: '.ehi-select-currt',
        // multiCountyChild: '#countySelectHolder > div > div > ul > li.odd',
        multiCountyChild: '.ehi-select-son > li:nth-child(2)',
        multiCountyChild2: '#countySelectHolder > div > div > ul > li:nth-child(2)',
        //pharmacy tool
        zipName: '#zip-name',
        viewPlans: '#btn-drug-view-plans',
        viewAllPlans: '#ehi-tpViewPlans',

        partnerLogoPath: '#partner-logo-img',
        pharmacyLogoPath: '#ehi-partnerLogo > img',
        planTypeFilter: '#plan_type_filter',
        companyFilter: '#carrier_filter > h4',

        //OmnicarePharmacyTool
        enrollOmnicare: '//*[@id="ehi-mdPlanList"]/div[1]/div[1]/div[1]/div[3]/div[2]',
        compareLabelOmnicare: '//*[@id="ehi-lbl23754"]',
        compareLinkOmnicare: '//*[@id="ehi-btn23754"]',
        compareBackOmnicare: '//*[@id="ehimcPlanCompareRoot"]/div[1]/div[1]/a[1]',
        backBtnOmnicare: '//*[@id="ehimcPlanBenefitsRoot"]/div[1]/a[1]',

        quotePageSection: '#ehi-quoteSections',
        doctorsZip: '#ds-loc',
        doctorsNext: '.btn-next',
        doctorsLastName: '#ds-name',
        doctorsSearchHeader: '.doctor-select-hdr',
        doctorSelection: '#ds-doctor-select > div > section > div > div.doctor-list > div.doctor-block.current > div:nth-child(1) > div.btn-col.col-sm-3 > div.btn.btn-primary.btn-small.select-doctor1.hidden-xs',
        doctorList: '#ds-doctor-select > div > section > div > div.doctor-list',
        seePlansBtn: '.btn.btn-primary.btn-large.see-plans',
        addressDisclaimer: '.address-disclaimer',
        quoteDoctorsInNetwork: ' .quote-savings-inner-doctor',
        leadClose: '#ehi-popdialogClose',
        preferredPharmTxt: '#pharmacy-pre-select-message',
        preferredPharmCheckbox: '#PreferredPharmacy'
    },

    fillZip(zip){
        I.waitForVisible(this.fields.zip,50);
        I.fillField(this.fields.zip,zip);I.wait(2);
        I.click(this.fields.continueBtn);I.wait(2);
    },

    fillV2Zip(zip){
        I.waitForVisible(this.fields.zipCensus,50);
        I.fillField(this.fields.zipCensus,zip);I.wait(2);
        I.click(this.fields.startComparingNowBtn);I.wait(8);
    },

    fillPharmacyZip(zip,pharmacyName){
        I.waitForVisible(this.fields.zipCensus,50);
        I.fillField(this.fields.zipCensus,zip);I.wait(2);
        if(pharmacyName == 'walgreens' || pharmacyName == 'Walgreens-MA' || pharmacyName == 'tw'){
            I.click(this.fields.multiCounty);I.wait(1);
            I.click(this.fields.multiCountyChild);I.wait(1);
        }
        // pause()
        I.click(this.fields.continueBtnCensus);I.wait(7);
        //check if go to quote page
        I.seeInCurrentUrl('#quote-plans');
    },

    checkLogoAndSavePic(carrierName,hasFilter){
        if(carrierName == 'costco'){
            I.saveScreenshot('costco.png');
        }else{
             
	            if(carrierName!='Higi/HEB'&&carrierName!='Higi/GiantEagle'&&carrierName!='Higi/Kroger'&&carrierName!='Higi/RiteAid'&&carrierName!='Higi/Publix'){
                 I.waitForVisible(this.fields.partnerLogoPath,10);
                }else{
   
                        //I.waitForVisible(this.fields.partnerLogoPath,10);
                        I.wait(5);
                        I.seeInCurrentUrl('ehealthmedicareplans.com');I.wait(2);
                        var newCarrierName=carrierName.replace(/\//g,'');
                        if(hasFilter == true){
                        I.saveScreenshot(newCarrierName+ '-withFilter' + '.png');
                        }else if(hasFilter == false){
                        I.saveScreenshot(newCarrierName+ '-withoutFilter' + '.png');
                        }else{
                           I.saveScreenshot(newCarrierName+ '.png');
                
                         }
                    }   
            }  
    },

    checkFilter(carrierFamilyID,hasFilter){
        I.scrollTo(this.fields.planTypeFilter);
        // I.click(this.fields.companyFilter);
        I.executeScript(function() {
                $('#carrier_filter > h4').click();
        });
        //check carrier filter on quote page
        if(hasFilter){
            I.seeCheckboxIsChecked('//*[@id="'+carrierFamilyID+'"]');
        }else{
            I.seeCheckboxIsChecked('//*[@id="AllCarriers"]');//check no filter
        }
        I.scrollPageToTop();
    },

    carrierLandingToQuote(zip,carrierName,hasFilter,carrierFamilyID){
        //Fill zip
        this.fillV2Zip(zip);
        //check logo and save picture
        this.checkLogoAndSavePic(carrierName,hasFilter);
        //check filter
        if(carrierName != 'Coventry'){
            this.checkFilter(carrierFamilyID,hasFilter);
        }
    },

    carrierLandingToCensusToQuote(zip){
        //click 'star comparing now' 
        I.waitForVisible(this.fields.continueBtn,50);
        I.click(this.fields.continueBtn);I.wait(2);
        //fill zip code
        I.waitForVisible(this.fields.zipCensus,50);
        I.fillField(this.fields.zipCensus,zip);I.wait(2);     
        //click FindPlans
        I.click(this.fields.continueBtnCensus);I.wait(5);
        //check quote page        
        I.seeInCurrentUrl('#quote-plans');
    },

    pharmacyLandingToQuote(pharmacyzip,hasFilter,pharmacyName){
        //check logo and save picture
        this.checkLogoAndSavePic(pharmacyName,hasFilter);
        //Fill zip
        this.fillPharmacyZip(pharmacyzip,pharmacyName);

    },
    

    pharmacyToolToQuote(zip){
        I.waitForElement(this.fields.zipName, 50);
        I.seeElementInDOM(this.fields.partnerLogoPath);
        I.seeInCurrentUrl('ehealthmedicareplans.com');
        I.fillField(this.fields.zipName, zip);
        if(zip == '56284'){
            I.click(this.fields.multiCounty);I.wait(1);
            I.click(this.fields.multiCountyChild2);
        }
        I.seeElementInDOM(this.fields.pharmacyLogoPath);I.wait(1);
        I.click(this.fields.viewPlans);
        I.waitForVisible(this.fields.viewAllPlans, 50);
        I.click(this.fields.viewAllPlans);I.wait(2);
    },

    checkCarrierCensusH1(h1){
        //Verified h1 message
        I.wait(5);
        I.click(this.fields.startComparingNowBtn); I.wait(1);
        I.seeInCurrentUrl('/v2/');
        I.see(h1);
    },
    checkCarrierCensusBtnColor(h3Color,findPlansColor,hoverUpFindPlanColor){
        //check h3&button color
        I.seeCssPropertiesOnElements('h3', {'color': h3Color});
        I.seeCssPropertiesOnElements(this.fields.findPlans, {'background-color': findPlansColor});
        I.moveCursorTo(this.fields.continueBtnCensus, 5, 5);
        I.seeCssPropertiesOnElements(this.fields.continueBtnCensus, {'background-color': hoverUpFindPlanColor});
    },
    checkCarrierCensusBorderColor(h3Color,borderTopColor,borderBottomColor){
        I.seeCssPropertiesOnElements('h3', {'color': h3Color});
        I.seeCssPropertiesOnElements(this.fields.findPlans, {'border-top-color': borderTopColor});
        I.seeCssPropertiesOnElements(this.fields.findPlans, {'border-bottom-color': borderBottomColor});
        I.moveCursorTo(this.fields.continueBtnCensus, 5, 5);
        I.seeCssPropertiesOnElements(this.fields.findPlans, {'border-top-color': borderBottomColor});
        I.seeCssPropertiesOnElements(this.fields.findPlans, {'border-bottom-color': borderTopColor});
    }

    
}