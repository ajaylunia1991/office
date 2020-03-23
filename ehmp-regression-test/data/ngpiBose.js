'use strict';

var ngpiBose = function() {

    var ngpiBose = {};
    //summit
    var ngpiBoseQASM = new DataTable(['dnis','partnerMSG','fName','lName','personalCode','birthYear','zipCode','drugName','drName','allId']);
    var ngpiBoseQAWG = new DataTable(['dnis','partnerMSG','fName','lName','personalCode','birthYear','zipCode','drugName','drName','allId']);
    var ngpiBoseQAAS = new DataTable(['dnis','partnerMSG','fName','lName','personalCode','birthYear','zipCode','drugName','drName','allId']);

    var ngpiBoseCMSM = new DataTable(['dnis','partnerMSG','fName','lName','personalCode','birthYear','zipCode','drugName','drName','allId']);
    var ngpiBoseCMWG = new DataTable(['dnis','partnerMSG','fName','lName','personalCode','birthYear','zipCode','drugName','drName','allId']);
    var ngpiBoseCMAS = new DataTable(['dnis','partnerMSG','fName','lName','personalCode','birthYear','zipCode','drugName','drName','allId']);

     	
    ngpiBoseQASM.add(['8442888355','Summit_AEP_DigitalIntegration_Email','SummitNGPI','BoseTest','BC2UO0','1949','07676','Benicar 20 mg tablet','Jeffrey Ginsburg','sum141937300']);//summit email
   /*  ngpiBose01.add(['8442888321','Summit_AEP_DigitalIntegration_DirectMail','SummitNGPI','BoseTest','7QV7YK','1939','07676']);//summit direct mail
    ngpiBose01.add(['8442756794','Summit_Digital Integration','SummitNGPI','BoseTest','7QV7YK','1939','07676']);//summit digital integration
 */
  ngpiBoseQAWG.add(['8442756795','Walgreens_Digital Integration','walgreensNGPI','BoseTest','fu9906','1932','90001','simvastatin 40 mg tablet','Craig Feinberg','wal141944300']);//Walgreens Digital Integration
   /*  ngpiBose02.add(['8559170118','Walgreens_DigitalIntegration_NPC-Prefer-eMail','walgreensNGPI','BoseTest','fu9905','1938','90001']);//Walgreens email
    ngpiBose02.add(['8559170113','Walgreens_DigitalIntegration_T65-eMail','walgreensNGPI','BoseTest','fu9905','1938','90001']);//	Walgreens_PC-Integration_NE-eMail
    ngpiBose02.add(['8559170117','Walgreens_PC-Integration_NPC-Prefer-DM','walgreensNGPI','BoseTest','fu9905','1938','90001']);//Walgreens direct mail
    ngpiBose02.add(['8559170114','Walgreens_DigitalIntegration_NPC-Prefer-Text','walgreensNGPI','BoseTest','fu9905','1938','90001']);//Walgreens SMS Text
    ngpiBose02.add(['8559170109','Walgreens_DigitalIntegration_T65-Text','walgreensNGPI','BoseTest','fu9905','1938','90001']);//Walgreens SMS Text
    
 */
   ngpiBoseQAAS.add(['8559541022','Allscripts_Web_PersonalCode','AllScriptsNGPI','BoseTest','ALL006','1955','90001','Macrodantin 25 mg capsule','Christopher Beney','all141994300']);//Allscripts_Web_PersonalCode
   // ngpiBose03.add(['8559541019','Allscripts_AEP_PersonalCode_Email','AllScriptsNGPI','BoseTest','ALL006','1955','07676']);//Allscripts_AEP_PersonalCode_Email
  //  ngpiBose03.add(['8559541020','Allscripts_AEP_PersonalCode_SecureMessaging','AllScriptsNGPI','BoseTest','ALL006','1955','07676']);//Allscripts_AEP_PersonalCode_SecureMessaging
   // ngpiBose03.add(['8442756794','Allscripts_AEP_PersonalCode_DirectMail','AllScriptsNGPI','BoseTest','ALL006','1955','07676']);//Allscripts_AEP_PersonalCode_DirectMail

   ngpiBoseCMSM.add(['8442888355','Summit_AEP_DigitalIntegration_Email','SummitNGPI','BoseTest','3N50E1','1933','07676','furosemide 20 mg tablet','David Blady','sum33927700']);//summit email
   ngpiBoseCMWG.add(['8442756795','Walgreens_Digital Integration','walgreensNGPI','BoseTest','EWZSD4','1948','90001','metoprolol tartrate 50 mg tablet','Barry Nahin','wal33928700']);//Walgreens Digital Integration
   ngpiBoseCMAS.add(['8559541022','Allscripts_Web_PersonalCode','AllScriptsNGPI','BoseTest','8U5MS5','1946','90001','losartan 50 mg tablet','William Bridges','all33959700']);//Allscripts_Web_PersonalCode


    ngpiBose.ngpiBoseQASM = ngpiBoseQASM;    
    ngpiBose.ngpiBoseQAWG = ngpiBoseQAWG;
    ngpiBose.ngpiBoseQAAS = ngpiBoseQAAS;

    ngpiBose.ngpiBoseCMSM = ngpiBoseCMSM;
    ngpiBose.ngpiBoseCMWG = ngpiBoseCMWG;
    ngpiBose.ngpiBoseCMAS = ngpiBoseCMAS;

    
    return ngpiBose;
}

module.exports = ngpiBose;