Feature('MDC Carriers');
/**
 * Created By Ajay Lunia 
 */
var assert = require('assert');
var config = require('config');
var domain = config.get('MDC');


//ALGO-718 - testcase @C23263 - Ensure Update button remains disabled
Scenario('ENV: ' + process.env.NODE_ENV + ' Ajay - @C23263 Ensure Update button remains disabled', async (I,carriersLandingPage) => {
    await I.amOnPage(domain + '/carriers');
    await I.waitForVisible(carriersLandingPage.fields.zipCodeField,5);
    await I.fillField(carriersLandingPage.fields.zipCodeField,'20130');
    await I.wait(5);
    let isDisabled = await I.grabAttributeFrom(carriersLandingPage.fields.updateResultsbtn,'disabled');
    assert.equal('true',isDisabled);
 });    
 
 //ALGO-718 - testcase @C23263 - Ensure Update button remains enabled
 Scenario('ENV: ' + process.env.NODE_ENV + ' Ajay - @C23263 - Ensure Update button remains enabled', async (I,carriersLandingPage) => {
     await I.amOnPage(domain + '/carriers');
     await I.waitForVisible(carriersLandingPage.fields.zipCodeField,5);
     await I.fillField(carriersLandingPage.fields.zipCodeField,'20130');
     await I.wait(5);
     await I.selectOption(carriersLandingPage.fields.selectCountyField,'LOUDOUN');
     let isDisabled = await I.grabAttributeFrom(carriersLandingPage.fields.updateResultsbtn,'disabled');
     assert.equal(null,isDisabled);
  });    
  