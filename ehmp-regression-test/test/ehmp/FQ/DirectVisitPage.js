
Feature('ehmp - fq');

var config = require('config');
var EHMP = config.get('EHMP');


Scenario('Vivian - direct visit drug detail page, MEDI-23107', (I) => {
    I.amOnPage( EHMP +'/?&forceV1=true&qascript=Y#plan-drug-benefits/quote-plans/MA/90001/05200/LOS%20ANGELES/ssd19602355/H0562/044/000');
    I.wait(5);
    I.seeInCurrentUrl('plan-drug-benefits/');//drug detail page
    I.wait(3);
    //I.seeInSource('partner.ehealth.com/documents/12027/5378135/usnews.gif');
    I.see('Estimated Prescription Drug Costs and Savings for this Plan');// it is drug detail page
    I.see('Health Net Seniority Plus Green (HMO)');
    I.see('Your Cost');
    I.see('Your Savings');
    I.see('Plan Coverage Level');

});



Scenario('Vivian - Create a FastQuote entry for plan drug details page, MEDI-23166', (I) => {
    I.amOnPage( EHMP +'/ehi/medicare/fast-quote?allid=EHM35770&qascript=Y&pid=&sid=146&target=&page=plan-drug-detail&type=MD&filter=5%3ACONTACT&zip=89199&county=CLARK&ssacd=29010&gd1=F&bdate1=01%2F01%2F1941&smoker1=n&student1=n&fname=Jane&lname=Doe&email=jane.doe%40ehealthqa.com&homephone=213-213-1234&cellphone=213-213-1234&subscribe=n&padate=06%2F2014&pbdate=07%2F2014&hicn=A000000009&leadid=&leadtype=&street=35+W+Oregon+Ave&aptsuite=Suite+300&city=Chickasha&state=OK&pharmid=1083873913&pharmcid=10012&contractid=S5884&planid=021&segmentid=000&ndcs=63304082790%3A30%7C00009002902%3A30&plans=S4802%3A161%3A000&ppSaveSessionId=&customerip=192.168.0.1&tcpapageurl=http%3A%2F%2Fwww.baidu.com&tcpaconsentdate=01%2F01%2F1945&tcpadisclaimer=tcpa+disclaimer+text&agentid=-1&fq_id=57ee0950b143c2c115086046&facilityid=testFacilityId&accountid=testAccountId&residentid=testResidentId&chart=Y');
    I.wait(5);
    I.seeInCurrentUrl('plan-drug-benefits/');//drug detail page
    I.wait(3);   
    I.see('Estimated Prescription Drug Costs and Savings for this Plan');// it is drug detail page
    I.see('WellCare Value Script (PDP)');
    I.see('Your Cost');
    I.see('Your Savings');
    I.see('Plan Coverage Level');

});

