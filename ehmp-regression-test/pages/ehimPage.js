'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {

        phoneNo: '.call-box',

        requestLeadForm: '.btn.btn-secondary.appt-link.hidden-xs',

        zipCode: '#zipCodeBanner',

        findPlansBtn: '#findPlansBtn',

        firstNameField: '.request-call-form input#firstName',

        lastNameField: '.request-call-form input#lastName',

        phNumberField: '.request-call-form input#phoneNumber',

        zipcodeLead: '.request-call-form input#zipCode',

        callMeBtn: '[data-wa-link="Click:EHIM:LeadForm:Call Me"].initial',

        tcpa: 'div.leadform-disclaimer',

        successLeadTxt: '.request-call div.thank-you > h1',

        successleadFormBtn: '#comparePlansBtn',

        leadClose: '#dialogClose',

        compareMSPlanLink: '//*[@id="ehim-wrap"]/div[3]/div[5]/div/div/div[2]/div[2]',

        comparePlansBtn: '//*[@id="ehim-wrap"]/div[3]/div[5]/div/div/div[3]/div[2]/div/div[2]/a[1]',


        cmComparePlansBtn: '#ehim-wrap > div.main > div.plan-info > div > div > div.row.plan-boxes > div.col-md-4.plan-box.ms.active > div > div.btn-group > a.btn.btn-primary',

        cmCompareMSPlanLink: '#ehim-wrap > div.main > div.plan-info > div > div > div.row.plan-links.hidden-sm.hidden-xs > div:nth-child(2)',

        learnMoreBtn: '[data-wa-link="Click:EHIM:Learnmore"].btn',

        searchArticlesField: '/html[1]/body[1]/div[1]/main[1]/article[1]/section[3]/div[1]/div[1]/form[1]/div[1]/input[1]',
               
        searchBtn: 'body.page-template-default.page.page-id-9.articles.throttle-GREEN main.main section.container.with-sidebar:nth-child(3) div.row div.col-lg-9.col-sm-7.content form.search-form div.search-articles.clearfix a.search-submit > input.search-image',

        searchList: '//ul[@id="ui-id-1"]//li[2]',

        articlesList: '.article-excerpts',

        articlesDisplay: '.article-excerpts .item',

        articlesMenu: '#menu-articles',

        articlesByState: '//*[@id="menu-item-191"]/a',

        stateArticlesHeading: 'h1.by-state',

        alabamaArticlePage: '//*[contains(text(), \'Alabama Medicare Plans\')]',

        //alabamaLink: '#ehim-wrap > div.main > div.container.with-sidebar > div > div.col-lg-9.col-sm-7.content > div.state-list.row > div.col1.col-md-6 > a:nth-child(1)',

        alabamaLink: '//a[contains(text(),\'Alabama Medicare Plans\')]',
        //stateArticleHeading: '#ehim-wrap > div.main > div.container > div:nth-child(2) > div.col-lg-9.col-md-8.col-sm-7.content > div.content-inner > div.the-content > h1',

        stateArticleHeading: '.title',
        stateFindPlansWidget: '.state-find-plans-widget',

        stateNeedHelpWidget: '.need-help-widget',

        articleVote: '.vote-container',

        agentCallWidget: '.agent-call-widget',

        widgetLeadForm: '.widget_leadform'




    }
}