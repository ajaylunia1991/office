'use strict';

var pharmacy = function(){

	var pharmacy = {};

	var pharmacy_1 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
	var pharmacy_2 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
	var pharmacy_3 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
	var pharmacy_4 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
	var pharmacy_5 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
	var pharmacy_6 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
	var pharmacy_7 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
	var pharmacy_8 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
	var pharmacy_9 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
	var pharmacy_10 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
	var pharmacy_11 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
	var pharmacy_12 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
	var pharmacy_13 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
	var pharmacy_14 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
	var pharmacy_15 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
	var pharmacy_16 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
	var pharmacy_17 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
	var pharmacy_18 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
	var pharmacy_19 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
	var pharmacy_20 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 

	var pharmacy_21 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
	var pharmacy_22 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
	var pharmacy_23 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
	var pharmacy_24 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
	var pharmacy_25 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
	var pharmacy_26 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
	var pharmacy_27 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
	var pharmacy_28 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
	var pharmacy_29 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
	var pharmacy_30 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 

	pharmacy_1.add(['riteaid', 'Rit36455','rit8390000', '17319', 'msp-riteaid','N','riteaid-shopping']);//Rit36455 MEDI-19058 Apply to pharmacy tool
	pharmacy_1.add(['fruth', 'Fru40562','Fru40562', '45714', 'msp-fruth','N','fruth-shopping']);
	pharmacy_1.add(['kmart', 'med5541000','pha5542000', '44129','msp-kmart','N','kmart-shopping']);
	pharmacy_1.add(['ritzman', 'Rit37467','Rit37467', '44320','msp-ritzman','Y','ritzman-shopping']);//leadform
	
	pharmacy_2.add(['kroger', 'Kro37462','Kro37481', '37066', 'msp-kroger','N','kroger-shopping']);
	pharmacy_2.add(['omnicare', 'omn100000','omn97000', '14224', 'msp-omnicare','N','omnicare-shopping']);
	pharmacy_2.add(['cvs', 'CVS36534','cvs7737000', '04240', 'msp-cvs','N','cvs-shopping']);// for new design quote page, no time to fix this branch flow.
	pharmacy_2.add(['topspharmacy', 'top9461000','None', '14220', 'msp-topspharmacy','N','topspharmacy-shopping']);//MEDI-22815 New pharmacy Mini Site / Tops Pharmacy
    pharmacy_2.add(['hometown', 'hom9909000','None', '49445', 'msp-hometown','N','hometown-shopping']); //MEDI-23444 New Pharmacy Mini Site/Hometown Pharmacy

	pharmacy_3.add(['harveys', 'har7007000','har7007000', '90001','msp-harveys','N','harveys-shopping']);
	pharmacy_3.add(['HEB', 'heb399000','heb400000', '78572','msp-heb','N','heb-shopping']);
	pharmacy_3.add(['costco', 'Cos37605','Cos37124', '77027','msp-costco','N','costco-shopping']);
	pharmacy_3.add(['bartell', 'Bar37464','Bar37464', '98201','msp-bartell','N','bartell-shopping']);
	
	pharmacy_4.add(['tw', 'Thr37463','Thr37463', '56284','msp-thriftywhite','N','thriftywhite-shopping']);
	pharmacy_4.add(['freds', 'fre40559','fre40559', '62959','msp-freds','N','freds-shopping']);
	pharmacy_4.add(['schnucks', 'Sch40538','Sch40538', '63108','msp-schnucks','N','schnucks-shopping']);
	pharmacy_4.add(['Benzer', 'ben10927000','ben10926000', '70119', 'msp-benzer','N','benzer-shopping']); //MEDI-24271 New Pharmacy Mini Site/pharmacy tool -Benzer


	pharmacy_5.add(['Elevate', 'Goo40720','Goo40720', '90001','msp-gnp','N','gnp-shopping']);
	pharmacy_5.add(['StopandShop', 'sto148000','sto148000', '77008','msp-stopandshop','N','stopandshop-shopping']);
	pharmacy_5.add(['giant', 'gia143000','gia143000', '33351','msp-giant','N','giant-shopping']);
	pharmacy_5.add(['Higi/HEB', 'hig11190000','None', '78102', 'msp-higiheb','N','higiheb-shopping']); //MEDI-24358 / New Pharmacy MiniSite for higi
    pharmacy_5.add(['Higi/GiantEagle', 'hig11211000','None', '15238', 'msp-higige','N','higige-shopping']); //MEDI-24358 / New Pharmacy MiniSite for higi
    pharmacy_5.add(['Higi/Kroger', 'hig11195000','None', '37066', 'msp-higikroger','N','higikroger-shopping']); //MEDI-24358 / New Pharmacy MiniSite for higi
    pharmacy_5.add(['Higi/RiteAid', 'hig11205000','None', '17319', 'msp-higiriteaid','N','higiriteaid-shopping']); //MEDI-24358 / New Pharmacy MiniSite for higi
    pharmacy_5.add(['Higi/Publix', 'hig11200000','None', '34219', 'msp-higipublix','N','higipublix-shopping']); //MEDI-24358 / New Pharmacy MiniSite for higi

	pharmacy_6.add(['giantmd', 'gia165000','gia165000', '90001','msp-giantmd','N','giantmd-shopping']);
	pharmacy_6.add(['Martins', 'gia145000','gia145000', '90001','msp-martins','N','martins-shopping']);
	pharmacy_6.add(['harristeeter', 'Har41581','Har41582', '20155','msp-harristeeter','N','harristeeter-shopping']);
	
	pharmacy_7.add(['discountdrugmart', 'Dis37466','Dis37466', '44133','msp-discountdrugmart','N','discountdrugmart-shopping']);
	pharmacy_7.add(['publix', 'pub393000','pub394000', '34219','msp-publix','N','publix-shopping']);
	pharmacy_7.add(['frescoymas', 'fre7011000','fre7011000', '90001','msp-fresco','Y','fresco-shopping']);//no leadform
	
	pharmacy_8.add(['winndixie', 'win7009000','win7009000', '90001','msp-winndixie','N','winndixie-shopping']);
	pharmacy_8.add(['bilo', 'bil390000','bil390000', '90001','msp-bilo','N','bilo-shopping']);
	pharmacy_8.add(['cardinalhealth', 'Car40577', 'None','07450', 'msp-cardinalhealth','N','cardinalhealth-shopping']);//cardinalhealth pharmacy tool has no default pharmacy.
	
	pharmacy_9.add(['walgreens', 'wal7875000','None', '37615', 'msp-walgreens','N','walgreens-shopping']);
	pharmacy_9.add(['Walgreens-MA', 'wal9757000','None', '37615', 'msp-walgreensma','N','walgreensma-shopping']); //MEDI-23195 Additional Minisite for Walgreens/ Walgreens-MA
	pharmacy_9.add(['Walmart', 'wal8521000','None', '90001', 'msp-walmart','N','walmart-shopping']);

	pharmacy_10.add(['SEG', 'bil389000','None', '29607','msp-bilo','N','bilo-shopping']);
	pharmacy_10.add(['omnicarelis', 'omn101000','None', '14224','msp-omnicare','N','omnicare-shopping']);
	pharmacy_10.add(['ingles', 'ing10388000','None', '28804','msp-inglespreferred','N','ingles-shopping']);
	pharmacy_10.add(['inglespharmacy', 'ing10392000','None', '28805','msp-inglesnonpreferred','N','ingles-shopping']);


	pharmacy_11.add(['giant', 'gia142000','None', '33351','msp-giant','N','giant-shopping']);
	pharmacy_11.add(['giant', 'gia144000','None', '33351','msp-giant','N','giant-shopping']);
	pharmacy_11.add(['Martins', 'gia146000','gia146000', '90001','msp-martins','N','martins-shopping']);
	pharmacy_11.add(['Martins', 'gia147000','gia147000', '90001','msp-martins','N','martins-shopping']);

	pharmacy_12.add(['giantmd', 'gia164000','gia164000', '90001','msp-giantmd','N','giantmd-shopping']);
	pharmacy_12.add(['giantmd', 'gia166000','gia166000', '90001','msp-giantmd','N','giantmd-shopping']);
	pharmacy_12.add(['StopandShop', 'sto149000','sto149000', '77008','msp-stopandshop','N','stopandshop-shopping']);
	pharmacy_12.add(['StopandShop', 'sto150000','sto150000', '77008','msp-stopandshop','N','stopandshop-shopping']);

	pharmacy_13.add(['bartell', '160162','160162', '98201','msp-bartell','N','bartell-shopping']);
	pharmacy_13.add(['bartell', '160206','160206', '98201','msp-bartell','N','bartell-shopping']);
	pharmacy_13.add(['bartell', 'Bar37649','Bar37649', '98201','msp-bartell','N','bartell-shopping']);
	pharmacy_13.add(['bilo', 'bi-8057000','bi-8057000', '90001','msp-bilo','N','bilo-shopping']);

	pharmacy_14.add(['cardinalhealth', 'Car40597', 'None','07450', 'msp-cardinalhealth','N','cardinalhealth-shopping']);//cardinalhealth pharmacy tool has no default pharmacy.
	pharmacy_14.add(['cardinalhealth', 'Car40598', 'None','07450', 'msp-cardinalhealth','N','cardinalhealth-shopping']);//cardinalhealth pharmacy tool has no default pharmacy.
	pharmacy_14.add(['costco', 'cos10258000','cos10258000', '77027','msp-costco','N','costco-shopping']);
	pharmacy_14.add(['costco', 'cos10259000','cos10259000', '77027','msp-costco','N','costco-shopping']);

	pharmacy_14.add(['costco', 'cos10362000','cos10362000', '77027','msp-costco','N','costco-shopping']);
	pharmacy_14.add(['costco', 'cos10470000','cos10470000', '77027','msp-costco','N','costco-shopping']);
	pharmacy_14.add(['costco', 'Cos37346','Cos37346', '77027','msp-costco','N','costco-shopping']);
	pharmacy_14.add(['costco', 'Cos37849','Cos37849', '77027','msp-costco','N','costco-shopping']);

	pharmacy_14.add(['costco', 'Cos38549','Cos38549', '77027','msp-costco','N','costco-shopping']);
	pharmacy_14.add(['costco', 'Cos40739','Cos40739', '77027','msp-costco','N','costco-shopping']);
	pharmacy_14.add(['costco', 'Cos43741','Cos43741', '77027','msp-costco','N','costco-shopping']);
	pharmacy_14.add(['costco', 'Cos45281','Cos45281', '77027','msp-costco','N','costco-shopping']);
	pharmacy_14.add(['costco', 'Cos45298','Cos45298', '77027','msp-costco','N','costco-shopping']);


	pharmacy_15.add(['costco', 'cos8369000','cos8369000', '77027','msp-costco','N','costco-shopping']);
	pharmacy_15.add(['costco', 'cos8376000','cos8376000', '77027','msp-costco','N','costco-shopping']);
	pharmacy_15.add(['cvs', 'cvs10794000','cvs10794000', '04240', 'msp-cvs','N','cvs-shopping']);
	pharmacy_15.add(['cvs', 'cvs10795000','cvs10795000', '04240', 'msp-cvs','N','cvs-shopping']);
	pharmacy_15.add(['cvs', 'cvs10796000','cvs10796000', '04240', 'msp-cvs','N','cvs-shopping']);


	pharmacy_16.add(['cvs', 'cvs10797000','cvs10797000', '04240', 'msp-cvs','N','cvs-shopping']);
	pharmacy_16.add(['cvs', 'cvs10798000','cvs10798000', '04240', 'msp-cvs','N','cvs-shopping']);
	pharmacy_16.add(['cvs', 'CVS36535','CVS36535', '04240', 'msp-cvs','N','cvs-shopping']);
	pharmacy_16.add(['cvs', 'CVS36536','CVS36536', '04240', 'msp-cvs','N','cvs-shopping']);
	pharmacy_16.add(['cvs', 'CVS36537','CVS36537', '04240', 'msp-cvs','N','cvs-shopping']);


	pharmacy_17.add(['cvs', 'CVS37023','CVS37023', '04240', 'msp-cvs','N','cvs-shopping']);
	pharmacy_17.add(['cvs', 'CVS37024','CVS37024', '04240', 'msp-cvs','N','cvs-shopping']);
	pharmacy_17.add(['cvs', 'CVS37429','CVS37429', '04240', 'msp-cvs','N','cvs-shopping']);
	pharmacy_17.add(['cvs', 'CVS37581','CVS37581', '04240', 'msp-cvs','N','cvs-shopping']);
	pharmacy_17.add(['cvs', 'CVS37601','CVS37601', '04240', 'msp-cvs','N','cvs-shopping']);

	pharmacy_18.add(['freds', 'fre40560','fre40560', '62959','msp-freds','N','freds-shopping']);
	pharmacy_18.add(['freds', 'fre40561','fre40561', '62959','msp-freds','N','freds-shopping']);
	pharmacy_18.add(['freds', 'fre442000','fre442000', '62959','msp-freds','N','freds-shopping']);
	pharmacy_18.add(['fruth', 'Fru40563','Fru40563', '45714', 'msp-fruth','N','fruth-shopping']);
	pharmacy_18.add(['fruth', 'Fru40564','Fru40564', '45714', 'msp-fruth','N','fruth-shopping']);

	pharmacy_19.add(['gianteagle', 'gia8447000','gia8447000', '45714', 'msp-gianteagle','N','giant-shopping']);
	pharmacy_19.add(['hometown', 'hom10395000','None', '49445', 'msp-hometown','N','hometown-shopping']);
	pharmacy_19.add(['hometown', 'hom10396000','None', '49445', 'msp-hometown','N','hometown-shopping']);
	pharmacy_19.add(['hometown', 'hom10413000','None', '49445', 'msp-hometown','N','hometown-shopping']);
	pharmacy_19.add(['hometown', 'hom10414000','None', '49445', 'msp-hometown','N','hometown-shopping']);

	pharmacy_20.add(['ingles', 'ing10389000','None', '28804','msp-inglespreferred','N','ingles-shopping']);
	pharmacy_20.add(['ingles', 'ing10390000','None', '28804','msp-inglespreferred','N','ingles-shopping']);
	pharmacy_20.add(['ingles', 'ing10391000','None', '28804','msp-inglespreferred','N','ingles-shopping']);
	pharmacy_20.add(['ingles', 'ing10409000','None', '28804','msp-inglespreferred','N','ingles-shopping']);
	pharmacy_20.add(['ingles', 'ing10410000','None', '28804','msp-inglespreferred','N','ingles-shopping']);


	pharmacy_21.add(['ingles', 'ing10411000','None', '28804','msp-inglespreferred','N','ingles-shopping']);
	pharmacy_21.add(['ingles', 'ing10412000','None', '28804','msp-inglespreferred','N','ingles-shopping']);
	pharmacy_21.add(['kmart', 'kma9227000','kma9227000', '44129','msp-kmart','N','kmart-shopping']);
	pharmacy_21.add(['kmart', 'tea5543000','tea5543000', '44129','msp-kmart','N','kmart-shopping']);
	pharmacy_21.add(['kroger', '156898','156898', '37066', 'msp-kroger','N','kroger-shopping']);

	pharmacy_22.add(['kroger', '156920','156920', '37066', 'msp-kroger','N','kroger-shopping']);
	pharmacy_22.add(['kroger', 'Kro37462','Kro37462', '37066', 'msp-kroger','N','kroger-shopping']);
	pharmacy_22.add(['omnicarelis', 'Omn41601','None', '14224','msp-omnicare','N','omnicare-shopping']);
	pharmacy_22.add(['omnicarelis', 'Omn41602','None', '14224','msp-omnicare','N','omnicare-shopping']);
	pharmacy_22.add(['omnicarelis', 'Omn41701','None', '14224','msp-omnicare','N','omnicare-shopping']);


	pharmacy_23.add(['omnicarelis', 'Omn41841','None', '14224','msp-omnicare','N','omnicare-shopping']);
	pharmacy_23.add(['omnicarelis', 'Omn41861','None', '14224','msp-omnicare','N','omnicare-shopping']);
	pharmacy_23.add(['omnicarelis', 'Omn41862','None', '14224','msp-omnicare','N','omnicare-shopping']);
	pharmacy_23.add(['omnicarelis', 'Omn42221','None', '14224','msp-omnicare','N','omnicare-shopping']);
	pharmacy_23.add(['omnicarelis', 'omn100000','None', '14224','msp-omnicare','N','omnicare-shopping']);


	pharmacy_24.add(['omnicarelis', 'omn444000','None', '14224','msp-omnicare','N','omnicare-shopping']);
	pharmacy_24.add(['omnicarelis', 'omn5438000','None', '14224','msp-omnicare','N','omnicare-shopping']);
	pharmacy_24.add(['omnicarelis', 'omn5439000','None', '14224','msp-omnicare','N','omnicare-shopping']);
	pharmacy_24.add(['omnicarelis', 'omn5440000','None', '14224','msp-omnicare','N','omnicare-shopping']);
	pharmacy_24.add(['omnicarelis', 'omn5441000','None', '14224','msp-omnicare','N','omnicare-shopping']);

	pharmacy_25.add(['omnicarelis', 'omn5442000','None', '14224','msp-omnicare','N','omnicare-shopping']);
	pharmacy_25.add(['omnicarelis', 'omn5443000','None', '14224','msp-omnicare','N','omnicare-shopping']);
	pharmacy_25.add(['omnicarelis', 'omn5444000','None', '14224','msp-omnicare','N','omnicare-shopping']);
	pharmacy_25.add(['omnicarelis', 'omn5445000','None', '14224','msp-omnicare','N','omnicare-shopping']);
	pharmacy_25.add(['omnicarelis', 'omn5446000','None', '14224','msp-omnicare','N','omnicare-shopping']);

	pharmacy_26.add(['omnicarelis', 'omn97000','None', '14224','msp-omnicare','N','omnicare-shopping']);
	pharmacy_26.add(['omnicarelis', 'omn98000','None', '14224','msp-omnicare','N','omnicare-shopping']);
	pharmacy_26.add(['omnicarelis', 'omn99000','None', '14224','msp-omnicare','N','omnicare-shopping']);
	pharmacy_26.add(['Walmart', '160025','None', '90001', 'msp-walmart','N','walmart-shopping']);

	pharmacy_27.add(['publix', '160018','160018', '34219','msp-publix','N','publix-shopping']);
	pharmacy_27.add(['publix', '160118','160118', '34219','msp-publix','N','publix-shopping']);
	pharmacy_27.add(['riteaid', 'rit7775000','rit7775000', '17319', 'msp-riteaid','N','riteaid-shopping']);
	pharmacy_27.add(['riteaid', 'rit7784000','rit7784000', '17319', 'msp-riteaid','N','riteaid-shopping']);
	pharmacy_27.add(['riteaid', 'rit7819000','rit7819000', '17319', 'msp-riteaid','N','riteaid-shopping']);
	pharmacy_27.add(['riteaid', 'Rit37651','Rit37651', '17319', 'msp-riteaid','N','riteaid-shopping']);

	pharmacy_28.add(['schnucks', 'Sch40557','Sch40557', '63108','msp-schnucks','N','schnucks-shopping']);
	pharmacy_28.add(['schnucks', 'Sch40558','Sch40558', '63108','msp-schnucks','N','schnucks-shopping']);
	pharmacy_28.add(['schnucks', 'Sch40538','Sch40538', '63108','msp-schnucks','N','schnucks-shopping']);
	pharmacy_28.add(['frescoymas', 'fre7012000','fre7012000', '90001','msp-fresco','Y','fresco-shopping']);
	pharmacy_28.add(['harveys', 'har7008000','har7008000', '90001','msp-harveys','N','harveys-shopping']);



	pharmacy_29.add(['winndixie', 'win7010000','win7010000', '90001','msp-winndixie','N','winndixie-shopping']);
	pharmacy_29.add(['tw', 'Thr37689','Thr37689', '56284','msp-thriftywhite','N','thriftywhite-shopping']);
	pharmacy_29.add(['tw', '160158','160158', '56284','msp-thriftywhite','N','thriftywhite-shopping']);
	pharmacy_29.add(['tw', '160205','160205', '56284','msp-thriftywhite','N','thriftywhite-shopping']);
	pharmacy_29.add(['tw', 'Thr37650','Thr37650', '56284','msp-thriftywhite','N','thriftywhite-shopping']);


	pharmacy_30.add(['topspharmacy', 'top10393000','None', '14220', 'msp-topspharmacy','N','topspharmacy-shopping']);
	pharmacy_30.add(['topspharmacy', 'top10394000','None', '14220', 'msp-topspharmacy','N','topspharmacy-shopping']);
	pharmacy_30.add(['topspharmacy', 'top10415000','None', '14220', 'msp-topspharmacy','N','topspharmacy-shopping']);
	pharmacy_30.add(['topspharmacy', 'top10416000','None', '14220', 'msp-topspharmacy','N','topspharmacy-shopping']);
	pharmacy_30.add(['GoodNeighbor', 'Goo40719','None', '14220', 'msp-gnp','N','goodneighbor-shopping']);
	pharmacy_30.add(['GoodNeighbor', 'Goo40721','None', '14220', 'msp-gnp','N','goodneighbor-shopping']);
	pharmacy_30.add(['topspharmacy', 'top10416000','None', '14220', 'msp-topspharmacy','N','topspharmacy-shopping']);


	pharmacy.pharmacy_1 = pharmacy_1;
	pharmacy.pharmacy_2 = pharmacy_2;
	pharmacy.pharmacy_3 = pharmacy_3;
	pharmacy.pharmacy_4 = pharmacy_4;
	pharmacy.pharmacy_5 = pharmacy_5;
	pharmacy.pharmacy_6 = pharmacy_6;
	pharmacy.pharmacy_7 = pharmacy_7;
	pharmacy.pharmacy_8 = pharmacy_8;
	pharmacy.pharmacy_9 = pharmacy_9;
	pharmacy.pharmacy_10 = pharmacy_10;
	pharmacy.pharmacy_11 = pharmacy_11;
	pharmacy.pharmacy_12 = pharmacy_12;
	pharmacy.pharmacy_13 = pharmacy_13;
	pharmacy.pharmacy_14 = pharmacy_14;
	pharmacy.pharmacy_15 = pharmacy_15;
	pharmacy.pharmacy_16 = pharmacy_16;
	pharmacy.pharmacy_17 = pharmacy_17;
	pharmacy.pharmacy_18 = pharmacy_18;
	pharmacy.pharmacy_19 = pharmacy_19;
	pharmacy.pharmacy_20 = pharmacy_20;
	pharmacy.pharmacy_21 = pharmacy_21;
	pharmacy.pharmacy_22 = pharmacy_22;
	pharmacy.pharmacy_23 = pharmacy_23;
	pharmacy.pharmacy_24 = pharmacy_24;
	pharmacy.pharmacy_25 = pharmacy_25;
	pharmacy.pharmacy_26 = pharmacy_26;
	pharmacy.pharmacy_27 = pharmacy_27;
	pharmacy.pharmacy_28 = pharmacy_28;
	pharmacy.pharmacy_29 = pharmacy_29;
	pharmacy.pharmacy_30 = pharmacy_30;
	return pharmacy;
}

module.exports = pharmacy;