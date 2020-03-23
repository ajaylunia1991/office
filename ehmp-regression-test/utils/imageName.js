/**
 * @author Cherrie Gong at 2017-11-27
 */

var moment = require('moment');
var fs = require('fs');
 
module.exports = function(imageName){
	    
		var floderName = moment().format('YYYYMMDDHHMM');
		
		var dir = './output/' + floderName;
		
		// console.log("dir: " + dir);
	
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
			// console.log("Create a directory successfully!");
        }
		
        var imageFile = './'+ floderName +'/' +imageName+ '.png';

        return imageFile;
   
};