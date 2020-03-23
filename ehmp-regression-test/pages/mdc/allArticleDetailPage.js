'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {

        //All Articles page (/articles/)
        allArticlesBreadcrumb:'#breadcrumbs',
        allArticlePageHeader:'h1',
        allArticleMainSection:'.small-12.medium-8.columns',
        firstArticleTitle: 'div.small-12.medium-8.columns > div:nth-child(2) > div > div > a > h3',
        firstArticleLink: 'div.small-12.medium-8.columns > div:nth-child(2) > div > div > a ',
        firstArticleLastUpdated:'div.small-12.medium-8.columns > div:nth-child(2) > div > div > .date-time-wrap',
        firstArticleReadMore: 'div.small-12.medium-8.columns > div:nth-child(2) > div >div>.more-link>a',
        pagination: '.new-pagination',

        //All Articles page side bar component
        sideBarComponents: '.small-12.medium-4.columns',
        welcomeSection:'.welcome-medicare',
        maSection:'#menu-item-365897',
        msSection:'#menu-item-365898',
        mdSection:'#menu-item-365899',
        omSection:'#menu-item-365900',
        meSection:'#menu-item-365901',
        compareMedicareSection :'.compare-medicare',
        comparePlansNow_linkButton:'.compare-medicare > p>a',
        licenseTextSection:'.get-help.gethelp-web-view.clearfix.hidden-throttle-yellow > .content-wrapper.content-article',
        aboutMedicareSection:'#menu-item-365882',
        coverageSection:'#menu-item-365883',
        carriersSection:'#menu-item-365884',
        resourcesSection:'#menu-item-365885',
        faqSection:'#menu-item-365886',
        administrationSection:'#menu-item-365867',
        healthSection:'#menu-item-365870',
        caregiverResourcesSection:'#menu-item-365873',
        medicareByStateSection:'#menu-item-365876',
        medicareSuppByStateSection:'#menu-item-365879',
        
        footerSection:'.fusion-footer-widget-area>.fusion-row',

        //Article Details page
        articleDetailBreadcrumb:'#breadcrumbs',
        articleDetailHeader:'h1',
        socialShareSection:'.left-share-wrapper',
        articleDetailLastUpdate:'.date-time-wrap',
        articleDetailTopBanner:'.articles.article-page > div:nth-child(1) > div.layer.article-banner.zipcode-cta',
        articleDetailTopCtaText:'div:nth-child(1) > div.layer.article-banner.zipcode-cta>p>b',
        articleDetailTopFindPlanBtn:'div:nth-child(1) > div.layer.article-banner.zipcode-cta > div > form > input.button-orange',
        
        articleText:'#main > div > div.row.article-detail-page > div.small-12.medium-10.medium-push-2.columns > div.articles.article-page > div:nth-child(1) > div.main-find-medicare-wrap > p',
        //MAarticleText:'#main > div > div.row.article-detail-page > div.small-12.medium-10.medium-push-2.columns > div.articles.article-page > div:nth-child(1) > p:nth-child(19)',
        //MDarticleText:'#main > div > div.row.article-detail-page > div.small-12.medium-10.medium-push-2.columns > div.articles.article-page > div:nth-child(1) > div:nth-child(17)',
       // MSarticleText:'#main > div > div.row.article-detail-page > div.small-12.medium-10.medium-push-2.columns > div.articles.article-page > div:nth-child(1) > p:nth-child(13)',

        articleDetailBottomBanner:'.articles.article-page > div:nth-child(2) > div.layer.article-banner.zipcode-cta',
        articleDetailBottomFindPlanBtn:'div:nth-child(2) > div.layer.article-banner.zipcode-cta > div > form > input.button-orange',
       
        relatedArticlesLinks: '.widget.widget-related-articles',
        relatedArticles: '.rp4wp-posts-list',
        seeAllArticles: '.see-all-medical-article>a',
        articleCompareMedicareSection:'.compare-medicare',
        articleCompareNowbtn:'.compare-medicare > p>a',
        articleLicenseTextSection:'.content-wrapper.content-article',
       
        articleBottomStickyBanner:'form > div.find-medicare-plans.find-medicare-plans-window.sticky-at-bottom',
        articleStickyBannerLabel:'form > div.find-medicare-plans.find-medicare-plans-window.sticky-at-bottom>span',
        stickyBannerFindPlansBtn:'form > div.find-medicare-plans.find-medicare-plans-window.sticky-at-bottom>span>.button-green.find.btn-find-plan',

    },

    //Function to valiadte All articles Page Element
    validateAllArticlesPageSections() {

        I.waitForVisible(this.fields.allArticlesBreadcrumb, 1);
        I.waitForVisible(this.fields.allArticlePageHeader, 1);
        I.waitForVisible(this.fields.allArticleMainSection, 1);
        I.waitForVisible(this.fields.firstArticleTitle, 1);
        I.waitForVisible(this.fields.firstArticleLink, 1);
        I.waitForVisible(this.fields.firstArticleLastUpdated, 1);
        I.waitForVisible(this.fields.firstArticleReadMore, 1);
        I.waitForVisible(this.fields.sideBarComponents, 1);
        I.waitForVisible(this.fields.welcomeSection, 1);
        I.waitForVisible(this.fields.maSection, 1);
        I.waitForVisible(this.fields.msSection, 1);
        I.waitForVisible(this.fields.mdSection, 1);
        I.waitForVisible(this.fields.omSection, 1);
        I.waitForVisible(this.fields.meSection, 1);
        I.waitForVisible(this.fields.compareMedicareSection, 1);
        I.waitForVisible(this.fields.comparePlansNow_linkButton, 1);
        I.waitForVisible(this.fields.licenseTextSection, 1);
        I.waitForVisible(this.fields.aboutMedicareSection, 1);
        I.waitForVisible(this.fields.coverageSection, 1);
        I.waitForVisible(this.fields.resourcesSection, 1);
        I.waitForVisible(this.fields.administrationSection, 1);
        I.waitForVisible(this.fields.healthSection, 1);
        I.waitForVisible(this.fields.caregiverResourcesSection, 1);
        I.waitForVisible(this.fields.medicareByStateSection, 1);
        I.waitForVisible(this.fields.medicareSuppByStateSection, 1);
        I.waitForVisible(this.fields.pagination, 1);
        I.waitForVisible(this.fields.footerSection, 1);
    },

    //Function to valiadte Article Detail Page Element - ALGO-580-@C24752
    validateArticleDetailPageElement() {
        I.wait(2);
        I.waitForVisible(this.fields.articleDetailBreadcrumb, 1);
        I.waitForVisible(this.fields.articleDetailHeader, 1);
        I.waitForVisible(this.fields.socialShareSection, 20);
        I.waitForVisible(this.fields.articleDetailLastUpdate, 1);        
        I.waitForVisible(this.fields.articleDetailTopBanner, 1);
        I.waitForVisible(this.fields.articleDetailBottomBanner, 1);        
        I.waitForVisible(this.fields.relatedArticlesLinks, 1);
        I.waitForVisible(this.fields.relatedArticles, 1);       
        I.waitForVisible(this.fields.seeAllArticles, 1);
        I.waitForVisible(this.fields.articleCompareMedicareSection, 1);
        I.waitForVisible(this.fields.articleCompareNowbtn, 1);
        I.waitForVisible(this.fields.articleLicenseTextSection, 1);  
    },

    validatestickybanner() {
        I.wait(2);
        I.scrollTo(this.fields.articleText);
        I.wait(1);
        I.waitForVisible(this.fields.articleBottomStickyBanner,5);
        I.waitForVisible(this.fields.articleStickyBannerLabel, 10);
        I.waitForVisible(this.fields.stickyBannerFindPlansBtn, 10);
    },


}