/**
 * Created by Ajay to include Sutter Vanity URL
 */
'use strict';

var sutterVanityURL = function(){

    var sutterVanityURL = {};

    var sutterVanityURLList1 = new DataTable(['url', 'text', 'redirectURL']);
    sutterVanityURLList1.add(['/SIP', 'Find the right Medicare Advantage Plan for you.', '/medicare-lp-sutter5/?allid=sip9924000']); // ALGO-1034, testcase - C24787

    sutterVanityURL.sutterVanityURLList1 = sutterVanityURLList1;

    return sutterVanityURL;
}

module.exports = sutterVanityURL;
