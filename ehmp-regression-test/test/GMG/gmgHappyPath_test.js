Feature('GMG');

var config = require('config');
var domain = config.get('GMG');

Scenario('Happy path can be completed from GMG-EHMP-purchase', async function(I,gmgShoppingPage){
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!");
        I.say("We can't enroll plan on prod!");
    }else{
        I.amOnPage(domain);
        startShoppingFlow(I,gmgShoppingPage);
        fillHappyPathInformation(I,gmgShoppingPage);
        selectFirstPlan(I,gmgShoppingPage);
        //Select specific carrier to pass EHMP Form
        selectSpecificCarrier(I, gmgShoppingPage, 'Blue Shield of California');
        enrollInPlanSummarySection(I,gmgShoppingPage);

        //finishing enrollment on EHMP side
        fillApplicantInformation(I,gmgShoppingPage);
        fillCoverageInformation(I,gmgShoppingPage);
        fillHistoryInformation(I,gmgShoppingPage);
        fillAditionalInformation(I,gmgShoppingPage);
        fillPaymentInformation(I,gmgShoppingPage);
        purchase(I,gmgShoppingPage);
    }

});

// GMG Shopping flow methods
function startShoppingFlow(I,gmgShoppingPage){
    I.seeElement(gmgShoppingPage.homePageElements.homePageHeader);
    I.click(gmgShoppingPage.homePageElements.findYourPlanHeaderButton);
    I.click(gmgShoppingPage.qualifiersPageElements.letsStartButton);
}

function fillHappyPathInformation(I,gmgShoppingPage) {
    I.fillField(gmgShoppingPage.qualifiersPageElements.zipCodeField,'90089');
    I.fillField(gmgShoppingPage.qualifiersPageElements.dateField.monthField,'10');
    I.fillField(gmgShoppingPage.qualifiersPageElements.dateField.dayField,'01');
    I.fillField(gmgShoppingPage.qualifiersPageElements.dateField.yearField,'1954');
    I.waitForElement(gmgShoppingPage.qualifiersPageElements.usStateText,10);
    I.click(gmgShoppingPage.qualifiersPageElements.zipCodeField);
    I.click(gmgShoppingPage.qualifiersPageElements.doIQualifyButton);
    I.scrollTo(gmgShoppingPage.qualifiersPageElements.maleGenderRadioButton,0,-150);
    I.waitForElement(gmgShoppingPage.qualifiersPageElements.maleGenderRadioButton,10);
    I.checkOption(gmgShoppingPage.qualifiersPageElements.maleGenderRadioButton);
    I.checkOption(gmgShoppingPage.qualifiersPageElements.NoTobaccoRadioButton);
    I.click(gmgShoppingPage.qualifiersPageElements.selectAPlanButton);
}

function selectFirstPlan(I,gmgShoppingPage){
    I.waitForElement(gmgShoppingPage.planSelectionPageElements.planFText);
    I.click(gmgShoppingPage.planSelectionPageElements.firstPlanSelectButton);
}

function selectSpecificCarrier(I, gmgShoppingPage, carrierName)
{
    I.waitForElement(gmgShoppingPage.carrierSelectionPageElements.firstViewSumaryLink);
    I.click('(//span[contains(text(),"'+carrierName+'")]//following::span[@class="label-ehealth button-container__green"])[1]');
}

function enrollInPlanSummarySection(I,gmgShoppingPage){
    I.click(gmgShoppingPage.summaryPageElements.enrollNowButton);
    I.waitForElement(gmgShoppingPage.summaryPageElements.goToSecureEnrollmentButton);
    I.click(gmgShoppingPage.summaryPageElements.goToSecureEnrollmentButton);
    I.switchToNextTab();
    I.waitForElement(gmgShoppingPage.EHMPWebElements.applicantSection.firstNameField,30);
}

//EHMP fast apply methods
function fillApplicantInformation(I,gmgShoppingPage){
    I.fillField(gmgShoppingPage.EHMPWebElements.applicantSection.firstNameField,'john');
    I.fillField(gmgShoppingPage.EHMPWebElements.applicantSection.lastNameField,'smith');
    I.fillField(gmgShoppingPage.EHMPWebElements.applicantSection.streetField,'main st 23');
    I.fillField(gmgShoppingPage.EHMPWebElements.applicantSection.cityField,'buffalo');
    I.fillField(gmgShoppingPage.EHMPWebElements.applicantSection.phoneField,'1211212121');
    I.fillField(gmgShoppingPage.EHMPWebElements.applicantSection.email,'test@ehealthqa.com');
    I.click(gmgShoppingPage.EHMPWebElements.applicantSection.nextButton);
    I.waitForElement(gmgShoppingPage.EHMPWebElements.medicareInformationSection.medicareCardExampleImg,10);
    I.fillField(gmgShoppingPage.EHMPWebElements.medicareInformationSection.claimNumberField,'2A22A22AA22');
    I.selectOption(gmgShoppingPage.EHMPWebElements.medicareInformationSection.partAMonth,'November');
    I.selectOption(gmgShoppingPage.EHMPWebElements.medicareInformationSection.partAYear,'2018');
    I.selectOption(gmgShoppingPage.EHMPWebElements.medicareInformationSection.partBMonth,'November');
    I.selectOption(gmgShoppingPage.EHMPWebElements.medicareInformationSection.partBYear,'2018');
    I.selectOption(gmgShoppingPage.EHMPWebElements.medicareInformationSection.effectiveDate, '02/01/2020');
    I.wait(2);
    I.scrollTo(gmgShoppingPage.EHMPWebElements.applicantSection.nextButton,0,-150);
    I.click(gmgShoppingPage.EHMPWebElements.applicantSection.nextButton);
}

function fillCoverageInformation(I,gmgShoppingPage){
    I.waitForElement(gmgShoppingPage.EHMPWebElements.coverageSection.listOfQuestions,10);
    answerNoToAllRadioButtons(I,gmgShoppingPage.EHMPWebElements.coverageSection.noRadioDynamicButton, gmgShoppingPage.EHMPWebElements.coverageSection.radioButtonSize);
    I.click(gmgShoppingPage.EHMPWebElements.applicantSection.nextButton);
    I.waitForElement(gmgShoppingPage.EHMPWebElements.coverageSection.otherInformationcontainer,10);
    I.click(gmgShoppingPage.EHMPWebElements.coverageSection.noRadioDynamicButton.replace('*',2));
    I.click(gmgShoppingPage.EHMPWebElements.applicantSection.nextButton);
    I.waitForElement(gmgShoppingPage.EHMPWebElements.coverageSection.otherInformationcontainer,10);
}

function fillHistoryInformation(I,gmgShoppingPage){
    answerNoToAllRadioButtons(I,gmgShoppingPage.EHMPWebElements.coverageSection.noRadioDynamicButton, gmgShoppingPage.EHMPWebElements.historySection.radioButtonSize);
    I.click(gmgShoppingPage.EHMPWebElements.applicantSection.nextButton);
    I.waitForElement(gmgShoppingPage.EHMPWebElements.coverageSection.otherInformationcontainer,10);
}

function answerNoToAllRadioButtons(I,dinamycID,size){
    let id=0;
    for(let i=1; i <= size; i+=1){
        I.click(dinamycID.replace('*',id+=2));
    }
}

function fillAditionalInformation(I,gmgShoppingPage){
    I.click(gmgShoppingPage.EHMPWebElements.additionalSection.checkbox);
    answerNoToAllRadioButtons(I,gmgShoppingPage.EHMPWebElements.coverageSection.noRadioDynamicButton, gmgShoppingPage.EHMPWebElements.additionalSection.radioButtonSize);
    I.click(gmgShoppingPage.EHMPWebElements.applicantSection.nextButton);
    I.click(gmgShoppingPage.EHMPWebElements.applicantSection.nextButton);
    I.click(gmgShoppingPage.EHMPWebElements.applicantSection.nextButton);
}

function fillPaymentInformation(I,gmgShoppingPage){
    I.waitForElement(gmgShoppingPage.EHMPWebElements.coverageSection.otherInformationcontainer,10);
    I.click(gmgShoppingPage.EHMPWebElements.paymentSection.paperBillRadioButton);
    I.click(gmgShoppingPage.EHMPWebElements.applicantSection.nextButton);
}

function purchase(I,gmgShoppingPage){
    I.waitForElement(gmgShoppingPage.EHMPWebElements.summarySection.continueButton,5);
    I.click(gmgShoppingPage.EHMPWebElements.summarySection.continueButton);
    I.waitForElement(gmgShoppingPage.EHMPWebElements.summarySection.iUnderstandCheckbox1,10);
    I.click(gmgShoppingPage.EHMPWebElements.summarySection.iUnderstandCheckbox1);
    I.click(gmgShoppingPage.EHMPWebElements.summarySection.iUnderstandCheckbox2);
    I.click(gmgShoppingPage.EHMPWebElements.summarySection.iUnderstandCheckbox3);
    I.scrollTo(gmgShoppingPage.EHMPWebElements.summarySection.firstNameField,0,-150);
    I.fillField(gmgShoppingPage.EHMPWebElements.summarySection.firstNameField,'john');
    I.fillField(gmgShoppingPage.EHMPWebElements.summarySection.lastNameField,'smith');
    I.fillField(gmgShoppingPage.EHMPWebElements.summarySection.secondNameField,'john');
    I.fillField(gmgShoppingPage.EHMPWebElements.summarySection.secondLastNameField,'smith');
    I.fillField(gmgShoppingPage.EHMPWebElements.summarySection.cityField,'buffalo');
    I.selectOption(gmgShoppingPage.EHMPWebElements.summarySection.stateDropdown,'NY');
    I.click(gmgShoppingPage.EHMPWebElements.applicantSection.nextButton);
    I.waitForElement(gmgShoppingPage.EHMPWebElements.summarySection.sucessBaner,10);
    I.see('Congratulations');
}
