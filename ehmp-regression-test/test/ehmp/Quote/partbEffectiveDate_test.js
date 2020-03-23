Feature('ehmp - quote');

/*
*Created By Cherrie Gong at 11/22/2017
*/

var config = require('config');
var domain = config.get('EHMP');
// console.log( "This is config:" + domain);

Scenario('Cherrie - partbEffectiveDate_test - should update cencus info on quote page successfully@sanity2', (I, censusPage) => {

	I.amOnPage(domain + '/?type=MS&qascript=Y&defaultPlanYear=2019#quote-plans/MS/20001/09000/DISTRICT%20OF%20COLUMBIA/M/false/1940/1/1/11/p1');
    I.wait(3);
    // I.waitForElement(censusPage.fields.editCensus,50);//new edit link
	//I.waitForElement('#edit-info',50);
	 I.click(censusPage.fields.editCensus);

    I.executeScript(function() {
         $('#edit-census > span.hidden-xs').click();
        //$('#edit-info').click();
    });
	censusPage.EditMSCensus('89199','09/01/1950','12/2014','M','Y');
    // I.see('Part B: 01-01-2018','.partBEffectiveDate');

  });
