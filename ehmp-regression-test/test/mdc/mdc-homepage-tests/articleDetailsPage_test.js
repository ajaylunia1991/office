Feature('mdc');

/**
*old address: https://git.ehealthinsurance.com/projects/MU/repos/automation-tests/browse/ehi-ehim-tests/apps/mdc/mdc/mdc-homepage-tests/test/uitests/articleDetailsPageTest.js
*/

var config = require('config');
var domain = config.get('MDC');

Scenario('ENV: ' +process.env.NODE_ENV + ' - Willis - Articles Page Details Elements Test @articles', (I, mdcHomePage) => {
        I.amOnPage(domain　+ '/blue-cross-blue-shield/what-medicare-plans-does-anthem-offer/');
    I.wait(2);
    mdcHomePage.validateArticleDetailsSection();
    //Articles Page Related Articles Section Test
    mdcHomePage.validateRelatedArticlesSection();
    //Articles Page Validate Plans Button Test
    mdcHomePage.validatePlanButtons();
    
})