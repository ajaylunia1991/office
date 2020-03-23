Feature('ehm - HomePage');

var config = require('config');
var domain = config.get('EHM');


// ALGO-1167-Test case : @C24788 - Verify Article Category pages should be working on QA, CM and Prod
Scenario('ENV:' + process.env.NODE_ENV + ' Ajay - @C24788 - Article pages should open properly',(I) => {
    I.amOnPage(domain + '/medicare-supplement-articles/');
    I.see('Learn About Medicare')
    I.see('Supplement Insurance');
    I.dontSee('Page Not Found');
});