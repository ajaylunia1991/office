Feature('mdc');

/**
*old address: https://git.ehealthinsurance.com/projects/MU/repos/automation-tests/browse/ehi-ehim-tests/apps/mdc/mdc/mdc-homepage-tests/test/uitests/articlesPageTest.js
*/

var config = require('config');
var domain = config.get('MDC');
// Articles Page, Saving Text Statement element - ALGO-508 TestCase-@C24668
var articlesSaveText1="Find and compare Medicare plans and save up to ";
var articlesSaveText2="$531/year*";

Scenario('ENV: ' +process.env.NODE_ENV + '- Willis - Articles Page Elements Test @articles', (I, mdcHomePage) => {
    I.amOnPage(domain　+ '/articles');
    I.wait(1);

    mdcHomePage.validateArticlesSection();
    //Articles Page Browse By Category Test
    mdcHomePage.validateBrowseByCategory();
    //Articles Page Compare Plans Button Test
    mdcHomePage.validateComparePlansButton();
    
})

// Verify Savings statements on all article page - ALGO-508 TestCase-@C24668
Scenario('ENV: ' +process.env.NODE_ENV + '@C24668- Verify Savings statements on all article page @homepage', (I, medicareHomePage) => { 
	I.amOnPage(domain　+ '/articles');
    I.wait(1); 
    console.log('Medicare Article Savings statement Test Started');
    medicareHomePage.validateArticleSavingText(articlesSaveText1, articlesSaveText2);
})

