'use strict';

var  startURL = function(){

	var  startURL = {};

//This URL will navigate to EHMP
	var URL01 = new DataTable(['LandingURL','redirectURL']);
	URL01.add(['/humana-medicare-advantage/','/humana-medicare-all/humana-medicare-advantage']);
URL01.add(['/humana-medicare-dental-coverage/','/humana-medicare-all/humana-medicare-dental-coverage']);
URL01.add(['/humana-medicare-part-d/','/humana-medicare-all/humana-medicare-part-d']);
URL01.add(['/humana-medicare-prescription-drug-plans/','/humana-medicare-all/will-my-medications-be-covered-by-medicare-plan-wit']);
URL01.add(['/humana-medicare-vision-coverage/','/humana-medicare-all/humana-medicare-vision-coverage']);
URL01.add(['/advantage/','/advantage-all/medicare-advantage']);
URL01.add(['/advantage-cost/','/advantage-all/medicare-advantage-plan-costs']);
URL01.add(['/advantage-vs-supplement/','/supplement-all/medicare-advantage-vs-medicare-supplement-plans']);
URL01.add(['/compare-advantage-plans/','/advantage-all/comparing-medicare-advantage-plans']);
URL01.add(['/switching-medicare-advantage-plan/','/advantage-all/switching-medicare-advantage-plan']);
URL01.add(['/does-medicare-cover-assisted-living/','/coverage-all/does-medicare-cover-assisted-living']);
URL01.add(['/does-medicare-cover-cataract-surgery/','/coverage-all/does-medicare-cover-cataract-surgery']);
URL01.add(['/does-medicare-cover-dental/','/coverage-all/does-medicare-cover-dental']);
URL01.add(['/does-medicare-cover-dental-implants/','/coverage-all/does-medicare-cover-dental-implants']);
URL01.add(['/does-medicare-cover-dental-services/','/coverage-all/does-medicare-cover-dental-services']);
URL01.add(['/does-medicare-cover-dentures/','/coverage-all/does-medicare-cover-dentures']);
URL01.add(['/does-medicare-cover-flu-shots/','/coverage-all/does-medicare-cover-flu-shots']);
URL01.add(['/does-medicare-cover-medical-alert-systems/','/coverage-all/does-medicare-cover-medical-alert-systems']);
URL01.add(['/does-medicare-cover-viagra/','/coverage-all/does-medicare-cover-viagra']);
URL01.add(['/does-medicare-cover-vision/','/coverage-all/does-medicare-cover-vision']);
URL01.add(['/medicare-coverage/','/coverage-all/understanding-basics-medicare-coverage']);
URL01.add(['/what-does-medicare-cover/','/coverage-all/what-does-medicare-cover']);
URL01.add(['/apply/','/enrollment-all/apply-for-medicare']);
URL01.add(['/enrollment/','/enrollment-all/medicare-enrollment-periods']);
URL01.add(['/getting-medicare-under-65/','/enrollment-all/getting-medicare-under-65']);
URL01.add(['/initial-enrollment/','/enrollment-all/medicare-initial-enrollment-period']);
URL01.add(['/medicare-enrollment-period/','/enrollment-all/medicare-enrollment-period']);
URL01.add(['/medicare-plan-active/','/enrollment-all/is-your-medicare-plan-active']);
URL01.add(['/open-enrollment/','/enrollment-all/medicare-open-enrollment']);
URL01.add(['/renew-medicare-plan/','/enrollment-all/renew-medicare-plan']);
URL01.add(['/sign-up-for-medicare/','/enrollment-all/signing-up-for-medicare']);

// This URL will Navigate to EHMP
	var URL02 = new DataTable(['LandingURL','redirectURL']);

URL02.add(['/compare-part-d-plans/','/part-d-all/comparing-medicare-part-d-coverage']);
URL02.add(['/part-d/','/part-d-all/medicare-part-d-prescription-drug-coverage']);
URL02.add(['/part-d-cost/','/part-d-all/medicare-part-d-prescription-drug-coverage-costs']);
URL02.add(['/part-d-difference-between-generic-brand-drug/','/part-d-all/medicare-part-d-brand-name-vs-generic-drugs']);
URL02.add(['/part-d-donut-hole/','/part-d-all/medicare-part-d-coverage-gap-donut-hole']);
URL02.add(['/part-d-extra-help/','/part-d-all/medicare-extra-help-program']);
URL02.add(['/part-d-regional-drug-plan/','/part-d-all/medicare-part-d-prescription-drug-plan-offer']);
URL02.add(['/part-d-what-isnt-covered/','/part-d-all/what-if-medicare-does-not-cover-a-drug-i-need']);
URL02.add(['/2016-medicare-premium-and-deductible/','/resources/medicare-premium-deductible-costs-2020']);
URL02.add(['/apply-for-medicare-card/','/resources/request-medicare-replacement-card']);
URL02.add(['/getting-reimbursed-medicare/','/resources/getting-reimbursed-medicare']);
URL02.add(['/how-does-medicare-work/','/resources/how-does-medicare-work']);
URL02.add(['/laminate-medicare-card/','/resources/laminate-medicare-card']);
URL02.add(['/medically-necessary-definition/','/resources/medically-necessary-definition']);
URL02.add(['/medicare-cost/','/resources/medicare-costs']);
URL02.add(['/medicare-gov/','/resources/medicare-gov']);
URL02.add(['/moving-another-state/','/resources/moving-another-state']);
URL02.add(['/part-a/','/resources/medicare-part-a']);
URL02.add(['/part-b/','/resources/medicare-part-b']);
URL02.add(['/what-is-medicare/','/resources/what-is-medicare']);
URL02.add(['/medigap-plan-benefits-chart/','/supplement-all/medigap-plan-benefits-chart']);
URL02.add(['/apply-for-medicare-supplement-plan-after-open-enrollment-period/','/supplement-all/apply-for-medicare-supplement-pl']);
URL02.add(['/can-my-insurance-company-cancel-my-medicare-supplement-plan/','/supplement-all/can-my-insurance-company-cancel-my-m']);
URL02.add(['/compare-supplement-plans/','/supplement-all/compare-medicare-supplement-plans']);
URL02.add(['/difference-between-medicare-supplement-and-medigap-plans/','/supplement-all/difference-between-medicare-supplement-']);
URL02.add(['/does-my-medicare-supplement-plan-cover-my-spouse/','/supplement-all/does-my-medicare-supplement-plan-cover-my-spous']);
URL02.add(['/do-i-need-medicare-supplement-plan-when-i-retire/','/supplement-all/do-i-need-medicare-supplement-plan-when-i-retir']);
URL02.add(['/enroll-in-original-medicare-to-apply-in-medigap/','/supplement-all/enroll-in-original-medicare-to-apply-in-medigap']);
URL02.add(['/find-best-medicare-supplement-plan/','/supplement-all/find-best-medicare-supplement-plan']);
URL02.add(['/how-do-medicare-supplement-plans-work-with-other-medicare-insurance/','/supplement-all/how-do-medicare-supplement-p']);
URL02.add(['/how-much-medicare-supplement-plans-cost/','/supplement-all/how-much-medicare-supplement-plans-cost']);
URL02.add(['/how-much-will-medicare-supplement-plans-save-me/','/supplement-all/how-much-will-medicare-supplement-plans-save-me']);

//This URL has different logic, it won't take user to EHMP. will just show a pop up 'thank you' page after you fill out the lead form
	var URL03 = new DataTable(['LandingURL','redirectURL']);
URL03.add(['/medicare-supplement-and-msa-plans/','/supplement-all/medicare-supplement-and-msa-plans']);
URL03.add(['/medicare-supplement-for-low-income/','/supplement-all/medicare-supplement-help-low-income']);
URL03.add(['/medigap/','/supplement-all/medigap-plans']);
URL03.add(['/pay-for-medicare-supplement-plan/','/supplement-all/pay-for-medicare-supplement-plan']);
URL03.add(['/steps-buying-medicare-supplement-plans/','/supplement-all/steps-buying-medicare-supplement-plans']);
URL03.add(['/supplement/','/supplement-all/medicare-supplement-plans']);
URL03.add(['/supplement-and-coverage-of-pre-existing-conditions/','/supplement-all/medicare-supplement-plans-coverage-pre-existi']);
URL03.add(['/supplement-and-medical-underwriting/','/supplement-all/medicare-supplement-plans-and-medical-underwriting']);
URL03.add(['/supplement-and-medicare-advantage-plan-at-the-same-time/','/supplement-all/medicare-supplement-and-medicare-advanta']);
URL03.add(['/supplement-cost/','/supplement-all/medicare-supplement-plan-costs']);
URL03.add(['/supplement-eligibility/','/supplement-all/medicare-supplement-plan-eligibility']);
URL03.add(['/supplement-enrollment/','/supplement-all/medicare-supplement-enrollment']);
URL03.add(['/supplement-free-look-period/','/supplement-all/medicare-supplement-free-look-period']);
URL03.add(['/supplement-insurance-basics/','/supplement-all/medicare-supplement-insurance-basics']);
URL03.add(['/supplement-moving-out-of-state/','/supplement-all/medicare-supplement-moving-out-of-state']);
URL03.add(['/supplement-out-of-pocket-expenses/','/supplement-all/medicare-supplement-out-of-pocket-expenses']);
URL03.add(['/supplement-plan-a/','/supplement-all/medicare-supplement-plan-a']);
URL03.add(['/supplement-plan-b/','/supplement-all/medicare-supplement-plan-b']);
URL03.add(['/supplement-plan-c/','/supplement-all/medicare-supplement-plan-c']);
URL03.add(['/supplement-plan-d/','/supplement-all/medicare-supplement-plan-d']);
URL03.add(['/supplement-plan-f/','/supplement-all/medicare-supplement-plan-f']);
URL03.add(['/supplement-plan-g/','/supplement-all/medicare-supplement-plan-g']);
URL03.add(['/supplement-plan-k/','/supplement-all/medicare-supplement-plan-k']);
URL03.add(['/supplement-plan-l/','/supplement-all/medicare-supplement-plan-l']);
URL03.add(['/supplement-plan-m/','/supplement-all/medicare-supplement-plan-m']);
URL03.add(['/supplement-plan-n/','/supplement-all/medicare-supplement-plan-n']);
URL03.add(['/supplement-plans-and-hospice-care/','/supplement-all/medicare-supplement-insurance-plans-hospice-care']);
URL03.add(['/supplement-plans-f-g-n/','/supplement-all/medicare-supplement-plans-f-g-n']);
URL03.add(['/supplement-premiums-pricing/','/supplement-all/supplement-premiums-pricing']);
URL03.add(['/supplement-prescription-drug-coverage/','/supplement-all/medicare-supplement-plans-medicare-prescription-drug-cover']);
URL03.add(['/switching-medigap-policies/','/supplement-all/should-i-switch-medicare-supplement-policies']);
URL03.add(['/use-my-medicare-supplement-to-pay-my-medicare-part-b-premium/','/supplement-all/can-use-medicare-supplement-pay-med']);
URL03.add(['/what-are-medicare-supplement-guaranteed-issue-rights/','/supplement-all/medicare-supplement-guaranteed-issue-rights']);
URL03.add(['/what-is-supplemental-insurance-for-medicare/','/supplement-all/what-is-supplemental-insurance-for-medicare']);


// submit lead and download PDF
	var URL04 = new DataTable(['LandingURL','redirectURL']);

URL04.add(['/what-to-do-if-medicare-supplement-plan-discontinued/','/supplement-all/what-to-do-if-medicare-supplement-plan-disco']);
URL04.add(['/when-can-i-cancel-medicare-supplement-plan/','/supplement-all/when-can-i-cancel-medicare-supplement-plan']);
URL04.add(['/why-should-i-enroll-in-medicare-supplement-plan/','/supplement-all/why-should-i-enroll-in-medicare-supplement-plan']);
URL04.add(['/alabama/','/medicare-by-state/medicare-in-alabama']);
URL04.add(['/alaska/','/medicare-by-state/medicare-in-alaska']);
URL04.add(['/arizona/','/medicare-by-state/medicare-in-arizona']);
URL04.add(['/arkansas/','/medicare-by-state/medicare-in-arkansas']);
URL04.add(['/california/','/medicare-by-state/medicare-in-california']);
URL04.add(['/colorado/','/medicare-by-state/medicare-in-colorado']);
URL04.add(['/connecticut/','/medicare-by-state/medicare-in-connecticut']);
URL04.add(['/delaware/','/medicare-by-state/medicare-in-delaware']);
URL04.add(['/florida/','/medicare-by-state/medicare-in-florida']);
URL04.add(['/georgia/','/medicare-by-state/medicare-in-georgia']);
URL04.add(['/hawaii/','/medicare-by-state/medicare-in-hawaii']);
URL04.add(['/idaho/','/medicare-by-state/medicare-in-idaho']);
URL04.add(['/illinois/','/medicare-by-state/medicare-in-illinois']);
URL04.add(['/indiana/','/medicare-by-state/medicare-in-indiana']);
URL04.add(['/iowa/','/medicare-by-state/medicare-in-iowa']);
URL04.add(['/kansas/','/medicare-by-state/medicare-in-kansas']);
URL04.add(['/kentucky/','/medicare-by-state/medicare-in-kentucky']);
URL04.add(['/louisiana/','/medicare-by-state/medicare-in-louisiana']);
URL04.add(['/maine/','/medicare-by-state/medicare-in-maine']);
URL04.add(['/maryland/','/medicare-by-state/medicare-in-maryland']);
URL04.add(['/massachusetts/','/medicare-by-state/medicare-in-massachusetts']);
URL04.add(['/michigan/','/medicare-by-state/medicare-in-michigan']);
URL04.add(['/minnesota/','/medicare-by-state/medicare-in-minnesota']);
URL04.add(['/mississippi/','/medicare-by-state/medicare-in-mississippi']);
URL04.add(['/missouri/','/medicare-by-state/medicare-in-missouri']);
URL04.add(['/montana/','/medicare-by-state/medicare-in-montana']);
URL04.add(['/nebraska/','/medicare-by-state/medicare-in-nebraska']);
URL04.add(['/nevada/','/medicare-by-state/medicare-in-nevada']);
URL04.add(['/new-hampshire/','/medicare-by-state/medicare-in-new-hampshire']);
URL04.add(['/new-jersey/','/medicare-by-state/medicare-in-new-jersey']);
URL04.add(['/new-mexico/','/medicare-by-state/medicare-in-new-mexico']);
URL04.add(['/new-york/','/medicare-by-state/medicare-in-new-york']);

	var URL05 = new DataTable(['LandingURL','redirectURL']);
URL05.add(['/north-carolina/','/medicare-by-state/medicare-in-north-carolina']);
URL05.add(['/north-dakota/','/medicare-by-state/medicare-in-north-dakota']);
URL05.add(['/ohio/','/medicare-by-state/medicare-in-ohio']);
URL05.add(['/oklahoma/','/medicare-by-state/medicare-in-oklahoma']);
URL05.add(['/oregon/','/medicare-by-state/medicare-in-oregon']);
URL05.add(['/pennsylvania/','/medicare-by-state/medicare-in-pennsylvania']);
URL05.add(['/rhode-island/','/medicare-by-state/medicare-in-rhode-island']);
URL05.add(['/south-carolina/','/medicare-by-state/medicare-in-south-carolina']);
URL05.add(['/south-dakota/','/medicare-by-state/medicare-in-south-dakota']);
URL05.add(['/tennessee/','/medicare-by-state/medicare-in-tennessee']);
URL05.add(['/texas/','/medicare-by-state/medicare-in-texas']);
URL05.add(['/utah/','/medicare-by-state/medicare-in-utah']);
URL05.add(['/vermont/','/medicare-by-state/medicare-in-vermont']);
URL05.add(['/virginia/','/medicare-by-state/medicare-in-virginia']);
URL05.add(['/washington/','/medicare-by-state/medicare-in-washington']);
URL05.add(['/washington-dc/','/medicare-by-state/medicare-in-washington-dc']);
URL05.add(['/west-virginia/','/medicare-by-state/medicare-in-west-virginia']);
URL05.add(['/wisconsin/','/medicare-by-state/medicare-in-wisconsin']);
URL05.add(['/wyoming/','/medicare-by-state/medicare-in-wyoming']);
URL05.add(['/part-d-all/medicare-part-d-benefits-overview-for-2018/','/part-d-all/medicare-part-d-benefits-overview-for-2020']);
URL05.add(['/resources/medicare-premium-deductible-costs-2018/','/resources/medicare-premium-deductible-costs-2020']);

	startURL.URL01 = URL01;
	startURL.URL02 = URL02;
	startURL.URL03 = URL03;
	startURL.URL04 = URL04;
	startURL.URL05 = URL05;



	return startURL;
}

module.exports = startURL;