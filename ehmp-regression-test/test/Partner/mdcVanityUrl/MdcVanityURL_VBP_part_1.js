Feature('mdc vanity URL redirection and logo test - Created by Willis');

var config = require('config');
var domain = config.get('EHM');
var startURL = require(process.cwd() +'/data/MdcVanityLogo.js')();
//for mdc allid logos
Data(startURL.startURL01).Scenario('test mdc Vanity URL and logo1@MdcVanityLogo1', {retries: 0}, async(I, current) => {

    I.amOnPage(current.vanityURL);
    I.wait(3)
    // console.log('Vanity URL is :' + current.vanityURL);
    I.seeInCurrentUrl(current.redirectURL);
    // console.log('Redirected URL is :' + current.redirectURL);
    I.seeInSource(current.logo,5);
    // console.log('Logo is is :' + current.logo);
    I.saveScreenshot(current.allid + '.png');

});
