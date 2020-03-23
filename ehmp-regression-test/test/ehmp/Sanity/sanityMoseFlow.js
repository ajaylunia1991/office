/**
 * Created by cherrieg on 08/29/2019.
 */
Feature('ehmp - sanity');

var config = require('config');
var ehmp = config.get('EHMP');
var simpleCase = require(process.cwd() +'/utils/moseCase');

Scenario('uhc generic long flow @C19190', async(I) =>{
    
    I.amOnPage(ehmp + '/enrollment/fast-apply?allid=EHM35770&carrierId=90120500&planId=288&segmentId=000&zip=90001&county=LOS%20ANGELES&leadId=&version=2&mboxSession=&codeCriteria1=-1&hideContact=&type=&email=&lname=&fname=&smoker1=N&ssacd=&salesRep=&requestFrom=&reqdate=&campaign=&sponsorshipAdListTail=&adobeMrktgCloudId=&gclid=&defaultThrottle=GREEN&qascript=Y');

    //filled out applicant info
    I.wait(5);
    I.seeInCurrentUrl('/Applicant', 40);
    I.executeScript(simpleCase.autoRun);I.wait(5);

    //filled out Eligibility
    I.seeInCurrentUrl('/Eligibility');
    I.executeScript(simpleCase.autoRun);I.wait(5);

    //filled out Submit
    I.seeInCurrentUrl('/Submit');
    I.executeScript(simpleCase.autoRun);I.wait(10);

    I.seeInCurrentUrl('/Congratulations');
    I.dontSee('Try again')


});

