'use strict';

var ngpiTest = function() {

    var ngpiTest = {};
    //logo1
    var ngpidataQASM = new DataTable(['vanityURL','personalCode','birthYear','zipCode','drugName','drName','allId','logo','data']);
    var ngpidataQAWG = new DataTable(['vanityURL','personalCode','birthYear','zipCode','drugName','drName','allId','logo','data']);
    var ngpidataQAAS = new DataTable(['vanityURL','personalCode','birthYear','zipCode','drugName','drName','allId','logo','data']);
    
    var ngpidataCMSM = new DataTable(['vanityURL','personalCode','birthYear','zipCode','drugName','drName','allId','logo','data']);
    var ngpidataCMWG = new DataTable(['vanityURL','personalCode','birthYear','zipCode','drugName','drName','allId','logo','data']);
    var ngpidataCMAS = new DataTable(['vanityURL','personalCode','birthYear','zipCode','drugName','drName','allId','logo','data']);


     	
    ngpidataQASM.add(['mysmgcode/','BC2UO0','1949','07676','Benicar 20 mg tablet','Ginsburg, Jeffrey','sum141937300','https://qa.partner.ehealth.com/documents/12027/8519983/Summit-Medical-Group-Logo.png?version=1.0', 'Summit Medical Group has partnered with eHealth to help you find Medicare plans that cover your doctors and prescription drugs. Your unique 6 digit personal code will enter your doctor & prescription information, so you only see plans with the coverage you want.']);
    ngpidataQAWG.add(['mywalgreenscode/','fu9906','1932','90001','simvastatin 40 mg tablet','Feinberg, Craig','wal141944300','https://qa.partner.ehealth.com/documents/12027/8520021/Walgreens-Logo.png?version=1.0', 'Walgreens has partnered with eHealth to help you find Medicare plans that cover your doctors and prescription drugs. Your unique 6 digit personal code will enter your doctor & prescription information, so you only see plans with the coverage you want.']);
    ngpidataQAAS.add(['myfmhcode/','ALL006','1955','90001','Macrodantin 25 mg capsule','Beney, Christopher','all141994300','https://qa.partner.ehealth.com/documents/12027/8549001/FMH_logo.png?version=1.0', 'FollowMyHealth has partnered with eHealth to help you find Medicare plans that cover your doctors and prescription drugs. Your unique 6 digit personal code will enter your doctor & Rx info, so you only see plans with the coverage you want.']);
    
    ngpidataCMSM.add(['mysmgcode/','3N50E1','1933','07676','furosemide 20 mg tablet','Blady, David','sum33927700','https://cm.partner.ehealth.com/documents/10180/1617906/Summit-Medical-Group-Logo.png?version=1.0', 'Summit Medical Group has partnered with eHealth to help you find Medicare plans that cover your doctors and prescription drugs. Your unique 6 digit personal code will enter your doctor & prescription information, so you only see plans with the coverage you want.']);
    ngpidataCMWG.add(['mywalgreenscode/','EWZSD4','1948','90001','metoprolol tartrate 50 mg tablet','Nahin, Barry','wal33928700','https://cm.partner.ehealth.com/documents/10180/1617945/Walgreens-Logo.png?version=1.0', 'Walgreens has partnered with eHealth to help you find Medicare plans that cover your doctors and prescription drugs. Your unique 6 digit personal code will enter your doctor & prescription information, so you only see plans with the coverage you want.']);
    ngpidataCMAS.add(['myfmhcode/','8U5MS5','1946','90001','losartan 50 mg tablet','Bridges, William','all33959700','https://cm.partner.ehealth.com/documents/10180/1632074/FMH_logo.png?version=1.0', 'FollowMyHealth has partnered with eHealth to help you find Medicare plans that cover your doctors and prescription drugs. Your unique 6 digit personal code will enter your doctor & prescription information, so you only see plans with the coverage you want.']);
    
   
    ngpiTest.ngpidataQASM = ngpidataQASM;
    ngpiTest.ngpidataQAWG = ngpidataQAWG;
    ngpiTest.ngpidataQAAS = ngpidataQAAS;
    ngpiTest.ngpidataCMSM = ngpidataCMSM;
    ngpiTest.ngpidataCMWG = ngpidataCMWG;
    ngpiTest.ngpidataCMAS = ngpidataCMAS;
    
    return ngpiTest;
}

module.exports = ngpiTest;