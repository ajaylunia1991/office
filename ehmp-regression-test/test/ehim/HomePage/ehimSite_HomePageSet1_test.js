Feature('ehim - HomePage');



var config = require('config');
var domain = config.get('EHIM');
var ehmp = config.get('EHMP');

var randomInfo = require('../../../utils/random').randomInfo();

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - HomePage - This scenario verifies redirection to Census page and default allid -> EHMP', async function(I, ehimPageNew, ehmPage) {
    I.amOnPage(domain + '/?mboxDisable=true');
    I.wait(3);
    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHIM url: "+url);
        console.log("I am clicking Find Plans button");
        I.click(ehimPageNew.fields.findPlansBtn); //Find Plans button
        I.wait(3);
        ehmPage.verifyCensusPage('Find your Medicare Advantage plan');
        console.log("I am entering zip code and clicking Find Plans on Census page");
        I.fillField(ehmPage.fields.zipCodeCensus, '20001');
        I.wait(2);
        I.click(ehmPage.fields.btnCensusNext);
        I.wait(4);
        console.log("I am checking EHMP URL");
        I.seeInCurrentUrl(ehmp + '/?allid=Med37949');
        I.seeInCurrentUrl('#quote-plans/MA/20001/09000/DISTRICT OF COLUMBIA/1/p1');


    } else {

        //TBD
    }
});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - HomePage - This scenario verifies redirection to EHMP after entering zip code and clicking Find Plans button', async function(I, ehimPageNew) {
    I.amOnPage(domain + '/?mboxDisable=true');
    I.wait(3);
    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHIM url: "+url);
        console.log("I am entering zip code");
        I.fillField(ehimPageNew.fields.zipCode, '12345');
        I.wait(2);
        console.log("I am clicking Find Plans button");
        I.click(ehimPageNew.fields.findPlansBtn); //Find Plans button
        I.wait(4);
        console.log("I am checking EHMP URL");
        I.seeInCurrentUrl(ehmp + '/?typeDefaulted=true&type=MA&allid=Med37949');
        I.seeInCurrentUrl('#quote-plans/MA/12345/33650/SCHENECTADY/1/p1');


    } else {

        //TBD
    }
});

Scenario('ENV: ' + process.env.NODE_ENV + ' - Maria - HomePage - This scenario verifies the following flow:\n' +
    'EHIM, MA Insurance Plans, click Compare Plans  -> MA Census Page -> EHMP', async function(I, ehimPageNew, ehmPage) {
    I.amOnPage(domain + '/?mboxDisable=true');
    I.wait(3);
    let url = await I.grabCurrentUrl();
    console.log(url);
    if (url.includes('home-pre-aep-v1') == false) {
        console.log("I am on EHIM url: "+url);
        console.log("I am clicking Compare Plans button for MA");
        I.click(ehimPageNew.fields.comparePlansBtn);
        I.wait(3);
        ehmPage.verifyCensusPage('Find your Medicare Advantage plan');
        console.log("I am entering zip code and clicking Find Plans on Census page");
        I.fillField(ehmPage.fields.zipCodeCensus, '20001');
        I.wait(2);
        I.click(ehmPage.fields.btnCensusNext);
        I.wait(3);
        console.log("I am checking EHMP URL");
        I.seeInCurrentUrl(ehmp + '/?type=MA&allid=');
        I.seeInCurrentUrl('#quote-plans/MA/20001/09000/DISTRICT OF COLUMBIA/1/p1');


    } else {

        //TBD
    }
});

