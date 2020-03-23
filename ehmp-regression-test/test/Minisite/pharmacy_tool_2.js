Feature('Minisite - pharmacy tool');

var config = require('config');
var domain = config.get('EHM');
var pharmacy = require(process.cwd() +'/data/pharmacy.js')();

Data(pharmacy.pharmacy_2).Scenario('pharmacy_2', {retries: 2}, async(I, current, quotePage, minisitePage, leadPage) => {

    I.amOnPage(domain + '/pharmacy?allid=' + current.pharmacyAllid);
    //pharmacy tool
    minisitePage.pharmacyToolToQuote(current.zip);
    //quote page
    const pageSource = await I.grabSource();
    if (pageSource.includes('leadform-top')) {
        leadPage.closeLeadForm();
        if (current.checkDetailTag == 'Y') {quotePage.checkDetailAndCompare();}
    } else {
        if (current.checkDetailTag == 'Y') {quotePage.checkDetailAndCompare();}
    }
});
