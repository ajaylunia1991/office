Feature('enrollment - ApplicationFeatures');

var config = require('config');
var EHMPdomain = config.get('EHMP');
var simpleCase = require(process.cwd() +'/utils/simpleCase');

Scenario('url with throttle=Red, phone number should not display in application page', async(I) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
    I.amOnPage(EHMPdomain + '?defaultThrottle=RED&applicationFlow=C&turnOnPlanReview=Y&previewPeriod=false&isShowPlanYearElement=true&defaultPlanYear=2020&hideEnrollPage=true#plan-benefits/MA/89199/29010/CLARK/H4346/017/000');

        //verify phone number is not present
        I.dontSee('Talk with a licensed agent');
        
        //click enroll
        I.waitForVisible('#breadcrumb-back', 20);I.wait(1);
        I.executeScript(simpleCase.autoRun);I.wait(3);

        //start app on plan review
        //I.waitForVisible('#ehimcPlanReviewView', 40);I.wait(1);
        //I.executeScript(simpleCase.autoRun);I.wait(1);

        //filled out applicant info
        I.waitForText('Applicant Info', 40);I.wait(1);
        I.executeScript(simpleCase.autoRun);

        //go to coverage info page
        I.waitForText('Medicare and Coverage Info', 40);I.wait(1);
        
        //verify phone number is not present
        I.dontSee('Talk with a licensed agent');
        I.dontSee('1-800-299-3116');
            
    }
    });
    