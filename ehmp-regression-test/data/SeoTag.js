'use strict';

var SeoTagURL = function(){

	var SeoTagURL = {};

//This URL will navigate to EHMP
	var URL01 = new DataTable(['TagURL']);
	URL01.add(['/']);


// This URL will Navigate to EHMP
// check the urls like these has canonical tag
var URL02 = new DataTable(['TagURL']);
	URL02.add(['/about-medicare/']);
    URL02.add(['/compare-medicare-plans/']);
    URL02.add(['/articles/']);
URL02.add(['/about-medicare/can-i-get-medicare-if-im-still-working/']);
URL02.add(['/administration/how-do-i-qualify-for-medicare/']);
URL02.add(['/aetna/do-medicare-advantage-plans-from-aetna-cover-routine-dental-services/']);
URL02.add(['/agents/steven-mott/']);
URL02.add(['/anthem/how-can-i-find-healthcare-providers-who-accept-anthem-medicare-plans/']);




var URL03 = new DataTable(['TagURL']);



URL03.add(['/carriers/coventry-health-care/']);
URL03.add(['/coventry/do-coventry-medicare-plans-cover-routine-vision/']);
URL03.add(['/coverage/does-medicare-cover-hyperglycemia/']);
URL03.add(['/faq/will-medicare-costs-go-up/']);
URL03.add(['/health/5-ways-to-feel-beautiful-while-fighting-breast-cancer/']);
URL03.add(['/health/page/9/']);
URL03.add(['/articles/page/40/']);
URL03.add(['/blue-cross-blue-shield/what-medicare-plans-does-blue-cross-blue-shield-of-georgia-offer/']);
URL03.add(['/caregiver-resources/advanced-illness-feeding-tubes-and-ventilators/']);

var URL04 = new DataTable(['TagURL']);

URL04.add(['/humana/how-can-i-find-out-if-my-prescription-drugs-are-covered-by-my-humana-plan/']);
URL04.add(['/medicare-advantage/does-medicare-advantage-cover-overseas-travel/']);
URL04.add(['/medicare-part-d/medicare-and-prescription-drug-coverage-from-an-employer/']);
URL04.add(['/medicare-supplement/four-steps-to-buying-medicare-supplement-plans/']);
URL04.add(['/medicare-supplement/medigap-and-medical-underwriting/']);
URL04.add(['/medicare-supplement-by-state/medicare-supplement-in-south-carolina/']);
URL04.add(['/original-medicare/what-is-a-medicare-fee-schedule/']);
URL04.add(['/state/georgia-medicare/']);
URL04.add(['/unitedhealthcare/do-united-healthcare-medicare-plans-include-routine-dental-coverage/']);
URL04.add(['/plan-recommendation/']);

	SeoTagURL.URL01 = URL01;
	SeoTagURL.URL02 = URL02;
	SeoTagURL.URL03 = URL03;
	SeoTagURL.URL04 = URL04;



	return SeoTagURL;
}

module.exports = SeoTagURL;