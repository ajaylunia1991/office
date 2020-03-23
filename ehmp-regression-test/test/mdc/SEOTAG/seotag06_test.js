Feature('mdc');

var config = require('config');
var domain = config.get('MDC');

//ALGO-605- testcase @C24716 - Verify duplicate meta description tags
Scenario('ENV: ' +process.env.NODE_ENV + ' Ajay - Verify Canonical Tags points to Original URL', (I) => {
    
    I.amOnPage(domain +'/medicare-advantage/comparing-medicare-advantage-plans/?allid=Med40680');

    I.wait(2);
   
    I.grabSource('<link rel="canonical" href="' + domain + '"/medicare-advantage/comparing-medicare-advantage-plans/">');

    I.amOnPage(domain +'/original-medicare/medicare-part-b/?sa=U&ei=K8shVMuGOujd7Qbb44GoCw&ved=0CEYQFjAG&usg=AFQjCNGVzOfhlx7pquUNQUo-7xPebtudsg');

    I.wait(2);

    I.grabSource('<link rel="canonical" href="' + domain + '"/about-medicare/medicare-part-b/">')

    I.amOnPage(domain +'/about-medicare/medicare-cost-plans-eligibility-coverage-costs/?on=OCR/page/3//page/2/&vi=hm');

    I.wait(2);

    I.grabSource('<link rel="canonical" href="' + domain + '"/about-medicare/medicare-cost-plans-eligibility-coverage-costs/">');

    I.amOnPage(domain +'/medicare-advantage/no-premium-plans/?on=ocf-hlink-sthp&vi=hm');

    I.wait(2);

    I.grabSource('<link rel="canonical" "' + domain + '"/medicare-advantage/no-premium-plans/">');

    I.amOnPage(domain +'/coverage/does-medicare-cover-medical-alert-systems/?page=post&id=1993904146509929796');

    I.wait(2);

    I.grabSource('<link rel="canonical""' + domain + '"/coverage/does-medicare-cover-medical-alert-systems/">');

    I.amOnPage(domain + '/medicare-advantage/how-to-enroll-in-a-medicare-advantage-plan/?allid=Med40680');

    I.wait(2);
 
    I.grabSource('<link rel="canonical""' + domain + '"/medicare-advantage/how-to-enroll-in-a-medicare-advantage-plan/">');

    I.amOnPage(domain + '/articles/?page=post&id=1993904146509929796');

    I.wait(2);

    I.grabSource('<link rel="canonical" "' + domain + '"/articles/">');

    I.amOnPage(domain + '/compare-medicare-plans/?allid=Med40680');

    I.wait(2);

    I.grabSource('<link rel="canonical" "' + domain + '"/compare-medicare-plans/">')
 
})