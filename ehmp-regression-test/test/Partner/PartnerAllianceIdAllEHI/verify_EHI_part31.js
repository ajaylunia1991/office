Feature('EhealthInsurance allids logo- Created by Aneesha');

var config = require('config');
var domain = config.get('EHM');
var startURL = require(process.cwd() +'/data/EHIAllIdLogo.js')();
//for mdc allid logos
Data(startURL.startURL31).Scenario('test ehealthInsurance group logo1@logo1', {retries: 1}, async(I, current) => {

    I.amOnPage('https://www.ehealthinsurance.com/?allid=' + current.allid);

    I.seeInCurrentUrl(current.allid);
    I.waitForVisible('#header-cobrand-link > img',5);
    I.saveScreenshot(current.allid + '.png');

});