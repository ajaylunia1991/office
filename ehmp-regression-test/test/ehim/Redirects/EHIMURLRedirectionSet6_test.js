Feature('ehim - Redirect MS Lead Form Page to EHIM home page');



var config = require('config');
var domain = config.get('EHIM');




//ALGO-1386, TC-C23250 

Scenario('ENV: ' + process.env.NODE_ENV + 'gck - Redirect MS Lead Form Page to EHIM home page', async (I) => {

    I.amOnPage(domain + '/get-ms-quotes', 2);
    I.seeInCurrentUrl(domain);
    console.log('user has been redirected to EHIM home page');
});

