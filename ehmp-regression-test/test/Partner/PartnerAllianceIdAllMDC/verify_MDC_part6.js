Feature('Medicare allids logo- Created by Aneesha');

var config = require('config');
var domain = config.get('EHM');
var startURL = require(process.cwd() +'/data/MDCAllIdLogo.js')();
//for mdc allid logos
Data(startURL.startURL06).Scenario('Aneesha -test medicare alliaceId group startURL06@startURL06', {retries: 1}, async(I, current) => {

    I.amOnPage('https://medicare.com/partner/?allid=' + current.allid);

    I.seeInCurrentUrl(current.allid);
    I.waitForVisible('#cobranding-main-header > img',5);
    I.saveScreenshot(current.allid + '.png');

});