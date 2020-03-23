Feature('GMG');

var config = require('config');
var domain = config.get('GMG');

Scenario('User opens Ask Us Anything modal and submits a question', async function(I,gmgModalForms){
    I.amOnPage(domain);
    I.click(gmgModalForms.homePageElements.medicareAnswersHeaderLink);
    I.click(gmgModalForms.medicareAnswersElements.submitAQuestionHeader);
    I.fillField(gmgModalForms.medicareAnswersElements.askUsAnythingName, 'John');
    I.fillField(gmgModalForms.medicareAnswersElements.askUsAnythingEmail, 'test@ehealthqa.com');
    I.fillField(gmgModalForms.medicareAnswersElements.askUsAnythingQuestion, 'Test question from automation script');
    I.click(gmgModalForms.medicareAnswersElements.askUsAnythingCheckbox);
    I.click(gmgModalForms.medicareAnswersElements.askUsAnythingSubmit);
    I.waitForText('Your question has been submitted',15);
 
});

Scenario('User opens Contact Us modal and submits a question', async function(I,gmgModalForms){
    I.amOnPage(domain);
    I.click(gmgModalForms.homePageElements.medicareAnswersHeaderLink);
    I.click(gmgModalForms.medicareAnswersElements.contactUsFooter);
    I.fillField(gmgModalForms.medicareAnswersElements.contactUsName, 'John');
    I.fillField(gmgModalForms.medicareAnswersElements.contactUsEmail, 'test@ehealthqa.com');
    I.fillField(gmgModalForms.medicareAnswersElements.contactUsQuestion, 'Test question from automation script');
    I.click(gmgModalForms.medicareAnswersElements.contactUsSubmit);
    I.waitForText('We will get back to you shortly',15);
 
});