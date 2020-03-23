
/*

*Created By Vivian on 1/17
*/
Feature('ehmp - quote');

var config = require('config');
var domain = config.get('EHM');
var EHMPdomain = config.get('EHMP');




Scenario('Vivian - PartnerInventoryConfiguration_test - exclusive case', async(I) =>{
    var URL1 = EHMPdomain + '/?allid=sut6179000&qascript=Y#quote-plans/MA/94501/05000/ALAMEDA/1/p1'
    I.amOnPage(URL1);
    //I.seeTitleEquals('Applicant Info');
    //console.log(URL1);
    //check drug info
    I.waitForVisible('#carrier_filter', 10);
    I.see('UnitedHealthcare');
    I.see('Stanford Health Care');
    I.see('Health Net, Inc.');
    I.dontSee('Kaiser');
});



Scenario('Vivian - PartnerInventoryConfiguration_test - excluded case', async(I) =>{
    var URL2 = EHMPdomain + '/?allid=eli7986000&qascript=Y#quote-plans/MD/90001/05200/LOS%20ANGELES/1/p1'
    I.amOnPage(URL2);
    //I.seeTitleEquals('Applicant Info');
    //console.log(URL1);
    //check drug info
    I.waitForVisible('#carrier_filter', 10);
    I.see('UnitedHealth');
    I.dontSee('Humana');
    I.dontSee('Aenta');   
    I.dontSee('SilverScript');
});

Scenario('Vivian - PartnerInventoryConfiguration_test - county level exclusive case', async(I,censusPage) =>{
    var URL2 = EHMPdomain + '/?allid=adv9153000&forceV1=true#quote-plans/MA/60070/14141/COOK/1/p1/f6:3'
    I.amOnPage(URL2);I.wait(5)
    I.see('Aetna Medicare Value (PPO)');
    I.see('Aetna Medicare Prime (HMO)');
    I.see('Aetna Medicare Value (HMO)');
    I.see('Aetna Medicare Value (HMO)');
    I.click(censusPage.fields.editCensus);I.wait(2)
    I.fillField(censusPage.fields.oldZip,'60554');I.wait(1);//change to another county, no other aetna plans
    I.click(censusPage.fields.updateBtn);I.wait(5)
    I.see('Aetna Medicare Value (PPO)');
    I.dontSee('Aetna Medicare Prime (HMO)');
    I.dontSee('Aetna Medicare Value (HMO)');
    I.dontSee('Aetna Medicare Value (HMO)');
});

Scenario('Vivian - PartnerInventoryConfiguration_test - plan level exclusive case', async(I) =>{
    var URL2 = EHMPdomain + '/?allid=cvm8302000&forceV1=true#quote-plans/MA/95358/05600/STANISLAUS/1/p1/f0'
    I.amOnPage(URL2);I.wait(5);//this allid, just configure anthem and scan 8 plans
    I.see('Anthem MediBlue StartSmart Plus (HMO)');
    I.see('Anthem MediBlue Connect Plus (HMO)');
    I.see('Anthem MediBlue Value Plus (HMO)');
    I.see('Anthem MediBlue Heart (HMO C-SNP)');
    I.see('Anthem MediBlue Breathe (HMO C-SNP)');
    I.see('Anthem MediBlue Diabetes (HMO C-SNP)');
    I.see('SCAN Plus (HMO)');
    I.see('SCAN Classic (HMO)');
    I.dontSee('UnitedHealth');
    I.dontSee('Aenta');   
    I.dontSee('SilverScript');
});