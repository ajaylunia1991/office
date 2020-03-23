/**
 * Created by cherrieg on 09/05/2019.
 */
Feature('mose application');

var config = require('config');
var ehmp = config.get('EHMP');
var simpleCase = require(process.cwd() +'/utils/mobileMose');

Scenario('uhc mobile MA flow', async(I) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        I.wait(2);
        console.log("We can't enroll plan on prod!")
    }else{
        I.amOnPage(ehmp + '/ehi/muse-service/fast-apply?allid=EHM35770&carrierId=90120500&planId=211&segmentId=000&zip=90001&county=LOS%20ANGELES&dob=09/01/1951&gender=M&leadId=&version=2&mboxSession=&codeCriteria1=-1&hideContact=&type=&email=&lname=&fname=&smoker1=&ssacd=&salesRep=&requestFrom=&reqdate=&campaign=&sponsorshipAdListTail=&adobeMrktgCloudId=&gclid=&padate=02/2019&pbdate=03/2019&defaultThrottle=GREEN&applicationFlow=M&qascript=Y');

        //filled out applicant info
        I.wait(5);
        I.seeInCurrentUrl('/Applicant', 40);
        I.executeScript(simpleCase.autoRun);I.wait(5);

        //filled out Eligibility
        I.seeInCurrentUrl('/Eligibility');
        I.executeScript(simpleCase.autoRun);I.wait(10);
        // pause()

        //filled out Submit
        I.seeInCurrentUrl('/Submit');
        I.executeScript(simpleCase.autoRun);I.wait(10);

        I.seeInCurrentUrl('/Congratulations');
        I.dontSee('Try again')
    }


});

