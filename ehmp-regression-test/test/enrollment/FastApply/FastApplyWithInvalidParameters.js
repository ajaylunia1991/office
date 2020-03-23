Feature('enrollment - FastApply');

var config = require('config');
var EHMPdomain = config.get('EHMP');
var ReqEffeDate = require(process.cwd()+'/utils/random').getNextMonth();


//NON-MOSE
Scenario('Vivian - FA with invalid email', async(I) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
        var URL1 = EHMPdomain + '/ehi/muse-service/fast-apply?allid=ime8364000&planId=1&carrierId=73158000&county=HARRIS&zip=77001&fname=test&lname=imedicare&hicn=16789A&dob=01/01/1940&gender=S&homephone=2132132122&street=abcdefg&city=qwert&email=aatest.com&padate=06/2019&pbdate=06/2019&msclkid=353312'
        I.amOnPage(URL1);
        I.seeTitleEquals('Medicare and Coverage Info');
       
    }
    
  
});


Scenario('Vivian - FA with invalid phone number', async(I) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
        var URL2 = EHMPdomain + '/ehi/muse-service/fast-apply?allid=ime8364000&planId=1&carrierId=73158000&county=HARRIS&zip=77001&fname=test&lname=imedicare&hicn=16789A&dob=01/01/1940&gender=S&homephone=2132122&street=abcdefg&city=qwert&email=aat@est.com&padate=06/2019&pbdate=06/2019&msclkid=353312'
        I.amOnPage(URL2);
        I.seeTitleEquals('Applicant Info');
    }
   
});

Scenario('Vivian - FA with invalid alliance ID', async(I) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
        var URL3 = EHMPdomain + '/ehi/muse-service/fast-apply?allid=ime8364&planId=1&carrierId=73158000&county=HARRIS&zip=77001&fname=test&lname=imedicare&hicn=16789A&dob=01/01/1940&gender=S&homephone=2132132122&street=abcdefg&city=qwert&email=aat@est.com&padate=06/2019&pbdate=06/2019&msclkid=353312'
        I.amOnPage(URL3);
        I.seeTitleEquals('Medicare and Coverage Info');
    }
   
});



//MOSE
Scenario('Vivian - FA with invalid email', async(I) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
        var URL1 = EHMPdomain + '/ehi/muse-service/fast-apply?allid=ime8364000&planId=33&carrierId=73121300&county=HARRIS&zip=77001&fname=test&lname=imedicare&hicn=16789A&dob=01/01/1940&gender=S&homephone=2132132122&street=abcdefg&city=qwert&email=aatest.com&padate=06/2019&pbdate=06/2019&msclkid=353312&applicationFlow=M'
        I.amOnPage(URL1);
        I.see('Applicant Information');
       
    }
    
  
});

Scenario('Vivian - FA with invalid phone number', async(I) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
        var URL2 = EHMPdomain + '/ehi/muse-service/fast-apply?allid=ime8364000&planId=33&carrierId=73121300&county=HARRIS&zip=77001&fname=test&lname=imedicare&hicn=16789A&dob=01/01/1940&gender=S&homephone=2132122&street=abcdefg&city=qwert&email=aat@est.com&padate=06/2019&pbdate=06/2019&msclkid=353312&applicationFlow=M'
        I.amOnPage(URL2);
        I.see('Applicant Information');
    }
   
});

Scenario('Vivian - FA with invalid alliance ID', async(I) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
        var URL3 = EHMPdomain + '/ehi/muse-service/fast-apply?allid=ime8364&planId=33&carrierId=73121300&county=HARRIS&zip=77001&fname=test&lname=imedicare&hicn=16789A&dob=01/01/1940&gender=S&homephone=2132132122&street=abcdefg&city=qwert&email=aat@est.com&padate=06/2019&pbdate=06/2019&msclkid=353312&applicationFlow=M'
        I.amOnPage(URL3);
        I.see('Applicant Information');
    }
   
});