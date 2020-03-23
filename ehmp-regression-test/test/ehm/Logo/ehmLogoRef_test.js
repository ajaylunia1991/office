Feature('ehm - Logo');

var config = require('config');
var domain = config.get('EHM');
var mdc = config.get('MDC');


Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Logo - This scenario verifies redirection(URL) to MDC after clicking MDC Logo on EHM', async function(I, headerPage) {
    I.amOnPage(domain + '?medicarecom=2&allid=Med40680&roundrobin=1');
    I.wait(3);
    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHM url: "+url);
        console.log("I am clicking MDC Logo");
        I.click(headerPage.fields.mdcLogo);
        I.wait(4);
        I.switchToNextTab(1);
        I.wait(3);
        I.seeInCurrentUrl(mdc);


    } else {

        //TBD
    }
});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Logo - This scenario verifies EHM URL after clicking EHM logo', async function(I, headerPage) {
    I.amOnPage(domain + '?medicarecom=2&allid=Med40680&roundrobin=1');
    I.wait(3);
    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHM url: "+url);
        console.log("I am clicking EHM Logo");
        I.click(headerPage.fields.ehmLogo);
        I.wait(4);
        I.seeInCurrentUrl(domain);


    } else {

        //TBD
    }
});
