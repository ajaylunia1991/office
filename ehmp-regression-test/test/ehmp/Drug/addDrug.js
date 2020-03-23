
//update by vivian for adding new drug with package 
Feature('ehmp - drug');

var config = require('config');
var EHMPdomain = config.get('EHMP');

Scenario('Cassie - should add drug and pharmacy and also current plan', {retries: 1}, async(I, censusPage,leadPage) => {
    //ehmp home page
    I.amOnPage(EHMPdomain + '/?qascript=Y&allid=EHM39972');
    censusPage.FillMAMDCensus('89199');I.wait(5);

    //click 'Add Your Rx Drugs'and click back link in bottom
    I.seeTitleEquals('Medicare Insurance Program');I.wait(2);
    I.waitForElement('#calc',50);
    I.executeScript(function() {   
        $('#calc').click();
    });I.wait(3);
    I.waitForElement('.link-back',50);
    I.click('.link-back');//click 'Back' link in bottom
    I.wait(2);

    //click 'Add  Your Rx Drugs' again
    I.seeTitleEquals('Medicare Insurance Program');I.wait(2);
    I.waitForElement('#calc',50);
    I.executeScript(function() {   
        $('#calc').click();
    });I.wait(1);
    
   

    //add drug page
    I.waitForElement('#ehi-firstletter',50);
    I.fillField('#ehi-firstletter','L');I.wait(1);
    I.fillField('#ehi-secondletter','I');I.wait(1);
    I.fillField('#ehi-thirdletter','P');I.wait(1);
    I.waitForElement('//*[@id="dt-disambig-area"]/div/div[3]/div[2]/div[5]/a',50);
    I.click('//*[@id="dt-disambig-area"]/div/div[3]/div[2]/div[5]/a');I.wait(1);
    I.see('Dosage');
    I.wait(1);
    I.click('#edit-drug-name');//click'edit'and user would re-enter drug info
    
    
    //add drug again
    I.waitForElement('#ehi-firstletter',50);
    I.fillField('#ehi-firstletter','L');I.wait(1);
    I.fillField('#ehi-secondletter','I');I.wait(1);
    I.fillField('#ehi-thirdletter','P');I.wait(1);
    I.waitForElement('//*[@id="dt-disambig-area"]/div/div[3]/div[2]/div[5]/a',50);
    I.click('//*[@id="dt-disambig-area"]/div/div[3]/div[2]/div[5]/a');I.wait(1);
    //update quantity to 60
    I.executeScript(function() { 

        $("#monthly-quantity").on("change event", function() {
       
        $(this).val('60')
       
        });
       
        });
    I.wait(1);   
    I.click("#monthly-quantity");
    I.wait(1);
    I.pressKey('ArrowUp');  

    I.wait(1);   
    I.click('#add-drug-btn');I.wait(3);

    

    //add pharmacy page
    I.wait(5);
    I.waitForVisible('//*[@id="page1"]/li[1]/div/div[2]/div/a',50);I.wait(3);
    I.click('//*[@id="page1"]/li[1]/div/div[2]/div/a');I.wait(1);
    I.waitForVisible('#btn-done',50);I.click('#btn-done');I.wait(2);

    // Add another Drugs with package
    I.wait(2);
    I.see('60 per month')//make sure the quantity is updated
    I.waitForElement('//*[@id="dt-drug-summary-area"]/div/div[4]/div/div[1]/div[3]',50);
    I.click('//*[@id="dt-drug-summary-area"]/div/div[4]/div/div[1]/div[3]');//click 'Add More Drugs'
    I.wait(3);
    I.waitForElement('#ehi-firstletter',50);
    I.fillField('#ehi-firstletter','a');I.wait(1);
    I.fillField('#ehi-secondletter','m');I.wait(1);
    I.fillField('#ehi-thirdletter','o');I.wait(1);
    I.fillField('#ehi-fourthletter','x');I.wait(1);
    I.waitForElement('//*[@id="dt-disambig-area"]/div/div[3]/div[3]/div[5]/a',50);
    I.click('//*[@id="dt-disambig-area"]/div/div[3]/div[3]/div[5]/a');I.wait(1);

    I.see('Dosage');
    I.waitForElement('//*[@id="drug-dosage"]/option[3]',50);
    I.click('//*[@id="drug-dosage"]/option[3]');I.wait(1);//add dosage
    I.waitForElement('//*[@id="drug-package"]/option[2]',50);
    I.click('//*[@id="drug-package"]/option[2]');I.wait(1);// add package    
    I.click('#add-drug-btn');I.wait(3);

    // get to summary page
    I.click('//*[@id="dt-drug-summary-area"]/div/div[3]/div/div/div[2]/div');I.wait(3);//'Back to plans' button on top right

    //back to quote page
    I.waitForElement('#calc',50);
    //I.see('Potential RX Drug Costs');

    

    //Add current plan in drug tool       
    I.seeTitleEquals('Medicare Insurance Program');I.wait(1);
    I.waitForElement('#calc',50);
    I.click('#calc');    
    I.wait(1);
    I.click('.btn-add-plan');I.wait(6);//click 'Select Current Plan' button
    I.checkOption('//*[@id="ehi-current-plan-list"]/li[29]/label[1]');I.wait(3);
    I.click('#btn-next');I.wait(3);
    I.see('Summary');
    I.click('//*[@id="dt-drug-summary-area"]/div/div[5]/div/div');I.wait(3);// 'back to plans' button on left bottom
    
    
    //Edit drug info
    I.seeTitleEquals('Medicare Insurance Program');
    //I.see('Potential RX Drug Costs');
    I.click('#calc');
    I.waitForElement('.dt-edit-link',50); 
    I.wait(1);
    I.click('.dt-edit-link');//click 'Edit'
    I.see('Edit your drug information');
    I.see('Lipitor');
    I.moveCursorTo('.dt-sw-to-gen',5,5);
    I.wait(1);
    I.click('.dt-sw-to-gen');//click 'Switch to Generic atorvastatin'
    I.wait(2);
    I.see('atorvastatin');
   

    I.click('//*[@id="dt-drug-confirm-area"]/div/div[3]/div/div/div[2]/div[2]/div[2]/a');//click 'Remove' for amoxicillin
    I.wait(1);
    I.click('#dt-drug-confirm-area > div > div:nth-child(4) > div > div > div.btn-confirm-continue.btn.btn-primary'); //click 'Back to Summary' button
    I.wait(2);    
    I.see('Summary');
    I.dontSee('Lipitor');//make sure Lipitor is changed to atorvastatin
    I.see('atorvastatin');
    I.dontSee('amoxicillin');//make sure amoxicillin is removed


    //delete pharmacy and use national coverage
    I.click('.dt-pharmacy-remove');//click 'use national average'
    I.wait(2); 
    I.click('#dt-header > a');//click'Back to plans' link on top rights
    I.wait(2); 
    I.seeTitleEquals('Medicare Insurance Program');I.wait(1);



    //add drug by Edit link in summary page
    I.click('#calc');
    I.waitForElement('.dt-edit-link',50); 
    I.wait(1);
    I.click('.dt-edit-link');//click 'Edit'
    I.wait(2);
    I.click('#dt-drug-confirm-area > div > div:nth-child(4) > div > div > div.btn-add-more-drugs.btn.btn-tertiary');//click 'Add More Drugs'
    I.wait(2);
    I.fillField('#ehi-firstletter','l');I.wait(1);
    I.fillField('#ehi-secondletter','i');I.wait(1);
    I.fillField('#ehi-thirdletter','a');I.wait(1);    
    I.waitForElement('//*[@id="dt-disambig-area"]/div/div[3]/div[1]/div[5]/a',50);
    I.click('//*[@id="dt-disambig-area"]/div/div[3]/div[1]/div[5]/a');I.wait(1);// select 'lia'
    I.waitForElement('//*[@id="form-generic-drug"]/label[1]',20);
    I.click('//*[@id="form-generic-drug"]/label[1]');//click 'yes' for 'Choose generic'    
    I.click('#add-drug-btn');I.wait(3);    
    

    // summary page
    I.see('Summary');
    I.see('mesalamine ');//could see drug just added
    I.click('.dt-edit-link');//click 'Edit'
    I.waitForElement('.dt-sw-to-brand',20);
    I.see('mesalamine')
    I.moveCursorTo('.dt-sw-to-brand',5,5);
    I.wait(2);
    I.click('.dt-sw-to-brand')//click 'Switch to Brand Lipitor'
    I.wait(2);
    I.click('.dt-sw-to-brand');//click 'Switch to Brand Lialda'
    I.wait(3);
    I.see('Lialda');    
    I.click('//*[@id="dt-drug-confirm-area"]/div/div[4]/div/div/div[2]');//click 'back to summary'
    I.wait(3);

    //delete a drug in summary page
    I.see('Summary');
    I.dontSee('mesalamine');
    I.see('Lialda'); 
    I.waitForElement('//*[@id="dt-drug-summary-area"]/div/div[4]/div/div[1]/div[2]/div[1]/div[2]/span');
    I.click('//*[@id="dt-drug-summary-area"]/div/div[4]/div/div[1]/div[2]/div[1]/div[2]/span'); //I remove one drug in summary page
    I.wait(3);



    //check message for 'How to increase your potential savings and reduce costs'
    I.see('Summary');
    I.see('How to increase your potential savings and reduce costs');
    I.moveCursorTo('//*[@id="dt-drug-summary-area"]/div/div[3]/div/div/div[1]/div[2]/a',5,5);
    I.wait(2);
    I.click('//*[@id="dt-drug-summary-area"]/div/div[3]/div/div/div[1]/div[2]/a');
    I.wait(2);
    I.see('see how much you’d save compared to your current drug costs');



    
});

