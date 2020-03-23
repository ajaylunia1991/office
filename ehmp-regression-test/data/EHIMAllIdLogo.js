'use strict';

var startURL = function() {

    var startURL = {};
    //logo1
    var startURL01 = new DataTable(['vanityURL','redirectURL','allid','logo']);

     	startURL01.add(['https://www.ehealthinsurance.com/medicare?allid=goo9205000','https://www.ehealthinsurance.com/medicare?allid=goo9205000','goo9205000','https://partner.ehealth.com/documents/10280/2186281/Logo.png?version=1.0']);
     	
    
	startURL.startURL01 = startURL01;
	



    return startURL;
}

module.exports = startURL;