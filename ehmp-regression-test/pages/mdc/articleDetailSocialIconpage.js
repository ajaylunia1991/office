'use strict';

let I;

module.exports = { 

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {

       //articlesDetailsPage Social icons
       fbIcon:'//*[@id="main"]/div/div[1]/div[2]/div/div[1]/a[1]',
       twitterIcon: '//*[@id="main"]/div/div[1]/div[2]/div/div[1]/a[2]',
       mailIcon : '//*[@id="main"]/div/div[1]/div[2]/div/div[1]/a[3]',
       printIcon:'//*[@id="main"]/div/div[1]/div[2]/div/div[2]',
    },

    //articles Details- Function to verify the presence of Social icon

    validateArticleDetailSocialIcon() {
        I.waitForVisible(this.fields.fbIcon,5);
        I.waitForVisible(this.fields.twitterIcon, 5);
        I.waitForVisible(this.fields.mailIcon, 5);
        I.waitForVisible(this.fields.printIcon, 5);

    },

}