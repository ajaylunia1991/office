/**
 * Created by cherrieg on 09/29/2019.
 */
Feature('enrollment - non-mose');

var config = require('config');
var EHMPdomain = config.get('EHMP');
var simpleCase = require(process.cwd() +'/utils/simpleCase');
var planDetails = require(process.cwd() +'/data/planDetailsV2.js')();
var assert = require('assert');
var AppSearch = require(process.cwd()+'/utils/AppSearch');

Data(planDetails.cigna_select).Scenario('cigna_select_Cherrie', async(I, current) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa' ){
        I.wait(1)
        console.log("We can't enroll plan on prod!")
    }else{
        I.amOnPage(EHMPdomain + current.url);

        //click enroll
        I.waitForVisible('#breadcrumb-back', 20);I.wait(1);
        I.executeScript(simpleCase.autoRun);I.wait(3);

        //start app on plan review
        // I.waitForVisible('#ehimcPlanReviewView', 40);I.wait(1);
        // I.executeScript(simpleCase.autoRun);I.wait(1);

        //filled out applicant info
        I.waitForText('Applicant Info', 40);I.wait(1);
        I.executeScript(simpleCase.autoRun);

        //filled out coverage info
        I.waitForText('Medicare and Coverage Info', 40);I.wait(1);
        I.executeScript(simpleCase.autoRun);I.wait(5);
        
         //filled out Add Other Valuable Benefits
         if (!!~['Anthem','BCBSMI','BCBSGA','BSCA','Select Health'].indexOf(current.carrierName))
         {
             I.waitForText('Add Other Valuable Benefits', 40);I.wait(1);
             I.executeScript(simpleCase.autoRun);
         }

        //filled out summary
        I.waitForVisible('#summary_submit_btn', 40);I.wait(1);
        I.executeScript(simpleCase.autoRun);

        //check congratulation page
        I.waitForText('Confirmation Number', 40);I.wait(1);
        I.seeTitleEquals('Congratulations');

        // get appid from congrat page and verify app status from DB
        let APPID = await I.grabTextFrom('#main-summary > div > div > p.confirm-info > strong');
        console.log(`[${APPID}]`);
        let rows = await AppSearch.search(`${APPID.slice(20)}`,'B2');
        console.log("rows: " + rows);
        assert(rows == 1);
    }
    
    

});

