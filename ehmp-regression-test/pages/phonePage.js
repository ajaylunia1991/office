'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // insert your locators and methods here

    fields: {

        //EHM site all phone location
        phone: '888-296-0117',
        headerPhone: '//ul[@id="gn-right"]/li[2]/p[1]',
        agentPhone: 'p.agent-phone',
        ctaPhone: 'div.phone-wrap > p.phone',
        footerPhone: '//p[@id="footer-contact"]/span[1]',
        MApagePhone: '//div[@class="phone"]/li[1]',
        MDpagePhone: '//div[@class="phone"]/li[1]',
        MSpagePhone: '//div[@class="phone"]/li[1]',
        detailLink: 'a[data-mediator="details',
        seePlansBtn: '//*[@id="home-hero-content"]/div/section/div/a[1]'
    },

    verifyPhone() {

        I.waitForElement(this.fields.headerPhone);
        //I.see(this.fields.phone,this.fields.headerPhone);//Global Header
        //I.see(this.fields.phone,this.fields.MApagePhone);//MD page
        I.see(this.fields.phone, this.fields.footerPhone); //Global Footer
    },

    verifyHomePhone() {

        I.waitForElement(this.fields.headerPhone);
        // I.see(this.fields.phone,this.fields.headerPhone);//Global Header
        // I.see(this.fields.phone,this.fields.agentPhone);//agentPhone
        // I.see(this.fields.phone,this.fields.ctaPhone);//ctaPhone
        I.see(this.fields.phone, this.fields.footerPhone); //Global Footer
    }
}