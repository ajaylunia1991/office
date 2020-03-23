/**
 * Created by Cassie
 */
Feature('enrollment - mose');

var config = require('config');
var ehmp = config.get('EHMP');
var simpleCase = require(process.cwd() +'/utils/moseCase');

var planDetails = require(process.cwd() +'/data/planDetailsV2.js')();
var assert = require('assert');
var AppSearch = require(process.cwd()+'/utils/AppSearch');

Data(planDetails.aetna).Scenario('MA_aetna_Cassie', async(I, current, mosePage) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'  ){
        I.wait(1)
        console.log("We can't enroll plan on prod!")
    }else{
        I.amOnPage(ehmp + current.url);
        //click enroll
        I.waitForVisible('#breadcrumb-back', 20);I.wait(1);
        I.executeScript(simpleCase.autoRun);I.wait(3);

        //start app on plan review
        // I.waitForVisible('#ehimcPlanReviewView', 40);I.wait(1);
        // I.executeScript(simpleCase.autoRun);I.wait(1);

        //filled out applicant info
        // I.wait(5);
        I.seeInCurrentUrl('/Applicant', 40);
        // I.see('Aetna Medicare Prime Plan (HMO)');
        I.executeScript(simpleCase.autoRun);I.wait(5);

        //filled out Eligibility
        I.seeInCurrentUrl('/Eligibility');
        I.executeScript(simpleCase.autoRun);I.wait(5);

        //filled out Submit
        I.seeInCurrentUrl('/Submit');
        mosePage.checkAndEditReviewForm();
        I.executeScript(simpleCase.autoRun);I.wait(10);
        I.seeInCurrentUrl('/Congratulations');
        I.dontSee('Please call us to complete your application');
        let APPID = await I.grabTextFrom(mosePage.fields.confirmationNo);
        console.log("APPID:"+APPID);
        let rows = await AppSearch.search(APPID,'B2');
        console.log("rows: " + rows);
        assert(rows == 1);
    }

});

