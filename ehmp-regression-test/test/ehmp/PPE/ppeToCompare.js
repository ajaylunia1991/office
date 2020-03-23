Feature('ehmp-PPE');

var config = require('config');
var EHMPdomain = config.get('EHMP');

Scenario('Vivian - ppeToCompare, go to ehmp new compare with ppSaveSessionId, case 2 ', async(I) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
        I.amOnPage(EHMPdomain + '/;jsessionid=98F9356A950459BFA1952A552ABF8251.cmmc04b?leadFormEnabled=false&detailCompareRedesign=true&reqdate=01-01-2020&allid=Med35908&type=MA&ppSaveSessionId=154372WI&target=ppe&agentid=3762&leadid=10465623&salesRep=sanyuw.mdesales&page=plan-compare&planYear=2020&requestFrom=PPE&campaign=eHMPlanCompareMulti#plan-compare/MA/90001/05200/LOS%20ANGELES/pH0523-002-000');
        I.wait(10);
        I.seeTitleEquals('Medicare Insurance Program');

        //check drug info
        I.waitForVisible('.print-btn', 10);
        I.see('Compare Plans');
        I.see('Adderall 5 mg tablet');
        I.see('Kisqali 400 mg/day (200 mg x 2) tablet');
        //I.see('R-Natal OB 20 mg iron-1 mg-320 mg capsule');
    }
});

Scenario('Vivian - ppeToCompare, go to mini site compare with ppSaveSessionId, case 4 ', async(I) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
        I.amOnPage(EHMPdomain + '/ehi/medicare/mini-site?allid=Aet32546&msType=msc-aetna-3&leadFormEnabled=false&reqdate=09-01-2020&allid=Med35908&type=MA&ppSaveSessionId=789675QU&target=ppe&agentid=3762&leadid=10465623&salesRep=sanyuw.mdesales&page=plan-compare&planYear=2020&requestFrom=PPE&campaign=eHMPlanCompareMulti#plan-compare/MA/90001/05200/LOS%20ANGELES/pH0523-002-000');
        I.wait(10);
        I.seeTitleEquals('Medicare Insurance Program');
        I.seeInSource('partner-logo-img');

        //check drug
        I.click('.ehi-top-tool-back');
        I.wait(10);
        I.waitForVisible('#calc', 50);
        I.see('Edit Your Rx Drugs');
        I.see('Edit Your Doctors');
        I.dontSee('Add Your Doctors');
        //I.click('#calc');
        I.executeScript(function() {
            $('#calc').click();
        });
        I.wait(10);
        //pause ()
        I.waitForVisible('.btn-add-more-drugs', 10);
        I.see('Add More Drugs');
        I.click('.btn-back');I.wait(5);
        I.waitForVisible('#calc', 10);

        //check doctor info
        I.executeScript(function() {
            $('#calcDoctor').click();
        });I.wait(3);
        I.waitForVisible('.doctor-list', 5);
        I.see('Smith');
    }

});
