Feature('mdc');

/***Created by Reena***/

var config = require('config');
var domain = config.get('MDC');

// ALGO-571- Testcase @C24678
Scenario('ENV: ' +process.env.NODE_ENV + '-Reena -ALGO-571- Testcase @C24678- Verify the presence of Pagination bar on All Articles Page', (I, paginationOnArticlePage) => {
    I.amOnPage(domain　+ '/articles');
    I.wait(2);
    paginationOnArticlePage.validateArticlesPagination();
});

// ALGO-571- Testcase @C31822
Scenario('ENV: ' +process.env.NODE_ENV + '-Reena -ALGO-571- Testcase @C31822- Verify the functionality of Pagination bar on All Articles Page', (I, paginationOnArticlePage) => {
    I.amOnPage(domain　+ '/articles');
    I.wait(2);
    I.waitForVisible(paginationOnArticlePage.fields.firstPage, 2); // verify the presence of first page
    I.click(paginationOnArticlePage.fields.firstPage);
    I.grabCurrentUrl();

    I.waitForVisible(paginationOnArticlePage.fields.secondPage, 2); // verify the redirection of second page
    I.click(paginationOnArticlePage.fields.secondPage);
    I.grabCurrentUrl();

    I.waitForVisible(paginationOnArticlePage.fields.prevPageButton, 2); // Verify the redirection of previous page
    I.click(paginationOnArticlePage.fields.prevPageButton);
    I.grabCurrentUrl();

    I.waitForVisible(paginationOnArticlePage.fields.nextPageButton, 2);// Verify the redirection of Next page
    I.click(paginationOnArticlePage.fields.nextPageButton);
    I.grabCurrentUrl();

});
