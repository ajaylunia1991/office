Feature('MDC- Articles Pages');

/**Created by Reena**/

var config = require('config');
var domain = config.get('MDC');
var ArticleURL = require('../../../data/ArticlePageURL.js')();

// ALGO-580 - @C24752
Scenario('ENV: ' +process.env.NODE_ENV + ' - Reena - ALGO-580 - @C24752- Verify components of All Articles and Article Detail Page', (I, allArticleDetailPage) => {
I.amOnPage(domain　+'/articles/');
I.wait(2);
I.waitForVisible(allArticleDetailPage.fields.allArticlePageHeader, 5);
I.see('Browse Medicare Articles',allArticleDetailPage.fields.allArticlePageHeader);
allArticleDetailPage.validateAllArticlesPageSections();
I.wait(2);
I.amOnPage(domain　+'/medicare-advantage/can-i-change-medicare-advantage-plans-anytime/');
I.wait(2);
I.see('Can I Change Medicare Advantage Plans Anytime?',allArticleDetailPage.fields.articleDetailHeader);
allArticleDetailPage.validateArticleDetailPageElement();
});
   
   
 //ALGO-529, ALGO-591, ALGO-585- @C24753 Verify article-banner CTA text on category article pages   
Data(ArticleURL.URL01).Scenario('ENV: ' + process.env.NODE_ENV + ' - Reena -ALGO-529, ALGO-591, ALGO-585- @C24753 part1- Verify article-banner CTA text on article pages', async function(I, current, allArticleDetailPage) {
    I.amOnPage(domain + current.ArticleURL);
    I.wait(2);
    //Verify article-banner CTA text on category article pages 
    I.see('Find affordable Medicare plans in your area' , allArticleDetailPage.fields.articleDetailTopCtaText);
});

 //ALGO-529, ALGO-591, ALGO-585- @C24753 Verify article-banner CTA text on State article pages   
 Data(ArticleURL.URL02).Scenario('ENV: ' + process.env.NODE_ENV + ' - Reena -ALGO-529, ALGO-591, ALGO-585- @C24753 part2- Verify article-banner CTA text on state article pages', async function(I, current, allArticleDetailPage) {
    I.amOnPage(domain + current.ArticleURL);
    var state = current.ArticleURL;
    state= state.replace('/state/','')
    state= state.replace('-medicare/','');  
    state=state[0].toUpperCase() + state.slice(1);  
    I.wait(2);
    //Verify article-banner CTA text on state article page
    I.see('Find affordable Medicare plans in '+ state , allArticleDetailPage.fields.articleDetailTopCtaText);
});

 //ALGO-624- @C24755 On state Articles page, on scroll down page to page bottom should show sticky banner    
 Data(ArticleURL.URL02).Scenario('ENV: ' + process.env.NODE_ENV + ' - Reena -ALGO-624- @C24755 - Part 2 On State Articles page, on scroll down page to page bottom should show sticky banner', async function(I, current, allArticleDetailPage) {
    I.amOnPage(domain + current.ArticleURL);
    I.wait(2);
    //Verify on scroll down page to page bottom should show sticky banner 
    allArticleDetailPage.validatestickybanner();
    I.see('Find affordable Medicare plans in your area', allArticleDetailPage.fields.articleStickyBannerLabel);
});