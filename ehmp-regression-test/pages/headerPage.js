'use strict';

let I;
var assert = require('assert');
const fetch = require('node-fetch');

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {

        //EHMP Header locators
        findMedicarePlans: '//a[contains(text(),"Find Medicare Plans")]',
        findMS: 'data-href="https://www.qa.ehealthmedicareplans.com/?type=MS',
        findMD: 'data-href="https://www.qa.ehealthmedicareplans.com/?type=MD',
        findMA: 'data-href="https://www.qa.ehealthmedicareplans.com/?type=MA',
        selectMD: '.product-line-MD:nth-child(2) > .menu-link',
        selectMS: '.product-line-MS:nth-child(2) > .menu-link',
        selectMA: '.container > .product-line-MA > .menu-link',

        // EHM Header locators
        selectMA_EHM: '//a[contains(text(),"Find Medicare Advantage Plans")]',
        selectMS_EHM: '#menu-item-69 #menu-item-70 > a',
        selectMD_EHM: '//a[contains(text(),\"Find Medicare Part D Plans\")]',

        //Quote page
        quotePlanText: 'h1',
        quoteLeadForm: '#ehi-popdialogClose',
        quoteLeadFormCSS: '.leadform h1',
        planTitle: '#sort-bar > .quote-md',


        //Phone in Header EHMP
        headerPhone: '.phone-wrap > .phone',
        headerPhoneQuote: '.phone-wrap:nth-child(1) > .phone',
        footerPhone: 'span.ftr-phone.phone',
        footerPhoneQuote: '.ftr-phone',
        //API GET request for phone number
        phoneFromAPIehmp: '/mcws/rs/alliance/call-service/v2/EHM35770?allidConfig=EHM35770',
        phoneFromAPIehm: '/mcws/rs/alliance/call-service/v2/EHM39972',
        phoneFromAPIehim: '/mcws/rs/alliance/call-service/v2/Med37949',
        phoneFromAPImdc: '/mcws/rs/alliance/call-service/v2/Med40680',
        //Partners allids
        phoneFromAPImdcPrivia: '/mcws/rs/alliance/call-service/v2/pri7981000',
        phoneFromAPImdcOrlando: '/mcws/rs/alliance/call-service/v2/orl7740000',
        phoneFromAPIehmProvidence: '/mcws/rs/alliance/call-service/v2/pro7969000',
        phoneFromAPIehmCareMount: '/mcws/rs/alliance/call-service/v2/car9159000',
        // GMG allid
        phoneFromAPIgmg: '/mcws/rs/alliance/call-service/v2/gmg10044000',


        //Phone in Header EHM
        headerPhoneEHM: '.speak .phone-number',
        requestacallPhoneEHM: '.call-box >.phone > .phone-number',
        footerPhoneEHM: '.hidden-xs > .phone-number',

        // Phone in Header MDC
        headerPhoneMDC: '.phone > .ehi-call-box',
        //footerPhoneMDC: 'strong > .ehi-call-box',
        footerPhoneMDC: '.font-weight-bold',
        recoMenu: '#menu-item-356896 > a',

        // Phone in Header GMG
        //headerPhoneGMGGetStarted: '.site-identity__phone--long .invocaNumber',
        //headerPhoneGMGHome: '.site-identity__phone--long > .gmg-phone',
        headerPhoneGMGHome: '.site-identity__phone--long > span',
        findPlansBtn: '//a[contains(text(),"Find Your Plan")]',
        closeIcon: '.gmg-icon-close',



        // EHMP Learn About Medicare
        learnAboutMedicare: '//a[contains(text(),"Learn About Medicare")]',
        aboutEhealth: '.active > .sub-menu-wrap > .sub-menu > .menu-item:nth-child(2) > a',
        abouteHealthXPath: '//a[contains(text(),\'About eHealth\')]',
        aboutMedicare: '.active > .sub-menu-wrap > .sub-menu > .menu-item:nth-child(3) > a',
        enrollInMedicare: '.active > .sub-menu-wrap > .sub-menu > .menu-item:nth-child(4) > a',
        eligibilityAndCoverage: '.menu-item:nth-child(9) > a',
        medicareResources: '.container > .menu-item-has-children:nth-child(5) > a',
        medicareCosts: '.container > .menu-item-has-children:nth-child(7) > a',
        medicareAdvantage: '.product-line-:nth-child(3) > .sub-menu-wrap > .container > .menu-item:nth-child(2) > .menu-link',

        // EHM Learn About Medicare
        medicareResources_EHM: '//a[contains(text(),\"Medicare Resources\")]',
        aboutEhealthMedicare: '#menu-item-88 > a',
        whyEhealthMedicare: '.why-eHealth-section > .section-title',
        medicareSupplement: '(//a[contains(text(),\"Medicare Supplement\")])[4]',
        veifyTitle: '.title',
        medicareTaxes: '//a[contains(text(),\"Medicare Taxes\")]',

        // Footer
        whatIsMedicare: '.col-sm-3:nth-child(3) li:nth-child(1) > a',

        //Logos
        mdcLogo: 'a:nth-child(1) > img:nth-child(2)',
        mdcLogoCensus: '#partner-logo-img',
        ehmpLogo: '#nav-logo',
        ehmpLogoCensus: '.ehm-logo',
        ehimLogo: '//img[@alt=\'Medicare Insurance Options from eHealth Medicare\']',
        ehmLogo: '//img[@alt=\'Medicare Insurance Options from eHealth Medicare\']',

    },

    verifyMAMSMDHeader: async function(ms,ma,md) {
        I.wait(2);
        var value1 = await I.grabCssPropertyFrom('.product-line-MS', 'display');
        var value2 = await I.grabCssPropertyFrom('.product-line-MA', 'display');
        var value3 = await I.grabCssPropertyFrom('.product-line-MD', 'display');

        console.log("This is MS value: " + value1);
        console.log("This is MA value: " + value2);
        console.log("This is MD value: " + value3);
        //console.log((assert(value1==ms)));
        if((value1==ms)&& (value2==ma) && (value3==md)){
            return true;
        }
        else {
            return false;
        }

    },

    grabPhoneHeader: async function(val) {
        I.wait(4);
        var value1 = await I.grabTextFrom(val);
        var val_tr = value1.trim();
        var val_slice = val_tr.slice(2,14);
        console.log("This is Header Phone value: " + val_slice);
        return val_slice;

    },

    grabPhoneHeaderEHM: async function(val) {
        I.wait(4);
        var value1 = await I.grabTextFrom(val);
        var val_tr = value1.trim();
        //var val_slice = val_tr.slice(2,14);
        console.log("This is Header Phone value: " + val_tr);
        return val_tr;

    },

    grabPhoneFooter: async function(val) {
        I.wait(4);
        var value1 = await I.grabTextFrom(val);
        var val_sl = value1.slice(2,14);
        console.log("This is Footer Phone value: " + val_sl);
        return val_sl;

    },

    grabPhoneFooterEHM: async function(val) {
        I.wait(4);
        var value1 = await I.grabTextFrom(val);
        //var val_sl = value1.slice(2,14);
        console.log("This is Footer Phone value: " + value1);
        return value1;

    },


    verifyPhoneRegExp: async function(term) {
        var re = new RegExp("^[0-9]{3}[-.]+[0-9]{3}[-.]+[0-9]{4}$");
        if (re.test(term)) {
            console.log("Valid phone");
            return true;
        } else {
            console.log("Invalid phone");
            return false;
        }

    },

    phoneFetchForGMG: async function(phone) {
        //var actualPhone = phone;
        var actualPhone = phone.split('-').join('.');
        console.log("Phone format after replacement '-' to '.' " + actualPhone);
        return actualPhone;

    },


    phoneSearch: async function(domain, req) {
        return fetch(domain + req)
            .then (console.info(domain + req))
            .then(response => response.json())
            .then(data => {
                return data.allianceInfo.alliancePhone.phoneNumber

            })
            .catch(error =>
                console.error('Error:', error)
            );


    },

    verifyQuotePage(value) {
        console.log('I am on ' + value + ' quote page');
        I.waitForElement(this.fields.quotePlanText);
        I.see(value, this.fields.quotePlanText); // comparing text on quote page
        I.seeInCurrentUrl('ehealthmedicareplans.com'); // verifying that URL is EHMP
        I.wait(2);
        I.seeInSource('id="ehmp-tool"');
        I.seeInCurrentUrl('#quote-plans/');

    },


}