/**
 * Created by Cherrie
 */
Feature('ehmp - doctor');
var config = require('config');
var ehmp = config.get('EHMP');

Scenario('Cassie - ENV: ' + process.env.NODE_ENV + ' Quote page->verify 2 add-doctor links work well->click back-link to quote page', {retries: 1}, async(I,doctorPage,leadPage) =>{
    I.amOnPage( ehmp + '?&forceV1=true&qascript=Y&leadFormEnabled=true#quote-plans/MA/89199/29010/CLARK/1/p1');
    //close lead form
    I.wait(3);
    I.click(leadPage.fields.continueBtn);
    I.wait(1);
    //check 2 add-doc links and back link
    I.waitForElement('#calcDoctor', 50);//left add-doc link
    I.executeScript(function() {
        $('#calcDoctor').click();
    });I.wait(1);
    //check url contains doctor
    I.seeInCurrentUrl('#doctor/quote-plans');
    I.see('Where Is Your Doctor Located?')
    //back link
    I.waitForVisible(doctorPage.fields.backLink,30);
    I.click(doctorPage.fields.backLink);
    I.waitForVisible(doctorPage.fields.addDoctor,30);//top add-doc link
    I.click(doctorPage.fields.addDoctor);
    I.seeInCurrentUrl('#doctor/quote-plans');
    I.see('Doctor\'s city and state or Zip code')

})
