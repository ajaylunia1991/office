/**
 * Created by cherrieg on 2019/3/12.
 */

Feature('ehmp - quote');

var config = require('config');
var EHMP = config.get('EHMP');

Scenario('Cherrie - switchProdline - click ehealth logo and change plan type on quote page',{retries: 2}, async(I,censusPage) =>{

    I.amOnPage(EHMP + '?leadFormEnabled=false&qascript=Y');I.wait(1);
    //MA census
    censusPage.FillMAMDCensus('90001');I.wait(3);
    //MA Quote, then click ehealth logo to ehm site
    I.click('#nav-logo');I.wait(1);
    I.seeInCurrentUrl('ehealthmedicare.com');I.wait(1);
    I.fillField('#zipCodeHomeTopCompare','90001');I.wait(1);
    I.click('#homeComparePlansTopBtn');I.wait(1);
    I.seeInCurrentUrl('ehealthmedicareplans.com');I.wait(2);
    // I.click('#continue-btn');I.wait(3);
    I.see('Medicare Advantage Plans');
    //change to ms type
    I.click('#content > div.plan-types-with-counts.hidden-xs.clearfix > div > div.counted-plan-type.ms');I.wait(2);//change to ms type
    I.click('#edit-census > span.hidden-xs');I.wait(1);
    censusPage.EditMSCensus('20635','11/09/1950','10/2016','F','N');I.wait(3);
    I.see('Medicare Supplement Insurance Plans');I.wait(1);
    //change to md type 
    I.click('#content > div.plan-types-with-counts.hidden-xs.clearfix > div > div:nth-child(4) > div > div.counted-plan-type-count.md > span');I.wait(3);
    I.see('Medicare Part D Plans');
});