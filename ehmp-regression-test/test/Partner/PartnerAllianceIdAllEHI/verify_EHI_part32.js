Feature('EhealthInsurance allids logo- Created by Aneesha');

var config = require('config');
var domain = config.get('EHM');
var startURL = require(process.cwd() +'/data/EHIAllIdLogo.js')();
//for mdc allid logos
Data(startURL.startURL32).Scenario('Aneesha - test ehealthInsurance group logo32@logo32', {retries: 1}, async(I, current) => {

    I.amOnPage('https://www.ehealthinsurance.com/?allid=' + current.allid);

    I.seeInCurrentUrl(current.allid);
    I.waitForVisible('//*[@id="header"]/div[1]/div/nav/div/a/img',5);
    I.saveScreenshot(current.allid + '.png');

});