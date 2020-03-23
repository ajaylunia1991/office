Feature('ehmp-PPE');

var config = require('config');
var EHMPdomain = config.get('EHMP');

Scenario('Vivian - ppeToEHMP_Minisite,go to ehmp quote with ppSaveSessionId, case 1', async(I) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
        I.amOnPage(EHMPdomain + '/?allid=Uta31300&ppSaveSessionId=154372WI&type=MD&showPdpOnly=true&leadFormEnabled=false&leadid=10462524&zip=90001&county=LOS%20ANGELES&campaign=NonLicensedPharmacyQuote');
        I.wait(10);
        I.seeTitleEquals('Medicare Insurance Program');

        //check drug info
        I.waitForVisible('#calc', 20);
        I.see('Adderall 5 mg tablet');
        I.see('Kisqali 400 mg/day (200 mg x 2) tablet');
        //I.see('R-Natal OB 20 mg iron-1 mg-320 mg capsule');
    }
});

Scenario('Vivian - ppeToEHMP_Minisite, go to mini site quote with ppSaveSessionId, case 3 ', async(I) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
        I.amOnPage(EHMPdomain + '/ehi/medicare/mini-site?allid=wal7875000&ppSaveSessionId=869263OU&msType=msp-walgreens&type=MD&showPdpOnly=true&leadFormEnabled=false&leadid=10462508&zip=90001&county=LOS%20ANGELES&campaign=NonLicensedPharmacyQuote');
        I.wait(6);
        I.seeTitleEquals('Medicare Insurance Program');
        I.waitForElement('#calc',50);
        I.executeScript(function() {
            $('#calc').click();
        });I.wait(5);
        //check drug info
        I.waitForVisible('.dt-edit-link', 10);
        I.see('Add More Drugs');
    }

});
