/**
 * Created by cherrieg on 09/05/2019.
 */
Feature('mose application');

var config = require('config');
var ehmp = config.get('EHMP');
var simpleCase = require(process.cwd() +'/utils/moseCase');

Scenario('aetna mobile MD flow', async(I,mosePage) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        I.wait(2);
        console.log("We can't enroll plan on prod!")
    }else{
        I.amOnPage(ehmp + '/ehi/muse-service/fast-apply?allid=EHM35770&carrierId=90120700&planId=17&segmentId=000&zip=90001&county=LOS%20ANGELES&leadId=6729498&version=2&mboxSession=&codeCriteria1=-1&hideContact=&type=&email=&lname=&fname=&smoker1=&ssacd=&salesRep=&requestFrom=&reqdate=&campaign=&sponsorshipAdListTail=&adobeMrktgCloudId=&gclid=&defaultThrottle=GREEN&applicationFlow=M&dob=09/01/1951&pbdate=03/2019&qascript=Y');

        //filled out applicant info
        I.wait(5);
        //没办法scroll到元素
        /* I.seeInCurrentUrl('/Applicant', 40);
        // I.executeScript(simpleCase.autoRun);I.wait(5);
        mosePage.fillApplicantInfo('xxx','ccc','M','09/01/1951');
        I.scrollTo('//*[@id="ContactInformation"]/h2');
        mosePage.fillContactInfo('213-213-2111','wer@123.com');
        I.scrollTo(mosePage.fields.mailingAddressCheckBox);
        mosePage.fillMailingAddress('213-213-2111','wer@123.com');
        pause()
        I.click(mosePage.fields.applicantMobileNextBtn);I.wait(2);
        
        //filled out Eligibility
        I.seeInCurrentUrl('/Eligibility');
        I.executeScript(simpleCase.autoRun);I.wait(5);
        
        //filled out Submit
        I.seeInCurrentUrl('/Submit');
        I.executeScript(simpleCase.autoRun);I.wait(10);
        
        I.seeInCurrentUrl('/Congratulations');
        I.dontSee('Try again') */
    }


});

