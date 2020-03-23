/**
 * Created by cherrieg on 2019/3/12.
 */

Feature('ehmp - compare');

var config = require('config');
var EHMP = config.get('EHMP');
var MACompareLink = config.get('MACompareLink');
var MDCompareLink = config.get('MDCompareLink');

Scenario('V1 compare, MA case ', async(I) =>{

    I.amOnPage(EHMP +'?qascript=Y&detailCompareRedesign=false'+ MACompareLink);
  	I.waitForElement("//h1[text()='Medicare Advantage Plan Comparison']",10);
    I.see('monthly premium');
    I.see('Overall Star Rating');
    I.see('Medical and Hospital Coverage');
    I.see('Preferred Retail Cost-Sharing');
    I.see('Tier 4');
    I.see('Additional Coverage');
    I.see('General Required Disclaimers');
    I.see('Enroll');
});

Scenario('V1 compare, MD case ',async(I) =>{
    I.amOnPage(EHMP +'?qascript=Y&detailCompareRedesign=false'+ MDCompareLink);
    I.waitForElement("//h1[text()='Medicare Part D Plan Comparison']",10);
    I.see('Overall Star Rating');
    I.see('Preferred Retail Cost-Sharing');
    I.see('Tier 4');
    I.see('Additional Information');
    I.see('Health Plan Disclaimers');
    I.see('Enroll');

});
