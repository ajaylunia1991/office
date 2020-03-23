'use strict';

var pharmacyMiniSite = function(){

    var pharmacyMiniSite = {};

    var pharmacyMiniSiteUrl = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','h1']);
   
    pharmacyMiniSiteUrl.add(['riteaid', 'Rit36455','rit8390000', '17319', 'msp-riteaid','N','Find your Medicare Part D plan']);//Rit36455 MEDI-19058 Apply to pharmacy tool
    // pharmacyMiniSiteUrl.add(['fruth', 'Fru40562','Fru40562', '45714', 'msp-fruth','N','Find your Medicare Advantage plan']);
    // pharmacyMiniSiteUrl.add(['kmart', 'med5541000','pha5542000', '44129','msp-kmart','N','Find your Medicare Advantage plan']);
    // pharmacyMiniSiteUrl.add(['ritzman', 'Rit37467','Rit37467', '44320','msp-ritzman','Y','Find your Medicare Advantage plan']);//leadform
    // pharmacyMiniSiteUrl.add(['kroger', 'Kro37462','Kro37481', '37066', 'msp-kroger','N','Find your Medicare Advantage plan']);
    // pharmacyMiniSiteUrl.add(['omnicare', 'omn100000','omn97000', '14224', 'msp-omnicare','N','Find your Medicare Part D plan']);//will be tested in other js
    // pharmacyMiniSiteUrl.add(['cvs', 'CVS36534','cvs7737000', '04240', 'msp-cvs','N','Find your Medicare Part D plan']);// for new design quote page, no time to fix this branch flow.
    // pharmacyMiniSiteUrl.add(['harveys', 'har7007000','har7007000', '90001','msp-harveys','N','Find your Medicare Advantage plan']);
    // pharmacyMiniSiteUrl.add(['HEB', 'heb399000','heb400000', '78572','msp-heb','N','Find your Medicare Advantage plan']);
    // pharmacyMiniSiteUrl.add(['costco', 'Cos37605','Cos37124', '77027','msp-costco','N','Find your Medicare Advantage plan']);
    // pharmacyMiniSiteUrl.add(['bartell', 'Bar37464','Bar37464', '98201','msp-bartell','N','Find your Medicare Advantage plan']);
    // pharmacyMiniSiteUrl.add(['tw', 'Thr37463','Thr37463', '56284','msp-thriftywhite','N','Find your Medicare Advantage plan']);
    // pharmacyMiniSiteUrl.add(['freds', 'fre40559','fre40559', '62959','msp-freds','N','Find your Medicare Advantage plan']);
    // pharmacyMiniSiteUrl.add(['schnucks', 'Sch40538','Sch40538', '63108','msp-schnucks','N','Find your Medicare Advantage plan']);
    // pharmacyMiniSiteUrl.add(['Elevate', 'Goo40720','Goo40720', '90001','msp-gnp','N','Find your Medicare Advantage plan']);
    // pharmacyMiniSiteUrl.add(['StopandShop', 'sto148000','sto148000', '77008','msp-stopandshop','N','Find your Medicare Advantage plan']);
    // pharmacyMiniSiteUrl.add(['giant', 'gia143000','gia143000', '33351','msp-giant','N','Find your Medicare Advantage plan']);
    // pharmacyMiniSiteUrl.add(['giantmd', 'gia165000','gia165000', '90001','msp-giantmd','N','Find your Medicare Advantage plan']);
    // pharmacyMiniSiteUrl.add(['Martins', 'gia145000','gia145000', '90001','msp-martins','N','Find your Medicare Advantage plan']);
    // pharmacyMiniSiteUrl.add(['harristeeter', 'Har41581','Har41582', '20155','msp-harristeeter','N','Find your Medicare Advantage plan']);
    // pharmacyMiniSiteUrl.add(['discountdrugmart', 'Dis37466','Dis37466', '44133','msp-discountdrugmart','N','Find your Medicare Advantage plan']);
    // pharmacyMiniSiteUrl.add(['publix', 'pub393000','pub394000', '34219','msp-publix','N','Find your Medicare Advantage plan']);
    // pharmacyMiniSiteUrl.add(['frescoymas', 'fre7011000','fre7011000', '90001','msp-fresco','Y','Find your Medicare Advantage plan']);//no leadform
    // pharmacyMiniSiteUrl.add(['winndixie', 'win7009000','win7009000', '90001','msp-winndixie','N','Find your Medicare Advantage plan']);
    // pharmacyMiniSiteUrl.add(['bilo', 'bil390000','bil390000', '90001','msp-bilo','N','Find your Medicare Advantage plan']);
    // pharmacyMiniSiteUrl.add(['cardinalhealth', 'Car40577', 'None','07450', 'msp-cardinalhealth','N','Find your Medicare Advantage plan']);//cardinalhealth pharmacy tool has no default pharmacy.
    // pharmacyMiniSiteUrl.add(['walgreens', 'wal7875000','None', '37615', 'msp-walgreens','N','Find your Medicare Advantage plan']);
    // pharmacyMiniSiteUrl.add(['Walmart', 'wal8521000','None', '90001', 'msp-walmart','N','Find your Medicare Advantage plan']);
    // pharmacyMiniSiteUrl.add(['SEG', 'bil389000','None', '29607','msp-bilo','N','Find your Medicare Advantage plan']);
    // pharmacyMiniSiteUrl.add(['omnicarelis', 'omn101000','None', '14224','msp-bartell','N','Find your Medicare Advantage plan']);


    pharmacyMiniSite.pharmacyMiniSite = pharmacyMiniSiteUrl;
    

    return pharmacyMiniSite;
}

module.exports = pharmacyMiniSite;