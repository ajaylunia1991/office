Feature('SeoTag - Indexability status');



var config = require('config');
var domain = config.get('MDC');




//canonical tag on 'medicare.com', 'cm.medicare.com' and 'dev.medicare.com' homepage to point to the page URL itself.

Scenario('ENV: ' + process.env.NODE_ENV + ' GCK -ALGO-347, TC-C24658', async (I) => {

    I.amOnPage(domain);
    I.wait(3);


    let url = await I.grabCurrentUrl();
    console.log(`Current URL is [${url}]`);

    I.seeInSource('link rel="canonical" href="' + url + '"');





});

