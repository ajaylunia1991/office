Feature('reco flow simple tracking test');
var moment = require('moment-timezone');

Scenario('should check tracking for reco flow 1st page', {retries: 0}, async(I) => {
        
    //reco 1st page
    I.amOnPage('https://cmmedicare.wpengine.com//recommendation/#/eligibility/RS1');I.wait(3);
    // I.refreshPage();
    I.waitForVisible('#loadComplete',30);//wait for plugin

    //get report name by time
    let time = await moment().tz('America/Los_Angeles').format('YYYY-MM-DD-HH');
    // let filePath = 'file:///C:/Users/cherrieg/Downloads/medicare.selectMedicare.' + time +'.html'
    let filePath = 'file:///C://Users//trackUser//Downloads//medicare.selectMedicare.' + time +'.html'
    
    //create report by shift and +
    I.pressKey(['Shift','+']);I.wait(10);//wait 10s for running multiple scripts at the same time
    
    //open report
    I.amOnPage(filePath);I.wait(2);
    console.log("filename: " + filePath );

});