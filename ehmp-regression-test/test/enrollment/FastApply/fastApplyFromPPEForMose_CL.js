Feature('enrollment - FastApply');

var config = require('config');
var EHMPdomain = config.get('EHMP');
var ReqEffeDate = require(process.cwd()+'/utils/random').getNextMonth();
// var mosePage = require(process.cwd()+ '/pages/mosePage.js');
var assert = require('assert');
var AppSearch = require(process.cwd()+'/utils/AppSearch');
var simpleCase = require(process.cwd() +'/utils/moseCase');


Scenario('Cassie - Pre-populate hcin ,gender,part A/B when pass from PPE/PPT(MEDI-22816)', async(I,mosePage) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
        var URL = EHMPdomain + '/ehi/medicare/fast-quote?allid=jet1291700&target=ppe&type=MA&zip=90001&county=LOS+ANGELES&ppSaveSessionId=956310IE&email=cassie.luo@ehealth.com&planYear=2020&campaign=eHMPlanComparison&agentid=&bdate1=01/01/1954&gd1=&fname=testdfs&lname=testssdf&smoker1=n&leadid=10467607&homephone=&reqdate=' + ReqEffeDate +'&boseSessionId=&page=plan-detail&plans=H0543:168:000&salesRep=cassiel-1519365181331&pbdate=02/01/2018';
        I.amOnPage(URL);
        I.waitForVisible('//*[@id="breadcrumb-back"]', 20);
        I.wait(4);
        I.executeScript(simpleCase.autoRun);I.wait(3);

        //start app on plan review
        // I.waitForVisible('#ehimcPlanReviewView', 40);I.wait(1);
        // I.executeScript(simpleCase.autoRun);I.wait(1);

        //filled out applicant info
        // I.wait(5);
        I.seeInCurrentUrl('/Applicant', 40);
        I.seeInField(mosePage.fields.fname,'test');
        I.seeInField(mosePage.fields.lname,'test');
        I.seeInField(mosePage.fields.homePhone,'213-213-1111');
        I.seeInField(mosePage.fields.email,'cassie.luo@ehealth.com');
        I.seeInField(mosePage.fields.dob,'01/01/1954');
        I.seeInField(mosePage.fields.street,'220 main st.');
        I.seeInField(mosePage.fields.city,'LOS ANGELES');
        I.seeCheckboxIsChecked(mosePage.fields.female);
        I.executeScript(simpleCase.autoRun);I.wait(2);
        I.seeInCurrentUrl('/Eligibility');
        I.seeInField(mosePage.fields.medicareClaimNumber,'123456789A');
        I.seeInField(mosePage.fields.parta,'01/01/2019');
        I.seeInField(mosePage.fields.partb,'02/01/2018');
        // I.seeCheckboxIsChecked(mosePage.fields.NEW);
        I.executeScript(simpleCase.autoRun);I.wait(1);
        //filled out Submit
        I.seeInCurrentUrl('/Submit');
        mosePage.checkAndEditReviewForm();
        I.executeScript(simpleCase.autoRun);I.wait(10);
        I.seeInCurrentUrl('/Congratulations');
        I.dontSee('Please call us to complete your application');
        let APPID = await I.grabTextFrom(mosePage.fields.confirmationNo);
        console.log("APPID:"+APPID);
        let rows = await AppSearch.search(APPID,'B2');
        console.log("rows: " + rows);
        assert(rows == 1);
    }
});


Scenario('Pre-populate hcin ,gender,part A/B when pass from url parameter', async(I,mosePage) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
        var URL = EHMPdomain + '/ehi/muse-service/fast-apply?allid=jet1291700&codeCriteria1=956310IE&type=MA&zip=90001&carrierId=90120500&planId=274&county=LOS+ANGELES&email=cassie.luo@ehealth.com&campaign=eHMPlanComparison&encLeadId=1169fb91751&city=LOS+ANGELES&street=&dob=01/01/1954&fname=testdfs&lname=testssdf&smoker1=n&reqdate='+ReqEffeDate+'&boseSessionId=&segmentId=000&salesRep=cassiel-1519365181331&requestFrom=PPE&pbdate=02/01/2018&hicn=A123123&padate=02/01/2018&gender=M&sepReason=LCC&street=330 main st&city=Houston&sepDate=10/1/2019';
        I.amOnPage(URL);
        // I.waitForVisible('//*[@id="breadcrumb-back"]', 20);
        // I.wait(4);
        // I.executeScript(simpleCase.autoRun);I.wait(3);

        //start app on plan review
        // I.waitForVisible('#ehimcPlanReviewView', 40);I.wait(1);
        // I.executeScript(simpleCase.autoRun);I.wait(1);

        //filled out applicant info
        I.wait(5);
        I.seeInCurrentUrl('/Applicant', 40);
        I.seeInField(mosePage.fields.fname,'testdfs');
        I.seeInField(mosePage.fields.lname,'testssdf');
        I.seeInField(mosePage.fields.homePhone,'213-213-1111');
        I.seeInField(mosePage.fields.email,'cassie.luo@ehealth.com');
        I.seeInField(mosePage.fields.dob,'01/01/1954');
        I.seeCheckboxIsChecked(mosePage.fields.male);
        I.seeInField(mosePage.fields.street,'330 main st');
        I.seeInField(mosePage.fields.city,'Houston');
        I.executeScript(simpleCase.autoRun);I.wait(2);
        I.seeInCurrentUrl('/Eligibility');
        I.seeInField(mosePage.fields.medicareClaimNumber,'A123123');
        I.seeInField(mosePage.fields.parta,'02/01/2018');
        I.seeInField(mosePage.fields.partb,'02/01/2018');
        // I.seeCheckboxIsChecked(mosePage.fields.LCC);
        // pause();
        //I.seeInField(mosePage.fields.LCCdate,ReqEffeDate);
        I.executeScript(simpleCase.autoRun);I.wait(2);
        //filled out Submit
        I.seeInCurrentUrl('/Submit');
        // pause();
        mosePage.checkAndEditReviewForm();
        I.executeScript(simpleCase.autoRun);I.wait(10);
        I.seeInCurrentUrl('/Congratulations');
        I.dontSee('Please call us to complete your application');
        let APPID = await I.grabTextFrom(mosePage.fields.confirmationNo);
        console.log("APPID:"+APPID);
        let rows = await AppSearch.search(APPID,'B2');
        console.log("rows: " + rows);
        assert(rows == 1);
    }
    
  
});