Feature('mdc allids logo');

var config = require('config');
var domain = config.get('EHM');
var logo = require(process.cwd() +'/data/logo.js')();
//for mdc allid logos
Data(logo.logo13).Scenario('test mdc group logo13@logo13', {retries: 1}, async(I, current) => {

    I.amOnPage('https://medicare.com/partner/?allid=' + current.allid);

    I.seeInCurrentUrl(current.allid);
    // if(current.allid == 'tiv6701000'){//change to be the same as othersa
        // I.waitForVisible('#partner-logo-img',5);
    // }else{
        I.waitForVisible('#cobranding-main-header > img',5);  
    // }
    I.saveScreenshot(current.allid + '.png');

});