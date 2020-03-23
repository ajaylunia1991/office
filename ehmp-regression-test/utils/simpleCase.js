/**
 * Created by supingx on 2019/1/3.
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
        } else if ($("h2:contains('Applicant Info')").is(":visible")) {
            //applicantInfo
            $("select[name*='app:gender']").val('M').trigger('select');
            $("input[name*='app:gender'][type='radio'][value='M']").trigger('click');//Fallon gender
            $("input[name*='app:if-email'][type='radio'][value='N']").trigger('click');//Innovacare if-email
            $("input[name*='app:month']").val('01');
            $("input[name*='app:day']").val('01');
            $("input[name*='app:year']").val('1945');
            $("input[name*='app:first-name']").val(firstName)
            $("input[name*='app:last-name']").val(lastName);
            $("input[name*='app:emergency-relation']").val('myself');//emblem
            $("input[name*='app:home-address/app:street']").val('12 main st');
            $("input[name*='app:home-address/app:city']").val('LOS ANGELES');
            
            if ($("input[name*='app:mailing-different'][type='radio']")) {
                $("input[name*='app:mailing-different'][type='radio']").trigger('click');
            }
            $("input[name*='app:language-format'][type='radio'][value='English']").trigger('click');//alignment health
            //ENGR-324355 anthem phone and email are changed to required.
            $("input[name*='app:area-code'][type='text']").val('213');
            $("input[name*='app:number'][type='text']").val('213-2344');
            $("input[name*='app:email'][type='text']").val(firstName+'@test.com');
            
            $('.btn-next').trigger('click');
        } else if ($("select[name*='2.[1]/app:month']").is(":visible")) {
            //coverageInfo
            var month = d.getMonth()+4
            var year = d.getFullYear();
            if(month > 12){
                month = month-12;
                year = year +1;
            }
            $("input[name*='app:first-name']").val(firstName);//cigna
            $("input[name*='app:pcp-id']").val('12345');//cigna
            $("input[name*='app:pcp-patient']").click();//cigna
            $("input[name*='app:method-and-period'][value='SSI-M']").click();//cigna
            $("input[name*='app:medicare-claim-number']").val('6A01Q89RT00');
            $("input[name*='app:medicare-no']").val('6A01Q89RT00');//bsca md
            $("select[name*='1.[1]/app:month']").val(month).trigger('select');
            $("select[name*='1.[1]/app:year']").val(year).trigger('select');
            $("select[name*='2.[1]/app:month']").val((month)).trigger('select');
            $("select[name*='2.[1]/app:year']").val(year).trigger('select');
            $("select[name*='app:claim-type']").val('Non Railroad Retirees').trigger('select');//UHC MD
            
            if (!($("input[name$='enrollment-reason']:checked").length > 0)) {
                $("input[name$='app:enrollment-reason'][value='NEW']").click();
                if (!($("input[name$='enrollment-reason']:checked").length > 0)) {
                    $("input[name$='app:enrollment-reason'][value='EOC']").click();//Medica MA no NEW 
                }
            }
            
            $("#appPage > div:nth-child(2) > ul > li:nth-child(4) > div > label").trigger('click');//emblem
            if ($('.pcp-link').is(":visible")) {
                $('.pcp-link').click();
                $('.pcp-bottom').find('.btn-next:visible').click();
                setTimeout(function () {
                    $("a[class*='addToAppBtn'][index='4']").click();//Fallon " James O`Connell "
                    if ($('.oon-list').is(":visible")) {
                        $('#a_0').click();
                        $("a:contains('Select This PCP ID')").click();
                    }
                }, 5000);
            }else{
                if(!$("input[name*='app:other-data'][name*='app:misc-data'][name*='app:doc-info'][name*='app:pcp-number']").val()){
                    $("input[name*='app:other-data'][name*='app:misc-data'][name*='app:doc-info'][name*='app:name'][name*='app:first-name']").val("pcp"+firstName)
                    $("input[name*='app:other-data'][name*='app:misc-data'][name*='app:pmg-name']").val("Manual-Fill")
                    $("input[name*='app:other-data'][name*='app:misc-data'][name*='app:doc-info'][name*='app:pcp-number']").val("123456789");
                    $("input[name*='app:other-data'][name*='app:misc-data'][name*='app:doc-info'][name*='app:address'][name*='app:street']").val("PCP address");
                    $("input[name*='app:other-data'][name*='app:misc-data'][name*='app:doc-info'][name*='app:address'][name*='app:city']").val("City");
                    $("select[name*='self::node()']").val('CA').trigger('select');
                    $("input[name*='app:other-data'][name*='app:misc-data'][name*='app:doc-info'][name*='app:address'][name*='app:zip']").val("90001");
                    $("input[name*='app:other-data'][name*='app:misc-data'][name*='app:new-physician']").prop("checked",true)
                }
            };
            
            $("input[type='radio'][value='N']").attr("checked","checked").trigger('click')
            $("input[name*='app:if-none'][type='checkbox'][value='[check]true']").trigger('click');//Innovacare if-none
            
            if ($("input[name*='app:bank-account']").is(":visible")) {
                $("input[name*='app:bank-account'][name*='app:first-name']").val('payment')
                $("input[name*='app:bank-account'][name*='app:last-name']").val('account');
                $("input[name*='app:bank-account'][name*='app:routing-number']").val('321174851');
                $("input[name*='app:bank-account'][name*='app:account-number']").val('9900000003');
                $("input[name*='app:bank-account'][name*='app:type'][value*='Checking Account']").click();
                
            }
            
            if($("input[name*='3.[1]/app:month']").is(":visible")){
                $("input[name*='3.[1]/app:month']").val('02');
                $("input[name*='3.[1]/app:day']").val('13');
                $("input[name*='3.[1]/app:year']").val('2008');
            }

          

            setTimeout(function () {
                $('.btn-next').trigger('click');

                if(!$("input[name*='app:other-data'][name*='app:misc-data'][name*='app:pmg-name']").val()){
                    $("#input89").val("current health plan");
                    $("input[name*='app:other-data'][name*='app:misc-data'][name*='app:pmg-name']").val("Manual-Fill");
                    $('.btn-next').trigger('click');
                }
            }, 6000);

        } else if ($("#summary_submit_btn").is(":visible")) {
            //reviewSubmit
            $('.checkbox-label').trigger('click');
            $("label[for='r1']").trigger('click');
            $("#summary_submit_btn").trigger('click');
        } else if ($("span:contains('No additional benefits')").is(":visible")) {
            $(".btn-next").click();
        }
    }

}





