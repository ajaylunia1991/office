// http://sjprsystst01:8080/qafuntest/caseData.jsp?path=_build/VanityUrl/Medicare%20vanity%20url
// exclude minisite and sutter
Feature('Medicare vanity URL');

var config = require('config');
var domain = config.get('EHM');
var vanityURL = require('../../data/vanityURL.js')();

Data(vanityURL.vanityURLList).Scenario('test vanity url redirect rule', {retries: 0}, async(I, current) => {

    I.amOnPage(current.url);
    let url = await I.grabCurrentUrl();
    console.log(`Current URL is [${url}]`);
    if(url.includes('aep')){
        I.waitForText('Annual Election Period');
    }else{
        I.waitForText(current.text);

    }

    I.seeInCurrentUrl(current.redirectURL);

});


