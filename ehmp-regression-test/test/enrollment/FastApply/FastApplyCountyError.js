Feature('enrollment - FastApply');

var config = require('config');
var EHMP = config.get('EHMP');
var randomInfo = require(process.cwd() + '/utils/random').randomInfo();

Scenario(
    'Rachel - Allow user to go to application when there is county error-missing space.',
    (I) => {
        if (process.env.NODE_ENV != 'gpa' && process.env.NODE_ENV != 'prod') {
            I.amOnPage(
                EHMP + '/ehi/muse-service/fast-apply?allid=ime8364000&planId=1&carrierId=35145400&county=DeKalb&zip=35986&sid=dde9ede56de64ac781de56c8ee3cb261A&fname=&lname=&hicn=&street=&city=&email=&pid=AD0B37&dob=09%2F20%2F1964&padate=09%2F2018&pbdate=09%2F2018'
            );
            
            I.waitForText('Applicant Information');
            I.waitForText('First Name');

        }

    }
);

Scenario(
    'Rachel - Allow user to go to application when there is county error-remove single quote.',
    (I) => {
        if (process.env.NODE_ENV != 'gpa' && process.env.NODE_ENV != 'prod') {
            I.amOnPage(
                EHMP + '/ehi/muse-service/fast-apply?allid=ime8364000&planId=34&carrierId=21127600&county=Queen%20Anne%27s&zip=21668&sid=f32cd42aaa5045f1950187dff8c342b9B&fname=&lname=&hicn=4D81-Y38-PA97&street=&city=&email=&pid=ED0DF9&dob=04%2F15%2F1947&padate=04%2F2012&pbdate=04%2F2012'
            );
            
            I.waitForText('Applicant Information');
            I.waitForText('First Name');
        }

    }
);

Scenario(
    'Rachel - Allow user to go to application when there is county error-No space.',
    (I) => {
        if (process.env.NODE_ENV != 'gpa' && process.env.NODE_ENV != 'prod') {
            I.amOnPage(
                EHMP + '/ehi/muse-service/fast-apply?allid=EHM35770&carrierId=90120500&planId=259&segmentId=000&zip=90001&county=LOSANGELES&leadId=6724358&version=2&mboxSession=&codeCriteria1=-1&hideContact=&type=&email=21321345QAASD@ehealth.com&lname=aa&fname=bb&smoker1=N&ssacd=&salesRep=&requestFrom=&reqdate=&campaign=&sponsorshipAdListTail=&adobeMrktgCloudId=24924773046707985373007165161855248161&gclid=&defaultThrottle=GREEN&applicationFlow=M'
            );
            
            I.waitForText('Applicant Information');
            I.waitForText('First Name');
        }

    }
);

Scenario(
    'Rachel - Allow user to go to application when there is county error- extra "."',
    (I) => {
        if (process.env.NODE_ENV != 'gpa' && process.env.NODE_ENV != 'prod') {
            I.amOnPage(
                EHMP + '/ehi/muse-service/fast-apply?allid=ime8364000&planId=36&carrierId=50127600&county=O.Brien.&zip=51201'
            );
            
            I.waitForText('Applicant Information');
            I.waitForText('First Name');
        }

    }
);

Scenario(
    'Rachel - Allow user to go to application when there is county error- ST.',
    (I) => {
        if (process.env.NODE_ENV != 'gpa' && process.env.NODE_ENV != 'prod') {
            I.amOnPage(
                EHMP + '/ehi/muse-service/fast-apply?allid=ime8364000&planId=4&carrierId=10145400&county=St.%20Lawrence&zip=12922'
            );
            
            I.waitForText('Applicant Information');
            I.waitForText('First Name');
        }

    }
);