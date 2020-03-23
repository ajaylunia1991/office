Feature('ehmp tracking test');

var config = require('config');
var domain = config.get('EHMP');
var moment = require('moment-timezone');
var randomInfo = require(process.cwd() +'/utils/random').randomInfo();

Scenario('should check tracking for ehmp shopping', {retries: 0}, async(I, censusPage, quotePage, leadPage) => {

    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't get tracking on prod!")
    }else{
        
        //census page
        I.amOnPage(domain + '/?type=MA&defaultThrottle=GREEN&turnOnPlanReview=Y&defaultPlanYear=2020&leadFormEnabled=true&detailCompareRedesign=true');
        I.waitForVisible('#loadComplete',50);//wait for plugin
        censusPage.FillMAMDCensus('90001');
        
        //lead form
        I.waitForVisible('#loadComplete',30);//wait for plugin
        I.waitForVisible('#ehi-txtFirstName', 50);
        leadPage.typeLead(randomInfo.firstName, randomInfo.lastName, randomInfo.phone);
        
        //filter humana
        I.waitForVisible('#loadComplete',30);//wait for plugin
        I.waitForVisible(quotePage.fields.humanaFilter, 50);
        I.checkOption(quotePage.fields.humanaFilter);

        //detail
        I.waitForVisible(quotePage.fields.detailLink, 50);
        I.click(quotePage.fields.detailLink);
        I.wait(2);
        I.seeInCurrentUrl('#plan-benefits');
        I.wait(2);//MS no words like 'Detail Page' and V2 MA/MD no words like"plan details"
        I.click(quotePage.fields.backBtn);
        I.wait(2);
        I.waitForVisible('#loadComplete',30);//wait for plugin

        //compare
        I.waitForVisible(quotePage.fields.compareLabel, 100);
        I.click(quotePage.fields.compareLabel);
        I.waitForVisible(quotePage.fields.compareLink, 50);
        I.click(quotePage.fields.compareLink);
        I.waitForVisible(quotePage.fields.newCompareBack, 50);
        I.seeInCurrentUrl('#plan-compare');
        I.click(quotePage.fields.newCompareBack);
        I.wait(5);  
        I.waitForVisible('#loadComplete',30);//wait for plugin
        
        //enroll humana plan
        I.waitForVisible('#loadComplete',30);//wait for plugin
        I.waitForVisible(quotePage.fields.enrollBtn, 50);
        I.click(quotePage.fields.enrollBtn);
        

        //get leadId from cookie
        let leadId = await I.grabCookie('leadFormId');

         //get report name by time
        let time = await moment().tz('America/Los_Angeles').format('YYYY-MM-DD-HH');
        let filePath = 'file:///C://Users//trackUser//Downloads//medicare.shopping.' + time +'.html'
        
        //create report by shift and +
        I.pressKey(['Shift','+']);I.wait(10);
        
        //open report
        I.amOnPage(filePath);I.wait(2);
        console.log("filename: " + filePath );

        //check standard leadId and new created leadId
        I.see('pageName: \"EHMP:enter zip code:MA\"');
        I.see('events: \"event60,event70,event80:');

        I.see('pageName: \"EHMP:lead\"');
        I.see('events: \"event35:'+leadId.value);

        I.see('pageName: \"EHMP:quote:MA\"');
        I.see('events: \"event50,event61,event71,event81:');

        I.see('pageName: \"EHMP:plan details\"')
        I.see('events: \"prodView\"')

        I.see('pageName: \"EHMP:compare\"')
        I.see('events: \"event30\"')
        
    }
});