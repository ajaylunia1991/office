Feature('enrollment - FastApply');

var config = require('config');
var EHMP = config.get('EHMP');

Scenario(
    'Fast Apply/MEDI-24269 redirect to quote page when error happen : invalid county',
    (I) => {
        if (process.env.NODE_ENV != 'gpa' && process.env.NODE_ENV != 'prod') {
            I.amOnPage(
                EHMP + '/ehi/muse-service/fast-apply?allid=ama8959000&carrierId=66120800&planId=12&zip=66738&county=Linn'
            );
            
            I.waitForText('Medicare Advantage');
            I.waitForText('Benefit Highlights');

        }

    }
);

Scenario(
    'Fast Apply/MEDI-24269 redirect to quote page when error happen : Tele plan',
    (I) => {
        if (process.env.NODE_ENV != 'gpa' && process.env.NODE_ENV != 'prod') {
            I.amOnPage(
                EHMP + '/ehi/muse-service/fast-apply?allid=ama8959000&carrierId=30120500&planId=98&zip=30143&county=Dawson'
            );
            
            I.waitForText('Medicare Advantage');
            I.waitForText('Benefit Highlights');
        }

    }
);

Scenario(
    'Fast Apply/MEDI-24269 redirect to quote page when error happen : Invalid zipcode',
    (I) => {
        if (process.env.NODE_ENV != 'gpa' && process.env.NODE_ENV != 'prod') {
            I.amOnPage(
                EHMP + '/ehi/muse-service/fast-apply?allid=EHM35770&carrierId=90120500&planId=211&segmentId=000&zip=12345&county=LOS%20ANGELES&leadId=6724358&version=2&mboxSession=&codeCriteria1=-1&hideContact=&type=&email=21321345QAASD@ehealth.com&lname=aa&fname=bb&smoker1=N&ssacd=&salesRep=&requestFrom=&reqdate=&campaign=&sponsorshipAdListTail=&adobeMrktgCloudId=24924773046707985373007165161855248161&gclid=&defaultThrottle=GREEN&applicationFlow=M'
            );
            
            I.waitForText('Medicare Advantage Plans');
           
        }

    }
);

Scenario(
    'Fast Apply/MEDI-24269 redirect to quote page when error happen : expired plan',
    (I) => {
        if (process.env.NODE_ENV != 'gpa' && process.env.NODE_ENV != 'prod') {
            I.amOnPage(
                EHMP + '/ehi/muse-service/fast-apply?allid=EHM35770&carrierId=73120600&planId=12&segmentId=000&zip=77008&county=HARRIS&version=2&mboxSession=&codeCriteria1=-1&hideContact=&type=&email=21321345QAASD@ehealth.com&lname=aa&fname=bb&smoker1=N&ssacd=&salesRep=&requestFrom=&reqdate=&campaign=&sponsorshipAdListTail=&adobeMrktgCloudId=24924773046707985373007165161855248161&gclid=&defaultThrottle=GREEN&applicationFlow=M'
            );
            
            I.waitForText('Medicare Advantage Plans');
        }

    }
);

Scenario(
    'Fast Apply/MEDI-24269 redirect to quote page when error happen : request effective exceeds plan effective date',
    (I) => {
        if (process.env.NODE_ENV != 'gpa' && process.env.NODE_ENV != 'prod') {
            I.amOnPage(
                EHMP + '/ehi/muse-service/fast-apply?allid=EHM35770&carrierId=90120500&planId=211&segmentId=000&zip=90001&county=LOS%20ANGELES&version=2&mboxSession=&codeCriteria1=-1&hideContact=&type=&email=21321345QAASD@ehealth.com&lname=aa&fname=bb&smoker1=N&ssacd=&salesRep=&requestFrom=&reqdate=01-01-2020&campaign=&sponsorshipAdListTail=&adobeMrktgCloudId=24924773046707985373007165161855248161&gclid=&defaultThrottle=GREEN&applicationFlow=M'
            );
            
            I.waitForText('Medicare Advantage');
            I.waitForText('Benefit Highlights');
        }

    }
);

Scenario(
    'Fast Apply/MEDI-24269 redirect to quote page when error happen: missing zipcode redirect to census',
    (I) => {
        if (process.env.NODE_ENV != 'gpa' && process.env.NODE_ENV != 'prod') {
            I.amOnPage(
                EHMP + '/ehi/muse-service/fast-apply?allid=EHM35770&carrierId=90120500&planId=211&segmentId=000&zip=&county=LOS%20ANGELES&version=2&mboxSession=&codeCriteria1=-1&hideContact=&type=&email=21321345QAASD@ehealth.com&lname=aa&fname=bb&smoker1=N&ssacd=&salesRep=&requestFrom=&reqdate=&campaign=&sponsorshipAdListTail=&adobeMrktgCloudId=24924773046707985373007165161855248161&gclid=&defaultThrottle=GREEN&applicationFlow=M'
            );
            
            I.waitForText('Find your Medicare Advantage plan');
            
        }

    }
);

Scenario(
    'Fast Apply/MEDI-24269 redirect to quote page when error happen: missing carrier id',
    (I) => {
        if (process.env.NODE_ENV != 'gpa' && process.env.NODE_ENV != 'prod') {
            I.amOnPage(
                EHMP + '/ehi/muse-service/fast-apply?allid=EHM35770&carrierId=&planId=211&segmentId=000&zip=90001&county=LOS%20ANGELES&version=2&mboxSession=&codeCriteria1=-1&hideContact=&type=&email=21321345QAASD@ehealth.com&lname=aa&fname=bb&smoker1=N&ssacd=&salesRep=&requestFrom=&reqdate=&campaign=&sponsorshipAdListTail=&adobeMrktgCloudId=24924773046707985373007165161855248161&gclid=&defaultThrottle=GREEN&applicationFlow=M'
            );
            
            I.waitForText('Medicare Advantage Plans');
            
        }

    }
);