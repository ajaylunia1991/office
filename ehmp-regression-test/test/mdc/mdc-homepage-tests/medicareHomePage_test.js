Feature('mdc');

/**
 *old address: https://git.ehealthinsurance.com/projects/MU/repos/automation-tests/browse/ehi-ehim-tests/apps/mdc/mdc/mdc-homepage-tests/test/uitests/medicareHomePageTest.js
 */

var config = require("config");
var domain = config.get("MDC");

Scenario(
  "ENV: " +
    process.env.NODE_ENV +
    " Willis - Medicare Home Page Doctors Link Test @homepage",
  (I, medicareHomePage) => {
    //I.amOnPage(domain　 + '/recommendation-homepage-aep-1');
    I.amOnPage(domain);
    // console.log('Medicare Home Page Opened');
    // console.log('Find Doctors Link Clicked');

    //disable doctor page in ALGO-119
    //    medicareHomePage.goToFindDoctorsPage();

    // console.log('Whoo..Whoo...Medicare Homepage Find Doctors Link Test Passed');
  }
);

Scenario(
  "Medicare Home Page RxSEO Link Test @homepage",
  (I, medicareHomePage) => {
    //I.amOnPage(domain　 + '/recommendation-homepage-aep-1');
    I.amOnPage(domain);
    // console.log('Medicare Home Page Opened');
    // console.log('Find Doctors Link Clicked');

    //    medicareHomePage.goToRxSeoPage();

    // console.log('Whoo..Whoo...Medicare Homepage Find Doctors Link Test Passed');
  }
);

//ALGO-1670-Test case : @C22850 - MDC: Verify Medicare.com home page footer should not be broken
Scenario('ENV:' + process.env.NODE_ENV + 'Ajay - @C22850 - MDC : Verify on Prescription drug page , drug have price value',(I) => {
   I.amOnPage(domain);
   I.see("There's a better way to shop for Medicare plans");
   I.amOnPage(domain + '/prescription-drugs/browse-drugs-by-name/simvastatin/simvastatin-5-mg-tablet/16729015615/');
   I.see('$') 
});

//ALGO-1609-Test case : @C22848 - MDC: On "Request a call" section , verify user is able to change county field value for zip-code having multiple county
Scenario('ENV:' + process.env.NODE_ENV + 'Ajay - @C22848 - MDC: On Request a call section , verify user is able to change county field value', (I, mdcHomePage) => {
    I.amOnPage(domain);
    I.scrollTo(mdcHomePage.requestCall);
    I.click('Request a call');
    I.wait(5);
    mdcHomePage.changeCountyValue('Test','User','319-753-3639','20130');
});    
