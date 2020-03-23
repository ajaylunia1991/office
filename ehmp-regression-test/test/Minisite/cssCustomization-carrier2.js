/**
 * Created by supingx on 2019/3/6.
 */

Feature('Minisite - cssCustomization');

var config = require('config');
var ehmp = config.get('EHMP');
var ehm = config.get('EHM');
var carrierMiniSite = require(process.cwd() + '/data/carrierMiniSite.js')();

Data(carrierMiniSite.carrierMiniSite2).Scenario('carrier minisite with css customization(button)', async(I, current,minisitePage) => {

    //Open minisite Page
    if (current.ehmTag == "Y") {
        I.amOnPage(ehm + '/ehi/medicare/mini-site?allid=' + current.allid + '&msType=' + current.msType);
        // let url = await I.grabCurrentUrl();console.log('current URL:' + url);
    } else {
        I.amOnPage(ehmp + '/ehi/medicare/mini-site?allid=' + current.allid + '&msType=' + current.msType);
        // let url = await I.grabCurrentUrl();console.log('current URL:' + url);
    }
    //Verified h1 message
    minisitePage.checkCarrierCensusH1(current.h1);
    //check h3&button color
    minisitePage.checkCarrierCensusBtnColor(current.h3Color,current.findPlansColor,current.hoverUpFindPlanColor);

});


