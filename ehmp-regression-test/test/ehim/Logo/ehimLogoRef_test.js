Feature('ehim - Logo');



var config = require('config');
var domain = config.get('EHIM');
var mdc = config.get('MDC');

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Logo - This scenario verifies redirection(URL) to MDC after clicking MDC Logo on EHIM', async function(I, headerPage) {
    I.amOnPage(domain + '?medicarecom=2&allid=Med40680&roundrobin=1');
    I.wait(3);
    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHIM url: "+url);
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

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - Logo - This scenario verifies EHIM URL after clicking EHIM logo', async function(I, headerPage) {
    I.amOnPage(domain + '?medicarecom=2&allid=Med40680&roundrobin=1');
    I.wait(3);
    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHIM url: "+url);
        console.log("I am clicking EHIM Logo");
        I.click(headerPage.fields.ehimLogo);
        I.wait(4);
        I.seeInCurrentUrl(domain + '?allid=Med40680');


    } else {

        //TBD
    }
});