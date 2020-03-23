Feature('carriersLandingPage');

var config = require('config');
var ehmp = config.get('EHMP');
var ehm = config.get('EHM');
var carrier = require(process.cwd() +'/data/carriersLandingPagesURL.js')();


     Data(carrier.carrier1).Scenario('ENV: ' + process.env.NODE_ENV + ' - Savita - CarrierLanding - Verifies carrier1 set of URL', async function (I, current,carriersLandingPage) {
       console.log("Verifies carrier set 1 of URL");
            I.amOnPage(ehmp + '/ehi/medicare/mini-site?allid=' + current.minisiteAllid + '&msType=' + current.msType + '&landingPage=' + current.landingPage + '&shopNow=' + current.shopNow);
            I.wait(5);
       console.log("Verifying Carrier and other components");
            I.waitForVisible(carriersLandingPage.fields.carrierLogo,5);
            I.seeInSource(current.logo,5);;
            //I.seeInCurrentUrl('/v2/ehi/medicare/mini-site?allid=' + current.minisiteAllid + '&msType=' + current.msType + '&landingPage=' + current.landingPage + '&shopNow=' + current.shopNow + '#/minisite-landing');

        carriersLandingPage.checkShopNow();

     });

       Data(carrier.carrier2).Scenario('ENV: ' + process.env.NODE_ENV + ' - Savita - CarrierLanding - Verifies carrier set 2 of URL', async function (I, current,carriersLandingPage) {
             console.log("Verifies carrier set 2 of URL");
                 I.amOnPage(ehmp + '/ehi/medicare/mini-site?allid=' + current.minisiteAllid + '&msType=' + current.msType + '&landingPage=' + current.landingPage + '&shopNow=' + current.shopNow);
                 I.wait(5);
             console.log("Verifying Carrier and other components");
                 I.waitForVisible(carriersLandingPage.fields.carrierLogo,5);
                 I.seeInSource(current.logo,5);;

             carriersLandingPage.checkShopNow();

     });




