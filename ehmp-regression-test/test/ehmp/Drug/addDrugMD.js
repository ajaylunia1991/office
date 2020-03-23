
//update by vivian for adding new drug with package 
Feature('ehmp - drug');

var config = require('config');
var EHMPdomain = config.get('EHMP');



Scenario('Cassie - should add drug and update pharmacy,current plan in another way', async(I, censusPage,leadPage,quotePage) => {
    //ehmp home page
    I.amOnPage(EHMPdomain + '/?&forceV1=true&qascript=Y#quote-plans/MD/90001/05200/LOS%20ANGELES/1/p1');
    I.wait(5);
    const leadFormEnabled = await I.grabSource();
    if (leadFormEnabled.includes('continue-btn')) {
       I.wait(3);
       I.waitForElement(leadPage.fields.continueBtn, 10);
       I.click(leadPage.fields.continueBtn);
    }
    I.waitForVisible(quotePage.fields.enrollBtn, 10);

    //click 'Add Your Rx Drugs'and click back link in bottom
    I.seeTitleEquals('Medicare Insurance Program');I.wait(2);
    I.waitForElement('#calc',50);
    I.executeScript(function() {   
        $('#calc').click();
    });I.wait(1);
    I.waitForElement('//*[@id="dt-header"]/a/span',50);
    I.click('//*[@id="dt-header"]/a/span');//click 'Back to plans' link on top right
    I.wait(2);

    //click 'Add  Your Rx Drugs' again
    I.seeTitleEquals('Medicare Insurance Program');I.wait(2);
    I.waitForElement('#calc',50);
    I.executeScript(function() {   
        $('#calc').click();
    });I.wait(5);
    


    //add drug page
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

    //add pharmacy page
    I.wait(5);
    I.waitForVisible('.sort-by-name',50);I.wait(3);//click 'name' in add pharmacy page
    I.click('.sort-by-name');I.wait(3);
    I.waitForElement('//*[@id="page1"]/li[2]/div/div[2]/div/a');
    I.click('//*[@id="page1"]/li[2]/div/div[2]/div/a');//select any pharmacy
    I.wait(3);
    I.waitForVisible('#btn-done',50);I.click('#btn-done');I.wait(6);

    //change pharmacy
    I.see('Summary');
    I.waitForElement('//*[@id="dt-drug-summary-area"]/div/div[4]/div/div[2]/div/div[1]/div[3]/a[1]',20);//click 'change pharmacy' button    
    I.click('//*[@id="dt-drug-summary-area"]/div/div[4]/div/div[2]/div/div[1]/div[3]/a[1]');
    I.waitForVisible('.sort-by-distance',50);I.wait(3);//click 'distance' in add pharmacy page
    I.click('.sort-by-distance');I.wait(3);
    I.click('//*[@id="page1"]/li[2]/div/div[2]/div/a');//select any pharmacy
    I.wait(3);
    I.waitForVisible('#btn-back',50);I.click('#btn-back');//click 'back to summary' button in add pharamacy page
    I.wait(2);

    

    //Add current plan in drug tool       
    I.see('Summary');
    I.wait(1);
    I.click('.link-add-plan');I.wait(4);//click 'Enter your current plan' link
    // I.click('#ehi-cp-sort-by');I.wait(2);
    I.click('//*[@id="dt-plan-select-area"]/div/div[3]/div[1]/div[1]/div[1]/a[2]') //click 'Insurance Company'

    // I.click("//select[@id='ehi-cp-sort-by']/option[text()='Insurance Company']");I.wait(6);//click 'Insurance Company'
    I.checkOption('//*[@id="35776"]');I.wait(3);//select any plan 
    I.click('#btn-back');I.wait(3);//click back button
    I.see('Summary');
    I.click('//*[@id="dt-drug-summary-area"]/div/div[4]/div/div');I.wait(3);// 'back to plans' button on left bottom and go to quote page



    //quote page then click drug tool again
    I.seeTitleEquals('Medicare Insurance Program');
    I.waitForElement('#calc',50);

    I.executeScript(function() {   
        $('#calc').click();
    });I.wait(1);
   

    //Edit drug info
    I.waitForElement('.dt-edit-link',50); 
    I.wait(1);
    I.click('.dt-edit-link');//click 'Edit'
    I.wait(2);
    I.see('Edit your drug information');
    I.see('amoxicillin');  
    
    I.waitForElement('//*[@id="dt-dosage-select"]/option[4]',20); 
    I.executeScript(function() { 

        $("#dt-dosage-select").val("203900").change();
       
        }); // update dosage to amoxicillin 200 mg/5 mL oral suspension
    
    I.wait(3);   
    
   
    I.waitForElement('//*[@id="dt-package-select"]/option[2]'); 
    I.executeScript(function() { 

        $("#dt-package-select").val("57237003275").change();
       
        });//update package to 75.0 Milliliter Bottle
    I.wait(3);   
    I.waitForElement('#dt-quantity');    
    I.executeScript(function() { 

        $("#dt-quantity").on("change event", function() {
       
        $(this).val('2')
       
        });
       
        });
    I.wait(3); 
   
    //I.click("#dt-quantity");//there is a bug in this page, will add this back if MEDI-21270 fixed
    I.wait(1);  
    I.pressKey('ArrowUp');  
    I.wait(3);
    I.click('//*[@id="dt-drug-confirm-area"]/div/div[4]/div/div/div[2]'); //click 'Back to Summary' button
    I.wait(3);

    //summary page
    I.see('Summary');
    I.wait(3);

    I.see('amoxicillin 200 mg/5 mL oral suspension');//could see dosage updaed 
    I.see('75.0 Milliliter Bottle');//could  see package updated
    //I.see('2 Bottle');//could see quantity updated since there is bug as MEDI-21270
    I.click('//*[@id="dt-drug-summary-area"]/div/div[3]/div/div/div[2]/div');I.wait(3);//click 'back to plans' button on top right

    //quote page
    I.wait(3);
    I.seeTitleEquals('Medicare Insurance Program');  


    
});