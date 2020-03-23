Feature('enrollment - FastApply');

var config = require('config');
var domain = config.get('EHM');
var EHMPdomain = config.get('EHMP');
var ReqEffeDate = require(process.cwd()+'/utils/random').getNextMonth();



Scenario('Vivian - add back detail link in MS application when from GMG,MEDI-22438', async(I) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
        var URL1 = EHMPdomain + '/ehi/muse-service/fast-apply?allid=EHM35770&carrierId=90130200&planId=75&zip=90001&county=LOS%20ANGELES&dob=01/01/1953&gender=M&pbdate=12/01/2017&leadId=11071509&version=2&mboxSession=&codeCriteria1=-1&hideContact=&type=&email=&lname=&fname=&smoker1=N&ssacd=&salesRep=&requestFrom=&reqdate=&campaign=&sponsorshipAdListTail=&adobeMrktgCloudId=23085088541369469422150316324601502439&gclid=&defaultThrottle=GREEN&origin=GMG&CIDO=513137'
        I.amOnPage(URL1);
        //I.seeTitleEquals('Applicant Info');// get to 1st app page
        //console.log(URL1);
        //I.click('//ul[@id="progress-bar"]/li[2]/a');// nav bar to go to second page
        I.wait(5);
        I.see('Applicant');   //  
        I.seeInCurrentUrl('CIDO=513137'); // make sure the marketing IDs passed to enrollment flow  MEDI-23181 
        I.see('See Details');
        I.click('#main > div.appHead.cf > div.planTittle.cf > a > b');// click  'see details' link
        I.wait(5);
        I.see('Medicare Brochure');
        //I.click('Next');// could submit 2nd page
        //I.wait (3);
        //I.seeTitleEquals('Review and Submit');//could get to summary page
    }
    
  
});

