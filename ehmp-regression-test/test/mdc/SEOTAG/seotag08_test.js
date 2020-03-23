Feature('SeoTag');


//var assert = require('assert');
var config = require('config');
var domain = config.get('MDC');




Scenario('ENV: ' + process.env.NODE_ENV + 'GCK -ALGO-381 TC-C24659 & ALGO-417 TC-C24660', async (I) => {

    I.amOnPage(domain);
    I.wait(3);


    let url = await I.grabCurrentUrl();
    console.log(`Current URL is [${url}]`);

    //ALGO-381, This scenario verifies "NOODP" should not be present for MDC home page 
    I.dontSeeInSource('<meta name="robots" content="noodp,noindex,noarchive"/>');

    //ALGO -417, This scenario verifies "noindex" should not be present for 'medicare.com' home page 
    if (process.env.NODE_ENV == 'cm' | process.env.NODE_ENV == 'qa') {


        I.seeInSource('<meta name="robots" content="noindex,noarchive" />');

    } else if (process.env.NODE_ENV == 'prod') {

        I.seeInSource('<meta name="robots" content="noarchive" />');
    }
    //ALGO-420, C24660 This scenario verifies robots tag should appear only once in source code
    I.seeNumberOfElements('//meta[@name="robots"]', 1);

});



