
Feature('ehmp - compare');

var config = require('config');
var EHMP = config.get('EHMP');
var MACompareLink = config.get('MACompareLink');
var MDCompareLink = config.get('MDCompareLink');

Scenario('Carol - V1_1 - V1 compare, MS case ', async(I) =>{
    
        I.amOnPage(EHMP +'?qascript=Y&detailCompareRedesign=false#plan-compare/MS/90001/05200/LOS%20ANGELES/p90130200-69,90107300-61');I.wait(2);
        I.see('Medicare Supplement Insurance Plan Comparison');
        I.see('Monthly Premium');
        I.see('Annual Deductible');
        I.dontSee('Tier 4');
    
    });