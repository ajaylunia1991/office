Feature('Rx Walgreens: Separate Landing Page for Digital Campaign');

var config = require('config');
var domain = config.get('EHM');
var domain1 = config.get('EHMP');
var ehmPage = require('..//..//../pages/ehmPage.js');

//ALGO-1165, Test case- C23208
Scenario('ENV: ' + process.env.NODE_ENV + '- Kripal- Rx Walgreens: Separate Landing Page for Digital Campaign', async function(I) {
I.amOnPage(domain + '/savesmartly');
I.see('Favorites');
I.click(ehmPage.fields.SeeMore);
I.see("*eHealth's Medicare Choice and Impact report examines user sessions from more than 45,000 eHealth Medicare visitors who used the company's Medicare prescription drug coverage comparison tool in the fourth quarter of 2018, including Medicare's 2019 Annual Election Period (October 15 – December 7, 2018).");
I.see('Our shoppers found an average savings of $531/yr*');
I.dontSee("MIMD");
I.seeInSource('meta name="robots" content="noindex,nofollow,noarchive"');
I.fillField(ehmPage.fields.ZipcodeWG, 90001);
I.click(ehmPage.fields.FindPlansWG);
I.wait(2);
I.click(ehmPage.fields.FindPlansWG); //Need to click twice as this does not work on single click or double click
I.wait(5);
let url = await I.grabCurrentUrl();
console.log(`Current URL is [${url}]`);
I.seeInCurrentUrl(domain1 + '/ehi/medicare/mini-site?&allid=wal9892000&msType=msp-walgreens&forceV1=true#quote-plans/MD/90001');
});

