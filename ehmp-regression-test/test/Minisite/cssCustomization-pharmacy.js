/**
 * Created by supingx on 2019/3/6.
 */

Feature('Minisite - cssCustomization');

var config = require('config');
var ehmp = config.get('EHMP');
var ehm = config.get('EHM');
var pharmacyMiniSite = require(process.cwd() + '/data/pharmacyMiniSite.js')();

Data(pharmacyMiniSite.pharmacyMiniSite).Scenario('pharmacy minisite with css customization(walgreen, cvs, cvs disclaimer is covered in sanity)', {retries: 0}, async(I, current) => {
    //Open pharmacy minisite Page
    if (current.name == "cvs") {
        I.amOnPage(ehmp + '/ehi/medicare/mini-site?allid=CVS36534&msType=msp-cvs');
    }else{
        I.amOnPage(ehm + '/' + current.name);
    }
    //Verified words
    I.wait(2);
    I.seeInCurrentUrl('.ehealthmedicareplans.com/v2/ehi/medicare/mini-site');
    I.see(current.h1);
    if (current.name == "walgreens") {
        I.seeCssPropertiesOnElements('h3', {'color': "#017E9D"});
        I.seeCssPropertiesOnElements('.btn-find-plans', {'background-color': "#02a0c0"});
        I.moveCursorTo('#ehi-btnCensusNext', 5, 5);
        I.seeCssPropertiesOnElements('#ehi-btnCensusNext', {'background-color': "#018099"});
    } else {
        I.seeCssPropertiesOnElements('h3', {'color': "#78a12e"});
        I.seeCssPropertiesOnElements('.btn-find-plans', {'background-color': "#f69234"});
        I.moveCursorTo('#ehi-btnCensusNext', 5, 5);
        I.seeCssPropertiesOnElements('#ehi-btnCensusNext', {'background-color': "#dd832e"});
    }

});
