Feature('ehmp - fq');

var config = require('config');
var EHMP = config.get('EHMP');
var randomInfo = require(process.cwd() + '/utils/random').randomInfo();

Scenario('Visit Fast quote url with lead form parameter should redirect to lead form', (I) => {
        if (process.env.NODE_ENV != 'gpa' && process.env.NODE_ENV != 'prod') {
            I.amOnPage(
                EHMP + '/ehi/medicare/fast-quote?allid=Med42975&zip=89199&type=MA&sid=146&gd1=F&bdate1=01/01/1941&smoker1=n&fname='+randomInfo.firstName+'&lname='+randomInfo.lastName+'&email='+randomInfo.email+'&homephone='+randomInfo.phone+'&cellphone=&target=medicare-shopping&page=plan-detail&plans=H5216%3A036%3A000&tcpadisclaimer=This%20is%20a%20TCPA%20for%20test&customerip=76.108.171.181&leadFormEnabled=False&fq_id=5a026d9b0a6d7b70b54e4751&writeSessionStorage=true'
            );
            I.wait(3);
            I.waitForText('Your in-network doctor and drug coverage and estimated costs based on your entered prescription drugs');
            I.wait(5);
            I.executeScript(function () {
                $('#requestToCall').click();
            });
           // I.click('#requestToCall');
            I.wait(2);
            I.waitForText('Thank you');
            I.waitForText('A licensed insurance agent will contact you soon.');

        }

    }
);