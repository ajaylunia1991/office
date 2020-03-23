
/**
 * Created by vivian liu on 2019/1/11, for issue MEDI-19690 and MEDI-19953
 */

Feature('enrollment - ApplicationFeatures');

var config = require('config');
var domain = config.get('EHM');
var EHMPdomain = config.get('EHMP');




Scenario('Auto expand collapsed section when error happens', async(I) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
        var URL1 = EHMPdomain + '/ehi/muse-service/fast-apply?applicationFlow=C&allid=med5728000&carrierId=48120800&planId=28&segmentId=000&zip=48203&county=WAYNE&leadId=6711421&version=2&mboxSession=&codeCriteria1=-1&hideContact=&type=&email=&lname=&fname=&smoker1=N&ssacd=&salesRep=&requestFrom=&reqdate=&campaign=&sponsorshipAdListTail=&adobeMrktgCloudId=30408662993599401710117348488482850124&gclid=&defaultThrottle=GREEN'
        
        //Auto expand collapsed section when error happens MEDI-19690 
        I.amOnPage(URL1);
        //console.log(URL1);

        //get to 1st page of App
        I.seeTitleEquals('Applicant Info');
        I.seeInSource('<h2 class="canFold hiddenNext" data-subtitle="ContactInfo">Contact Information (Optional)</h2>');//contact info is not expand
        I.click('#appPage > div:nth-child(3) > h2');//click 'contact info'    
        I.fillField('xfm.av.//app:core-data/app:email','werd@#$were');//enter invalid email address
        I.click('Next'); 
        I.wait(3);
        I.seeInSource('<h2 class="canFold" data-subtitle="ContactInfo">Contact Information (Optional)</h2>');//contact info keeps expand
        I.see('Please enter a valid email address'); 
        

        //Keep Expand/Collapse status regardless page refresh  MEDI-19953
        I.seeInSource('<h2 class="canFold hiddenNext" data-subtitle="OtherInfo">Other Information (Optional)</h2>');//other info is not expand
        I.click('#appPage > div:nth-child(4) > h2'); //click 'other info'  
        I.seeInSource('<h2 class="canFold" data-subtitle="OtherInfo">Other Information (Optional)</h2>');//other info is expand
        I.click('Next');  
        I.seeInSource('<h2 class="canFold" data-subtitle="OtherInfo">Other Information (Optional)</h2>');//other info keeps expand
        
        


        // go to 3rd page 
        I.click('.step3');
        I.wait(3);
        I.click('.review-link');
        I.wait(3);
        I.see('Review Enrollment Form');
        I.wait(3);
        I.click('.page-edit-link');    //get to 1st page of App
        I.wait(3);
        I.seeTitleEquals('Applicant Info');
    }



});



