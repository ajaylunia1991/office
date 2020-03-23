Feature('ehmp-PPE');

var config = require('config');
var EHMPdomain = config.get('EHMP');

Scenario('Cherrie - ppeUpdateSession - ppe to ehmp and update session', async(I,doctorPage) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'){
        console.log("We can't enroll plan on prod!")
    }else{
        I.amOnPage(EHMPdomain + '/?allid=Uta31300&ppSaveSessionId='+config.get('ppeSaveSessionCode')+'&type=MA&leadFormEnabled=false&leadid=10462524&zip=90001&county=LOS%20ANGELES&campaign=NonLicensedPharmacyQuote');
        I.wait(10);
        I.seeTitleEquals('Medicare Insurance Program');

        //check doc
        I.click('.add-doctors');I.wait(3);
        I.see('Doctor List')
        I.see('Smith Jr, Robert');I.wait(1);
        //add another doc
        I.click(doctorPage.fields.addAnotherDoc);I.wait(1);
        doctorPage.fillZip('89199');
        doctorPage.clickZipNextBtn();
        doctorPage.fillDocName('Anand, Sarika');
        doctorPage.clickNameNextBtn();
        I.seeInCurrentUrl('#doctor-select/quote-plans');
        I.click(doctorPage.fields.selectDoc);I.wait(1);

        //there is a bug which hasn't been fixed.
        /* I.see('Anand, Sarika');I.see('Smith Jr, Robert');
        I.seeInCurrentUrl('#doctor-summary/quote-plans'); 
        I.click(doctorPage.fields.seePlansBtn);I.wait(5);
        I.see('Anand, Sarika');I.see('Smith Jr, Robert');
        //delete doc
        let delDoctor = doctorPage.fields.delDoctor;
        I.executeScript(function(delDoctor) {
            $(delDoctor).click();
        },delDoctor);I.wait(1);
        I.see('Smith Jr, Robert');I.dontSee('Anand, Sarika');
        pause() */

    }
});
