'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {
        oldZip: '#ehi-txtZip',
        zip: '//*[@id="zipBox"]/input',
        male: '#ehi-rdoMale',
        female: '#ehi-rdoFemale',
        birthMonth: '#ehi-birthMonth',
        birthDay: '#ehi-birthDay',
        birthYear: '#ehi-birthYear',
        smokeNo: '#ehi-rdoSmokerNo',
        smokeYes: '#ehi-rdoSmoker',
        nextBtn: '#ehi-btnCensusNext',
        drillDownBox: '.ehi-select-currt',
        oneCounty: '.odd',
        
        //ms vue v2
        mszip: '#form-census > fieldset > div > input',
        msmale: '#gender > div > div > div:nth-child(1) > input[type=radio]',
        msfemale: '#gender > div > div > div:nth-child(2) > input[type=radio]',
        msbirthMonth: '#form-census > div.applicant > fieldset > div.birthDay > div > div > input.dob.dob-month',
        msbirthDay: '#form-census > div.applicant > fieldset > div.birthDay > div > div > input.dob.dob-day',
        msbirthYear: '#form-census > div.applicant > fieldset > div.birthDay > div > div > input.dob.dob-year',
        mssmokeYes: '#tobacco > div > div > div:nth-child(2) > input[type=radio]',
        mssmokeNo: '#tobacco > div > div > div:nth-child(1) > input[type=radio]',
        msnextBtn: '#form-census > div.btn-group > button > span.btn-text-holder',

        //carrier minisite v2 landing page
        startComparingNowBtn:'#ehi-btnLeadFormSubmit',

        editCensus: '#edit-census > span.hidden-xs', 
        updateBtn: '#ehi-btnCensusUpdate',
        //cvs census
        enterLink: '//*[@id="left-panel"]/div/a',
        zipName: '#zip-name',
        viewPlans: '#btn-drug-view-plans',
        viewAllPlans: '#ehi-tpViewPlans',

        //pharmacy tool census
        //omnicare
        submit: '//*[@id="ehi-content-wrap"]/div/div[5]/a[1]/span'

    },

    // Fill census info on page
    FillMSCensus(zip, birthday, partb, gender, smoker) {
        I.waitForElement(this.fields.mszip,50);
        I.fillField(this.fields.mszip, zip);
        I.wait(1);
        //gender info
        if (gender == 'M') {
            I.click(this.fields.msmale);
        } else {
            I.click(this.fields.msfemale);

        };
        //DOB info
        var array = birthday.trim().split('/');
        I.fillField(this.fields.msbirthMonth, array[0]);
        I.fillField(this.fields.msbirthDay, array[1]);
        I.fillField(this.fields.msbirthYear, array[2]);
        I.wait(1);
        // smoke info
        if (smoker == 'Y') {
            I.click(this.fields.mssmokeYes);
        } else {
            I.click(this.fields.mssmokeNo);
        };

        /* //fill out part b date
        var array1 = partb.trim().split('/');
        var partBMonthID = parseInt(array1[0]) + 1;
        var partBYearID = 2022 - parseInt(array1[1]);
        // var partBMonthActive = '#partb-effective >div:nth-of-type(1) > div > span > i';
        // var partBMonthSelect = '//*[@id="partb-effective"]/div[1]/div/ul/li[' + partBMonthID + ']';
        // var partBYearActive = '#partb-effective >div:nth-of-type(2) > div > span > i';
        // var partBYearSelect = '//*[@id="partb-effective"]/div[2]/div/ul/li[' + partBYearID + ']';
        var partBMonthActive = '//*[@id="ehiSelect-ehd6gydorrc"]/span/i';
        var partBMonthSelect = '//*[@id="ehiSelect-ehd6gydorrc"]/ul/li[' + partBMonthID + ']';
        var partBYearActive = '//*[@id="ehiSelect-lk3c9ac832q"]/span/i';
        var partBYearSelect = '//*[@id="ehiSelect-lk3c9ac832q"]/ul/li[' + partBYearID + ']';
        I.click(partBMonthActive);
        I.click(partBMonthSelect);
        I.click(partBYearActive);
        I.click(partBYearSelect);*/
        I.wait(2); 
        I.click(this.fields.msnextBtn);
        I.wait(5); 

    },

    // Fill census info on popup
    EditMSCensus(zip, birthday, partb, gender, smoker) {
        I.waitForElement(this.fields.oldZip,50);
        I.fillField(this.fields.oldZip, zip);
        I.wait(1);
        if (gender == 'M') {
            I.click(this.fields.male);
        } else {
            I.click(this.fields.female);

        };
        I.wait(1);
       //DOB
        var array = birthday.trim().split('/');
        I.fillField(this.fields.birthMonth, array[0]);
        I.fillField(this.fields.birthDay, array[1]);
        I.fillField(this.fields.birthYear, array[2]);
        I.wait(1);
        //smoke
        if (smoker == 'Y') {
            I.click(this.fields.smokeYes);
        } else {
            I.click(this.fields.smokeNo);
        };
        I.wait(1);
        //part b date
        var array1 = partb.trim().split('/');
        var partBMonthID = parseInt(array1[0]) + 1;
        var partBYearID = 2022 - parseInt(array1[1]);
        var partBMonthActive = '.partB-effective-month > div:nth-child(2) > span:nth-child(1) > i:nth-child(2)';
        var partBMonthSelect = '.partB-effective-month > div:nth-child(2) > ul:nth-child(2) > li:nth-child(' + partBMonthID + ')';
        var partBYearActive = '.partB-effective-year > div:nth-child(2) > span:nth-child(1) > i:nth-child(2)';
        var partBYearSelect = '.partB-effective-year > div:nth-child(2) > ul:nth-child(2) > li:nth-child(' + partBYearID + ')';

        I.click(partBMonthActive);
        I.wait(1);
        I.click(partBMonthSelect);
        I.wait(1);
        I.click(partBYearActive);
        I.click(partBYearSelect);
        I.wait(2);
        I.executeScript(function() {
            $('#ehi-btnCensusUpdate').click();
        });
        // I.click(this.fields.updateBtn);
        I.wait(1);

    },

    newEditMSCensus(zip, birthday, partb, gender, smoker) {
        I.waitForElement(this.fields.zip, 50);
        I.fillField(this.fields.zip, zip);
        I.wait(1);
        //gender
        I.click('#gender > div > div.genderSelectHolder.hidden-xs > div > div > span > i');
        if (gender == 'M') {
            I.click('//*[@id="gender"]/div/div[1]/div/div/ul/li[2]');
        } else {
            I.click('//*[@id="gender"]/div/div[1]/div/div/ul/li[3]');

        };
        I.wait(1);
        //DOB
        var array = birthday.trim().split('/');
        I.fillField(this.fields.birthMonth, array[0]);
        I.fillField(this.fields.birthDay, array[1]);
        I.fillField(this.fields.birthYear, array[2]);
        I.wait(1);
        //smoke
        I.click('#tobacco > div.smokerSelectHolder.hidden-xs > div > div > span > i');
        if (smoker == 'Y') {
            I.click('//*[@id="tobacco"]/div[1]/div/div/ul/li[2]');
        } else {
            I.click('//*[@id="tobacco"]/div[1]/div/div/ul/li[1]');
        };
        I.wait(1);
        //part b date

        if (partb == 'N') {
            console.log("no fill part b");
        } else {
            var array1 = partb.trim().split('/'); 
            var partBMonthID = parseInt(array1[0]) + 1;
            var partBYearID = 2021 - parseInt(array1[1]);
            var partBMonthActive = '#partb-effective > div.partB-effective-month.form-field > div > span > i';
            var partBMonthSelect = '#partb-effective > div.partB-effective-month.form-field > div > ul > li:nth-child(' + partBMonthID + ')';
            var partBYearActive = '#partb-effective > div.partB-effective-year.form-field > div > span > i';
            var partBYearSelect = '#partb-effective > div.partB-effective-year.form-field > div > ul > li:nth-child(' + partBYearID + ')';

            I.click(partBMonthActive);
            I.wait(1);
            I.click(partBMonthSelect);
            I.wait(1);
            I.click(partBYearActive);
            I.click(partBYearSelect);

        }
        I.wait(2);
        I.executeScript(function() {
            $('#ehi-btnCensusUpdate').click();
        });
        // I.click(this.fields.updateBtn);
        I.wait(1);


    },

    //Fill zipcode
    FillMAMDCensus(zip) {
        I.waitForElement(this.fields.zip,50);
        I.fillField(this.fields.zip, zip);
        //need wait for seconds and then next
        I.wait(1);
        //I.waitForElement(this.fields.nextBtn);
        //I.wait(5);
        I.click(this.fields.nextBtn);
        //I.wait(5);
    },

    //Header link
    ClickHeaderlinks(){
     //click 'Find Medicare Plans' and click MD product line
     
     I.click('#header > div > div.logo-nav-container > nav > ul > li:nth-child(2) > a');
     I.wait(1);           
     I.click('#header > div > div.logo-nav-container > nav > ul > li.menu-item.menu-item-has-children.product-line-.active > div > ul > li.menu-item.menu-item-has-children.product-line-MD > div > ul > li > a');
     I.wait(1);
     I.see('Find your Medicare Part D plan');
     I.wait(2);
 
 
     // click 'Find Medicare Plans' and click MS product line
    I.click('#header > div > div.logo-nav-container > nav > ul > li:nth-child(2) > a');
    I.wait(3);
    I.click('#header > div > div.logo-nav-container > nav > ul > li.menu-item.menu-item-has-children.product-line-.active > div > ul > li.menu-item.menu-item-has-children.product-line-MS > div > ul > li > a');   
    I.wait(4);
    I.seeInCurrentUrl('type=MS');
    I.see('Supplement');
    I.wait(2);
 
   // click 'Find Medicare Plans' and click MA product line 
   
    I.wait(2);
    I.click('#header > div > div.logo-nav-container > nav > ul > li:nth-child(2)');
    I.wait(3);
   
    I.click('#header > div > div.logo-nav-container > nav > ul > li.menu-item.menu-item-has-children.product-line-.active > div > ul > li.menu-item.menu-item-has-children.product-line-MA > div > ul > li > a');
    I.wait(2);
    I.see('Find your Medicare Advantage plan');
    I.wait(2);
    
    I.moveCursorTo('#nav-med-cart > a',5,5);
    I.wait(2);
    I.click('#nav-med-cart > a');
    I.wait(8);
    I.see('My Plans');
    I.wait(2);
    I.click('.back-link');
    I.wait(2);
    I.see('Find your Medicare Advantage plan');
    I.wait(2);
    
    
    
    // Top header for 'Learn About Medicare' are clickable
    // moveCursorTo 'Learn About Medicare'
    I.wait(2);
    I.click('#header > div > div.logo-nav-container > nav > ul > li:nth-child(3) > a');
    I.wait(2);
    //I.moveCursorTo('#header > div > div.logo-nav-container > nav > ul > li:nth-child(3) > div > ul > li:nth-child(3) > div > ul > li:nth-child(4) > a',5,5);  
    I.wait(3);
    I.click('#header > div > div.logo-nav-container > nav > ul > li:nth-child(3) > div > ul > li:nth-child(3) > div > ul > li:nth-child(4) > a');
    I.wait(2);
    I.see('Medicare Initial Enrollment Period');
    I.seeInCurrentUrl ('.ehealthmedicare.com');
    I.wait(2);
    I.click('#getStartedBtn');// EHM to EHMP census
    I.wait(4);
    
    }

    
}