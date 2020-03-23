/**
* Created by alisag on 07/05/2019.
*/
//MEDI-22519 Automation script for NGPI / Fast Quote / Enhancement / FQ to accept doctor info 

Feature('ehmp - fq');

var config = require('config');
var EHMP = config.get('EHMP');


Scenario('vivian - NGPIfqURLdoctor/ Shorter URL for Cobranded retails site', (I) => {
    I.amOnPage( EHMP +'/fast-quote/?allid=USN37389&qascript=Y&type=MD&target=medicare-shopping&zip=90001&ndcs=00378050701:3|13668015930:10|68180051202:30&pharmid=1922439116&doctors=1053387662:Barbara:Smith:1 Pine West Plaza Suite 101:Albany:NY:12205|1043659428:Brendon:Smith:724 Watervliet Shaker Rd:Latham:NY:12110');
    I.wait(3);
    // pause();
    I.seeInCurrentUrl('allid=USN37389&requestFromFQ=true');//quote page
    I.wait(3);
    I.seeInSource('partner.ehealth.com/documents/10180/886388/usnews.gif');
    I.seeInCurrentUrl('doctors=1053387662');
    I.seeInCurrentUrl('Barbara:Smith:1');
    I.seeInCurrentUrl('doctors=1053387662:Barbara:Smith:1+Pine+West+Plaza+Suite+101:Albany:NY:12205|1043659428:Brendon:Smith:724+Watervliet+Shaker+Rd:Latham:NY:12110&qascript=Y#quote-plans/MD/90001/05200/LOS ANGELES');  

});

Scenario('vivian - NGPIfqURLdoctor/ open Shorter URL for Minisite', (I) => {
    I.amOnPage( EHMP +'/fast-quote/?allid=USN37389&qascript=Y&type=MD&target=kroger-shopping&zip=90001&ndcs=00378050701:3|13668015930:10|68180051202:30&pharmid=1922439116&doctors=1053387662:Barbara:Smith:1 Pine West Plaza Suite 101:Albany:NY:12205|1043659428:Brendon:Smith:724 Watervliet Shaker Rd:Latham:NY:12110');
    I.wait(10);
    // pause();
    I.seeInCurrentUrl('allid=USN37389&msType=msp-kroger&type=MD');//quote page
    I.wait(3);
    I.seeInSource('ehealthmedicareplans.com/ehealthinsurance/CarrierProfile/logos/Kroger.png');
    I.seeInCurrentUrl('doctors=1053387662');
    I.seeInCurrentUrl('Barbara:Smith:1');
    I.seeInCurrentUrl('doctors=1053387662:Barbara:Smith:1+Pine+West+Plaza+Suite+101:Albany:NY:12205|1043659428:Brendon:Smith:724+Watervliet+Shaker+Rd:Latham:NY:12110&qascript=Y&forceV1=true#quote-plans/MD/90001/05200/LOS ANGELES');
    

});

Scenario('vivian - NGPIfqURLdoctor/ open Longer URL for Cobranded retails site', (I) => {
    I.amOnPage( EHMP +'/ehi/medicare/fast-quote?allid=USN37389&qascript=Y&type=MD&target=medicare-shopping&zip=90001&ndcs=00378050701:3|13668015930:10|68180051202:30&pharmid=1922439116&doctors=1053387662:Barbara:Smith:1 Pine West Plaza Suite 101:Albany:NY:12205|1043659428:Brendon:Smith:724 Watervliet Shaker Rd:Latham:NY:12110');
    I.wait(3);
    // pause();
    I.seeInCurrentUrl('allid=USN37389&requestFromFQ=true');//quote page
    I.wait(3);
    I.seeInSource('partner.ehealth.com/documents/10180/886388/usnews.gif');
    I.seeInCurrentUrl('doctors=1053387662');
    I.seeInCurrentUrl('Barbara:Smith:1');
    I.seeInCurrentUrl('doctors=1053387662:Barbara:Smith:1+Pine+West+Plaza+Suite+101:Albany:NY:12205|1043659428:Brendon:Smith:724+Watervliet+Shaker+Rd:Latham:NY:12110&qascript=Y#quote-plans/MD/90001/05200/LOS ANGELES');
    

});

Scenario('vivian - NGPIfqURLdoctor/ open Longer URL for Minisite', (I) => {
    I.amOnPage( EHMP +'/ehi/medicare/fast-quote?allid=USN37389&qascript=Y&type=MD&target=kroger-shopping&zip=90001&ndcs=00378050701:3|13668015930:10|68180051202:30&pharmid=1922439116&doctors=1053387662:Barbara:Smith:1 Pine West Plaza Suite 101:Albany:NY:12205|1043659428:Brendon:Smith:724 Watervliet Shaker Rd:Latham:NY:12110');
    I.wait(3);
    // pause();
    I.seeInCurrentUrl('allid=USN37389&msType=msp-kroger&type=MD');//quote page
    I.wait(3);
    I.seeInSource('ehealthmedicareplans.com/ehealthinsurance/CarrierProfile/logos/Kroger.png');
    I.seeInCurrentUrl('doctors=1053387662');
    I.seeInCurrentUrl('Barbara:Smith:1');
    I.seeInCurrentUrl('doctors=1053387662:Barbara:Smith:1+Pine+West+Plaza+Suite+101:Albany:NY:12205|1043659428:Brendon:Smith:724+Watervliet+Shaker+Rd:Latham:NY:12110&qascript=Y&forceV1=true#quote-plans/MD/90001/05200/LOS ANGELES');


});