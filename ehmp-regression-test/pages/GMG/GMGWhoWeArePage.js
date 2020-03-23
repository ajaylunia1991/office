'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here
    whoWeAreElements: {
        heroBanner: '//section[@id="who-we-are_hero-banner_0__section"]',
        breadcrumb: '//nav[@class="breadcrumbs"]',
        topBanner: '//section[contains(@class,"who-we-are_banner_2_")]',
        bullets: '//section[contains(@class,"container bullets who-we-are_bullets_3_")]',
        middleBanner: '//section[contains(@class,"banner-green who-we-are_banner_4_")]',
        sideBySide1: '//div[@id="who-we-are_side-by-side_5_"]',
        sideBySide2: '//div[@id="who-we-are_side-by-side_6_"]',
        sideBySide3: '//div[@id="who-we-are_side-by-side_7_"]',
        bottomBanner: '//section[contains(@class,"banner-gray who-we-are_banner_8_")]',
        badges: '//div[contains(@class,"badges who-we-are_badges_9_")]',
        inLineCTA: '//section[contains(@class,"inline-cta container who-we-are_inline-cta_10_")]'
    },

}