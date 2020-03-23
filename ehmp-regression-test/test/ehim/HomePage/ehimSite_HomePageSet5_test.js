Feature('ehim - HomePage');

var config = require('config');
var domain = config.get('EHIM');

Scenario('ENV: ' + process.env.NODE_ENV + ' - Ajay - This scenario verifies Global Header / Open & Close Behaviour', async function(I,ehimPageNew) {
I.amOnPage(domain);
I.click(ehimPageNew.fields.findMedicarePlans);
I.see('Medicare Advantage');
I.see('Medicare Supplement');
I.see('Medicare Part D');
I.click(ehimPageNew.fields.closeIconFMP);

I.click(ehimPageNew.fields.learnAboutMedicareLink);
I.see('Medicare Advantage vs Medigap');
I.see('Enrolling Medicare Supplement Plans');
I.see('Compare Medicare Part D Plans');
I.click(ehimPageNew.fields.closeIcon);

});