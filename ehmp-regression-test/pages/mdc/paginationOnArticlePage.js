'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {

        //All articles Page
        pagination: '.new-pagination',
        firstPage: '#main > div > div.row.no-padding.article-category-wrapper > div.small-12.medium-8.columns > div.row.show-for-medium-up > div > ul > li:nth-child(2)',
        secondPage: '#main > div > div.row.no-padding.article-category-wrapper > div.small-12.medium-8.columns > div.row.show-for-medium-up > div > ul > li:nth-child(3)',
        nextPageButton: '#main > div > div.row.no-padding.article-category-wrapper > div.small-12.medium-8.columns > div.row.show-for-medium-up > div > ul > li:nth-child(7) > a',
        prevPageButton: '#main > div > div.row.no-padding.article-category-wrapper > div.small-12.medium-8.columns > div.row.show-for-medium-up > div > ul > li:nth-child(1) > a',
    },

    //articles Details- Function to verify the presence of pagination bar

    validateArticlesPagination() {
       I.waitForVisible(this.fields.pagination, 5);
    },

}