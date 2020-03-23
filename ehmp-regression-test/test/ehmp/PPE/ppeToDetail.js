Feature('ehmp-PPE');

var config = require('config');
var EHMPdomain = config.get('EHMP');

Scenario('Vivian - ppeToDetail,fq to ehmp details page, case 5 ', async(I) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
        I.amOnPage(EHMPdomain + '/ehi/medicare/fast-quote?allid=Med35908&target=ppe&type=MA&zip=90001&county=LOS+ANGELES&ppSaveSessionId=154372WI&email=dfdgdfg@ass.com&planYear=2020&campaign=eHMPlanCompareMulti&agentid=3762&bdate1=&gd1=M&fname=drtwe&lname=weerter&smoker1=n&leadid=10465623&homephone=&reqdate=01-01-2020&page=plan-detail&plans=H0523:002:000&salesRep=sanyuw.mdesales&pbdate=');
        I.wait(5);
        I.seeTitleEquals('Medicare Insurance Program');I.wait(3);

        //check drug
        I.click('#breadcrumb-back');I.wait(5);// go back to quote page by clicking 'view all plans'
        I.waitForVisible('#calc', 50);
        I.see('Edit Your Rx Drugs');
        I.see('Edit Your Doctors');
        I.dontSee('Add Your Doctors');
        I.executeScript(function() {
            $('#calc').click();
        });I.wait(5);
        I.waitForVisible('.btn-add-more-drugs', 10);
        I.see('Add More Drugs');
        I.click('.btn-back');I.wait(3);
        I.waitForVisible('#calc', 10);

        //check doctor info
        I.executeScript(function() {
            $('#calcDoctor').click();
        });I.wait(3);
        I.waitForVisible('.doctor-list', 5);
        I.see('Smith');
    }

});