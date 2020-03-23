Feature('MDC Tracking');

var config = require('config');
var domain = config.get('MDC');
var moment = require('moment-timezone');

Scenario('should check tracking for main page of MDC', {retries: 0}, async(I) => {

    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't get tracking on prod!")
    }else{
        
        //Load the Main Page for medicare
        I.amOnPage(domain );
        I.refreshPage();
         
        I.seeInCurrentUrl('medicare.com');
        //waitimg for the plugin to load
        I.wait(3);
        I.waitForVisible('#loadComplete',30);//wait for plugin
        //get report name by time
        let time = await moment().tz('America/Los_Angeles').format('YYYY-MM-DD-HH');
        let filePath = 'file:///C://Users//trackUser//Downloads//medicare.mdc.' + time +'.html'
        // let filePath = 'file:///C://Users//apanicker//Downloads//medicare.mdc.' + time +'.html'

        //create report by shift and +
        I.pressKey(['Shift','+']);I.wait(10);//wait 10s for running multiple scripts at the same time
        
        //open report
        I.amOnPage(filePath);I.wait(2);
        console.log("filename: " + filePath );

        //adding assertion 
        I.see('pageName: "medicarecom:"');

    }
});