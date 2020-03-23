/**
 * Created by cherrieg on 08/21/2019.
 */
Feature('enrollment - mose');

var config = require('config');
var ehmp = config.get('EHMP');
var simpleCase = require(process.cwd() +'/utils/moseCase');

Scenario('anthem MA flow_Carol', async(I,mosePage) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        I.wait(2);
        console.log("We can't enroll plan on prod!")
    }else{
        I.amOnPage(ehmp + '/ehi/muse-service/fast-apply?allid=pha5542000&carrierId=90121000&planId=427&segmentId=000&zip=90001&county=LOS%20ANGELES&version=2&mboxSession=&codeCriteria1=-1&hideContact=&type=&email=&lname=&fname=&smoker1=&ssacd=&salesRep=&requestFrom=&reqdate=&campaign=&sponsorshipAdListTail=&adobeMrktgCloudId=&gclid=&defaultThrottle=GREEN&qascript=Y');

        //filled out applicant info
        I.wait(5);
        I.seeInCurrentUrl('/Applicant', 40);
        I.executeScript(simpleCase.autoRun);I.wait(5);
        
        //filled out Eligibility
        I.seeInCurrentUrl('/Eligibility');
        I.executeScript(simpleCase.autoRun);I.wait(5);
        
        //filled out Submit
        I.seeInCurrentUrl('/Submit');
        mosePage.checkAndEditReviewForm();
        I.executeScript(simpleCase.autoRun);I.wait(10);
        
        I.seeInCurrentUrl('/Congratulations');
        I.dontSee('Try again')
    }

});

