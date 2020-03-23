Feature('EHM- HOME PAGE');

var config = require('config');
var domain = config.get('EHM');

//ALGO-1331, Test case-C24711
Scenario('ENV:'+ process.env.NODE_ENV + '-GCK- verifiy zipcode field dont accept sepcial chars', async(I,ehmPage) => {
I.amOnPage(domain + '/?mboxDisable=true');
I.see('Medicare plan');
I.click(ehmPage.fields.zipCode);
I.fillField(ehmPage.fields.zipCode,'@#@&%');
I.wait(2);
I.click(ehmPage.fields.topComparePlansBtn);
I.wait(2);
I.seeInCurrentUrl('ehealthmedicareplans.com');
I.wait(2);
I.fillField(ehmPage.fields.zipCodeCensus, '@#@&%');
I.click(ehmPage.fields.btnCensusNext);
I.see('Please enter a valid zip code');

 });
