Feature('ehmp - fq');

var config = require('config');
var EHMP = config.get('EHMP');
var FQValidateCounty = require(process.cwd() +'/data/FQValidateCounty.js')();

Data(FQValidateCounty.validCounty).Scenario('Cassie - FQ county validation -- positive', async(I, current) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'  ){
        I.wait(1)
        console.log("Do not run in prod")
    }else{  
            I.amOnPage(
                EHMP + current.url
            );
            I.wait(5);
            I.seeInCurrentUrl('#quote-plans', 40);
            I.waitForText('Medicare Part D Plans');
            I.waitForText('Enroll Now');

      }

});

Data(FQValidateCounty.invalidCounty).Scenario('FQ county validation -- negative', async(I, current) =>{
    if( process.env.NODE_ENV == 'prod' ||  process.env.NODE_ENV == 'gpa'  ){
        I.wait(1)
        console.log("Do not run in prod")
    }else{  
            I.amOnPage(
                EHMP + current.url
            );
            I.wait(3);
            I.waitForText('Select county');
            I.waitForVisible('//*[@id="zipBox"]/input', 40);
      }

});