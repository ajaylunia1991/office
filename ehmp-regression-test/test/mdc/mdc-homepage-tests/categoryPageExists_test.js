Feature('mdc');
/**
 * Created by Ajay Lunia 
 */
var config = require('config');
var domain = config.get('MDC');

/*

// ALGO-51-Test case : @C25546 - MDC: Retire un-used MDC pages
Scenario('ENV:' + process.env.NODE_ENV + ' Ajay - @C25546 - MDC: Retire un-used MDC pages', (I) => {
    I.amOnPage(domain + '/find-medicare-plans/');
    I.see('Page Not Found');
    I.amOnPage(domain + '/find-medicare-agent/');
    I.see('Page Not Found');
    I.amOnPage(domain + '/find-medicare-advantage/');
    I.see('Page Not Found');
    I.amOnPage(domain + '/find-medicare-supplement/');
    I.see('Page Not Found');
    I.amOnPage(domain + '/find-medicare-partd/');
    I.see('Page Not Found');
    I.amOnPage(domain + '/find-medicare-thankyou/');
    I.see('Page Not Found');

})

// ALGO-331-Test case : @C24775 - MDC: Retire un-used MDC pages
Scenario('ENV:' + process.env.NODE_ENV + ' Ajay - @C24775 - MDC:Verify partner page of MDC - kaiser-permanente should return 404',(I) => {
    I.amOnPage(domain + '/kaiser-permanente/');
    I.see('Page Not Found');
})

*/
//ALGO-1629-Test case : @C24931 - Verify that Full hours of operation is displaying on category page
Scenario('ENV:' + process.env.NODE_ENV + ' Ajay - @C24931 - Verify that Full hours of operation is displaying on category page',(I,medicarePartDArticlesPage) => { 
    I.amOnPage(domain + '/medicare-part-d/');
    I.see('Medicare Part D Articles',medicarePartDArticlesPage.fields.medicarePartDArticlesText); 
    medicarePartDArticlesPage.validateFullHours();  
});

//ALGO-1629-Test case : @C24931 - Verify that Full hours of operation is displaying on category Article page
Scenario('ENV:' + process.env.NODE_ENV + ' Ajay - @C24931 - Verify that Full hours of operation is displaying on article page',(I,medicarePartDArticlesPage) => { 
    I.amOnPage(domain + '/medicare-part-d/how-do-i-chose-a-health-insurance-provider-for-my-medicare-part-d-plan/');
    I.see('How do I chose a health insurance provider for my Medicare Part D Plan',medicarePartDArticlesPage.fields.choseAHealthInsuranceProviderText);
    medicarePartDArticlesPage.validateFullHours();
});   