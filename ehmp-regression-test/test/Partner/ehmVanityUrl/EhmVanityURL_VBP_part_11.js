Feature('EHM vanity URL redirection and logo test for EHMVanityLogo10 - Created by Aneesha');

var config = require('config');
var domain = config.get('EHM');
var startURL = require(process.cwd() +'/data/EHMVanityLogo.js')();
//for ehm allid logos
Data(startURL.startURL11).Scenario('test ehm Vanity URL and logo11@EHMVanityLogo11', {retries: 0}, async(I, current) => {

    I.amOnPage(current.vanityURL);
    I.wait(3)
    // console.log('Vanity URL is :' + current.vanityURL);
    I.seeInCurrentUrl(current.redirectURL);
    // console.log('Redirected URL is :' + current.redirectURL);
    I.seeInSource(current.logo,5);
    // console.log('Logo is is :' + current.logo);
    I.saveScreenshot(current.allid + '.png');

});
