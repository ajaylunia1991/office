Feature('ehm - SiteMap');

/**
*old address: https://git.ehealthinsurance.com/projects/MU/repos/automation-tests/browse/ehi-ehim-tests/apps/mdc/mdc/recommendation/test/uitests/recoHomePageTest.js
*/

var config = require('config');
var domain = config.get('EHM');
var ehmp = config.get('EHMP');

var assert = require('assert');


Scenario('ENV: ' + process.env.NODE_ENV + 'Willis - SiteMap', async function (I) {


    if (process.env.NODE_ENV == 'cm' ) {

I.amOnPage(domain　+ '/sitemap_index.xml');
I.wait(2);
I.see("This XML Sitemap Index file contains 4 sitemaps");

I.see("https://www.cm.ehealthmedicare.com/post-sitemap.xml");
I.see("https://www.cm.ehealthmedicare.com/page-sitemap.xml");
I.see("https://www.cm.ehealthmedicare.com/faq-sitemap.xml");
//I.see("https://www.cm.ehealthmedicare.com/glossary-sitemap.xml");
I.see("https://www.cm.ehealthmedicare.com/category-sitemap.xml");


I.amOnPage(domain　+ '/post-sitemap.xml');
I.wait(2);
//I.see("This XML Sitemap contains 434 URLs");
I.see("This XML Sitemap contains 484 URLs"); //updated

I.amOnPage(domain　+ '/page-sitemap.xml');
I.wait(2);
//I.see("This XML Sitemap contains 17 URLs");
I.see("This XML Sitemap contains 12 URLs"); //updated

I.amOnPage(domain　+ '/faq-sitemap.xml');
I.wait(2);
I.see("This XML Sitemap contains 79 URLs");
// Test script of ALGO-818
I.dontSee(" https://www.ehealthmedicare.com/?post_type=faq");


//I.amOnPage(domain　+ '/glossary-sitemap.xml');
//I.wait(2);
//I.see("This XML Sitemap contains 220 URLs");

I.amOnPage(domain　+ '/category-sitemap.xml');
I.wait(2);

//I.see("This XML Sitemap contains 17 URLs");
I.see("This XML Sitemap contains 18 URLs"); // updated

//Test script for ALGO-816
I.dontSee("https://www.ehealthmedicare.com/./");

//Test script for ALGO-914
I.dontSee("https://www.ehealthmedicare.com/faq/medicare-eligibility-faq/"); 
I.dontSee("https://www.ehealthmedicare.com/faq/choosing-medicare-plan-faq/");
I.dontSee("https://www.ehealthmedicare.com/faq/medicare-financial-assistance-faq/");
I.dontSee("https://www.ehealthmedicare.com/faq/medicare-coverage-faq/");
I.dontSee("https://www.ehealthmedicare.com/faq/about-medicare-faq/");
I.dontSee("https://www.ehealthmedicare.com/faq/medicare-costs-faq/");
I.dontSee("https://www.ehealthmedicare.com/faq/medicare-enrollment-faq/");









    }else if(process.env.NODE_ENV == 'prod' ){

    I.amOnPage(domain　+ '/sitemap_index.xml');
    I.wait(2);

    I.see("This XML Sitemap Index file contains 4 sitemaps");
   I.see("https://www.ehealthmedicare.com/post-sitemap.xml");
   I.see("https://www.ehealthmedicare.com/page-sitemap.xml");
   I.see("https://www.ehealthmedicare.com/faq-sitemap.xml");
   //I.see("https://www.ehealthmedicare.com/glossary-sitemap.xml");
   I.see("https://www.ehealthmedicare.com/category-sitemap.xml");


I.amOnPage(domain　+ '/post-sitemap.xml');
I.wait(2);
I.see("This XML Sitemap contains 481 URLs");//updated

I.amOnPage(domain　+ '/page-sitemap.xml');
I.wait(2);
I.see("This XML Sitemap contains 12 URLs"); //updated

I.amOnPage(domain　+ '/faq-sitemap.xml');
I.wait(2);
I.see("This XML Sitemap contains 78 URLs"); //updated

//I.amOnPage(domain　+ '/glossary-sitemap.xml');
//I.wait(2);
//I.see("This XML Sitemap contains 220 URLs");

I.amOnPage(domain　+ '/category-sitemap.xml');
I.wait(2);
I.see("This XML Sitemap contains 18 URLs"); //updated


    }




    
})