Feature('ehim - Articles');


var config = require('config');
var domain = config.get('EHIM');

Scenario('ENV: ' + process.env.NODE_ENV + ' - Articles - should display EHIM articles page', async function (I,ehimPage){

	//To verify search field on articles page
	I.amOnPage(domain+ '/articles');
	I.seeElementInDOM(ehimPage.fields.searchArticlesField,3000);
	I.seeElementInDOM(ehimPage.fields.articlesList,3000);
	//to verify that more than 10 all articles are being displayed
	let num =await I.grabNumberOfVisibleElements(ehimPage.fields.articlesDisplay);
	if(num >= 10){
		console.log("--------------------  * Verified successfully!")
	}else{
		console.log("--------------------  * Verified fail! Aticles num is less than 10!")
	}
})

Scenario('ENV: ' + process.env.NODE_ENV + ' - Articles - should display article category in the EHIM articles page', async function (I,ehimPage){

	 //To verify search field on articles page
	 I.amOnPage(domain+ '/articles');
	 I.seeElementInDOM(ehimPage.fields.articlesMenu,3000);
	 I.click(ehimPage.fields.articlesByState);
	 I.see('Medicare Plans by State',ehimPage.fields.stateArticlesHeading);
})

Scenario('ENV: ' + process.env.NODE_ENV + ' - Articles - should display single EHIM article page', async function (I,ehimPage){
	 //To verify search field on articles page
	 I.amOnPage(domain+ '/articles');
	 I.seeElementInDOM(ehimPage.fields.articlesMenu,3000);
	 I.click(ehimPage.fields.articlesByState);
	 //Click Alabama link to transfer the article of this state	 
	 I.click(ehimPage.fields.alabamaLink);
	 I.wait(2);

	 // if(process.env.NODE_CONFIG_ENV == "cm" || process.env.NODE_CONFIG_ENV == "pr"){
        // I.see('Alabama');
	 // }else{
	 	I.see('Medicare in Alabama',ehimPage.fields.stateArticleHeading);//qa env
	 // }
	 
	 I.waitForElement(ehimPage.fields.stateFindPlansWidget,3000);
	 I.waitForElement(ehimPage.fields.stateNeedHelpWidget,3000);
	 I.waitForElement(ehimPage.fields.articleVote,3000);
	 I.waitForElement(ehimPage.fields.agentCallWidget,3000);	 
	 I.waitForElement(ehimPage.fields.widgetLeadForm,3000);

})

// TestRail C24555
Scenario('ENV: ' + process.env.NODE_ENV + ' Verify article search type ahead', (I,ehimPage) => {
	I.amOnPage(domain+ '/articles');
	I.seeElementInDOM(ehimPage.fields.articlesMenu,3000);
	I.see("All Medicare Articles");
	I.fillField(ehimPage.fields.searchArticlesField, 'medi');
	I.wait(2);
	I.click(ehimPage.fields.searchList);
	I.pressKey(ehimPage.fields.searchBtn);
	I.see("Find affordable Medicare plans");
	
})