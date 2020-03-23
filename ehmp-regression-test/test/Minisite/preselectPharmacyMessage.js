// http://sjprsystst01:8080/qafuntest/editScript.jsp?path=Real_Browser/Medicare%20Product%20Line/minisite%20and%20landing%20page/Pharmacy-Preselec-message/Kroger-preselect%20pharmacy%20message

Feature('preselect pharmacy message');

var config = require('config');
var EHMP = config.get('EHMP');


Scenario('preselect pharmacy message', (I) => {
    I.amOnPage( EHMP +'/ehi/medicare/mini-site?allid=Kro37462&msType=msp-kroger#quote-plans/MA/43612/36490/LUCAS/1/p1/f8:true');
    I.wait(5);
    //MEDI-20799 update
    I.see('The plans below have your selected pharmacy as a preferred pharmacy');I.wait(1);
    I.see('Your selected pharmacy: Kroger Pharmacy');I.wait(1);
    I.executeScript(function() {
        $("a:contains('Show all plans')").click();
    });
    I.wait(5);
    I.dontSee('The plans below have your selected pharmacy as a preferred pharmacy');

});