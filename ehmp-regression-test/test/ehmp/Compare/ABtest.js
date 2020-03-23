/**
 * Created by supingx on 2019/2/13.
 */
//mini site/pharmacy tool excluded
//fq case,ppe case

Feature('ehmp - compare');

var config = require('config');
var EHMP = config.get('EHMP');

Scenario('Carol - ABtest - new compare applied to core site, MA case ', async(I,compareV2Page) =>{

    I.amOnPage(EHMP + '/?detailCompareRedesign=true&qascript=Y&doctorSearch=v2&planUnitRedesign=blue#plan-compare/MA/90001/05200/LOS%20ANGELES/pH0544-007-000,H5087-005-000');
    I.waitForElement(compareV2Page.fields.addFavoriteLink, 50);
    I.see('Show benefit differences only');
    I.seeElement(compareV2Page.fields.currentPlanEdit);

});

/*Scenario('core site fq case, included in AB, @only', async(I,compareV2Page) =>{

    I.amOnPage(EHMP + '/ehi/medicare/fast-quote?allid=Goo31567&detailCompareRedesign=true&target=ppe&type=MD&zip=33351&county=BROWARD&ppSaveSessionId=&email=2345678905lhty@ehealth.com&planYear=2019&campaign=eHMPlanCompareMulti&agentid=&bdate1=12/22/1944&gd1=F&fname=lhty&lname=wu&smoker1=n&leadid=8530448&homephone=&reqdate=03-01-2019&page=plan-compare&plans=S5884:157:000&salesRep=');
    I.waitForElement(compareV2Page.fields.addCurrentLink, 50);
    I.see('Est. Monthly Total Cost');
    I.seeElement(compareV2Page.fields.addCurrentLink);

}); ---seemed the parameters not apply to fq url*/


Scenario('new compare applied to core site, MD case ', async(I,compareV2Page) =>{

    I.amOnPage(EHMP + '/?detailCompareRedesign=true&qascript=Y&doctorSearch=v2&planUnitRedesign=blue#plan-compare/MD/90001/05200/LOS%20ANGELES/pS5810-295-000,S5921-413-000');
    I.waitForElement(compareV2Page.fields.addCurrentLink, 50);
    I.see('Show benefit differences only');
    I.seeElement(compareV2Page.fields.addCurrentLink);

});

Scenario('mini-site also go to new compare page ', async(I,compareV2Page) =>{

    I.amOnPage(EHMP + '/ehi/medicare/mini-site?allid=Aet32546&qascript=Y&detailCompareRedesign=true&msType=msc-aetna-3#plan-compare/MA/90001/05200/LOS%20ANGELES/pH0543-168-000,H0543-151-000');
    I.wait(2);
    I.seeInCurrentUrl('/ehi/medicare/mini-site');
    I.waitForElement(compareV2Page.fields.addFavoriteLink, 50);
    I.see('Show benefit differences only');
    I.seeElement(compareV2Page.fields.currentPlanEdit);
});

Scenario('pharmacy tool also go to new compare page', async(I,compareV2Page) =>{

    I.amOnPage(EHMP + '/pharmacy?allid=Bar37464&qascript=Y&detailCompareRedesign=true#plan-compare/MD/90001/05200/LOS%20ANGELES/pS5810-295-000,S5921-413-000');
    I.wait(2);
    I.seeInCurrentUrl('/pharmacy?');
    I.waitForElement(compareV2Page.fields.topToolBack, 50);
    I.see('Show benefit differences only');
    I.seeElement(compareV2Page.fields.addCurrentLink);

});

Scenario('mini site ppe case, transfer to new compare page ', async(I,compareV2Page) =>{

    I.amOnPage(EHMP + '/ehi/medicare/mini-site?allid=Aet32546&qascript=Y&msType=msc-aetna-3&detailCompareRedesign=true&leadFormEnabled=false&reqdate=&allid=Med35908&type=MA&ppSaveSessionId=&target=ppe&agentid=3762&leadid=&salesRep=sanyuw.mdesales&page=plan-compare&planYear=2020&requestFrom=PPE&campaign=eHMPlanCompareMulti#plan-compare/MA/90001/05200/LOS%20ANGELES/pH0523-002-000');
    I.waitForElement(compareV2Page.fields.addFavoriteLink, 50);
    I.see('Show benefit differences only');
    I.seeElement(compareV2Page.fields.currentPlanEdit);

});

