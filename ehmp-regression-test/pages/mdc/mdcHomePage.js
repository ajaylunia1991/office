"use strict";

let I;

module.exports = {
  _init() {
    I = actor();
  },
  
  // insert your locators and methods here

    fields: {

        //articlesDetailsPage

        articleDetailsSection: '.articles.article-page',
        header: 'h1',
        agentPicture: '.person > a > img',
        agentNameLink: '.person>span>a',
        agentLicenseInfo: '.person>span:nth-child(4)',
        printButton: '.mc-print',
        articleUpdateDate: '.last-update-text',

        relatedArticlesLinks: '.widget.widget-related-articles',
//        relatedArticles: '.wpp-list',
        relatedArticles: '.rp4wp-posts-list',


        planLinks: '.button-orange',
        recommendPlan: 'a:nth-child(1)',
        scheduleCall: 'a:nth-child(2)',
        comparePlans: 'a:nth-child(3)',

        //articlesPage

//        mainArticlesSection: '.small-12.medium-9.medium-push-3.columns',

        mainArticlesSection: '.small-12.medium-8.columns',


        searchForm: '#searchform',
        firstArticle: '.small-12.columns',
        firstArticleLink: '#main > div > div > div > div:nth-child(3) > div > div> a:nth-child(1)',
        firstArticleReadMore: '#main > div > div > div > div:nth-child(3) > div > div> a:nth-child(2)',
        firstArticleAgentPicture: '#main > div > div > div > div:nth-child(3) > div > div .bylines > a',
        firstArticleAgentLink: '#main > div > div > div > div:nth-child(3) > div > div .bylines > span > a',
        pagination: '.new-pagination',


//        sideBarComponents: '.small-12.medium-3.medium-pull-9.columns.hide-for-small',
        sideBarComponents: '.small-12.medium-4.columns',

        allArticles: '.menu-all-articles-container',
        comparePlans: '.compare-medicare > p:nth-child(3) > a',
        sideAgents: '.extras',
        getHelpPhoneNumber: '.get-help',


//        browseByCategory: '#menu-categories-menu',
        browseByCategory: '.browse-article-category-wrap',

        administration: '#menu-category-page-bottom',


        medicareSupplement: '#menu-category-page-bottom',

//       Sign In Button Locator         
        signInBtn : 'li.nav-item.sign-in > a',

    },

  fields: {
    //articlesDetailsPage

    articleDetailsSection: ".articles.article-page",
    header: "h1",
    agentPicture: ".person > a > img",
    agentNameLink: ".person>span>a",
    agentLicenseInfo: ".person>span:nth-child(4)",
    printButton: ".mc-print",
    articleUpdateDate: ".last-update-text",

    relatedArticlesLinks: ".widget.widget-related-articles",
    //        relatedArticles: '.wpp-list',
    relatedArticles: ".rp4wp-posts-list",

    planLinks: ".button-orange",
    recommendPlan: "a:nth-child(1)",
    scheduleCall: "a:nth-child(2)",
    comparePlans: "a:nth-child(3)",

    //articlesPage
    zipcodeOnArticlePage: '//*[@id="zip_code"]',
    //        mainArticlesSection: '.small-12.medium-9.medium-push-3.columns',

    mainArticlesSection: ".small-12.medium-8.columns",

    searchForm: "#searchform",
    firstArticle: ".small-12.columns",
    firstArticleLink:
      "#main > div > div > div > div:nth-child(3) > div > div> a:nth-child(1)",
    firstArticleReadMore:
      "#main > div > div > div > div:nth-child(3) > div > div> a:nth-child(2)",
    firstArticleAgentPicture:
      "#main > div > div > div > div:nth-child(3) > div > div .bylines > a",
    firstArticleAgentLink:
      "#main > div > div > div > div:nth-child(3) > div > div .bylines > span > a",
    pagination: ".new-pagination",

    //        sideBarComponents: '.small-12.medium-3.medium-pull-9.columns.hide-for-small',
    sideBarComponents: ".small-12.medium-4.columns",

    allArticles: ".menu-all-articles-container",
    comparePlans: ".compare-medicare > p:nth-child(3) > a",
    sideAgents: ".extras",
    getHelpPhoneNumber: ".get-help",

    //        browseByCategory: '#menu-categories-menu',
    browseByCategory: ".browse-article-category-wrap",

    administration: "#menu-category-page-bottom",

    medicareSupplement: "#menu-category-page-bottom",

    //      Request Call Page
    requestCall: ".request-call-link",
    firstName: "#first_name",
    lastName: "#last_name",
    phoneNumber: "#phone_number",
    zipCode: "#zip_code_aep_lead",
    county: "#county_aep_lead",
    LoudounCounty: ".county_aep_multiple[value='LOUDOUN']",
    
    // about Medicare Page 
    callBox : ".ehi-call-box",

    //prescription Drug Page
    quantityField : "#quantity_rx",
  },


  //fillRequestCallLeadForm TestCaseID C22848 or ALGO-1609
  changeCountyValue(fn, ln, ph, zip) {
    I.fillField(this.fields.firstName, fn);
    I.fillField(this.fields.lastName, ln);
    I.fillField(this.fields.phoneNumber, ph);
    I.fillField(this.fields.zipCode, zip);
    I.scrollTo(this.fields.zipCode);
    I.wait(2);
    I.click(this.fields.county);
    I.waitForVisible(this.fields.LoudounCounty);
    I.click(this.fields.LoudounCounty);
  },

  //articlesDetailsPage
  validateArticleDetailsSection() {
    I.waitForVisible(this.fields.articleDetailsSection, 30);
    I.waitForVisible(this.fields.header, 30);
    //        I.waitForVisible(this.fields.agentPicture, 30);
    //        I.waitForVisible(this.fields.agentNameLink, 30);
    //        I.waitForVisible(this.fields.agentLicenseInfo, 30);
    I.waitForVisible(this.fields.printButton, 30);
    I.waitForVisible(this.fields.articleUpdateDate, 30);
  },

  validateRelatedArticlesSection() {
    I.wait(2);
    I.waitForVisible(this.fields.relatedArticlesLinks, 30);
    I.waitForVisible(this.fields.relatedArticles, 30);
  },

  validatePlanButtons() {
    I.wait(2);
    I.waitForVisible(this.fields.planLinks, 30);
    //        I.waitForVisible(this.fields.recommendPlan, 30);
    //        I.waitForVisible(this.fields.scheduleCall, 30);
    //        I.waitForVisible(this.fields.comparePlans, 30);
  },

  //articlesPage

  validateArticlesSection() {
    I.waitForVisible(this.fields.mainArticlesSection, 30);
    I.waitForVisible(this.fields.sideBarComponents, 30);
    //        I.waitForVisible(this.fields.searchForm, 30);
    I.waitForVisible(this.fields.firstArticle, 30);
    //        I.waitForVisible(this.fields.firstArticleLink, 30);
    //        I.waitForVisible(this.fields.firstArticleReadMore, 30);
    //        I.waitForVisible(this.fields.firstArticleAgentPicture, 30);
    //        I.waitForVisible(this.fields.firstArticleAgentLink, 30);
    //        I.waitForVisible(this.fields.pagination, 30);
  },

  validateBrowseByCategory() {
    I.waitForVisible(this.fields.browseByCategory, 30);
    //        I.waitForVisible(this.fields.aboutMedicare, 30);
    //        I.waitForVisible(this.fields.ma, 30);
    //        I.waitForVisible(this.fields.md, 30);
    //        I.waitForVisible(this.fields.medicareEnrollment, 30);
    I.waitForVisible(this.fields.administration, 30);
    I.waitForVisible(this.fields.medicareSupplement, 30);
    //        I.waitForVisible(this.fields.originalMedicare, 30);
    //        I.waitForVisible(this.fields.carriers, 30);
  },

  validateComparePlansButton() {
    //how to verify text of the href in an element
    // I.see('allid=Med41422',this.fields.comparePlans);
    // I.see('medicarecom=2',this.fields.comparePlans);
    // I.see('roundrobin=1',this.fields.comparePlans);
  },

};
