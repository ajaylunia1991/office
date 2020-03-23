/**
 * Created by supingx on 2019/1/24.
 */
module.exports = {


    autoRun: function () {
        let d = new Date();
        let email = 'lead.' + d.getFullYear() + '.' + (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getHours() + '.' + d.getMinutes() + '.' + d.getSeconds() + '@ehealthqa.com';
        let firstName = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
        let lastName = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

        if ($('.ehi-btn-enroll').is(":visible")) {
            $('.ehi-btn-enroll')[0].click();
        } else if ($("button:contains('Start Secure Application')").is(":visible")) {
            $("button:contains('Start Secure Application')")[0].click();
        } else if ($('#leadform-form-wrap').is(":visible")) {
            //leadForm
            $('#ehi-txtFirstName').val(firstName);
            $('#ehi-txtLastName').val(lastName);
            $('#ehi-txtPhoneNumber').val('213-213-6767');
            $('#ehi-txtEmailAddress').val(email);
            $('#continue-btn').trigger("click");
        }else if ($("h2:contains('Eligibility Questions')").is(":visible")) {
            //pre-app tab
            $("input[type='radio'][value='Y']").attr("checked", "checked");

            $("button:contains('Continue to Apply')").click();
        } else if ($("h2:contains('Applicant')").is(":visible") || $("h6:contains('Applicant')").is(":visible")) {
            //applicantInfo
            $("select[name*='app:gender']").val('M').trigger('select');
            $("input[name*='app:gender'][type='radio'][value='M']").trigger('click');//Fallon gender
            $("input[name*='app:month']").val('01');
            $("input[name*='app:day']").val('01');
            $("input[name*='app:year']").val('1945');
            $("input[name*='app:member'][name*='app:first-name']").val(firstName)
            $("input[name*='app:member'][name*='app:last-name']").val(lastName);
            $("input[name*='app:home-address/app:street']").val('12 main st');
            $("input[name*='app:home-address/app:city']").val('LOS ANGELES');
            $("input[name*='app:area-code']").val('213');
            $("input[name*='app:number']").val('2137777');
            $("input[name*='/app:ssn']").val('334564567');
            $("input[type='radio'][value='N']").attr("checked", "checked");

            if ($("input[name*='app:mailing-different'][type='radio']")) {
                $("input[name*='app:mailing-different'][type='radio']").trigger('click');
            }

            $("button:contains('Next')").click();
        } else if ($("input[name*='app:medicare-claim-number']").is(":visible")) {
            //applicant info second page
            $("input[name*='app:medicare-claim-number']").val('A123456');
            $("select[name*='/app:month']").val('3').trigger('select');
            $("select[name*='/app:year']").val('2018').trigger('select');
            /*$("select[name*='1.[1]/app:month']").val('3').trigger('select');
             $("select[name*='1.[1]/app:year']").val('2018').trigger('select');
             $("select[name*='/app:part-b-effective-date/app:month']").val('3').trigger('select');
             $("select[name*='/app:part-b-effective-date/app:year']").val('2018').trigger('select');*/
            $("select[name*='/app:cov-effective-date'] option:eq(1)").attr('selected', 'selected');
            //$("select[name*='/app:cov-effective-date']").find('option:eq(1)').attr('selected','selected');

            $("button:contains('Next')").click();
        }else if($("h6:contains('Coverage')").is(":visible")) {
            //coverage tab
            if ($("input[type='radio']:checked").length > 0) {
                var num = ($("input[type='radio']:checked").length) - 1;
                $("input[type='radio'][value='N']:gt(" + num + ")").attr("checked", "checked");
            } else {
                $("input[type='radio'][value='N']").attr("checked", "checked");
            }

            $("button:contains('Next')").click();
        }else if($("h6:contains('History')").is(":visible")) {
            //history tab
            $("select[name*='/app:feet']").val('6').trigger('select');
            $("select[name*='/app:inches']").val('1').trigger('select');
            $("input[title*='weight']").val('150');
            $("input[type='radio'][value='N']").attr("checked", "checked");
            $(".checkbox-label").click();

            $("button:contains('Next')").click();
        }else if($("h6:contains('Additional')").is(":visible")) {
            //additional tab
            //$("input[type='radio'][value='N']").attr("checked", "checked");
            //$("input[name*='/app:ssn']").val('334564567');

            $("button:contains('Next')").click();
        }else if($("h6:contains('Payment')").is(":visible") && $("li:contains('Example Check')").is(":visible")) {
            //payment tab
            $("label:contains('Automatic Withdrawal')").click();
            $("input[value='BILL']").click();
            $("input[type='radio'][value='N']").attr("checked", "checked");
            setTimeout(function () {
                $("input[name*='app:bank-account/app:institution']").val('payment');
                $("input[name*='app:bank-account'][name*='app:routing-number']").val('321174851');
                $("input[name*='app:bank-account'][name*='app:account-number']").val('9900000003');
                $("input[name*='app:bank-account'][name*='app:type'][value*='Checking Account']").click();
            }, 2000);

            setTimeout(function () {
                $("button:contains('Next')").click();
            }, 3000);
        } else if ($("h2:contains('Purchase Summary')").is(":visible")) {
            //summary tab
            //$("a:contains('Review Enrollment Form')").click();
            //$('.close').click();
            $("button:contains('Continue')").trigger('click');
        } else if($("h2:contains('Agreement and Signature')").is(":visible")) {
            var str = $('.esigheader').text().trim();
            //str = str.trim();

            $('.checkbox-label').trigger('click');
            $("input[name*='/app:first-name']").val(str.substr(0,5));
            $("input[name*='/app:last-name']").val(str.substr(6,5));
            $("input[name*='/app:city-signed']").val('los angeles');
            $("select").val('CA').trigger('select');
            $("button:contains('I Agree')").click();

        }
    }

}
