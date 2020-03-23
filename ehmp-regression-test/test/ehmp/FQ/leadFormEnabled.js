// http://sjprsystst01:8080/qafuntest/caseList.jsp?path=Real_Browser/Medicare%20Product%20Line/Flow/Non-app%20flow/Fast%20Quote
Feature('ehmp - fq');

var config = require('config');
var EHMP = config.get('EHMP');


Scenario('Visit Fast quote url with lead form parameter should redirect to lead form', (I) => {
    I.amOnPage( EHMP +'/ehi/medicare/fast-quote?allid=Med42975&qascript=Y&zip=89199&type=MA&sid=146&gd1=F&bdate1=01/01/1941&smoker1=n&fname=sdfsd&lname=dsfewe&email=jane.doe@ehealthqa.com&homephone=541-754-2555&cellphone=541-754-3010&target=medicare-shopping&page=plan-detail&plans=H5216%3A036%3A000&tcpadisclaimer=This%20is%20a%20TCPA%20for%20test&customerip=76.108.171.181&leadFormEnabled=true&fq_id=5a026d9b0a6d7b70b54e4751&writeSessionStorage=true');
    I.wait(3);
    I.waitForText('First name');I.wait(1);
    I.waitForText('Last name');I.wait(1);
    I.click('#continue-btn');I.wait(1);
    I.waitForText('Medicare Advantage Plans');    

});