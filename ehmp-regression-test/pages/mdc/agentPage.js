'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {

        //Insurance Agents Page Elements

        topHeaderElements: '.site-header',
        topMenuBar: '#menu-medicare',
        comparePlansSection: '.compare-medicare',
        agentDirectory: '.page-agent-directory',
        agentOne: 'div.page-agent-directory>div:nth-child(2)',
        picture: '.agent a',
        name: ' .small-text-center a',
        viewProfileButton: 'div:nth-child(2) > div:nth-child(1) > a',
        customerReview: 'div:nth-child(1)  > div:nth-child(2) > p',
        getPlanRecommendation: 'div:nth-child(2) > div > a:nth-child(1)',
        scheduleCall: 'div:nth-child(2) > div > a:nth-child(3)',
        rating: '.number',
        
        // Insurance Agents Page, Saving Text Statement element
        agentSavingText1:'#main > div > div.row.no-padding > div.small-12.medium-3.medium-pull-9.columns.sidebar-agents.hide-for-small > div > p:nth-child(2)',
        agentSavingText2:'//*[@id="main"]/div/div[1]/div[2]/div/p[1]/b',

    },


    validateLicensedAgentProfilePageElements() {

        I.waitForVisible(this.fields.topHeaderElements, 50);
        I.waitForVisible(this.fields.topMenuBar, 5);
        I.waitForVisible(this.fields.comparePlansSection, 5);
        I.waitForVisible(this.fields.agentDirectory, 5);
        I.waitForVisible(this.fields.agentOne, 5);
        I.waitForVisible(this.fields.picture, 5);
        I.waitForVisible(this.fields.name, 5);
        I.waitForVisible(this.fields.viewProfileButton, 5);
        I.waitForVisible(this.fields.customerReview, 5);
        I.waitForVisible(this.fields.getPlanRecommendation, 5);
        I.waitForVisible(this.fields.scheduleCall, 5);
        I.waitForVisible(this.fields.rating, 5);

    },

    // Function used to Verify Savings statement on Insurance Agents Page - ALGO-508 - Test case - @C24668
    validateSavingText(agentSaveText1, agentSaveText2) {
        I.wait(1);
        I.see(agentSaveText1, this.fields.agentSavingText1);
        I.see(agentSaveText2, this.fields.agentSavingText2);
},  
}