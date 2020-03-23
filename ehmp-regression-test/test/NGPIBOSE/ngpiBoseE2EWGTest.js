Feature('NGPI - Walgreens Bose Sanity testing---created by Aneesha');

var config = require('config');
var domain = config.get('NGPIBOURL');
var ngpiBose = require(process.cwd() + '/data/ngpiBose.js')();

if( process.env.NODE_ENV == 'cm') {
  dataEnv = Data(ngpiBose.ngpiBoseCMWG); // cm data
}
if( process.env.NODE_ENV == 'qa') {
  dataEnv = Data(ngpiBose.ngpiBoseQAWG); // qa data
}


dataEnv.Scenario('NGPI Walgreens flow', { retries: 0 }, async (I,current, ngpiBosePage) => {
  console.log('Testing the Bose Page for the NGPI flow');
  var num = Math.floor(Math.random()*9000+1000);
 // var aniPhoneNm = '510213'+num;
 var aniPhoneNm =4646768789;
  console.log('Loading the BosePage');
  console.log(domain+'?dnis='+current.dnis+'&ani='+aniPhoneNm+'&scriptID=1&callType=inbound&zip=&CallID=24342-342476');
  I.amOnPage(domain+'?dnis='+current.dnis+'&ani='+aniPhoneNm+'&scriptID=1&callType=inbound&zip=&CallID=24342-342476');

  //Verified words
 
  ngpiBosePage.loginToBose('apanicker','Akoos102!');
  I.seeInCurrentUrl(current.dnis);
  console.log('Logged in to Bose Page');
  I.see(current.partnerMSG);
  console.log('Start the application BOSE Page');
  ngpiBosePage.fillNameToApplication(current.fName,current.lName); 
  console.log('Fill the data on BOSE Page 1');
  ngpiBosePage.selectPage1Details(current.zipCode);
  console.log('Fill the data on BOSE Page 2');
  ngpiBosePage.selectPage2Details();
  console.log('Fill the data on BOSE Page 3');
  ngpiBosePage.selectPage3DetailsWG();
  console.log('Fill the data on BOSE Page 4 and validate the Personal code');
  ngpiBosePage.selectPage4Details(current.personalCode,current.birthYear,current.drName,current.drugName);

  I.saveScreenshot(current.allId + '.png');


});