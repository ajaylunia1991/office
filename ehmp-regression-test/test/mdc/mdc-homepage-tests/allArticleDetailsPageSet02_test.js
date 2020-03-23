Feature('MDC- Articles Pages');

/**Created by Reena**/

var config = require('config');
var domain = config.get('MDC');

var ArticleURL = require('../../../data/ArticlePageURL.js')();
var url, url1;

 //ALGO-1123 Testcase- @C23274 - Verify redirection of Top and bottom Find Plan CTA from MA,MD,and MS medicare articles pages   
 Data(ArticleURL.URL03).Scenario('ENV: ' + process.env.NODE_ENV + ' - Reena -1123- @C23274 - Verify redirection of Top and bottom Find Plan CTA from MA,MD,and MS medicare articles pages', async function(I, current, allArticleDetailPage) {
    I.amOnPage(domain + current.ArticleURL);
    I.wait(2);
    I.waitForVisible(allArticleDetailPage.fields.articleDetailTopFindPlanBtn,5);
    I.click(allArticleDetailPage.fields.articleDetailTopFindPlanBtn);
    I.wait(10); // wait added as redirection to EHMP take long time 
    url = await I.grabCurrentUrl();
    console.log(`Current URL is [${url}]`);
    if(url.includes('type=MA')){
        I.waitForText('Find your Medicare Advantage plan');
    } else if(url.includes('type=MS')){
        I.waitForText('Find your Medicare Supplement Insurance plan');
    } else if(url.includes('type=MD')){
        I.waitForText('Find your Medicare Part D plan');
    }


    I.amOnPage(domain + current.ArticleURL);
    I.wait(2);
    I.waitForVisible(allArticleDetailPage.fields.articleDetailBottomFindPlanBtn,5);
    I.click(allArticleDetailPage.fields.articleDetailBottomFindPlanBtn);
    I.wait(10); // wait added as redirection to EHMP take long time 
    url = await I.grabCurrentUrl();
    console.log(`Current URL is [${url}]`);
    if(url.includes('type=MA')){
        I.waitForText('Find your Medicare Advantage plan');
    } else if(url.includes('type=MS')){
        I.waitForText('Find your Medicare Supplement Insurance plan');
    } else if(url.includes('type=MD')){
        I.waitForText('Find your Medicare Part D plan');
    }
});

//ALGO-1123 Testcase- @C49325 - Verify redirection of sticky banner Find Plan CTA from MA,MD,and MS medicare articles pages   
Data(ArticleURL.URL03).Scenario('ENV: ' + process.env.NODE_ENV + ' - Reena -ALGO-1123 Testcase- @C49325 - Verify redirection of sticky banner Find Plan CTA from MA,MD,and MS medicare articles pages', async function(I, current, allArticleDetailPage) {
    I.amOnPage(domain + current.ArticleURL);
    I.wait(3);
    I.waitForVisible(allArticleDetailPage.fields.articleDetailTopFindPlanBtn,5);
    // scroll to behaviour for article
    url = await I.grabCurrentUrl();
    if(url.includes('/medicare-advantage/')){
    I.scrollTo(allArticleDetailPage.fields.articleText);
    }else if(url.includes('/medicare-supplement/')){
        I.scrollTo(allArticleDetailPage.fields.articleText);
    }else if(url.includes('/medicare-part-d/')){
        I.scrollTo(allArticleDetailPage.fields.articleText);
    }

    I.waitForVisible(allArticleDetailPage.fields.articleBottomStickyBanner);
    I.click(allArticleDetailPage.fields.stickyBannerFindPlansBtn);
    I.wait(10); // wait added as redirection to EHMP take long time 
    url1 = await I.grabCurrentUrl();
    console.log(`Current URL is [${url1}]`);
    if(url1.includes('type=MA')){
        I.waitForText('Find your Medicare Advantage plan');
    } else if(url1.includes('type=MS')){
        I.waitForText('Find your Medicare Supplement Insurance plan');
    } else if(url1.includes('type=MD')){
        I.waitForText('Find your Medicare Part D plan');
    }
});