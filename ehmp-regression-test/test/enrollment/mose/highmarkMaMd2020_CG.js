/**
 * Created by cherrieg on 09/24/2019.
 */
Feature('enrollment - mose');

var config = require('config');
var EHMPdomain = config.get('EHMP');
var simpleCase = require(process.cwd() +'/utils/moseCase');
var planDetails = require(process.cwd() +'/data/planDetailsV2.js')();
var assert = require('assert');
var AppSearch = require(process.cwd()+'/utils/AppSearch');

Data(planDetails.highmark).Scenario('highmark_Cherrie', async(I,mosePage, current) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'  ){
        I.wait(1);
        console.log("We can't enroll 2020 plan !")
    }else{
        I.amOnPage(EHMPdomain + current.url);

        //click enroll
        I.waitForVisible('#breadcrumb-back', 20);
        I.executeScript(simpleCase.autoRun);I.wait(3);

        //start app on plan review
        // I.waitForVisible('#ehimcPlanReviewView', 40);
        // I.executeScript(simpleCase.autoRun);

         //filled out applicant info
         I.wait(3);
         I.seeInCurrentUrl('/Applicant', 40);
         I.executeScript(simpleCase.autoRun);I.wait(5);
 
         //filled out Eligibility
         I.seeInCurrentUrl('/Eligibility');
         I.executeScript(simpleCase.autoRun);I.wait(5);
 
         //filled out Submit
         I.seeInCurrentUrl('/Submit');
         mosePage.checkAndEditReviewForm();
         I.executeScript(simpleCase.autoRun);I.wait(5);
 
         I.seeInCurrentUrl('/Congratulations');
         I.dontSee('Try again')

        // get appid from congrat page and verify app status from DB
        let APPID = await I.grabTextFrom('body > div.app > div.page-view.container > div > div.confirmation-num-box > p > span');
        console.log(`[${APPID}]`);
        let rows = await AppSearch.search(`${APPID}`,'B2');
        console.log("rows: " + rows);
        assert(rows == 1);
        
    }
    
    });

