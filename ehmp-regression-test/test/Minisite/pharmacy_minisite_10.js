Feature('Minisite - pharmacy minisite');

var config = require('config');
var domain = config.get('EHM');
var pharmacy = require(process.cwd() +'/data/pharmacy.js')();

Data(pharmacy.pharmacy_10).Scenario('pharmacy_minisite_10', {retries: 2}, async(I, current, quotePage, minisitePage, leadPage) => {

    I.amOnPage(domain + '/' + current.name);

    minisitePage.pharmacyLandingToQuote(current.zip,'pharmacy',current.name);
    I.seeInCurrentUrl(current.msType);

    //check if there is a lead form
    const pageSource = await I.grabSource();
    if (pageSource.includes('continue-btn')) {
        leadPage.closeLeadForm();
        if(current.checkDetailTag == 'Y'){ quotePage.checkDetailAndCompare(); }
    } else {
        if(current.checkDetailTag == 'Y'){ quotePage.checkDetailAndCompare(); }
    }

});
