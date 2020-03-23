'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    //Locators
    elements: {
        bannerImage:'//div[@class="hero-banner__background"]',
        bannerHeader:'#careers_hero-banner_0__hero-heading',
        bannerParagraph:'#careers_hero-banner_0__hero-paragraph',
        seeAllOpeningBannerButton:'#careers_hero-banner_0__cta-button',
        breadcrumb:'#breadcrumbs',
        bannerTwoTextContainer:'#banner-text-container',
        bannerTwoTitle:'#careers_banner_2__title',
        bannerTwoDescription:'#careers_banner_2__description',
        sideQuoteOne:'#careers_side-by-side_3__quote',
        sideNameOne:'#careers_side-by-side_3__name',
        sideTagOne:'#careers_side-by-side_3__tagline',
        sideQuoteTwo:'#careers_side-by-side_4__quote',
        sideNameTwo:'#careers_side-by-side_4__name',
        sideTagTwo:'#careers_side-by-side_4__tagline',
        sideQuoteThree:'#careers_side-by-side_5__quote',
        sideNameThree:'#careers_side-by-side_5__name',
        sideTagThree:'#careers_side-by-side_5__tagline',
        bannerFourTitle:'#careers_banner_6__title',
        bannerFourDescription:'#careers_banner_6__description',
        badge:'//div[contains(@class,"badges careers_badges_7_")]',
        badgeOneTitle:'#careers_badges_7_0__title',
        badgeOneDescription:'#careers_badges_7_0__description',
        badgeTwoTitle:'#careers_badges_7_1__title',
        badgeTwoDescription:'#careers_badges_7_1__description',
        badgeThreeTitle:'#careers_badges_7_2__title',
        badgeThreeDescripton:'#careers_badges_7_2__description',
        ctaHeading:'#careers_inline-cta_8__heading',
        seeAllOpeningFooterButton:'#careers_inline-cta_8__button',
        carrerLink:'//a[contains(., "Careers")]'
    },

    navigateToCareerPage(){
        I.click(this.elements.carrerLink);
    },

    clickSeeAllOpeningInBanner(){
        I.click(this.elements.seeAllOpeningBannerButton);
    },

    clickSeeAllOpeningInFooter(){
        I.click(this.elements.seeAllOpeningFooterButton);
    }
}