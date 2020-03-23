Feature('enrollment - non-mose');

var config = require('config');
var EHMPdomain = config.get('EHMP');
var simpleCase = require(process.cwd() +'/utils/simpleCase');
var planDetails = require(process.cwd() +'/data/planDetailsV2.js')();

Data(planDetails.clickOff).Scenario('clickoff application test_Alisa', async(I, current) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'  ){
        console.log("We can't enroll plan on prod!")
    }else{
        I.amOnPage(EHMPdomain + current.url);

        //click enroll
        I.waitForVisible('#breadcrumb-back', 20);I.wait(1);
        I.executeScript(simpleCase.autoRun);I.wait(1);

        //start app on plan review
        // I.waitForVisible('#ehimcPlanReviewView', 40);I.wait(1);
        // I.executeScript(simpleCase.autoRun);I.wait(1);

        // redirect to carrier site,verify url contains carrier site
        I.seeInCurrentUrl(current.comment);
    }
});
