'use strict';

var startURL = function() {

    var startURL = {};
    //logo1
    var startURL01 = new DataTable(['vanityURL','redirectURL','allid']);

     	startURL01.add(['https://www.ehealthinsurance.com/?allid=pro8607000','https://www.ehealthinsurance.com/?allid=pro8607000','pro8607000']);
     	
    
	startURL.startURL01 = startURL01;
	



    return startURL;
}

module.exports = startURL;