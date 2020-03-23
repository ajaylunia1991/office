'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {

        //EHMP Filter locators
        filterAetna: '//input[@id=\'3\']',
        filterSSMD: '//input[@id=\'140\']',
        logoAetna: '#\\33 4876 .quote-contract-logo',
        logoSSMD: '#\\33 4679 .quote-contract-logo',
        filterHumana:'//input[@id=\'66\']',
        filterHumanaMS: '//input[@id=\'175\']',
        filterEmpire: '//input[@id=\'113\']',
        logoHumana: '#\\33 5375 .quote-contract-logo',
        logoHumanaMD: '#\\33 3778 .quote-contract-logo',
        filterEmblemHealth: '//input[@id=\'51\']',
        logoEmblemHealth: '#\\33 2600 .quote-contract-logo',
        planCDPHP: '#\\33 5561 .quote-plan-name',
        planCDPHPCompare: '#resp-ehi-lbl35561',
        //
        logoHumanaMS: "#\\31 011790063 .quote-contract-logo",
        logoWellCare: '#\\33 3255 .quote-contract-logo',
        logoWellCareMD: '#\\33 3509 .quote-contract-logo',
        logoUnited: '#\\33 6137 .quote-contract-logo',
        logoUnitedMD: '#\\33 5719 .quote-contract-logo',
        logoCDPHP: '#\\33 5559 .quote-contract-logo',
        logoExpressMD: '#\\33 2714 .quote-contract-logo',
        logoCVSMD: '#\\32 8630 .quote-contract-logo',
        logoEmpire: '#\\33 2981 .quote-contract-logos',
        allCarriers: '#AllCarriers',
        //
        logoEmpireMS: '#\\31 0119800101 .ehi-carrier-logo',
        logoMutualOO: '#\\31 0124800210 .quote-contract-logo',
        ///////////////////////////////////////////////
        shownPlans: '.shown-plan-count',
        totalPlans: '.total-plan-count',
        quoteMD: '.md > .counted-plan-type-name',
        ///////////////////////////////////////////////
        selectPlan: "//a[contains(text(),'Aetna Medicare Value Plan (HMO)')]",
        selectPlanMS: "//a[contains(text(),'Humana Medicare Supplement High Deductible Plan F')]",
        selectPlanMD: "//a[contains(text(),'SilverScript Choice (PDP)')]",
        // moved these two locators to Plan Detail page
        planDetail: '.ehi-pd-name',
        planDetailRedesign: '.detail-plan-name',
        /////////////////////////////////////////
        //for Compare
        checkPlan1: '#resp-ehi-lbl34876',
        checkPlan2: '#resp-ehi-lbl34388',
        checkPlan3: '#resp-ehi-lbl34385',
        checkPlan1MD: '#resp-ehi-lbl34679',
        checkPlan2MD: '#resp-ehi-lbl34680',
        bthCompare: "//div[@id=\'compare-tool\']/div/div",

        //moved these locators to Compare Page
        comparePage: "//div[@id='ehimcPlanCompareDisclose']/h1",
        comparePageRedesign: "//div[@id='compareHeaderFixed']/div/div/div/h2",
        bthBackCompare: '.ehi-top-tool-back',
        bthBackCompareRedesign: 'a.btn-back.ehi-top-tool-back',
        checkURLCompare: 'pH3312-062-000,H5521-119-000,H5521-110-000',
        checkURLCompareMD: 'pS5601-006-000,S5601-007-000',
        //
        // quote page
        haveQuestions: '.have-questions',
        requestCallBtn: '.more-info > #requestToCall',
        quoteTypeSelect: '.counted-plan-type:nth-child(4)',
        quoteTypeMD: '.quote-md:nth-child(3)',
        //viewMoreDetails: '//ul[@id=\'28097\']/div[3]/a/span',
        viewMoreDetails: '#\\32 8097 .view-more',
        viewLess: '.view-more-details-expanded > .view-less',
        starRating: '//div[@id=\'moreDetails28513\']/div[2]/div/div',
        addToFavorites: '.hidden-xs > .add-favorite',
        allCoverageDetails: '//a[contains(text(),\'View All Coverage Details >\')]',
        planDetails: '.ehi-pd-table-title > p', // check if its in another page
        editZip: '#ehi-txtZip',
        btnZipUpdate: '#ehi-btnCensusUpdate',
        editQuoteZip: '#edit-census > .hidden-xs',

        getHelp: '#tab',
        //Lead form on have questions
        fName: '#ehi-txtFirstName',
        lName: '#ehi-txtLastName',
        phoneNumber: '#ehi-txtPhoneNumber',
        continueBtn: '#continue-btn',
        leadFormThanks: '.leadform-thankyou h1',
        popdialogClose: '#ehi-popdialogClose',

        // Drugs
        addDrug: '#calc',
        //drugSearchForm: '#form-drug-search',
        drugLetter1: '#ehi-firstletter',
        drugLetter2: '#ehi-secondletter',
        drugLetter3: '#ehi-thirdletter',
        drugLetter4: '#ehi-fourthletter',
        selectDrug: '//a[contains(text(),"Select drug")]',
        addDrugBtn: '#add-drug-btn',
        addDrugMore: '.btn-add-more-drugs:nth-child(3)',
        backToPlansLink: '#dt-header > a',
        editDrugCovered: '//a[contains(text(),\'(Edit)\')]',
        editDrug: '#calc > .edit',
        editDrugLink: '.dt-edit-link',
        drugName: '.dt-summary-item-name',
        drugTitle: '.ehi-selectedDrugName',
        drugPackageName: '.dt-summary-item-package',
        packageOne: '#drug-package > option:nth-child(1)',
        packageTwo: '#drug-package > option:nth-child(2)',
        drugQuantity: '.dt-summary-item-quantity',
        genDrugRadioBtn: '#ehi-switch-to-generic-yes',
        brandDrugRadioBtn: '#ehi-switch-to-generic-no',
        drugSavings: 'a.see-savings',
        pharmacy: '.v5:nth-child(1) > .row > .col-xs-11 .ehi-pharm-name',
        selectPharmacy: '#btn-done',
        priceMissingMessage: '.price-missing-message',
        drugPackage: '#drug-package',
        drugDosage: '#drug-dosage',
        drugDosageEdit: '.dt-confirm-item:nth-child(2) #dt-dosage-select', //locator for child(2)
        drugNameEdit: '.dt-confirm-item:nth-child(1) .dt-confirm-drug-name',
        drugNamePacEdit: '.has-packages .dt-confirm-drug-name',
        drug2NameEdit: '.dt-confirm-item:nth-child(2) .dt-confirm-drug-name',
        drug3NameEdit: '.dt-confirm-item:nth-child(3) .dt-confirm-drug-name',
        drugDosageNameEdit: '.one-dosage > .one-dosage-wrap',
        addMoreDrugsEdit: '.btn-add-more-drugs:nth-child(1)',
        drugQuantityEdit: '.dt-confirm-item:nth-child(2) .inner-package-quantity #dt-quantity',
        addDrugsPlanDetail: '.add-drugs',
        switchToGenLink: '.dt-sw-to-gen > a',
        switchToBrandLink:'.dt-sw-to-brand > a',
        drugToolEdit: '#ehmp-tool',
        drugTolEditMD: '.dt-edit-link',
        editDrugMDPlanUnit: '#\\33 2769 .co-pay-section .add-rx',

        /// Doctors
        addDocTopLink: '//a[contains(text(),\'Add Doctors\')]',
        editDocLink: '#calcDoctor',

        docLoc: '#ds-loc',
        selectDocLoc: '.loc-input',
        docName: '#ds-name',
        radius: '.radius-select',
        nextBtnDoc: '.btn:nth-child(5)',
        nextBtnZip: '.btn:nth-child(6)',
        docNameOnSelect: '.name',
        selectDoc1: '.select-doctor1',
        selectDocLocation: '.location-line:nth-child(1) > .radio-btn',
        btnLoc: '.btn-secondary:nth-child(2)',
        backLink: '.back-link',
        docNameInPlan: '#\\33 5555 .doc-name',
        docEditInPlan: '(//a[contains(text(),\'(Edit)\')])[2]',
        seeDocPlans: '.see-plans',
        addMoreDoc: '.add-another',
        nameDoc1: '.doctor:nth-child(1) > .name',
        nameDoc2: '.doctor:nth-child(2) > .name',
        nameDoc3: '.doctor:nth-child(3) > .name',
        rmDoc3: '.doctor:nth-child(3) > .remove-doc',
        noDocResult: '.no-results-hdr',
        btnReturnToPlans: '.no-thanks > a',
        //doc1InPlanUnit: '#\\33 2599 .covered-item:nth-child(1) > .doc-name',
        //doc2InPlanUnit: '#\\33 2599 .covered-item:nth-child(2) > .doc-name',
        docNameInPlanUnit: '#\\33 2599 .covered-item > .doc-name',

        // MS locators
        // Plan G
        //planName: '#\\39 013020076 .quote-plan-name',
        planName: '.quote-plan-name',
        blueShieldBnf1: '#\\39 013020076 .coverage:nth-child(1) > span',
        blueShieldBnf2: '#\\39 013020076 .coverage:nth-child(3) > span',
        blueShieldBnf3: '#\\39 013020076 .coverage:nth-child(5) > span',
        blueShieldBnf4: '#\\39 013020076 .coverage:nth-child(7) > span',
        blueShieldBnf5: '#\\39 013020076 .coverage:nth-child(9) > span',
        //Plan F Extra
        planNameFExtra: '#\\39 013020075 .quote-plan-name',
        blueShieldFBnf1: '#\\39 013020075 .coverage:nth-child(1) > span',
        blueShieldFBnf2: '#\\39 013020075 .coverage:nth-child(3) > span',
        blueShieldFBnf3: '#\\39 013020075 .coverage:nth-child(5) > span',
        blueShieldFBnf4: '#\\39 013020075 .coverage:nth-child(7) > span',
        blueShieldFBnf5: '#\\39 013020075 .coverage:nth-child(9) > span',
        blueShieldFBnf6: '#\\39 013020075 .coverage:nth-child(11) > span',
        blueShieldFBnf7: '#\\39 013020075 .coverage:nth-child(13) > span',

        // MS Filter Plan Features
        vision: '#visionCboMS',
        hearing: '#hearingCboMS',
        silverSneakers: '#silverSneakersCboMS',
        fitnessBenefits: '#fitnessBenefitsCboMS',
        partBExcess: '#highlightPartBExcessChargesCboMS',
        skilledNursing: '#highlightSkilledNursingCboMS',
        foreignTravel: '#highlightForeignTravelEmergencyCboMS',

        // Show More Details
        viewMoreLink: '.view-more',
        viewLessLink: '.view-less',
        viewLessExpanded: '.view-more-details-expanded > .view-less',
        starRatingDetail: '.panel-content:nth-child(2) > .row:nth-child(1) > .title-label',
        addToFavorite: '.hidden-xs > .add-favorite',
        viewDetails: '.btn-plan-detail',
        coverageHighlights: '.ehi-pd-hdr:nth-child(1)', //Coverage Highlights
        drugCoverageMA: '.ehi-pd-hdr:nth-child(3)', //Prescription Drug Coverage (Initial Coverage, Standard Retail Cost-Sharing, 30 Day)
        initialCoverageMD: '.ehi-pd-hdr:nth-child(3)', //Initial Coverage (30-Day Supply, Standard Retail Cost-Sharing)
        otherCoverage: '.ehi-pd-hdr:nth-child(5)', //Other Coverage Highlights
        preferredGeneric: '#stdTiers > .row:nth-child(1) > .title-label', // Tier 1: Preferred Generic

        // County Zip code
        countyZip: '.ehi-select-currt',
        countyList: '.ehi-select-son',
        countyItem1: '.ehi-select-son > li:nth-child(2)', //'MAHONING'
        countyItem2: '.ehi-select-son > li:nth-child(3)'



    },

        addingDrug(l1, l2, l3, l4, type, dosage, pack) {
        I.wait(2);
        I.fillField(this.fields.drugLetter1,l1);
        I.fillField(this.fields.drugLetter2,l2);
        I.fillField(this.fields.drugLetter3,l3);
        I.fillField(this.fields.drugLetter4,l4);
        I.wait(2);
        I.waitForVisible(this.fields.selectDrug,10);
        I.click(this.fields.selectDrug);
        I.wait(2);
        if (type == "generic"){
            I.click(this.fields.genDrugRadioBtn);
            I.wait(3);
        }

        if (dosage != null){
            I.click(this.fields.drugDosage);
            I.wait(1);
            I.selectOption(this.fields.drugDosage, dosage);
            I.wait(3);
        }

        if (pack != null){
            I.click(this.fields.drugPackage);
            I.wait(1);
            I.selectOption(this.fields.drugPackage, pack);
            I.wait(3);
        }
        I.wait(2);
    },
    // adding 1st doctor, add space at the end of doctor name
    addingDoctor(zip, name, radius, location){
        I.fillField(this.fields.docLoc, zip);
        I.wait(1);
        I.pressKey('ArrowDown');
        I.pressKey('Enter');
        I.wait(1);
        I.click(this.fields.nextBtnZip);
        I.wait(2);
        I.fillField(this.fields.docName, name);
        I.pressKey('ArrowDown');
        I.wait(2);
        I.click(this.fields.radius);
        I.wait(2);
        I.selectOption(this.fields.radius, radius);
        I.wait(2);
        I.click(this.fields.nextBtnDoc);
        I.wait(2);
        I.click(this.fields.selectDoc1);
        I.wait(3);
        //selects 1st location in from the list
        if (location != null){
            I.click(this.fields.selectDocLocation);
            I.wait(2);
            I.click(this.fields.btnLoc);
            I.wait(2);
        }
        //I.seeInCurrentUrl('#doctor-summary/quote-plans/');
        //I.click(this.fields.seeDocPlans);
        I.wait(3);

    },
    updateZipOnQuote(zip){
        I.click(this.fields.editQuoteZip);
        I.wait(2);
        I.doubleClick(this.fields.editZip);
        I.wait(1);
        I.fillField(this.fields.editZip, zip);
        I.wait(2);
        //I.click(this.fields.btnZipUpdate);
        //I.wait(5);

    },


}