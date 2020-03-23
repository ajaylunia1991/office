// https://www.cm.ehealthmedicareplans.com/test/fast-quote.html
// Do not create lead when tcpa info doesn't match.
Feature('ehmp - fq');

var config = require('config');
var EHMP = config.get('EHMP');
var randomInfo = require(process.cwd() + '/utils/random').randomInfo();

Scenario(
    'Do not create lead when tcpa info does not match DB info.',
    (I) => {
        if (process.env.NODE_ENV != 'gpa' && process.env.NODE_ENV != 'prod') {
            I.amOnPage(
                EHMP + '/test/fast-quote.html'
            );
            I.clearField('#fastQuoteForm > div:nth-child(15) > input[type="text"]');
            I.clearField('#fastQuoteForm > div:nth-child(16) > input[type="text"]');
            I.clearField('#fastQuoteForm > div:nth-child(18) > input[type="text"]');
            I.clearField('#fastQuoteForm > div:nth-child(17) > input[type="text"]');
            I.clearField('#fastQuoteForm > div:nth-child(19) > input[type="text"]');
            I.clearField('#fastQuoteForm > div:nth-child(24) > input[type="text"]');
            I.fillField('#fastQuoteForm > div:nth-child(15) > input[type="text"]', randomInfo.firstName);
            I.fillField('#fastQuoteForm > div:nth-child(16) > input[type="text"]', randomInfo.lastName);
            I.fillField('#fastQuoteForm > div:nth-child(18) > input[type="text"]', randomInfo.phone);
            I.fillField('#fastQuoteForm > div:nth-child(17) > input[type="text"]', randomInfo.email);
            I.wait(1);
            I.click('#fastQuoteForm > div:nth-child(50) > button:nth-child(2)');
            I.switchToNextTab();
            I.wait(5);
            // I.waitForText('Customize your quote to Compare Plans and Save');
            // I.click('#continue-btn');
            I.wait(3);
            I.click('#tab');
            I.waitForText('Thank you');
            I.waitForText('A licensed insurance agent will contact you soon');

        }

    }
);