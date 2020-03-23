Feature('carriersLandingPage');

var config = require('config');
var ehmp = config.get('EHMP');
var ehm = config.get('EHM');
var carrier = require(process.cwd() +'/data/carriersLandingPagesURL.js')();


    Data(carrier.carrier4).Scenario('ENV: ' + process.env.NODE_ENV + ' - Savita - CarrierLanding - Verifies carrier4 set of URL', async function (I, current,carriersLandingPage) {
        console.log("Verifies carrier set 4 of URLs");
        I.amOnPage(ehmp + '/ehi/medicare/mini-site?allid=' + current.minisiteAllid + '&msType=' + current.msType);
        I.wait(5);
        console.log("Verifying Logo and other components for carrier set 4");
        I.waitForVisible(carriersLandingPage.fields.carrierLogo,5);
        I.seeInSource(current.logo,5);
        I.seeInCurrentUrl('/v2/ehi/medicare/mini-site?allid=' + current.minisiteAllid + '&msType=' + current.msType + '#/minisite-landing');
        carriersLandingPage.checkingEditBoxes();
        carriersLandingPage.checkingEditLabels();
    });

    Data(carrier.carrier5).Scenario('ENV: ' + process.env.NODE_ENV + ' - Savita - CarrierLanding - Verifies carrier5 set of URL', async function (I, current,carriersLandingPage) {
        console.log("Verifies carrier set 5 of URLs");
        I.amOnPage(ehmp + '/ehi/medicare/mini-site?allid=' + current.minisiteAllid + '&msType=' + current.msType);
        I.wait(5);
        console.log("Verifying Logo and other components for carrier set 5 ");
        I.seeInSource(current.logo,5);
        I.seeInCurrentUrl('/v2/ehi/medicare/mini-site?allid=' + current.minisiteAllid + '&msType=' + current.msType + '#/minisite-landing');
        carriersLandingPage.checkingEditBoxes();
        carriersLandingPage.checkingEditLabels();
    });



