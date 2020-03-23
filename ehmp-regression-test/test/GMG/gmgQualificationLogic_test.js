Feature('GMG');

var config = require('config');
var domain = config.get('GMG');
var assert = require('assert');

Scenario('Texas Zip code is not able to continue', async function(I,gmgShoppingPage){
    I.amOnPage(domain);
    startShoppingFlow(I,gmgShoppingPage);
    zipCodeValidation(I,gmgShoppingPage,'78727','We see you are in Texas');
});

Scenario('Hawaii Zip code is showing unserviced message', async function(I,gmgShoppingPage){
    I.amOnPage(domain);
    startShoppingFlow(I,gmgShoppingPage);
    zipCodeValidation(I,gmgShoppingPage,'96701','Hawaii. Unfortunately, we do not have any plans');
});

Scenario('Zip code is associated with multiple counties', async function(I,gmgShoppingPage){
    I.amOnPage(domain);
    startShoppingFlow(I,gmgShoppingPage);
    zipCodeValidation(I,gmgShoppingPage,'42223','This zip code is associated with multiple counties');
});

Scenario('User is not yet 65 years old', async function(I,gmgShoppingPage){
    I.amOnPage(domain);
    startShoppingFlow(I,gmgShoppingPage);
    fillQualifiersForm(I,gmgShoppingPage,'90089','1','1','1975');
    I.see('Looks like you\'re not yet 65!');
 
});

Scenario('User has medical conditions and is declined', async function(I,gmgShoppingPage){
    I.amOnPage(domain);
    startShoppingFlow(I,gmgShoppingPage);
    fillQualifiersForm(I,gmgShoppingPage,'90089','1','1','1945');
    I.scrollTo('//span[contains(text(),"HIV")]',0,-150);
    I.click('HIV');
    I.click(gmgShoppingPage.qualifiersPageElements.doIQualifyButton);
    I.see('You may not qualify for a Medicare Supplement');
});

Scenario('User is in OEP', async function(I,gmgShoppingPage){
    I.amOnPage(domain);
    startShoppingFlow(I,gmgShoppingPage);
    fillQualifiersForm(I,gmgShoppingPage,'90089','11','1','1954');
    I.see('You\'re in Open Enrollment for a Medicare Supplement!');
});

Scenario('User not yet qualify', async function(I,gmgShoppingPage){
    I.amOnPage(domain);
    startShoppingFlow(I,gmgShoppingPage);
    fillQualifiersForm(I,gmgShoppingPage,'90089','11','1','1974');
    I.see('Sorry, you don\'t qualify yet!');
    
});

Scenario('New York User not seeing Medical conditions question', async function(I,gmgShoppingPage){
    I.amOnPage(domain);
    startShoppingFlow(I,gmgShoppingPage);
    fillQualifiersForm(I,gmgShoppingPage,'12345','11','1','1974');
    I.dontSee('Do you have any of the following medical conditions');
});

Scenario('No Plans Available for information provided', async function(I,gmgShoppingPage){
    I.amOnPage(domain);
    startShoppingFlow(I,gmgShoppingPage);
    fillQualifiersForm(I,gmgShoppingPage,'35005','11','1','1974');
    I.click(gmgShoppingPage.qualifiersPageElements.selectAPlanButton);
    I.waitForElement('//span[contains(text(),"Please give us a call")]');
});

Scenario('Fast Apply URL with marketing parameters persist when redirect to EHMP', async function(I,gmgShoppingPage){
    I.amOnPage(domain+"?msclkid=TestOne&gclid=TestTwo");
    startShoppingFlow(I,gmgShoppingPage);
    fillQualifiersForm(I,gmgShoppingPage,'12345','11','1','1974');
    I.click(gmgShoppingPage.qualifiersPageElements.selectAPlanButton);
    selectPlan(I,gmgShoppingPage,'Plan K');
    I.click(gmgShoppingPage.carrierSelectionPageElements.firstViewSumaryLink);
    I.click(gmgShoppingPage.summaryPageElements.enrollNowButton);
    I.waitForElement(gmgShoppingPage.summaryPageElements.goToSecureEnrollmentButton);
    I.click(gmgShoppingPage.summaryPageElements.goToSecureEnrollmentButton);
    I.switchToNextTab();
    I.waitForElement(gmgShoppingPage.EHMPWebElements.applicantSection.firstNameField,15);
    I.seeInCurrentUrl('gclid=TestTwo&msclkid=TestOne&CIDO');
});

Scenario('Phone number in header match with Phone number in Qualifiers form', async function(I,gmgShoppingPage){
    I.amOnPage(domain);
    startShoppingFlow(I,gmgShoppingPage);
    I.fillField(gmgShoppingPage.qualifiersPageElements.zipCodeField,'75051');
    I.click(gmgShoppingPage.qualifiersPageElements.dateField.monthField);
    let headerPhone = await I.grabTextFrom(gmgShoppingPage.homePageElements.headerPhoneNumber);
    I.waitForElement('//a[@class="gmg-phone gmg-traceable-phone--link"]');
    let qualifiersPhone = await I.grabTextFrom('//a[@class="gmg-phone gmg-traceable-phone--link"]');
    headerPhone = headerPhone.split('.').join('');
    qualifiersPhone = qualifiersPhone.split(/\(|\)|\-| /).join('').substr(1);
    assert(headerPhone == qualifiersPhone, "Numbers are not the same")
    if(headerPhone == qualifiersPhone){
        I.say("Numbers are the same");
    }
});

Scenario('MACRA Plans not available F, C, FHD', async function(I,gmgShoppingPage){
    I.amOnPage(domain);
    startShoppingFlow(I,gmgShoppingPage);
    fillQualifiersForm(I,gmgShoppingPage,'90089','1','1','1955');
    I.click(gmgShoppingPage.qualifiersPageElements.selectAPlanButton);
    I.waitForElement('//h3[contains(text(),"Plan F")]');
    I.seeCssPropertiesOnElements('//h3[contains(text(),"Plan F")]/ancestor::header', { 'background-color': "#f5f5f4"});
    I.seeCssPropertiesOnElements('//h4[contains(text(),"Plan C")]/ancestor::header', { 'background-color': "#f5f5f4"});
    I.seeCssPropertiesOnElements('//h4[contains(text(),"Plan F High Deductible")]/ancestor::header', { 'background-color': "#f5f5f4"});
});

Scenario('Only telephonic enrollment', async function(I,gmgShoppingPage){
    I.amOnPage(domain);
    startShoppingFlow(I,gmgShoppingPage);
    fillQualifiersForm(I,gmgShoppingPage,'90089','1','1','1954');
    I.click(gmgShoppingPage.qualifiersPageElements.selectAPlanButton);
    selectPlan(I,gmgShoppingPage,'Plan F');
    I.click('//span[contains(text(),"Loyal American Life")]/following::span[contains(text(),"Enroll Now")]');
    I.waitForElement('//a[@class="gmg-phone gmg-phone-link invocaTelLink"]');
    I.dontSee('//span[contains(text(),"Enroll at eHealthMedicarePlans.com")]');
    I.click('//i[@class="gmg-icon-close"]');
    I.wait(3);
    I.click('//span[contains(text(),"Loyal American Life")]/following::span[contains(text(),"View Summary")]');
    I.waitForElement('//a[@class="gmg-phone gmg-traceable-phone--link invocaTelLink"]');
    I.dontSee('//div[@class="plan-summary__button"]');
});

Scenario('Qualifiers form information stored, from summary back to Qualifiers', async function(I,gmgShoppingPage){
    I.amOnPage(domain);
    startShoppingFlow(I,gmgShoppingPage);
    fillQualifiersForm(I,gmgShoppingPage,'90089','1','1','1954');
    I.click(gmgShoppingPage.qualifiersPageElements.selectAPlanButton);
    selectPlan(I,gmgShoppingPage,'Plan F');
    I.waitForElement('//h3[contains(text(),"Plan F")]');
    I.click(gmgShoppingPage.carrierSelectionPageElements.firstViewSumaryLink);
    I.click('//div[@class="gmg-stepper"]//li[1]');
    let zipCode = await I.grabValueFrom(gmgShoppingPage.qualifiersPageElements.zipCodeField);
    assert(zipCode == '90089', "Zip code is not the same");
    let month = await I.grabValueFrom(gmgShoppingPage.qualifiersPageElements.dateField.monthField);
    assert(month == 1, "Month is not the same");
    let day = await I.grabValueFrom(gmgShoppingPage.qualifiersPageElements.dateField.dayField);
    assert(day == 1, "Day is not the same");
    let year = await I.grabValueFrom(gmgShoppingPage.qualifiersPageElements.dateField.yearField);
    assert(year == 1954, "Year is not the same");
    I.seeCheckboxIsChecked('//label[@for="genderRadioOption1_group"]/input');
    I.seeCheckboxIsChecked('//label[@for="tobaccoRadioOption2_group"]/input');
    I.say('Information was stored correctly');
});

Scenario('Shopping flow tool-tips', async function(I,gmgShoppingPage){
    I.amOnPage(domain);
    startShoppingFlow(I,gmgShoppingPage);
    fillQualifiersForm(I,gmgShoppingPage,'90089','1','1','1954');
    I.scrollTo(gmgShoppingPage.qualifiersPageElements.zipCodeField,0,-150);
    I.click('//span[contains(text(),"What\'s your ZIP Code?")]/following::button');
    I.see('Your ZIP Code will help us');
    I.click('//b[contains(text(),"Part B")]/following::button');
    I.see('you must be enrolled in Medicare Part B');
    I.click('//b[contains(text(),"Part A")]/following::button');
    I.see('you must also be enrolled in Medicare Part A');
    I.click('//span[contains(text(),"Do you have any of the following medical condition")]/following::button');
    I.see('Pre-existing conditions can impact your qualifications');
    I.click('//span[contains(text(),"What\'s your gender?")]/following::button');
    I.see('rates may differ based on your gender');
    I.click('//span[contains(text(),"Have you used any tobacco products in the past yea")]/following::button');
    I.see('cigarettes, cigars, e-cigarettes, or chewing tobacco');
    I.click(gmgShoppingPage.qualifiersPageElements.selectAPlanButton);
    I.waitForElement('//h3[contains(text(),"Plan F")]');
    I.click('//i[@class="gmg-icon-chevron-down"]');
    I.click('//h3[contains(text(),"Plan F")]/following::button[@class="gmg-popover__trigger"]');
    I.see('Your monthly premium is the amount you will pay');
    I.click('((//div[contains(text(),"Not Available")])[1]/following::button[@class="gmg-popover__trigger"])[1]');
    I.see('this particular Medicare Supplement plan is not available');
    I.scrollTo(gmgShoppingPage.planSelectionPageElements.firstPlanSelectButton,0,-150);
    I.click(gmgShoppingPage.planSelectionPageElements.firstPlanSelectButton);
    I.click('(//div[@id="gmg-list-row_0"]/following::button[contains(@class, "details-button")])[1]');
    I.waitForText('From the carrier');
});


//Common methods
function startShoppingFlow(I,gmgShoppingPage){
    I.seeElement(gmgShoppingPage.homePageElements.homePageHeader);
    I.click(gmgShoppingPage.homePageElements.findYourPlanHeaderButton);
    I.click(gmgShoppingPage.qualifiersPageElements.letsStartButton);
}

function zipCodeValidation(I,gmgShoppingPage,zipcode,message){
    I.fillField(gmgShoppingPage.qualifiersPageElements.zipCodeField,zipcode);
    I.click(gmgShoppingPage.qualifiersPageElements.dateField.monthField);
    I.waitForText(message);
}

function fillQualifiersForm(I,gmgShoppingPage,zipcode,month,day,year){
    I.fillField(gmgShoppingPage.qualifiersPageElements.zipCodeField,zipcode);
    I.fillField(gmgShoppingPage.qualifiersPageElements.dateField.monthField,month);
    I.fillField(gmgShoppingPage.qualifiersPageElements.dateField.dayField,day);
    I.fillField(gmgShoppingPage.qualifiersPageElements.dateField.yearField,year);
    I.waitForElement(gmgShoppingPage.qualifiersPageElements.usStateText,10);
    I.click(gmgShoppingPage.qualifiersPageElements.zipCodeField);
    I.click(gmgShoppingPage.qualifiersPageElements.doIQualifyButton);
    I.scrollTo(gmgShoppingPage.qualifiersPageElements.maleGenderRadioButton,0,-150);
    I.waitForElement(gmgShoppingPage.qualifiersPageElements.maleGenderRadioButton,10);
    I.checkOption(gmgShoppingPage.qualifiersPageElements.maleGenderRadioButton);
    I.checkOption(gmgShoppingPage.qualifiersPageElements.NoTobaccoRadioButton);
};

function selectPlan(I,gmgShoppingPage,planName){
    I.waitForElement('//h2[contains(text(),"Top plans")]');
    if(planName != 'Plan F' && planName != 'Plan G' && planName != 'Plan N'){
        I.click('//h4[contains(text(),"'+planName+'")]/following::i[@class="gmg-icon-chevron-down"]');
        I.click('(//h4[contains(text(),"'+planName+'")]/following::button[contains(@data-wa-link,"Select This Plan")])[1]');
    }else{
        I.click('(//h3[contains(text(),"'+planName+'")]/following::button[contains(@data-wa-link,"Select This Plan")])[1]');
    }
}
