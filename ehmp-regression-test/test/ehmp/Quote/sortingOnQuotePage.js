// http://sjprsystst01:8080/qafuntest/caseList.jsp?path=Real_Browser/Medicare%20Product%20Line/Unfiled/EHMP-Sorting%20on%20quote%20page
/**
 * Created by cherrieg on 2019/3/12.
 */

Feature('ehmp - quote');

var config = require('config');
var EHMP = config.get('EHMP');

Scenario('Cherrie - sortingOnQuotePage - check sorting function on quote page ', {retries: 2},async(I,censusPage) =>{

    I.amOnPage(EHMP + '?leadFormEnabled=false&qascript=Y#quote-plans/MA/12345/33650/SCHENECTADY/1/p1');I.wait(1);
    //verify sorting
    I.seeInSource('Monthly Premium');
    //I.seeInSource('Star Ratings');
    I.seeInSource('Company');
    //select 'Company' sorting
    I.click('#ehi-sortByMa');I.wait(1);
    I.selectOption('#ehi-sortByMa', 'Company');
    I.seeInField('select#ehi-sortByMa option[value="0"]','0');I.wait(1);
    //change to ms type and verify sorting is Company
    I.click('#content > div.plan-types-with-counts.hidden-xs.clearfix > div > div.counted-plan-type.ms');I.wait(1);//change to ms type
    I.click('#edit-census > span.hidden-xs');I.wait(1);
    censusPage.EditMSCensus('20635','11/09/1950','10/2016','F','N');I.wait(1);
    I.seeInField('select#ehi-sortByMa option[value="0"]','0');

});