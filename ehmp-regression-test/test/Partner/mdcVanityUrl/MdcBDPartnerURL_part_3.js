Feature('mdc BD Partner URL redirection and logo test - Created by Willis');

var config = require('config');
var domain = config.get('EHM');
var startURL = require(process.cwd() +'/data/MdcBDPartner.js')();
//for mdc allid logos

Data(startURL.startURL03).Scenario('test mdc BD Partner URL and logo1@MdcBDPartnerLogo3', {retries: 0}, async(I, current) => {

    I.amOnPage(current.vanityURL);
    I.wait(3)
    console.log('Vanity URL is :' + current.vanityURL);

    const url = await I.grabCurrentUrl();
    if (!url.includes('aep')) {
        I.seeInCurrentUrl(current.redirectURL);
        console.log('Redirected URL is :' + current.redirectURL);
    }else{
        I.seeInCurrentUrl('https://www.ehealthinsurance.com/medicare');
        I.seeInCurrentUrl('allid='+ current.allid);
        console.log('current url is:') + url;
    }
    
    I.seeInSource(current.logo,5);
    console.log('Logo is is :' + current.logo);

   I.saveScreenshot(current.allid + '.png');

});
