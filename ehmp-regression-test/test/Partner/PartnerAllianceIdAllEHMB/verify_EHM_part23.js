/* Feature('EhealthMedicare allids logo- Created by Aneesha');

var config = require('config');
var domain = config.get('EHM');
var startURL = require(process.cwd() +'/data/EHMAllIdLogo.js')();
//for mdc allid logos
Data(startURL.startURL23).Scenario('test ehealthInsurance group startURL23@startURL23', {retries: 1}, async(I, current) => {

    I.amOnPage('https://www.ehealthmedicare.com/?allid=' + current.allid);

    I.seeInCurrentUrl(current.allid);
    I.waitForVisible('.partner-logo > a >img',5);
    I.saveScreenshot(current.allid + '.png');

}); */