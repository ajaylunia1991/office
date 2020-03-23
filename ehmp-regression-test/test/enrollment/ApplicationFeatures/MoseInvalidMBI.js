/**
 * Created by Cherrie
 */
Feature('enrollment - ApplicationFeatures');

var config = require('config');
var ehmp = config.get('EHMP');
var simpleCase = require(process.cwd() +'/utils/moseCase');


Scenario('should show error message when fill invalid MBI', async(I, mosePage) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'  ){
        I.wait(1);console.log("We can't enroll plan on prod!")
    }else{
        I.amOnPage(ehmp + '/ehi/muse-service/fast-apply?allid=GHC41626&qascript=Y&carrierId=55130500&planId=204&segmentId=000&zip=55102&county=RAMSEY&version=2&mboxSession=&codeCriteria1=-1&hideContact=&type=&email=&lname=&fname=&smoker1=&ssacd=&salesRep=&requestFrom=&reqdate=&campaign=&sponsorshipAdListTail=&adobeMrktgCloudId=&gclid=&defaultThrottle=GREEN');
        
        //filled out applicant info
        I.seeInCurrentUrl('/Applicant', 40);
        I.executeScript(simpleCase.autoRun);I.wait(5);

        //filled out Eligibility
        I.seeInCurrentUrl('/Eligibility');
        I.fillField(mosePage.fields.medicareClaimNumber,'A123456');
        I.click(mosePage.fields.parta);
        I.wait(3);
        I.see('Please enter a valid Medicare Number')
        I.fillField(mosePage.fields.medicareClaimNumber,'1EG4-TE5-MK72');
        I.click(mosePage.fields.parta);
        I.wait(3);
        I.see('Please enter a valid Medicare Number')
        I.fillField(mosePage.fields.medicareClaimNumber,'1QW1-QW1-QW11');
        I.click(mosePage.fields.parta);
        I.wait(3);
        I.dontSee('Please enter a valid Medicare Number');
       
    }

});

