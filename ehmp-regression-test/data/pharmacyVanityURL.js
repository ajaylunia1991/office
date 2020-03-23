/**
 * Created by Reena to include pharmacy Vanity URL List
 */
'use strict';

var pharmacyVanityURL = function(){

    var pharmacyVanityURL = {};

    var pharmacyVanityURLList1 = new DataTable(['url', 'text', 'redirectURL']);
    pharmacyVanityURLList1.add(['/higi/gianteagle', 'Find your Medicare', '/v2/ehi/medicare/mini-site?allid=hig11211000&msType=msp-higige#/']); // ALGO-1513, testcase - C23216
    pharmacyVanityURLList1.add(['/higi/HEB', 'Find your Medicare', '/v2/ehi/medicare/mini-site?allid=hig11190000&msType=msp-higiheb#/']); // ALGO-1512, testcase - C23215
    pharmacyVanityURLList1.add(['/higi/kroger', 'Find your Medicare', '/v2/ehi/medicare/mini-site?allid=hig11195000&msType=msp-higikroger#/']);// ALGO-1511, testcase - C23214
    pharmacyVanityURLList1.add(['/higi/publix', 'Find your Medicare', '/v2/ehi/medicare/mini-site?allid=hig11200000&msType=msp-higipublix#/']);// ALGO-1510, testcase - C23213
    pharmacyVanityURLList1.add(['/higi/riteaid', 'Find your Medicare', '/v2/ehi/medicare/mini-site?allid=hig11205000&msType=msp-higiriteaid#/']);// ALGO-1510, testcase - C23212
    

    pharmacyVanityURL.pharmacyVanityURLList1 = pharmacyVanityURLList1;

    return pharmacyVanityURL;
}

module.exports = pharmacyVanityURL;