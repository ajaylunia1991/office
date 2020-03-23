Feature('enrollment - non-mose');

var config = require('config');
var EHMPdomain = config.get('EHMP');
var planDetails = require(process.cwd() +'/data/planDetailsV2.js')();

Data(planDetails.teleOnly).Scenario('teleOnly_Cherrie', async(I, current) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'   ){
        I.wait(1);
        console.log("We can't enroll MD plan on prod!")
    }else{
        I.amOnPage(EHMPdomain + current.url);

        //click enroll
        I.waitForVisible('#sticky-hdr-pd > div > div.detail-hearder > div.detail-header-function.clear > button', 20);I.wait(1);
        I.click('#sticky-hdr-pd > div > div.detail-hearder > div.detail-header-function.clear > button');I.wait(1);

        //Tele only
        I.waitForText ('Call now to enroll', 40);I.wait(1);
        I.waitForText ('Enrollment for this plan is not yet available on our site', 40);I.wait(1);
        I.click('.overlay-close');I.wait(1);//close popup
    }

});
