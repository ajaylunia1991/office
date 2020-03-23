Feature('enrollment - FastApply');

var config = require('config');
var EHMPdomain = config.get('EHMP');
var ReqEffeDate = require(process.cwd()+'/utils/random').getNextMonth();
var assert = require('assert');
var AppSearch = require(process.cwd()+'/utils/AppSearch');
var simpleCase = require(process.cwd() +'/utils/simpleCase');


Scenario('Cassie - Run castro PPE Case,check pdfs', async(I) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
        var URL = EHMPdomain + '/ehi/muse-service/fast-apply?allid=JBL29168&codeCriteria1=289173NV&type=MA&zip=90001&carrierId=90151700&planId=80&county=LOS+ANGELES&email=CHILLI.CHEN@EHEALTH.COM&campaign=testPPE&encLeadId=116ad491e51&city=LOS+ANGELES&street=&dob=09/09/1959&gender=&fname=cc&lname=cc&smoker1=n&reqdate=' + ReqEffeDate + '&boseSessionId=&salesRep=Chillic-1557369903863&requestFrom=PPE&pbdate=02/01/2020&segmentId=000&applicationFlow=C';
        I.amOnPage(URL);
        I.wait(5);
        I.seeTitleEquals('Applicant Info');
        I.executeScript(simpleCase.autoRun);

        //filled out coverage info
        I.waitForText('Medicare and Coverage Info', 40);I.wait(1);
        I.executeScript(simpleCase.autoRun);I.wait(5);

        //filled out summary
        I.waitForText('Review Enrollment Summary', 40);I.wait(1);
        I.executeScript(simpleCase.autoRun);

        //check congratulation page
        I.waitForText('Confirmation Number', 40);I.wait(1);
        I.seeTitleEquals('Congratulations');

        // get appid from congrat page and verify app status from DB
        let APPID = await I.grabTextFrom('#main-summary > div > div > p.confirm-info > strong');
        console.log(`[${APPID}]`);
        let rows = await AppSearch.search(`${APPID.slice(20)}`,'B2');
        console.log("rows: " + rows);
        assert(rows == 1);
    }
});