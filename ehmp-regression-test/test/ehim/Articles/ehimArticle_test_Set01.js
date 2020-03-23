Feature('EHIM- Articles verify zipcode functionality');

var config = require('config');
var domain = config.get('EHIM');


// ALGO-1331, Test case-C24735
Scenario('ENV:' + process.env.NODE_ENV + 'GCK- verify zipcode field doesnt accept special chars on artciles pages', async (I, ehmPage, ehimPageNew) => {

    I.amOnPage(domain + '/medicare/advantage-all/medicare-advantage-plan-costs?allid=Med37949');
    let url = await I.grabCurrentUrl();
    console.log('I am on EHIM article page' + url);
    I.wait(2);
    I.click(ehimPageNew.fields.articlezipcode);
    I.fillField(ehimPageNew.fields.articlezipcode, '#$%!@');
    I.click(ehimPageNew.fields.getStartedBtn);
    I.wait(2);
    I.seeInCurrentUrl('ehealthmedicareplans.com');
    I.click(ehmPage.fields.zipCodeCensus);
    if (I.fillField(ehmPage.fields.zipCodeCensus, '@#$%^&')) {
        I.wait(2);
        I.click(ehmPage.fields.btnCensusNext);
        I.see('Please enter a valid zip code');
    }
    else (I.fillField(ehmPage.fields.zipCodeCensus, '@1234'))
    {
        I.wait(2);
        I.click(ehmPage.fields.btnCensusNext);
        I.see('Please enter a valid zip code');

    }

});

Scenario('ENV:' + process.env.NODE_ENV + 'GCK - verify Get medicare Zipcode field should not accept special chars', async (I, ehimPageNew, ehmPage) => {

    I.amOnPage(domain + '/medicare/advantage-all/medicare-advantage-plan-costs?allid=Med37949');
    let url = await I.grabCurrentUrl();
    console.log('I am on article page' + url);
    I.wait(3);
    I.click(ehimPageNew.fields.zipCodeZipCode);
    I.fillField(ehimPageNew.fields.zipCodeZipCode, '!234%');
    I.click(ehimPageNew.fields.getStartedBtn);
    I.wait(2);
    I.seeInCurrentUrl('ehealthmedicareplans.com');
    I.wait(3);
    I.click(ehmPage.fields.zipCodeCensus);
    if (I.fillField(ehmPage.fields.zipCodeCensus, 'abc12')) {
        I.wait(2);
        I.click(ehmPage.fields.btnCensusNext);
        console.log("Please enter a valid zipcode")
    }
    else
        (I.fillField(ehmPage.fields.zipCodeCensus, '@#$%^&'))
    {
        I.wait(2);
        I.click(ehmPage.fields.btnCensusNext);
    }
    I.see('Please enter a valid zip code');

})