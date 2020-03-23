Feature('mdc Recommendation page tracking test---created by sagarika');

var config = require('config');
var assert = require('assert');
var domain = config.get('MDC');
var moment = require('moment-timezone');
var simpleCase = require(process.cwd() +'/utils/simpleCase');
var randomInfo = require(process.cwd() +'/utils/random').randomInfo();

Scenario('should check tracking for main page of MDC', {retries: 0}, async(I) => {

    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't get tracking on prod!")
    }else{
        
        //Load the Main Page for medicare
        I.amOnPage(domain +'/recommendation');
        //I.refreshPage();
         
        //waitimg for the plugin to load
        I.waitForVisible('#loadComplete',30);//wait for plugin
        I.waitForText('Which of the following', 40);
        I.wait(3);

       
        //get report name by time
       let time = await moment().tz('America/Los_Angeles').format('YYYY-MM-DD-HH');
        let filePath = 'file:///C://Users//sannapragada//Downloads//medicare.mdcreco.' + time +'.html'

        //create report by shift and +
        I.pressKey(['Shift','+']);I.wait(4);
        
        //open report
        I.amOnPage(filePath);I.wait(2);
        console.log("filename: " + filePath );

        //adding assertion 
        I.see('pageName: "MedicareCom:Recommendation:planAvailability:SelectMedicare"');

       // I.amOnPage('file:///C://Users//sannapragada//Downloads//medicare.mdc.2019-11-14-14.html');I.wait(2);
          
    }
});