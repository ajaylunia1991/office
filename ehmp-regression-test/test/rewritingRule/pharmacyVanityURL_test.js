/**
 * Created by Reena to include pharmacy Vanity URL List
 */
Feature('Pharmacy vanity URL');

var config = require('config');
var domain = config.get('EHM');
var domain1 = config.get('EHMP');
var pharmacyVanityURL = require('../../data/pharmacyVanityURL.js')();


//ALGO-1513 testcase - C23216, ALGO-1512 testcase - C23215, ALGO-1511 testcase - C23214, ALGO-1510 testcase - C23213, ALGO-1509 testcase - C23212
Data(pharmacyVanityURL.pharmacyVanityURLList1).Scenario('Reena- Verify redirect rule of Pharmacy Mini site url ', {retries: 0}, async(I, current) => {
   
    I.amOnPage(domain　+ current.url);
    let url = await I.grabCurrentUrl();
    console.log(`Current URL is [${url}]`);
    if(url.includes('aep')){
        I.waitForText('Annual Election Period');
    }else{
        I.waitForText(current.text);
    }
    
    I.seeInCurrentUrl(domain1 + current.redirectURL);

});


