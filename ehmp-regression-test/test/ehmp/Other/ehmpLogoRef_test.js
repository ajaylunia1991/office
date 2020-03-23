Feature('ehmp - other');

/**
 * created by mmelnyk
 */

var config = require('config');
var domain = config.get('EHMP');
var mdc = config.get('MDC');
var ehm = config.get('EHM');

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - RedirectMDC - This scenario verifies redirection(URL) to MDC after clicking MDC Logo on EHMP Census', async function(I, headerPage) {
    I.amOnPage(domain + '?medicarecom=2&allid=Med40680&roundrobin=1');
    I.wait(3);
    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHMP url: "+url);
        console.log("I am clicking MDC Logo");
        I.click(headerPage.fields.mdcLogoCensus);
        I.wait(4);
        I.seeInCurrentUrl(mdc);


    } else {

        //TBD
    }
});

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - RedirectMDC - This scenario verifies redirection(URL) to MDC after clicking MDC Logo on EHMP quote page', async function(I, headerPage) {
    I.amOnPage(domain + '?medicarecom=2&allid=Med40680&roundrobin=1&forceV1=true#quote-plans/MA/10001/33420/NEW YORK/1/p1');
    I.wait(3);
    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHMP url: "+url);
        console.log("I am clicking MDC Logo");
        I.click(headerPage.fields.mdcLogoCensus);
        I.wait(4);
        I.seeInCurrentUrl(mdc);


    } else {

        //TBD
    }
});

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - RedirectMDC - This scenario verifies redirection(URL) to EHM after clicking EHMP Logo on quote page', async function(I, headerPage) {
    I.amOnPage(domain + '?medicarecom=2&allid=Med40680&roundrobin=1&forceV1=true#quote-plans/MA/10001/33420/NEW YORK/1/p1');
    I.wait(3);
    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHMP url: "+url);
        console.log("I am clicking EHMP Logo");
        I.click(headerPage.fields.ehmpLogo);
        I.wait(4);
        I.seeInCurrentUrl(ehm + '/?allid=Med40680');


    } else {

        //TBD
    }
});

Scenario('ENV: ' + process.env.NODE_ENV + ' Maria - RedirectMDC - This scenario verifies redirection(URL) to EHM after clicking EHMP Logo on Census', async function(I, headerPage) {
    I.amOnPage(domain + '?medicarecom=2&allid=Med40680&roundrobin=1');
    I.wait(3);
    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHMP url: "+url);
        console.log("I am clicking EHMP Logo");
        I.click(headerPage.fields.ehmpLogoCensus);
        I.wait(4);
        I.seeInCurrentUrl(ehm + '/?allid=Med40680');


    } else {

        //TBD
    }
});