'use strict';

let I;

module.exports = {

    //GMG
    
    _init() {
        I = actor();
    },

    // insert your locators and methods here
    licensingElements: {
        banner: '//section[@class="legal-banner"]',
        breadcrumb: '//nav[@class="breadcrumbs"]',
        licensingContent: '//section[@class="legal-content container licensing"]'
    },

    nonDiscriminationElements: {
        banner: '//section[@class="legal-banner"]',
        breadcrumb: '//nav[@class="breadcrumbs"]',
        nonDiscriminationContent: '//section[@class="legal-content container nondiscrimination"]'
    },

    termsConditionsElements: {
        banner: '//section[@class="legal-banner"]',
        breadcrumb: '//nav[@class="breadcrumbs"]',
        nonDiscriminationContent: '//section[@class="legal-content container terms-and-conditions"]'
    },

    privacyPolicyElements: {
        banner: '//section[@class="legal-banner"]',
        breadcrumb: '//nav[@class="breadcrumbs"]',
        nonDiscriminationContent: '//section[@class="legal-content container privacy-policy"]'
    },
}