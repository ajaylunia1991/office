Feature('EHI vanity URL redirection and logo test - Created by Aneesha');

var config = require('config');
var domain = config.get('EHI');
var startURL = require(process.cwd() +'/data/EHIUrlLogo.js')();
//for ehm allid logos
Data(startURL.startURL01).Scenario('test ehim  URL and logo1@EHILogo1', {retries: 0}, async(I, current) => {

    I.amOnPage(current.vanityURL);
    I.wait(3)
    // console.log('Vanity URL is :' + current.vanityURL);
    I.seeInCurrentUrl(current.redirectURL);
    // console.log('Redirected URL is :' + current.redirectURL);
    I.waitForVisible('#header-cobrand-link > img',5);
    //I.seeInSource(current.logo,5);
    // console.log('Logo is is :' + current.logo);
    I.saveScreenshot(current.allid + '.png');

});
