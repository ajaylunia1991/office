Feature("ehm - Header");

/**
 * created by alunia
 */

var config = require("config");
var domain = config.get("EHM");

Scenario(
  ' EHM/ Global Header / Do not hide links under Find when "bad" alliance ID and Navigation should happen to MA',
  (I,ehmPage) => {
    I.amOnPage(domain + "/?allid=slkdfjsdklf");
    
    I.click(ehmPage.fields.learnAboutMedicareLink);

    I.click(ehmPage.fields.closeIcon);

    I.click(ehmPage.fields.findMedicarePlans);

    I.click(ehmPage.fields.fmaPlansLink);

    I.seeInCurrentUrl('ehealthmedicareplans.com/v2?type=MA&allid=slkdfjsdklf');  

  });

  Scenario(
    ' EHM/ Global Header / Do not hide links under Find when "bad" alliance ID and Navigation should happen to MS',
    (I,ehmPage) => {
      I.amOnPage(domain + "/?allid=slkdfjsdklf");
      
      I.click(ehmPage.fields.learnAboutMedicareLink);
  
      I.click(ehmPage.fields.closeIcon);
  
      I.click(ehmPage.fields.findMedicarePlans);
  
      I.click(ehmPage.fields.fmsPlansLink);
  
      I.seeInCurrentUrl('ehealthmedicareplans.com/v2?type=MS&allid=slkdfjsdklf');  
  
    });
  
    Scenario(
      ' EHM/ Global Header / Do not hide links under Find when "bad" alliance ID and Navigation should happen to MS',
      (I,ehmPage) => {
        I.amOnPage(domain + "/?allid=slkdfjsdklf");
        
        I.click(ehmPage.fields.learnAboutMedicareLink);
    
        I.click(ehmPage.fields.closeIcon);
    
        I.click(ehmPage.fields.findMedicarePlans);
    
        I.click(ehmPage.fields.fmdPlansLink);
    
        I.seeInCurrentUrl('ehealthmedicareplans.com/v2?type=MD&allid=slkdfjsdklf');  
    
      });
    
     