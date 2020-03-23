Feature('Minisite - pharmacy minisite fast quote');

var config = require('config');
var domain = config.get('EHMP');
var pharmacy = require(process.cwd() +'/data/pharmacy.js')();

Data(pharmacy.pharmacy_1).Scenario('pharmacy_minisite_1', {retries: 2}, async(I, current, quotePage, minisitePage, leadPage) => {

    I.amOnPage(domain + '/fast-quote?target=' + current.fq2Mini);
    I.wait(4);
    //I.seeInCurrentUrl('/ehi/medicare/mini-site'+current.msType);
    I.seeInCurrentUrl('msType='+current.msType);

    // minisitePage.pharmacyLandingToQuote(current.zip,'pharmacy',current.name);

    // //check if there is a lead form
    // const pageSource = await I.grabSource();
    // if (pageSource.includes('continue-btn')) {
    //     leadPage.closeLeadForm();
    //     if(current.checkDetailTag == 'Y'){ quotePage.checkDetailAndCompare(); }
    // } else {
    //     if(current.checkDetailTag == 'Y'){ quotePage.checkDetailAndCompare(); }
    // }

});
Data(pharmacy.pharmacy_2).Scenario('pharmacy_minisite_2', {retries: 2}, async(I, current, quotePage, minisitePage, leadPage) => {

    I.amOnPage(domain + '/fast-quote?target=' + current.fq2Mini);
    I.wait(4);
    //I.seeInCurrentUrl('/ehi/medicare/mini-site'+current.msType);
    I.seeInCurrentUrl('msType='+current.msType);

 

});

Data(pharmacy.pharmacy_3).Scenario('pharmacy_minisite_3', {retries: 2}, async(I, current, quotePage, minisitePage, leadPage) => {

    I.amOnPage(domain + '/fast-quote?target=' + current.fq2Mini);
    I.wait(4);
    //I.seeInCurrentUrl('/ehi/medicare/mini-site'+current.msType);
    I.seeInCurrentUrl('msType='+current.msType);

   

});

Data(pharmacy.pharmacy_4).Scenario('pharmacy_minisite_4', {retries: 2}, async(I, current, quotePage, minisitePage, leadPage) => {

    I.amOnPage(domain + '/fast-quote?target=' + current.fq2Mini);
    I.wait(4);
    //I.seeInCurrentUrl('/ehi/medicare/mini-site'+current.msType);
    I.seeInCurrentUrl('msType='+current.msType);

});

Data(pharmacy.pharmacy_5).Scenario('pharmacy_minisite_5', {retries: 2}, async(I, current, quotePage, minisitePage, leadPage) => {

    I.amOnPage(domain + '/fast-quote?target=' + current.fq2Mini);
    I.wait(4);
    //I.seeInCurrentUrl('/ehi/medicare/mini-site'+current.msType);
    I.seeInCurrentUrl('msType='+current.msType);
});

Data(pharmacy.pharmacy_6).Scenario('pharmacy_minisite_6', {retries: 2}, async(I, current, quotePage, minisitePage, leadPage) => {

    I.amOnPage(domain + '/fast-quote?target=' + current.fq2Mini);
    I.wait(4);
    //I.seeInCurrentUrl('/ehi/medicare/mini-site'+current.msType);
    I.seeInCurrentUrl('msType='+current.msType);
});

Data(pharmacy.pharmacy_7).Scenario('pharmacy_minisite_7', {retries: 2}, async(I, current, quotePage, minisitePage, leadPage) => {

    I.amOnPage(domain + '/fast-quote?target=' + current.fq2Mini);
    I.wait(4);
    //I.seeInCurrentUrl('/ehi/medicare/mini-site'+current.msType);
    I.seeInCurrentUrl('msType='+current.msType);

});


Data(pharmacy.pharmacy_8).Scenario('pharmacy_minisite_8', {retries: 2}, async(I, current, quotePage, minisitePage, leadPage) => {

    I.amOnPage(domain + '/fast-quote?target=' + current.fq2Mini);
    I.wait(4);
    //I.seeInCurrentUrl('/ehi/medicare/mini-site'+current.msType);
    I.seeInCurrentUrl('msType='+current.msType);
});

Data(pharmacy.pharmacy_9).Scenario('pharmacy_minisite_9', {retries: 2}, async(I, current, quotePage, minisitePage, leadPage) => {

    I.amOnPage(domain + '/fast-quote?target=' + current.fq2Mini);
    I.wait(4);
    //I.seeInCurrentUrl('/ehi/medicare/mini-site'+current.msType);
    I.seeInCurrentUrl('msType='+current.msType);

});

