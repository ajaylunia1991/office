Feature('mdc');
/**
 * created by alunia
 */
var config = require("config");
var domain = config.get("MDC");

// ALGO-237-Test case : @C24776 - MDC: Verify Footer Update on Medicare.com Home Page
Scenario('ENV:' + process.env.NODE_ENV + ' Ajay - @C24776 - MDC: Verify Footer Update on Medicare.com Home Page',(I) => {
    I.amOnPage(domain);
    I.scrollPageToBottom();
    I.see("We sell insurance offered from a number of different Medicare Supplement insurance companies.");
});

//ALGO-1142-Test case : @C24791 - MDC: Verify Medicare.com home page footer should not be broken
Scenario('ENV:' + process.env.NODE_ENV + ' Ajay - @24791 - MDC: Verify Medicare.com home page footer should not be broken',(I) => {
    I.amOnPage(domain);
    I.scrollPageToBottom();
    I.see("Privacy and Security");
    I.see("A Word About Costs");
    I.see("Learn More");
    I.see("About Medicare.com");
  });
