
Feature('ehmp - fq');

var config = require('config');
var EHMP = config.get('EHMP');
var EHM =config.get('EHM');


Scenario('Vivian - NGPIunifiedURL / Visit NGPI short unified Fast quote url to detail page', (I) => {
    I.amOnPage( EHMP +'/fast-quote?allid=USN35133&qascript=Y&target=medicare-shopping&page=plan-detail&type=MA&zip=89199&county=CLARK&ssacd=29010&plans=H5521%3A055%3A000&ndcs=63304082790%3A30%7C00009002902%3A3&leadFormEnabled=false');
    I.wait(5);
    I.seeInCurrentUrl('allid=USN35133&requestFromFQ=true&qascript=Y#plan-benefits');//detail page
    I.wait(3);
    //I.seeInSource('partner.ehealth.com/documents/12027/5378135/usnews.gif');
    I.see('Aetna Medicare Choice Plan (PPO)');
    I.see('Benefit Highlights');//new detail page feature
    

});

Scenario('Vivian - NGPIunifiedURL / Visit NGPI short unified Fast quote url to mini site quote page', (I) => {
    I.amOnPage( EHMP +'/fast-quote?allid=wal7875000&qascript=Y&pid=&sid=146&target=walgreens-shopping&type=MA&filter=&zip=89199&county=CLARK&ssacd=29010&gd1=F&bdate1=01%2F01%2F1941&smoker1=n&student1=n&fname=Jane&lname=Doe&email=jane.doe%40ehealthqa.com&homephone=213-213-1234&cellphone=213-213-1234&ppSaveSessionId=109922SO&leadFormEnabled=false');
    I.wait(20);
    //I.seeInCurrentUrl('mini-site?allid=wal7875000&msType=msp-walgreens&type=MA&zip=89199#quote-plans');I.wait(1);
    I.seeInCurrentUrl('?allid=wal7875000&msType=msp-walgreens&type=MA');
    I.seeInSource('ehealthmedicareplans.com/ehealthinsurance/CarrierProfile/logos/WalgreensMedicare.png');
    I.see('Medicare Advantage Plans');//quote page 
    I.see('Your selected pharmacy: WALGREENS #04763');
    I.see('The plans below have your selected pharmacy as a preferred pharmacy');
    

});

Scenario('Vivian - NGPIunifiedURL / FastQuote / Enhancement / Accept any parameter without validation and pass along to target URL, MEDI-21919', (I) => {
    I.amOnPage( EHMP +'/fast-quote?allid=EHM35770&qascript=Y&pid=&sid=146&target=&page=plan-detail&type=MA&filter=5%3ACONTACT&zip=89199&county=CLARK&ssacd=29010&gd1=F&bdate1=01%2F01%2F1941&smoker1=n&student1=n&fname=&lname=&email=&homephone=&cellphone=&subscribe=n&padate=06%2F2014&pbdate=07%2F2014&hicn=A000000009&leadid=&leadtype=&street=35+W+Oregon+Ave&aptsuite=Suite+300&city=Chickasha&state=OK&pharmid=1083873913&pharmcid=10012&contractid=S5884&planid=021&segmentid=000&ndcs=63304082790%3A30%7C00009002902%3A30&plans=H5216%3A141%3A000&ppSaveSessionId=701631WP&customerip=192.168.0.1&tcpapageurl=http%3A%2F%2Fwww.baidu.com&tcpaconsentdate=01%2F01%2F1945&tcpadisclaimer=tcpa+disclaimer+text&agentid=-1&fq_id=&facilityid=&accountid=&residentid=&chart=Y&leadFormEnabled=false&undefinedpara1=xxxx&undefinedpara2=yyyyyy&undefinedpara3=ZZZZZZ');
    I.wait(4);
    //I.seeInCurrentUrl('mini-site?allid=wal7875000&msType=msp-walgreens&type=MA&zip=89199#quote-plans');I.wait(1);
    I.seeInCurrentUrl('undefinedpara3=ZZZZZZ');
    I.seeInCurrentUrl('undefinedpara2=yyyyyy');
    I.seeInCurrentUrl('undefinedpara1=xxxx');
    //I.seeInSource('ehealthmedicareplans.com/ehealthinsurance/CarrierProfile/logos/WalgreensMedicare.png');
    I.see('HumanaChoice H5216-141 (PPO)');//detail page
    I.see('Medicare Advantage');
    
    

});


Scenario('Vivian - NGPIunifiedURL / NGPI e2e case', (I) => {
    I.amOnPage( EHM +'/mysmgcode/');
    I.wait(5);
    I.see('See Medicare plans that cover your doctors & prescription drugs');
    //I.seeInCurrentUrl('mini-site?allid=wal7875000&msType=msp-walgreens&type=MA&zip=89199#quote-plans');I.wait(1);
    I.fillField('#personalCode','KCD903');
    I.fillField('#birthYear', '1954');
    I.fillField('#zipCode','07676');
    //I.seeInSource('ehealthmedicareplans.com/ehealthinsurance/CarrierProfile/logos/WalgreensMedicare.png');
    I.click('//*[@id="ehm-wrap"]/div[3]/main/article/section[1]/div/div[2]/div/div/div[2]/div/form/ul/li[5]/button');//click 'get started'
    I.wait(10);
    I.switchToNextTab();  
    I.wait(3);    
    I.waitForText('Medicare Advantage Plans',20);
    I.seeInCurrentUrl('ehealthmedicareplans');
    I.seeInCurrentUrl('sessionId');
    I.see('Edit Your Doctors');
    I.see('Edit Your Rx Drugs');

    I.click ('#calcDoctor');
    I.see('Cooper, Benjamin');
    I.see('Nartatez, Laurie');
    I.click('//*[@id="ehi-doctorSection"]/div/div[1]/div/a');//I click 'back' to quote page
    I.see('Medicare Advantage Plans');
    
    I.click ('#calc');
    I.see('Lamictal');
    I.see('Isuprel');
    I.see('methyldopa');
    I.click ('//*[@id="dt-drug-summary-area"]/div/div[3]/div/div/div[2]/div');// click 'back to plans'
    I.see('Medicare Advantage Plans');
    

});