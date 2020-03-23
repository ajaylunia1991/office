Feature('carriersLandingPage');

var config = require('config');
var ehmp = config.get('EHMP');
var ehm = config.get('EHM');
var carrier = require(process.cwd() +'/data/carriersLandingPagesURL.js')();


   Data(carrier.carrier6).Scenario('ENV: ' + process.env.NODE_ENV + ' - Savita - CarrierLanding - Verifies carrier 6 set of URL', async function (I, current,carriersLandingPage) {
          console.log("Verifies carrier set 6 of URLs");
          I.amOnPage(ehmp + '/ehi/medicare/mini-site?allid=' + current.minisiteAllid + '&msType=' + current.msType);
          I.wait(5);
          console.log("Verifying Logo and other components for carrier set 6");
          I.seeInSource(current.logo,5);
          I.seeInCurrentUrl('/v2/ehi/medicare/mini-site?allid=' + current.minisiteAllid + '&msType=' + current.msType + '#/minisite-landing');
          carriersLandingPage.checkingEditBoxes();
          carriersLandingPage.checkingEditLabels();
      })

      Data(carrier.carrier7).Scenario('ENV: ' + process.env.NODE_ENV + ' - Savita - CarrierLanding - Verifies carrier 7 set of URL', async function (I, current,carriersLandingPage) {
          console.log("Verifies carrier set 7 of URL");
          I.amOnPage(ehmp + '/ehi/medicare/mini-site?allid=' + current.minisiteAllid + '&msType=' + current.msType);
          I.wait(5);
          console.log("Verifying Logo and other components for carrier set 7");
          I.seeInSource(current.logo,5);
          I.seeInCurrentUrl('/v2/ehi/medicare/mini-site?allid=' + current.minisiteAllid + '&msType=' + current.msType + '#/minisite-landing');
          carriersLandingPage.checkingEditBoxes();
          carriersLandingPage.checkingEditLabels();
      });





