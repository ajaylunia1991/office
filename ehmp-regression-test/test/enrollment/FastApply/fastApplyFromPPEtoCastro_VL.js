/**
 * Created by vivian in 2018
 */


Feature('enrollment - FastApply');

var config = require('config');
var domain = config.get('EHM');
var EHMPdomain = config.get('EHMP');
var ReqEffeDate = require(process.cwd()+'/utils/random').getNextMonth();



Scenario('Vivian - fastApplyFromPPEtoCastro_VL, support encLeadId and SEP reason date in PPE', async(I) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
        var URL1 = EHMPdomain + '/ehi/muse-service/fast-apply?allid=EHM39972&codeCriteria1=224582QB&type=MA&zip=90001&carrierId=90157900&planId=4&county=LOS+ANGELES&email=vivian.liu@ehealth.com&campaign=ehmp_singleplan_a&encLeadId=116bdb19251&city=LOS+ANGELES&street=&dob=12/01/1959&gender=&fname=testsfd&lname=testsdfs&smoker1=n&reqdate='+ReqEffeDate+'&boseSessionId=&salesRep=cassiel-1519365181331&requestFrom=PPE&pbdate=01/01/2019&segmentId=000'
        I.amOnPage(URL1);
        I.wait(5);
        I.seeTitleEquals('Applicant Info');// get to 1st app page
        console.log(URL1);
        I.click('.step2');// nav bar to go to second page
        I.wait(5);
        I.seeTitleEquals('Medicare and Coverage Info');   //  see page2 title 
        I.seeInSource('class="sub-form enrollment enrollment-MOV hide" style="display: block !important;"');// see SEP INC is checked
        I.seeInField('#input13','12'); // SEP date is mapped also
        I.seeInField('#input14','18');
        I.seeInField('#input15','2019');
    }
    
  
});


Scenario('Vivian - fastApplyFromPPEtoCastro_VL, support LeadId in PPE', async(I) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
        var URL2 = EHMPdomain + '/ehi/muse-service/fast-apply?applicationFlow=C&allid=EHM39972&carrierId=48131100&planId=560&segmentId=003&zip=48203&county=WAYNE&dob=01/01/1952&gender=M&leadId=10471737&version=2&mboxSession=&codeCriteria1=-1&hideContact=&type=MA&email=&lname=&fname=&smoker1=N&ssacd=&salesRep=vivmedsale&requestFrom=PPE&reqdate='+ReqEffeDate+'&campaign=eHMPlanComparison&sponsorshipAdListTail=&adobeMrktgCloudId=57203756803707544820311782176739127775&gclid=&defaultThrottle=GREEN'
        I.amOnPage(URL2);
        I.seeTitleEquals('Applicant Info');
        I.seeInField('#input1','hjghj');//first name mapped
        I.seeInField('#input3','ghjgj');//last name mapped
        console.log(URL2);
    }
   
});

Scenario('Vivian - fastApplyFromPPEtoCastro_VL, PPE should force app in 1st page even when info is enough to go to 2nd page for MEDI-20515', async(I) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
        var URL3 = EHMPdomain + '/ehi/muse-service/fast-apply?applicationFlow=C&allid=EHM39972&codeCriteria1=&type=MA&zip=48203&carrierId=48131100&planId=560&county=WAYNE&email=vivian.liu@ehealth.com&campaign=eHMPlanComparison&encLeadId=1169fc93951&city=HIGHLAND+PARK&street=testadd&dob=01/01/1941&gender=F&fname=hjghj&lname=ghjgj&smoker1=n&reqdate='+ReqEffeDate+'&segmentId=003&salesRep=vivmedsale&requestFrom=PPE&pbdate='
        I.amOnPage(URL3);
        I.seeTitleEquals('Applicant Info');
        console.log(URL3);
        I.click('Next');
        I.wait (2);
        I.seeTitleEquals('Medicare and Coverage Info');// could get to 2nd page when info is enough in for 1st page
    }
   
});


Scenario('Vivian - astApplyFromPPEtoCastro_VL, support invalid sales rep id in fast apply MEDI-21679', async(I) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
        var URL4 = EHMPdomain + '/ehi/muse-service/fast-apply?applicationFlow=C&allid=EHM39972&codeCriteria1=&type=MA&zip=48203&carrierId=48131100&planId=560&county=WAYNE&email=vivian.liu@ehealth.com&campaign=eHMPlanComparison&encLeadId=1169fc93951&city=HIGHLAND+PARK&street=&dob=&gender=&fname=hjghj&lname=ghjgj&smoker1=n&reqdate='+ReqEffeDate+'&segmentId=003&salesRep=XXXX&requestFrom=PPE&pbdate='
        I.amOnPage(URL4);
        I.seeTitleEquals('Applicant Info');// get to 1st app page
        
    }
    
  
});



Scenario('Vivian - astApplyFromPPEtoCastro_VL,support part A and HICN in  PPE fast apply MEDI-22925', async(I) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
        var URL5 = EHMPdomain + '/ehi/muse-service/fast-apply?applicationFlow=C&allid=EHM39972&codeCriteria1=212569RI&type=MA&zip=90001&carrierId=90133700&planId=119&county=LOS+ANGELES&email=vivian.liu@ehealth.com&campaign=eHMPlanCompareSingle&encLeadId=116bdb19d51&city=LOS+ANGELES&street=&dob=&gender=&fname=afewrwe&lname=awereee&smoker1=n&reqdate='+ReqEffeDate+'&boseSessionId=&segmentId=000&salesRep=vivmedsale&requestFrom=PPE&pbdate='
        I.amOnPage(URL5);
        I.wait(5);
        I.see('Applicant');// get to 1st app page
        I.click('.step2');// nav bar to go to second page
        I.wait(5);
        I.seeTitleEquals('Medicare and Coverage Info');   //  see page2 title 
        I.seeInField('#input1','123456789A'); // HICN is mapped
        I.seeInField('#input3','5'); //part A month is mapped
        I.seeInField('#input4','1998'); //part A year is mapped
        
    }
    
  
});