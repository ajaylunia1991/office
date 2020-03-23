'use strict';

let I;

module.exports = {

    //
    _init() {
        I = actor();
    },

  elements:{
      bannerImage:{id:'medicare-answers_hero-banner_0__hero-background'},
      bannerTextHeading:{id:'medicare-answers_hero-banner_0__hero-heading'},
      bannerTextParagraph:{id:'medicare-answers_hero-banner_0__hero-paragraph'},
      askAnythingCTA:{id:'medicare-answers_hero-banner_0__cta-box'},
      submitAQuestionButton:"//button[@class='hero-banner__cta-box-button submit-question-btn col-m-2 col-centered']",
      breadCrumb:{class:'breadcrumbs'},
      goToSectionElement:{class:'category-menu'},
      medicareSectionButton:"//a[@class='category-menu__item-anchor' and @data-wa-link ='Medicare Supplement Plans']",
      medicareOptionSectionButton:"//a[@class='category-menu__item-anchor' and @data-wa-link ='Medicare Options']",
      enrollementSectionButton:"//a[@class='category-menu__item-anchor' and @data-wa-link ='Enrollment']",
      insuranceCompaniesSectionButton:"//a[@class='category-menu__item-anchor' and @data-wa-link ='Insurance Companies']",
      eligibilitySectionButton:"//a[@class='category-menu__item-anchor' and @data-wa-link ='Eligibility']",
      dNHSectionButton:"//a[@class='category-menu__item-anchor' and @data-wa-link ='Dental, Vision, & Hearing']",
      categorySegmentHeading:"//h2[@class='category-segments__heading row']",
      askUsAnythingFooter:"//div[@class='bottom-hero-banner__box']"
  }
}
