Feature('MDC Tracking');

var config = require('config');
var domain = config.get('MDC');
var moment = require('moment-timezone');

Scenario('Sagarika - zipCodeTracking- should check tracking for zipcode of MDC', {retries: 0}, async(I, recommendation_homePage) => {

    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't get tracking on prod!")
    }else{
        
        //Load the Main Page for medicare
        I.amOnPage(domain +'/recommendation');
        //I.refreshPage();
        I.wait(2);

        recommendation_homePage.validateMedicareEligibilitySelections();
        // console.log("Validated Reco recommendation_homePage Elements");
        recommendation_homePage.clickIamNewToMedicare();
        // console.log("Whoo..Whoo...Reco Home Page is up and running");
        recommendation_homePage.clickZipCode();

        I.wait(3);
        I.amOnPage(domain +'/recommendation/#/zipcode');
        //waitimg for the plugin to load
        I.waitForVisible('#loadComplete',30);//wait for plugin
        I.waitForText('Plans vary by location', 40);
        I.wait(3);
       
        //get report name by time
        let time = await moment().tz('America/Los_Angeles').format('YYYY-MM-DD-HH');
        let filePath = 'file:///C://Users//trackUser//Downloads//medicare.zipcode.' + time +'.html'

        //create report by shift and +
        I.pressKey(['Shift','+']);I.wait(10);//wait 10s for running multiple scripts at the same time
        
        //open report
        I.amOnPage(filePath);
        I.wait(2);
        console.log("filename: " + filePath );

        //adding assertion 
        I.see('pageName: "MedicareCom:Recommendation:planAvailability:Location"');

       // I.amOnPage('file:///C://Users//sannapragada//Downloads//medicare.mdc.2019-11-14-14.html');I.wait(2);
          
    }
});