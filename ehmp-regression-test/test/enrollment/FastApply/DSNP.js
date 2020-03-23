Feature('enrollment - FastApply');

var config = require('config');
var domain = config.get('EHM');
var EHMPdomain = config.get('EHMP');
var ReqEffeDate = require(process.cwd()+'/utils/random').getNextMonth();



Scenario('Vivian - DSNP, go to DSNP plan detail page then apply', async(I) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
        var URL1 = EHMPdomain + '/ehi/medicare/fast-quote?allid=Med35908&target=ppe&type=MA&zip=93210&county=FRESNO&ppSaveSessionId=597577HV&email=vivian.liu@ehealth.com&planYear=2020&campaign=ehmp_singleplan_a&agentid=3212&bdate1=&gd1=&fname=fsdfs&lname=sdfsdf&smoker1=n&leadid=1415078&homephone=&reqdate='+ReqEffeDate+'&boseSessionId=b2e426ee574749c2&salesRep=vivmedsale&pbdate=03/01/1988&page=plan-detail&plans=H0544:052:000'      
        I.amOnPage(URL1);
        I.waitForVisible('#breadcrumb-back', 20);I.wait(1);// get to detail page
        I.click('.ehi-btn-enroll');//click enroll button
        I.wait(3);
        //pause ()       
        //I.click('#sticky-hdr-pd > div > div.detail-hearder > div.detail-header-function.clear > button');//click 'Enroll'
        I.waitForText('Applicant Info', 40);I.wait(1);
        I.see('Applicant Info');// get to 1st app page
        //console.log(URL1);
        
    }
    
  
});


Scenario('Vivian - DSNP,enroll DSNP plan directly', async(I) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
        var URL2 = EHMPdomain + '/ehi/muse-service/fast-apply?allid=Med35908&codeCriteria1=597577HV&type=MA&zip=93210&carrierId=90121000&planId=404&county=FRESNO&email=vivian.liu@ehealth.com&campaign=ehmp_singleplan_a&encLeadId=1161597a651&city=COALINGA&street=&dob=&gender=&fname=fsdfs&lname=sdfsdf&smoker1=n&reqdate='+ReqEffeDate+'&boseSessionId=b2e426ee574749c2&salesRep=vivmedsale&requestFrom=PPE&pbdate=03/01/1988&segmentId=000='        
        I.amOnPage(URL2);
        I.wait(5);
        I.see('Applicant Info');
        //console.log(URL2);
    }
   
});

Scenario('Vivian - DSNP plan detail page with invalid bosesessionid would not allow enroll online', async(I) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
        var URL3 = EHMPdomain + '/ehi/medicare/fast-quote?allid=Med35908&target=ppe&type=MA&zip=93210&county=FRESNO&ppSaveSessionId=597577HV&email=vivian.liu@ehealth.com&planYear=2020&campaign=ehmp_singleplan_a&agentid=3212&bdate1=&gd1=&fname=fsdfs&lname=sdfsdf&smoker1=n&leadid=1415078&homephone=&reqdate='+ReqEffeDate+'&boseSessionId=XXXX111&salesRep=vivmedsale&pbdate=03/01/1988&page=plan-detail&plans=H0544:052:000'       
        I.amOnPage(URL3);
        I.waitForVisible('#breadcrumb-back', 20);I.wait(1);// get to detail page but not applicant page
        I.click('.ehi-btn-enroll');//click enroll button
        I.wait(3);
        I.see('Request a call');
        //console.log(URL3);
    }
   
});



