Feature('mdc');
/**
 * Ajay Lunia 
 */
var config = require('config');
var domain = config.get('MDC');
var assert = require('assert');

// ALGO-1658-Test case : @C23200 -  Verify that Quantity field should not allow alphabetical and special characters'
Scenario('ENV:' + process.env.NODE_ENV + ' Ajay - @C23200 -  Verify that Quantity field should not allow alphabetical and special characters', async (I,mdcHomePage) => {
    
    I.amOnPage(domain + '/prescription-drugs/browse-drugs-by-name/accu-chek-spirit-cartridge-sys/accu-chek-spirit-cartridge-system/15630088275/');
    
    I.fillField(mdcHomePage.fields.quantityField,'$$%%%');
    
    let Data = await I.grabValueFrom(mdcHomePage.fields.quantityField); 
    console.log(`DATA VALUE ${Data} `);
    assert.equal(0,Data.length); // Assertion for Special Characters
    
    I.fillField(mdcHomePage.fields.quantityField,'abcde');

    Data = await I.grabValueFrom(mdcHomePage.fields.quantityField);
    console.log(`DATA VALUE ${Data} `);
    assert.equal(0,Data.length); // Assertion for Alphabetical Characters

    I.fillField(mdcHomePage.fields.quantityField,'23');
    Data = await I.grabValueFrom(mdcHomePage.fields.quantityField);
    console.log(`DATA VALUE ${Data}`);
    console.log(Data.length); 
    assert.equal(2,Data.length);
    
});




    