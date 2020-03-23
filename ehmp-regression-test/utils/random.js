/**
 * @author Cherrie Gong at 2017-11-23
 */

var dateFormat = require('dateformat');

module.exports = {

    randomName: function() {
        var x = "qwertyuioplkjhgfdsazxcvbnm";
        var name = "";
        for (var i = 0; i < 6; i++) {
            name += x.charAt(Math.ceil(25 * Math.random()));
        }

        return name;
    },

    randomPhone: function() {
		var num = Math.floor(Math.random()*9000+1000);
        var phone = '213-213-'+num;
        return phone;
    },
    
    randomInfo: function() {
        var firstName = this.randomName();
        var lastName = this.randomName();
        var phone = this.randomPhone();
        var email = firstName + "ehealthqa@" + lastName + ".com";
        
        var info = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email
        };
        
        return info;
    },

    getNextMonth: function() {        

        current = new Date();
        current.setMonth(current.getMonth()+1);
        current.setDate(1);
        var date = dateFormat(current,"mm-dd-yyyy")
        console.log("date:"　+　date)
        return date;
        
    }
};
