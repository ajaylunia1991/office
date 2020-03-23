Feature('ehmp - sanity');

/*
*For OS patch
*Created By Cherrie Gong at 01/10/2018
*/

var config = require('config');
var domain = config.get('EHMP');

var randomInfo = require(process.cwd() +'/utils/random').randomInfo();

// https://sjprmcwc-app-vip:8443/mc-int/actions
// https://sjprmcccwc-app-vip:8443/mc-pci-int/actions
// https://www.cm.ehealthmedicareplans.com/mcws/rs/checker?db=mysql

Scenario('test mysql db @C12765', (I) => {
  I.amOnPage(domain + '/mcws/rs/checker?db=mysql');
  I.see('mysql');
});

Scenario('test oracle db@C12766', (I) => {
  I.amOnPage(domain + '/mcws/rs/checker?db=ehi');
  I.see('ehi');
});

Scenario('test mongo db@C12767', (I) => {
  I.amOnPage(domain + '/mcws/rs/checker?db=mongo');
  I.see('mongo');
});

/*Scenario('test mc-int', (I) => {

  // I.amOnPage('https://sjprmcwc-app-vip:8443/mc-int/actions');
  // I.see('humana-data-integration');
});

Scenario('test mc-pci-int', (I) => {

  // I.amOnPage('https://sjprmcccwc-app-vip:8443/mc-pci-int/actions');
  // I.see('universal-script');
});*/