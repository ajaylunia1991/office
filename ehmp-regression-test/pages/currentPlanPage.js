'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    fields: {
        enrollBtn: '*[data-mediator="enroll"]',
        companyBtn: '#carrier_filter > h4',
        planRadio: '#ehi-current-plan-list > li:nth-of-type(2) > input', //second plan radio in plan list
        specificPlanRadio: "input[id='35776'][type='radio']"
        //doneBtn: "div:contains('Done')"
    },

    addCurrentPlan(){
        I.click(this.fields.planRadio);I.wait(1);
        I.executeScript(function() {
         $("div:contains('Done')").click();
         });
        I.wait(2);
    },
    addSpecificCurrentPlan(){
        I.click(this.fields.specificPlanRadio);I.wait(1);
        I.executeScript(function() {
            $("div:contains('Done')").click();
        });
        I.wait(2);
    }
}