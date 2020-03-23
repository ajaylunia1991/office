Feature('mdc allids logo');

var config = require('config');
var domain = config.get('EHM');
var logo = require(process.cwd() +'/data/logo.js')();
//for mdc allid logos

Data(logo.logo2).Scenario('test mdc group logo2@logo2', {retries: 1}, async(I, current) => {

    I.amOnPage('https://medicare.com/partner/?allid=' + current.allid);

    I.seeInCurrentUrl(current.allid);
    I.waitForVisible('#cobranding-main-header > img',5);
    I.saveScreenshot(current.allid + '.png');

});

