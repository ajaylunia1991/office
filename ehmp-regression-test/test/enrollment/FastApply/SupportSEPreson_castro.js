/**
 * Created by vivian in 2018
 */

Feature('enrollment - FastApply');

var config = require('config');
var domain = config.get('EHM');
var EHMPdomain = config.get('EHMP');
var ReqEffeDate = require(process.cwd()+'/utils/random').getNextMonth();



Scenario('Vivian - SupportSEPreson_castro, support sep reason and date', async(I) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
        var URL1 = EHMPdomain + '/ehi/muse-service/fast-apply?allid=ime8364000&planId=99&carrierId=10133900&county=ALBANY&zip=12250&fname=test&lname=imedicare&dob=01/01/1940&gender=F&homephone=2132132122&street=abcdefg&city=qwert&email=aa@test.com&padate=01/2016&sid=abc123123&sepReason=MOV&sepDate=02/13/2019'
        I.amOnPage(URL1);
        //I.seeTitleEquals('Applicant Info');// get to 1st app page
        //console.log(URL1);
        //I.click('//ul[@id="progress-bar"]/li[2]/a');// nav bar to go to second page
        I.wait(5);
        I.seeTitleEquals('Medicare and Coverage Info');   //  see page2 title 
        I.seeInSource('class="sub-form enrollment enrollment-MOV hide" style="display: block !important;"');// see SEP MOV is checked
        I.seeInField('#input13','02'); // SEP date is mapped also
        I.seeInField('#input14','13');
        I.seeInField('#input15','2019');
        
    }
    
  
});

Scenario('Vivian - SupportSEPreson_castro, support sepReason checkbox checked', async(I) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
        var URL2 = EHMPdomain + '/ehi/muse-service/fast-apply?allid=ime8364000&planId=99&carrierId=10133900&county=ALBANY&zip=12250&fname=test&lname=imedicare&hicn=1EG4TE5MK77&dob=01/01/1940&gender=F&homephone=2132132122&street=abcdefg&city=qwert&email=aa@test.com&padate=01/2016&pbdate=01/2016&sid=abc123123&sepReason=PAP'
        I.amOnPage(URL2);
        I.wait(5);
        I.seeTitleEquals('Medicare and Coverage Info');   //  see page2 title 
        I.checkOption('#r14');// PAP is chcked as SEP reason option
        
    }
    
  
});

/* since Humana changed to mose, mose seems not support sep reason date parameters in url
Scenario('support sepReason and sepDate  in fast apply, Humana case', async(I) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
        var URL3 = EHMPdomain + '/ehi/muse-service/fast-apply?applicationFlow=C&allid=Med40680&carrierId=90121400&planId=251&segmentId=000&zip=90001&county=LOS%20ANGELES&dob=01/01/1944&gender=M&leadId=6694629&sepReason=PAP&sepDate=02/15/2019&version=2&mboxSession=&codeCriteria1=-1&hideContact=&type=&email=&lname=&fname=&smoker1=N&ssacd=&salesRep=&requestFrom=&reqdate=&campaign=&sponsorshipAdListTail=&adobeMrktgCloudId=03824936736187531710347787872429216712&gclid=&defaultThrottle=GREEN&padate=01/2016&pbdate=01/2016&sid=abc123123'
        I.amOnPage(URL3);
        I.wait(5);
        I.seeTitleEquals('Applicant Info') 
        I.click('//ul[@id="progress-bar"]/li[2]/a');// nav bar to go to 2nd page
        I.wait (2);
        I.seeTitleEquals('Medicare and Coverage Info');   //  see 2nd page title 
        I.seeInSource('class="sub-form enrollment enrollment-PAP hide" style="display: block !important;"');// see SEP PAP is checked
        I.seeInField('#input55','02'); // SEP date is mapped also
        I.seeInField('#input56','15');
        I.seeInField('#input57','2019');
        I.seeInField('#input3','1');// part A/B date are mapped also
        I.seeInField('#input4','2016');
        I.seeInField('#input6','1');
        I.seeInField('#input7','2016');
    }


   
});


Scenario('support PartA/B in fast apply should trigger SEP, Humana case', async(I) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
        var URL4 = EHMPdomain + '/ehi/muse-service/fast-apply?applicationFlow=C&allid=Med40680&carrierId=90121400&planId=251&segmentId=000&zip=90001&county=LOS%20ANGELES&dob=01/01/1944&gender=M&leadId=6694629&version=2&mboxSession=&codeCriteria1=-1&hideContact=&type=&email=&lname=&fname=&smoker1=N&ssacd=&salesRep=&requestFrom=&reqdate=&campaign=&sponsorshipAdListTail=&adobeMrktgCloudId=03824936736187531710347787872429216712&gclid=&defaultThrottle=GREEN&padate=01/2017&pbdate=01/2017&sid=abc123123'
        I.amOnPage(URL4);
        I.wait(5);
        I.seeTitleEquals('Applicant Info') 
        I.click('//ul[@id="progress-bar"]/li[2]/a');// nav bar to go to 2nd page
        I.wait (2);
        I.seeTitleEquals('Medicare and Coverage Info');   //  see 2nd page title 
        //I.seeInSource('class="sub-form enrollment enrollment-PAP hide" style="display: block !important;"');// see SEP PAP is checked
        //I.seeInField('#input59','02'); // SEP date is mapped also
        //I.seeInField('#input60','15');
        //I.seeInField('#input61','2019');
        I.see('Special Election Period (SEP) Statements');
        I.seeInField('#input3','1');// part A/B date are mapped also
        I.seeInField('#input4','2017');
        I.seeInField('#input6','1');
        I.seeInField('#input7','2017');
        I.checkOption('#appPage > div:nth-child(4) > ul > li:nth-child(3) > div > span > label');// coulc click SEP radio button like '5ST' so sep would not miss 
    }
});

*/

