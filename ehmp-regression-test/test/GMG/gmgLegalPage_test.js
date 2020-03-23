Feature('Verify GMG Legal pages layout');

var config = require('config');
var domain = config.get('GMG');

Scenario('Navigate to Licensing legal page and validate layout', async function(I,gmgLegalPages,gmgHeaderFooter){
    I.amOnPage(domain);
    I.click(gmgHeaderFooter.footerElements.siteMap.licensingLink);
    gmgHeaderFooter.validateHeaderLayout();
    I.see('Licensing', gmgLegalPages.licensingElements.banner);
    I.see('Updated', gmgLegalPages.licensingElements.banner);
    I.see('Licensing',gmgLegalPages.licensingElements.breadcrumb);
    I.see('This Web Site is brought to you by the following licensed brokers', gmgLegalPages.licensingElements.licensingContent);
    I.see('License No.', gmgLegalPages.licensingElements.licensingContent);
    I.see('The purpose of this communication is the solicitation of insurance', gmgLegalPages.licensingElements.licensingContent);
    gmgHeaderFooter.validateFooterLayout();
});

Scenario('Navigate to Nondiscrimination legal page and validate layout', async function(I,gmgLegalPages,gmgHeaderFooter){
    I.amOnPage(domain);
    I.click(gmgHeaderFooter.footerElements.siteMap.nonDiscriminationLink);
    gmgHeaderFooter.validateHeaderLayout();
    I.see('Nondiscrimination Notice', gmgLegalPages.nonDiscriminationElements.banner);
    I.see('Updated', gmgLegalPages.nonDiscriminationElements.banner);
    I.see('The plans we represent do not discriminate on the basis of race, color, national origin, age, disability, or sex.', gmgLegalPages.nonDiscriminationElements.nonDiscriminationContent);
    I.see('Aetna Nondiscrimination Notice', gmgLegalPages.nonDiscriminationElements.nonDiscriminationContent);
    I.see('Loyal American Nondiscrimination Notice', gmgLegalPages.nonDiscriminationElements.nonDiscriminationContent);
    gmgHeaderFooter.validateFooterLayout();
});

Scenario('Navigate to Terms & Conditions legal page and validate layout', async function(I,gmgLegalPages,gmgHeaderFooter){
    I.amOnPage(domain);
    I.click(gmgHeaderFooter.footerElements.siteMap.termsConditionsLink);
    gmgHeaderFooter.validateHeaderLayout();
    I.see('Terms of Use', gmgLegalPages.termsConditionsElements.banner);
    I.see('Updated', gmgLegalPages.termsConditionsElements.banner);
    I.see('Welcome, and thank you for your interest in eHealthInsurance Services', gmgLegalPages.termsConditionsElements.nonDiscriminationContent);
    I.see('Disclaimers; No Warranties', gmgLegalPages.termsConditionsElements.nonDiscriminationContent);
    I.see('Contact Information', gmgLegalPages.termsConditionsElements.nonDiscriminationContent);
    gmgHeaderFooter.validateFooterLayout();
});

Scenario('Navigate to Privacy Policy legal page and validate layout', async function(I,gmgLegalPages,gmgHeaderFooter){
    I.amOnPage(domain);
    I.click(gmgHeaderFooter.footerElements.siteMap.privacyPolicyLink);
    gmgHeaderFooter.validateHeaderLayout();
    I.see('Privacy Policy', gmgLegalPages.privacyPolicyElements.banner);
    I.see('Updated', gmgLegalPages.privacyPolicyElements.banner);
    I.see('Thank you for your interest in eHealthInsurance Services, Inc.', gmgLegalPages.privacyPolicyElements.nonDiscriminationContent);
    I.see('You can learn about our commitment to privacy with this Policy describing how we collect', gmgLegalPages.privacyPolicyElements.nonDiscriminationContent);
    I.see('Additional Information About Privacy and Security at eHealthInsurance', gmgLegalPages.privacyPolicyElements.nonDiscriminationContent);
    gmgHeaderFooter.validateFooterLayout();
});

