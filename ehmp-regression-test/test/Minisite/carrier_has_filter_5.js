Feature('Minisite - carrier minisite');

var config = require('config');
var ehmp = config.get('EHMP');
var ehm = config.get('EHM');
var carrier = require(process.cwd() +'/data/carrier.js')();

Data(carrier.carrier_has_filter_5).Scenario('carrier_has_filter_1@withFilter', {retries: 0}, async(I, current, quotePage,minisitePage) => {

    if (current.ehmTag == "Y") {
        I.amOnPage(ehm + '/ehi/medicare/mini-site?allid=' + current.allid + '&msType=' + current.msType);
    }else{
        I.amOnPage(ehmp + '/ehi/medicare/mini-site?allid=' + current.allid + '&msType=' + current.msType);
    }
    minisitePage.carrierLandingToQuote(current.zip,current.carrierName,true,current.carrierFamilyID);
    //check detail and compare
    if (current.checkDetailTag == 'Y') {
        quotePage.checkDetailAndCompare();
    }
});