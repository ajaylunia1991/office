Feature('mdc - AgentsIndex testing');

//GCK, MEDI-MEDI-20915, C24774

var config = require('config');
var domain = config.get('MDC');

Scenario('ENV:' + process.env.NODE_ENV + 'gck- verifying the agent page should not be getting indexed', async (I) => {


    I.amOnPage(domain + '/agents/steven-mott');
    I.wait(3);
    I.amOnPage(domain + '/agents/steven-mott/123/');
    I.wait(2);
    I.see('Page Not Found');

    I.amOnPage(domain + '/agents/tamera-jackson/');
    I.wait(2);
    I.amOnPage(domain + '/agents/tamera-jackson/hfg');
    I.wait(2);
    I.see('Page Not Found');

    I.amOnPage(domain + '/agents/michael-olmos/');
    I.wait(3);
    I.amOnPage(domain + '/agents/michael-olmos/2020');
    I.wait(2);
    I.see('Page Not Found');

    I.amOnPage(domain + '/agents/pamela-cannaday/');
    I.wait(3);
    I.amOnPage(domain + '/agents/pamela-cannaday/fou9211/');
    I.wait(2);
    I.see('Page Not Found');

    I.amOnPage(domain + '/agents/jory-cross/');
    I.wait(3);
    I.amOnPage(domain + '/agents/jory-cross/e-43ed/');
    I.wait(2);
    I.see('Page Not Found');


})