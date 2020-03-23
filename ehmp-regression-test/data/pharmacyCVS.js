'use strict';

var pharmacy = function(){

	var pharmacy = {};

    var pharmacy_01 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
    var pharmacy_02 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
    var pharmacy_03 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
    var pharmacy_04 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
    var pharmacy_05 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
    var pharmacy_06 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
    var pharmacy_07 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
    var pharmacy_08 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']); 
    var pharmacy_09 = new DataTable(['name', 'minisiteAllid','pharmacyAllid', 'zip','msType','checkDetailTag','fq2Mini']);
    
    pharmacy_01.add(['cvs', 'CVS37602','CVS37602', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_01.add(['cvs', 'CVS37603','CVS37603', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_01.add(['cvs', 'CVS37612','CVS37612', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_01.add(['cvs', 'CVS39351','CVS39351', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_01.add(['cvs', 'CVS39352','CVS39352', '04240', 'msp-cvs','N','cvs-shopping']);

    pharmacy_02.add(['cvs', 'CVS39353','CVS39353', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_02.add(['cvs', 'CVS39354','CVS39354', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_02.add(['cvs', 'CVS39851','CVS39851', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_02.add(['cvs', 'CVS39852','CVS39852', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_02.add(['cvs', 'CVS39853','CVS39853', '04240', 'msp-cvs','N','cvs-shopping']);

    pharmacy_03.add(['cvs', 'CVS39854','CVS39854', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_03.add(['cvs', 'CVS40051','CVS40051', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_03.add(['cvs', 'CVS43636','CVS43636', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_03.add(['cvs', 'CVS43637','CVS43637', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_03.add(['cvs', 'CVS43638','CVS43638', '04240', 'msp-cvs','N','cvs-shopping']);

    pharmacy_04.add(['cvs', 'CVS43640','CVS43640', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_04.add(['cvs', 'CVS43641','CVS43641', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_04.add(['cvs', 'CVS43642','CVS43642', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_04.add(['cvs', 'CVS43643','CVS43643', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_04.add(['cvs', 'CVS43661','CVS43661', '04240', 'msp-cvs','N','cvs-shopping']);

    pharmacy_05.add(['cvs', 'CVS43662','CVS43662', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_05.add(['cvs', 'CVS43663','CVS43663', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_05.add(['cvs', 'CVS43664','CVS43664', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_05.add(['cvs', 'CVS43983','CVS43983', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_05.add(['cvs', 'CVS43984','CVS43984', '04240', 'msp-cvs','N','cvs-shopping']);

    pharmacy_06.add(['cvs', 'CVS43985','CVS43985', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_06.add(['cvs', 'CVS43986','CVS43986', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_06.add(['cvs', 'CVS43987','CVS43987', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_06.add(['cvs', 'CVS43988','CVS43988', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_06.add(['cvs', 'CVS43989','CVS43989', '04240', 'msp-cvs','N','cvs-shopping']);

    pharmacy_07.add(['cvs', 'CVS44890','CVS44890', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_07.add(['cvs', 'CVS45010','CVS45010', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_07.add(['cvs', 'CVS45030','CVS45030', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_07.add(['cvs', 'CVS45050','CVS45050', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_07.add(['cvs', 'CVS45051','CVS45051', '04240', 'msp-cvs','N','cvs-shopping']);

    pharmacy_08.add(['cvs', 'CVS45052','CVS45052', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_08.add(['cvs', 'CVS45053','CVS45053', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_08.add(['cvs', 'CVS45054','CVS45054', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_08.add(['cvs', 'CVS45055','CVS45055', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_08.add(['cvs', 'CVS45056','CVS45056', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_08.add(['cvs', 'CVS45058','CVS45058', '04240', 'msp-cvs','N','cvs-shopping']);

    pharmacy_09.add(['cvs', 'cvs5603000','cvs5603000', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_09.add(['cvs', 'cvs5604000','cvs5604000', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_09.add(['cvs', 'cvs6811000','cvs6811000', '04240', 'msp-cvs','N','cvs-shopping']);
    pharmacy_09.add(['cvs', 'cvs9684000','cvs9684000', '04240', 'msp-cvs','N','cvs-shopping']);

    pharmacy.pharmacy_01 = pharmacy_01;
    pharmacy.pharmacy_02 = pharmacy_02;
    pharmacy.pharmacy_03 = pharmacy_03;
    pharmacy.pharmacy_04 = pharmacy_04;
    pharmacy.pharmacy_05 = pharmacy_05;
    pharmacy.pharmacy_06 = pharmacy_06;
    pharmacy.pharmacy_07 = pharmacy_07;
    pharmacy.pharmacy_08 = pharmacy_08;
    pharmacy.pharmacy_09 = pharmacy_09;

	return pharmacy;
}

module.exports = pharmacy;