Feature('mdc');

/**
*old address: https://git.ehealthinsurance.com/projects/MU/repos/automation-tests/browse/ehi-ehim-tests/apps/mdc/mdc/recommendation/test/uitests/recoHomePageTest.js
*/

var config = require('config');
var domain = config.get('MDC');
var ehmp = config.get('EHMP');

var assert = require('assert');

var randomInfo = require('../../../utils/random').randomInfo();
var leadSearch = require('../../../utils/reco_lead_search');

Scenario('ENV: ' +process.env.NODE_ENV + ' Willis - SiteMapIndextesting@mdcBasic05', async function (I, recommendation_homePage) {


       //validate new sitemap
       I.amOnPage(domain+'/updated_sitemap.xml');
       I.wait(5);


          if(process.env.NODE_ENV == 'cm')
              {


              }

              else if(process.env.NODE_ENV == 'prod')
              {
               I.see("Generated by Screaming Frog SEO Spider 11.3");
                I.see("2019-09-26");

                I.see("https://medicare.com/medicare-part-d/coverage-gap-donut-hole-made-simple/");

                I.see("https://medicare.com/coverage/page/34/");

// there are 1257 URLs but not sure why this element number is 2308.  if it's 2308, we assume it's correct
            I.seeNumberOfElements(recommendation_homePage.fields.SiteMap, 2308);

              }


})


// TestRail C24662
Scenario('MDC: Medicare by state link to be updated on HTML sitemap', (I, mdcHomePage) => {
  I.amOnPage(domain　+ '/state/');
  I.see('Medicare by State')
  I.amOnPage(domain + '/sitemap/');
  I.scrollTo(mdcHomePage.medicareByState);
  I.see('Medicare by State');
})
