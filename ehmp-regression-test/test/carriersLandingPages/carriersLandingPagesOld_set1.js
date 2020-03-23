Feature('carriersLandingPage');

var config = require('config');
var ehmp = config.get('EHMP');
var ehm = config.get('EHM');
var carrier = require(process.cwd() +'/data/carriersLandingPagesURL.js')();

    Data(carrier.carrier1).Scenario('ENV: ' + process.env.NODE_ENV + ' - Savita - CarrierLanding - Verifies carrier1 set of URL', async function (I, current,carriersLandingPage) {
       console.log("Verifies carrier1 set of URL");
       I.amOnPage(ehmp + '/v2/ehi/medicare/mini-site?allid=' + current.minisiteAllid + '&msType=' + current.msType);
       I.wait(5);
       console.log("Verifying Logo and other components");
       I.waitForVisible(carriersLandingPage.fields.carrierLogo,5);
       //I.seeElement(carriersLandingPage.fields.carrieLogo,5);
       I.seeInSource(current.logo,5);
       I.seeInCurrentUrl('/v2/ehi/medicare/mini-site?allid=' + current.minisiteAllid + '&msType=' + current.msType + '#/minisite-landing');
       carriersLandingPage.checkingEditBoxes();
       carriersLandingPage.checkingEditLabels();

     });

    Data(carrier.carrier2).Scenario('ENV: ' + process.env.NODE_ENV + ' - Savita - CarrierLanding - Verifies carrier2 set of URL', async function (I, current,carriersLandingPage) {
       console.log("This verifies carrier set 2 of URLs");
       I.amOnPage(ehmp + '/v2/ehi/medicare/mini-site?allid=' + current.minisiteAllid + '&msType=' + current.msType);
       I.wait(5);
       console.log("Verifying Logo and other components for carrier set2");
       I.waitForVisible(carriersLandingPage.fields.carrierLogo,5);
       I.seeInSource(current.logo,5);
       I.seeInCurrentUrl('/v2/ehi/medicare/mini-site?allid=' + current.minisiteAllid + '&msType=' + current.msType + '#/minisite-landing');
       carriersLandingPage.checkingEditBoxes();
       carriersLandingPage.checkingEditLabels();

     });

