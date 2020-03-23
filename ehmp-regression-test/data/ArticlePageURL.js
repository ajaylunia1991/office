'use strict';

var ArticlePageURL = function(){

	var ArticlePageURL = {};

//This URL will navigate to category Article page
	var URL01 = new DataTable(['ArticleURL']);
	URL01.add(['/about-medicare/how-to-avoid-medicare-penalties/']);
	URL01.add(['/medicare-advantage/comparing-medicare-advantage-plans/']);
	URL01.add(['/medicare-supplement/does-medicare-advantage-or-medicare-supplement-save-me-more-money/']);
    URL01.add(['/medicare-part-d/comparing-medicare-part-d-plans/']);
    URL01.add(['/enrollment/how-to-help-your-spouse-enroll-in-medicare/']);
    URL01.add(['/coverage/medicare-and-hypoglycemia/']);
    URL01.add(['/administration/how-do-i-qualify-for-medicare/']);
    URL01.add(['/resources/seniors-and-adventure-travel/']);
    URL01.add(['/health/living-with-arthritis-in-your-hands/']);
    URL01.add(['/caregiver-resources/how-do-i-find-a-long-term-care-facility/']);

// This URL will Navigate to state Article page
    var URL02 = new DataTable(['ArticleURL']);
    URL02.add(['/state/alabama-medicare/']);
    URL02.add(['/state/montana-medicare/']);
    URL02.add(['/state/texas-medicare/']);
    URL02.add(['/state/oregon-medicare/']);

	var URL03 = new DataTable(['ArticleURL']);
	URL03.add(['/medicare-advantage/comparing-medicare-advantage-plans/']);
	URL03.add(['/medicare-supplement/does-medicare-advantage-or-medicare-supplement-save-me-more-money/']);
    URL03.add(['/medicare-part-d/comparing-medicare-part-d-plans/']);    

    ArticlePageURL.URL01 = URL01;
    ArticlePageURL.URL02 = URL02;
    ArticlePageURL.URL03 = URL03;

    return ArticlePageURL;
}

module.exports = ArticlePageURL;