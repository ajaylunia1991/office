'use strict';

var pharmacy = function(){

	var pharmacy = {};

    var pharmacy_01 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
    var pharmacy_02 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
    var pharmacy_03 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
    
    
    pharmacy_01.add(['Walmart', 'wal10691000','None', '90001', 'msp-walmart','N','walmart-shopping']);
    pharmacy_01.add(['Walmart', 'wal10692000','None', '90001', 'msp-walmart','N','walmart-shopping']);
    pharmacy_01.add(['Walmart', 'wal10693000','None', '90001', 'msp-walmart','N','walmart-shopping']);
    pharmacy_01.add(['Walmart', 'wal10694000','None', '90001', 'msp-walmart','N','walmart-shopping']);
    pharmacy_01.add(['Walmart', 'wal8507000','None', '90001', 'msp-walmart','N','walmart-shopping']);

    pharmacy_02.add(['Walmart', 'wal8508000','None', '90001', 'msp-walmart','N','walmart-shopping']);
    pharmacy_02.add(['Walmart', 'wal8509000','None', '90001', 'msp-walmart','N','walmart-shopping']);
    pharmacy_02.add(['Walmart', 'wal8511000','None', '90001', 'msp-walmart','N','walmart-shopping']);
    pharmacy_02.add(['Walmart', 'wmt10805000','None', '90001', 'msp-walmart','N','walmart-shopping']);
    pharmacy_02.add(['Walmart', 'wmt10806000','None', '90001', 'msp-walmart','N','walmart-shopping']);

    pharmacy_03.add(['Walmart', 'wmt10807000','None', '90001', 'msp-walmart','N','walmart-shopping']);
    pharmacy_03.add(['Walmart', 'Wal34224','None', '90001', 'msp-walmart','N','walmart-shopping']);
    pharmacy_03.add(['Walmart', 'Wal34225','None', '90001', 'msp-walmart','N','walmart-shopping']);
    pharmacy_03.add(['Walmart', 'Wal32324','None', '90001', 'msp-walmart','N','walmart-shopping']);
    pharmacy_03.add(['Walmart', 'wal10691000','None', '90001', 'msp-walmart','N','walmart-shopping']);

    
   
    
    
   

    pharmacy.pharmacy_01 = pharmacy_01;
    pharmacy.pharmacy_02 = pharmacy_02;
    pharmacy.pharmacy_03 = pharmacy_03;
   

	return pharmacy;
}

module.exports = pharmacy;