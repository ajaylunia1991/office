Feature('Minisite - pharmacy minisite check header');

var config = require('config');
var domain = config.get('EHM');
var pharmacy = require(process.cwd() +'/data/pharmacy.js')();

Data(pharmacy.pharmacy_1).Scenario('pharmacy_minisite_1', {retries: 0}, async(I, current, quotePage, minisitePage, leadPage,censusPage) => {

    I.amOnPage(domain + '/' + current.name);
    //I.wait(10);
    I.waitForVisible(minisitePage.fields.zipCensus,20);
    censusPage.ClickHeaderlinks();
    I.see('Find your Medicare');//could go back to MA census page from EHM
    I.seeInCurrentUrl('/v2/');
     
});
