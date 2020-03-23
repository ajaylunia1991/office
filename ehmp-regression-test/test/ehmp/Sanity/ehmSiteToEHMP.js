Feature('ehmp - sanity');

/*
Created by Krystal Lu at 02/06/18
*/

var config = require('config');
var ehmDomain = config.get('EHM');

//EHM to EHMP
Scenario('EHM to EHMP@C12762', {retries: 1},async (I) => {

    I.amOnPage(ehmDomain);I.wait(2);
    I.seeInCurrentUrl('ehealthmedicare.com');I.wait(2);
    let url = await I.grabCurrentUrl();
    // let text1 = await I.grabTextFrom('#end-aep-banner-v1 > div > div > div.banner-title > h1');
    // let text2 = await I.grabTextFrom('#end-aep-banner-twenty-twenty > div > div > div.banner-title > h1');
    console.log(`Current URL is [${url}]`);
    // console.log(`Current page is [${text1}]`);
    // console.log(`Current ehm page is [${text2}]`);
    // if(url.includes('aep') || (text1!=null && text1.includes('AEP')) || (text2!=null && text2.includes('Running Out')) ){
    //     I.waitForElement('#zipCodeBanner', 50);I.wait(2);
    //     I.fillField('#zipCodeBanner', '90001');I.wait(2);
    //     I.executeScript(function() {
    //         $('#shopForPlans').click();//aep2020
    //     });
    // }else{
        I.waitForElement('#zipCodeHomeTopCompare', 50);
        I.fillField('#zipCodeHomeTopCompare', '90001');I.wait(2);
        I.executeScript(function() {
            $('#homeComparePlansTopBtn').click();
        });I.wait(2);
        
    // }
    I.seeInCurrentUrl('ehealthmedicareplans.com');

});

