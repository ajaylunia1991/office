Feature('ehm - Footer');

/* created by
gkatoch */

var config = require('config');
var domain = config.get('EHM');

//This scenario verifies "Redirect EHM careers page to point to workday URL, Testcase -C23287
Scenario('ENV: ' + process.env.NODE_ENV + ' - gkatoch - Redirects -This scenario verifies "Redirect EHM careers page to point to workday URL', async function(I){

    I.amOnPage(domain);
    I.wait(3);

    let url = await I.grabCurrentUrl();
    console.log("I am on EHM url: " + url);
    console.log("I am clicking 'Carrers' in footer");
    I.wait(3);
    
    I.click('Careers', '//footer[@class="footer"]'); //Carrer link in footer
    I.wait(3);
        
    I.seeInCurrentUrl("https://ehealthinsurance.wd5.myworkdayjobs.com/EHI"); // verifying the correct redirection

});