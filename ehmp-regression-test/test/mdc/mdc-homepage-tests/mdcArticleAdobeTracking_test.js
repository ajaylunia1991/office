Feature('mdc Article page tracking test---created by Reena');

var config = require('config');
var domain = config.get('MDC');
var ArticleURL = require('../../../data/ArticlePageURL.js')();

//ALGO-373- @C24875 - Verify on Article Pages Find Plan button have - Adobe Tracking Tags  
Data(ArticleURL.URL01).Scenario('ENV: ' + process.env.NODE_ENV + ' - Reena -ALGO-373- @C24875 - Verify on Article Pages Find Plan button have - Adobe Tracking Tags', async function(I, current, allArticleDetailPage) {
    I.amOnPage(domain + current.ArticleURL);
    I.wait(2);
    // Verify on top banner Find Plan button have - Adobe Tracking Tags
    const attributeValue1 = await I.grabAttributeFrom(allArticleDetailPage.fields.articleDetailTopFindPlanBtn, 'data-wa-link');
    console.log(attributeValue1);

    // Verify on bottom  banner Find Plan button have - Adobe Tracking Tags
    const attributeValue2 = await I.grabAttributeFrom(allArticleDetailPage.fields.articleDetailBottomFindPlanBtn, 'data-wa-link');
    console.log(attributeValue2);

});