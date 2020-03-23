Feature('carriersLandingPage');

var config = require('config');
var ehmp = config.get('EHMP');
var ehm = config.get('EHM');
var carrier = require(process.cwd() +'/data/carriersLandingPagesURL.js')();

    Data(carrier.carrier6).Scenario('ENV: ' + process.env.NODE_ENV + ' - Savita - CarrierLanding - Verifies carrier set 6 of URL', async function (I, current,carriersLandingPage) {
        console.log("Verifies carrier set 6 of URL");
             I.amOnPage(ehmp + '/ehi/medicare/mini-site?allid=' + current.minisiteAllid + '&msType=' + current.msType + '&landingPage=' + current.landingPage + '&shopNow=' + current.shopNow);
             I.wait(5);
        console.log("Verifying Carrier set 6 and other components");
             I.waitForVisible(carriersLandingPage.fields.carrierLogo,5);
             I.seeInSource(current.logo,5);
        carriersLandingPage.checkShopNow();
     });

    Data(carrier.carrier7).Scenario('ENV: ' + process.env.NODE_ENV + ' - Savita - CarrierLanding - Verifies carrier set 7 of URL', async function (I, current,carriersLandingPage) {
        console.log("Verifies carrier set 7 of URL");
              I.amOnPage(ehmp + '/ehi/medicare/mini-site?allid=' + current.minisiteAllid + '&msType=' + current.msType + '&landingPage=' + current.landingPage + '&shopNow=' + current.shopNow);
              I.wait(5);
        console.log("Verifying Carrier set 7 and other components");
              I.waitForVisible(carriersLandingPage.fields.carrierLogo,5);
              I.seeInSource(current.logo,5);

        carriersLandingPage.checkShopNow();
        });

