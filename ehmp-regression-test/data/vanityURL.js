/**
 * Created by supingx on 2019/1/17.   include ehim/ehm/sutter site
 */
'use strict';

var vanityURL = function(){

    var vanityURL = {};

    var vanityURLList = new DataTable(['url', 'text', 'redirectURL']);
    vanityURLList.add(['https://www.cm.ehealthinsurance.com/about-medicare/faq', 'Learn About Medicare', 'https://www.cm.ehealthmedicare.com/faq/']);
    vanityURLList.add(['https://www.cm.ehealthinsurance.com/ehi/medicare/home', 'Medicare Made Easy', 'https://www.cm.ehealthinsurance.com/medicare']);
    vanityURLList.add(['https://www.cm.ehealthinsurance.com/medicare-insurance/', 'Medicare Made Easy', 'https://www.cm.ehealthinsurance.com/medicare']);
    vanityURLList.add(['https://www.cm.ehealthinsurance.com/medicare-insurance/overview/', 'Facts About Medicare', 'https://www.cm.ehealthmedicare.com/about-medicare-articles/facts-about-medicare/']);
    vanityURLList.add(['https://www.cm.ehealthinsurance.com/medicare-insurance/about-medicare/', 'Facts About Medicare', 'https://www.cm.ehealthmedicare.com/about-medicare-articles/facts-about-medicare/']);
    vanityURLList.add(['https://www.cm.ehealthinsurance.com/medicare-insurance/about-medicare/original-medicare/', 'Original Medicare, Part A and Part B', 'https://www.cm.ehealthmedicare.com/original-medicare-articles/original-medicare/']);
    vanityURLList.add(['https://www.cm.ehealthmedicare.com/about-medicare/original-medicare/', 'Original Medicare, Part A and Part B', 'https://www.cm.ehealthmedicare.com/original-medicare-articles/original-medicare/']);
    vanityURLList.add(['https://www.cm.ehealthinsurance.com/medicare-insurance/about-medicare/medicare-part-b/', 'What Is Medicare Part B?', 'https://www.cm.ehealthmedicare.com/original-medicare-articles/medicare-part-b/']);
    vanityURLList.add(['https://www.cm.ehealthinsurance.com/medicare-insurance/medicare-part-c-advantage/', 'About Medicare Advantage (Part C) Plans','https://www.cm.ehealthmedicare.com/medicare-advantage-articles/medicare-advantage-part-c-plans/']);
    vanityURLList.add(['https://www.cm.ehealthinsurance.com/medicare-insurance/medicare-supplement/', 'Medicare Supplement Insurance Plans', 'https://www.cm.ehealthmedicare.com/medicare-supplement-articles/medicare-supplement-insurance-plans/']);
    vanityURLList.add(['https://www.cm.ehealthinsurance.com/medicare-insurance/about-medicare/enrollment/', 'Medicare Enrollment', 'https://www.cm.ehealthmedicare.com/medicare-enrollment-articles/medicare-enrollment/']);
    vanityURLList.add(['https://www.cm.ehealthinsurance.com/medicare-insurance/about-medicare/caregivers/', 'Medicare Information for Caregivers', 'https://www.cm.ehealthmedicare.com/medicare-caregiver-articles/medicare-information-caregivers/']);
    vanityURLList.add(['https://www.cm.ehealthinsurance.com/medicare-insurance/about-medicare/faq/', 'Learn About Medicare', 'https://www.cm.ehealthmedicare.com/faq/']);
    vanityURLList.add(['https://www.cm.ehealthinsurance.com/medicare-insurance/medicare-part-c-advantage/ppo-plans/', 'Medicare Advantage PPO Plans', 'https://www.cm.ehealthmedicare.com/medicare-advantage-articles/medicare-advantage-ppo-plans/']);
    vanityURLList.add(['https://www.cm.ehealthinsurance.com/medicare-insurance/medicare-part-c-advantage/pffs-plans/', 'Medicare Advantage PFFS Plans', 'https://www.cm.ehealthmedicare.com/medicare-advantage-articles/medicare-advantage-pffs-plans/']);
    vanityURLList.add(['https://www.cm.ehealthinsurance.com/ehi/IFPAvailableCarrierForState.ds?state=Maryland&type=MS', 'Medicare in Maryland', 'https://www.cm.ehealthmedicare.com/medicare-by-state/maryland-medicare-plans/']);
    vanityURLList.add(['https://www.cm.eHealthMedicare.com/DentalCoverage', 'Medicare and Dental Coverage', 'https://www.cm.ehealthmedicare.com/medicare-coverage-articles/medicare-dental-coverage/']);
    vanityURLList.add(['https://www.cm.ehealthinsurance.com/ehi/medicare/ehi-state-profile', 'Learn About Medicare', 'https://www.cm.ehealthinsurance.com/medicare/medicare-by-state']);

    var sutterURLList = new DataTable(['url', 'text', 'redirectURL']);
    sutterURLList.add(['https://www.cm.ehealth.com/Sutter','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    sutterURLList.add(['http://www.cm.ehealth.com/Sutter','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    sutterURLList.add(['http://cm.ehealth.com/Sutter','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    //sutterURLList.add(['cm.ehealth.com/Sutter','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    sutterURLList.add(['https://www.cm.ehealth.com/SUTTER','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    sutterURLList.add(['http://www.cm.ehealth.com/SUTTER','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    sutterURLList.add(['http://cm.ehealth.com/SUTTER','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    // sutterURLList.add(['cm.ehealth.com/SUTTER','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    // sutterURLList.add(['www.cm.ehealth.com/SUTTER','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    // sutterURLList.add(['cm.ehealth.com/sutter?allid=sut5495000','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    // sutterURLList.add(['cm.ehealth.com/sutter/?allid=sut5495000','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    // sutterURLList.add(['www.cm.ehealth.com/sutter?allid=sut5495000','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    // sutterURLList.add(['www.cm.ehealth.com/sutter/?allid=sut5495000','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    sutterURLList.add(['http://cm.ehealth.com/sutter?allid=sut5495000','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    sutterURLList.add(['http://cm.ehealth.com/sutter/?allid=sut5495000','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    sutterURLList.add(['http://www.cm.ehealth.com/sutter?allid=sut5495000','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    sutterURLList.add(['http://www.cm.ehealth.com/sutter/?allid=sut5495000','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    sutterURLList.add(['https://www.cm.ehealth.com/sutter?allid=sut5495000','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    sutterURLList.add(['https://www.cm.ehealth.com/sutter/?allid=sut5495000','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    // sutterURLList.add(['cm.ehealth.com/sutter','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    // sutterURLList.add(['cm.ehealth.com/sutter/','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    // sutterURLList.add(['www.cm.ehealth.com/sutter','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    // sutterURLList.add(['www.cm.ehealth.com/sutter/','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    sutterURLList.add(['http://cm.ehealth.com/sutter','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    sutterURLList.add(['http://cm.ehealth.com/sutter/','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    sutterURLList.add(['http://www.cm.ehealth.com/sutter','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    sutterURLList.add(['http://www.cm.ehealth.com/sutter/','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    sutterURLList.add(['https://www.cm.ehealth.com/sutter','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    sutterURLList.add(['https://www.cm.ehealth.com/sutter/','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    sutterURLList.add(['https://www.cm.ehealthmedicare.com/sutter','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    sutterURLList.add(['http://www.cm.ehealthmedicare.com/sutter','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    // sutterURLList.add(['cm.ehealthmedicare.com/sutter','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    // sutterURLList.add(['www.cm.ehealthmedicare.com/Sutter','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    sutterURLList.add(['https://www.cm.ehealthmedicare.com/Sutter','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    sutterURLList.add(['http://www.cm.ehealthmedicare.com/Sutter','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    // sutterURLList.add(['cm.ehealthmedicare.com/Sutter','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    // sutterURLList.add(['www.cm.ehealthmedicare.com/Sutter','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    sutterURLList.add(['https://www.cm.ehealthmedicare.com/SUTTER','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    sutterURLList.add(['http://www.cm.ehealthmedicare.com/SUTTER','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    sutterURLList.add(['http://cm.ehealthmedicare.com/SUTTER','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    // sutterURLList.add(['cm.ehealthmedicare.com/SUTTER','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);
    // sutterURLList.add(['www.cm.ehealthmedicare.com/SUTTER','Sutter Health','https://www.cm.ehealthmedicare.com/medicare-lp-sutter5/']);

    var vanityMonarchURL = new DataTable(['url', 'text', 'redirectURL']); // ALGO-1522 - testcases -C23217
    vanityMonarchURL.add(['/Monarch', 'Find a Medicare', '/?allid=mon11054000']);
    
    var AIG = new DataTable (['url', 'text', 'redirectURL']);
    AIG.add(['/AIG', 'Find a Medicare plan', '/?allid=aig11048000']);

    vanityURL.AIG = AIG;
    vanityURL.vanityURLList = vanityURLList;
    vanityURL.sutterURLList = sutterURLList;
    vanityURL.vanityMonarchURL = vanityMonarchURL; // ALGO-1522 - testcases -C23217

    return vanityURL;
}

module.exports = vanityURL;