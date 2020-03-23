Feature('Minisite - pharmacy tool');

var config = require('config');
var domain = config.get('EHM');
var pharmacy = require(process.cwd() +'/data/pharmacy.js')();

Data(pharmacy.pharmacy_7).Scenario('pharmacy_7', {retries: 2}, async(I, current, quotePage, minisitePage, leadPage) => {

    //https://www.cm.ehealthmedicareplans.com/pharmacy?&allid=Bar37464
    if (current.pharmacyAllid == 'None' || current.name == 'omnicare') {
        if (current.name == 'omnicare') {
            console.log(current.name + ' will be checked in another scenario.')
        } else {
            console.log(current.name + ' has no pharmacy tool.');
        }
    } else {
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

    }


});
