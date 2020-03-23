/**
 * Created by cherrieg on 09/25/2019.
 */
Feature('enrollment - mose');

var config = require('config');
var ehmp = config.get('EHMP');
var simpleCase = require(process.cwd() +'/utils/moseCase');

Scenario('uhc 2020 ppe plan', async(I, mosePage) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa' ){
        I.wait(1);
        console.log("We can't enroll 2020 plan on prod!")
    }else{
        I.amOnPage(ehmp + '/ehi/muse-service/fast-apply?allid=EHM35770&carrierId=10120500&planId=203&segmentId=000&zip=12250&county=ALBANY&email=21321345QAASD@ehealth.com&campaign=eHMPlanCompareSingle&encLeadId=11666995e51&city=LOS+ANGELES&street=street&dob=02/02/1950&gender=F&fname=fnrachQAtest&lname=lnrachQAtest&smoker1=n&boseSessionId=123456&segmentId=000&salesRep=cherrieg-1466490601775&requestFrom=PPE&pbdate=05/2019&padate=05/2019&applicationFlow=M&pid=pppid&sid=sssid&qascript=Y&&turnOnPlanPreview=N');

        //filled out applicant info
        I.wait(5);
        I.seeInCurrentUrl('/Applicant', 40);
        I.executeScript(simpleCase.autoRun);I.wait(5);

        //filled out Eligibility
        I.seeInCurrentUrl('/Eligibility');
        I.executeScript(simpleCase.autoRun);I.wait(5);

        //filled out Submit
        I.seeInCurrentUrl('/Submit');I.wait(2);
        mosePage.checkAndEditReviewForm();
        I.executeScript(simpleCase.autoRun);I.wait(10);
        I.seeInCurrentUrl('/Congratulations');
        I.dontSee('Try again')
    }


});

