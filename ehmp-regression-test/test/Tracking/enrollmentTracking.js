Feature('mose enrollment tracking test');

var config = require('config');
var domain = config.get('EHMP');
var moment = require('moment-timezone');
var simpleCase = require(process.cwd() +'/utils/moseCase');

Scenario('should check tracking for enrollment', {retries: 0}, async(I, mosePage) => {

    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't get tracking on prod!")
    }else{
        
        //app flow through fast apply
        I.amOnPage(domain + '/ehi/muse-service/fast-apply?allid=EHM35770&carrierId=90121400&planId=267&segmentId=000&zip=90001&county=LOS%20ANGELES&dob=01/01/1941&gender=F&pbdate=02/01/2019&padate=02/01/2018&version=2&mboxSession=&codeCriteria1=-1&hideContact=&type=&email=&lname=&fname=&smoker1=false&ssacd=&salesRep=&requestFrom=&reqdate=&campaign=&sponsorshipAdListTail=&adobeMrktgCloudId=13298782195671562740848859814168779580&gclid=&defaultThrottle=GREEN');

        //filled out applicant info
        I.wait(2);
        I.seeInCurrentUrl('/Applicant', 40);
        I.waitForVisible('#loadComplete',30);//wait for plugin
        I.executeScript(simpleCase.autoRun);I.wait(5);

        //filled out Eligibility
        I.seeInCurrentUrl('/Eligibility');
        I.waitForVisible('#loadComplete',30);//wait for plugin
        I.executeScript(simpleCase.autoRun);I.wait(5);

        //filled out Submit
        I.seeInCurrentUrl('/Submit');
        I.waitForVisible('#loadComplete',30);//wait for plugin
        I.executeScript(simpleCase.autoRun);I.wait(5);

        //congrats page
        I.seeInCurrentUrl('/Congratulations');
        I.waitForVisible('#loadComplete',30);//wait for plugin

        let appId = await I.grabTextFrom(mosePage.fields.confirmationNo);
        console.log("appId:"+appId);

        //get report name by time
        let time = await moment().tz('America/Los_Angeles').format('YYYY-MM-DD-HH');
        let filePath = 'file:///C://Users//trackUser//Downloads//medicare.enrollment.' + time +'.html'

        //create report by shift and +
        I.pressKey(['Shift','+']);I.wait(10);//wait 10s for running multiple scripts at the same time
        
        //open report
        I.amOnPage(filePath);I.wait(2);
        console.log("filename: " + filePath );I.wait(2);

        //check standard appId and new created appId
        I.see('v43: "' + appId +'"');

        //check important events
        I.see('pageName: "ehmp:ma:application:section:applicant:page 1"')
        I.see('events: "event93,event63:'+appId+',event73,event83:')

        I.see('pageName: "ehmp:ma:application:section:coverage:page 1"')

        I.see('pageName: "ehmp:ma:application:section:summary"')

        I.see('pageName: "ehmp:ma:application:section:congratulations"')
        I.see('events: "event65:'+appId+',event75,event85:1397744896')
        I.see('purchase,event64:'+appId+',event74,event84:"')

        I.see('pev2: "Question:Enrollee:self"')
          
    }
});