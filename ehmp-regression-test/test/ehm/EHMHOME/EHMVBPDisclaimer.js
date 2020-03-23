Feature('EHM- VBP Advocate-Add text to EHM disclaimer');

var config = require('config');
var domain = config.get('EHM');
var AllidURL = require('../../data/EHMAllIdVBP.js')();

//ALGO-1243, Test case-C23207 
Data(AllidURL.startURL01).Scenario('Kripal - Test case-C23207- Add text to EHM disclaimer', {retries: 0}, async(I, current) => {
    I.amOnPage(domain + '?allid=' + current.allid);
    let url = await I.grabCurrentUrl();
    console.log(`Current URL is [${url}]`);
    I.see('eHealth and Advocate Aurora Health are independent entities and not affiliated in any way');
});

