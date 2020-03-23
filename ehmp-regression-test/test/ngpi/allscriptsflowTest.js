Feature('NGPI - Allscripts sanity testing');

var config = require('config');
var domain = config.get('EHM');
var ngpiTest = require(process.cwd() + '/data/ngpiTest.js')();
if( process.env.NODE_ENV == 'cm') {
  dataEnv = Data(ngpiTest.ngpidataCMAS); // cm data
}
if( process.env.NODE_ENV == 'qa') {
  dataEnv = Data(ngpiTest.ngpidataQAAS); // qa data
}


dataEnv.Scenario('NGPI Allscripts flow', { retries: 1 }, async (I, current, ngpiPage) => {

  I.amOnPage(domain + '/' + current.vanityURL);
  I.seeInCurrentUrl(current.vanityURL);
  I.seeInSource(current.logo,5);

 //Verify the wordings on the page
 I.see("See Medicare plans that cover your doctors & prescription drugs");
 console.log("I see the partner text ");
 ngpiPage.validateNGPIPageText(current.data);
 console.log('Select the browse plans if no personal code');
 ngpiPage.validateBrowseplans(current.allId);
 console.log("Fill personal code, birthyear, zipcode and goto quote page");
 ngpiPage.fillngpileadform(current.personalCode, current.birthYear, current.zipCode, current.allId);
 console.log("Validate the Doctors");
 ngpiPage.validateDoctors(current.drName);
 console.log("Validate the Drugs"); 
 ngpiPage.validateEditRxDrugs(current.drugName);
 console.log("Validate the Carriers on the Page");
 ngpiPage.validateCarriersforSummitOnly();
 I.saveScreenshot(current.allId + '.png');

});