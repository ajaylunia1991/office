Feature('mdc-homepage-tests');

/**
*Created by Reena
*/

var config = require('config');
var domain = config.get('MDC');

//ALGO-1508- @C23218 : This Scenario verifies appearance of Social icon on MDC > Article pages

Scenario('ENV: ' +process.env.NODE_ENV + '- Reena -ALGO-1508- @C23218: Verify presence of Social Media icons on Article Details page', (I,articleDetailSocialIconpage) => {    
    I.amOnPage(domain　+ '/about-medicare/medicare-coverage-basics/');
    I.wait(3);
    // Function to verify the presence of social media icon on articles page
    articleDetailSocialIconpage.validateArticleDetailSocialIcon();
})