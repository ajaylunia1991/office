Feature('pharmacy minisite sanity testing-- Walmart --- Created by Aneesha');

var config = require('config');
var domain = config.get('EHMP');
var pharmacy = require(process.cwd() +'/data/pharmacyWalmart.js')();

Data(pharmacy.pharmacy_03).Scenario('Aneesha - pharmacy@pharmacy_03 -- Walmart minisite sanity testing', {retries: 2}, async(I, current, quotePage, minisitePage, leadPage) => {

    I.amOnPage(domain + '/v2/ehi/medicare/mini-site?allid=' + current.minisiteAllid+'&msType='+current.msType+'#/');

    minisitePage.pharmacyLandingToQuote(current.zip,'pharmacy',current.name);
    I.seeInCurrentUrl(current.msType);

    //check if there is a lead form
    const pageSource = await I.grabSource();
    if (pageSource.includes('continue-btn')) {
        leadPage.closeLeadForm();
        if(current.checkDetailTag == 'Y'){ quotePage.checkDetailAndCompare(); }
    }

});
