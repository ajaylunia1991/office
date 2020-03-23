module.exports = {

    autoRun: function () {
        let d = new Date();
        let email = 'lead.' + d.getFullYear() + '.' + (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getHours() + '.' + d.getMinutes() + '.' + d.getSeconds() + '@ehealthqa.com';
        let firstName = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
        let lastName = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
        if($('#ApplicantInformation').css('display') == 'block') {
            //applicantInfo
            $("input[name*='firstName']").val(firstName).trigger('input');
            $("input[name*='middleName']").val('D').trigger('input');
            $("input[name*='lastName']").val(lastName).trigger('input');
            $("input[name*='gender'][type='radio'][value='M']").trigger('click');
            $("input[name*='title'][type='radio'][value='MR']").trigger('click');
            $('.el-icon-date').click();
            setTimeout(function(){
                $("input[name*='birthdate']").val('01/01/1951').trigger('input');
                $("input[name*='birthdate']").val('01/01/1951').trigger('change');
            },300)
            $("input[name*='homeAddress.street']").val('2').trigger('input');
            $("input[name*='homeAddress.city']").val('city').trigger('input');
            $("input[name*='homePhone']").val('213-213-2333').trigger('input');
            $("input[name*='email']").val(firstName+'@123.com').trigger('input');
            $("input[name*='preferredLanguage']").trigger('click');
            $("input[name*='preferredLanguage'][value='English']").trigger('click');//anthem radio
            //mailing address checkbox
            // $('.cube-checkbox-input').click();
            setTimeout(function(){//set mailingAddress
                $('body > div.el-select-dropdown.el-popper > div.el-scrollbar > div.el-select-dropdown__wrap.el-scrollbar__wrap > ul > li:nth-child(2)').click();//select preferredLanguage
                $("input[name*='mailingAddress.street']").val('2').trigger('input');
                $("input[name*='mailingAddress.city']").val('mailingcity').trigger('input');
                $("input[name*='mailingAddress.zip']").val('90001').trigger('input');
                $("div[class*='cube-select'][name*='mailingAddress.state']").click().trigger('focus');  
                $('body > div:nth-child(33) > div.cube-popup-container > div > div > div.cube-picker-choose.border-bottom-1px > span.cube-picker-confirm').click();             
            },100)
            setTimeout(function(){//click next btn
                $('.cube-button-next').trigger('click'); 
            },1000)
        } else if ($('#MedicareInformation').css('display') == 'block') {
            //eligibility
            $("input[name*='medicareClaimNumber']").val('A123456').trigger('input');
            $('.el-icon-date').click();
            setTimeout(function(){
                $("input[name*='medicarePartAEffectiveDate']").val('09/01/2017').trigger('input');
                $("input[name*='medicarePartAEffectiveDate']").val('09/01/2017').trigger('change');
                $("input[name*='medicarePartBEffectiveDate']").val('09/01/2017').trigger('input');
                $("input[name*='medicarePartBEffectiveDate']").val('09/01/2017').trigger('change');
            },300)
            
            $('.split-link').trigger('click');
            $("input[name*='enrollmentReason'][value='NEW']").trigger('click'); 
            $("input[name*='enrollmentReason'][value='OEP']").trigger('click'); //humana
            $("input[name*='answer'][value='Y'][type='radio']").trigger('click');
            $("input[name*='esrd.$attr.answer'][value='Y']").trigger('click');//humana
            $("input[name*='sns.$attr.answer'][value='N']").trigger('click');//anthem
            $("input[name*='ccn.$attr.answer'][value='N']").trigger('click');//anthem
            setTimeout(function(){//set sep reason
                // $("input[name*='enrollmentDate']").val('01/01/2019').trigger('click');
                $("input[name*='requireRegularDialysis'][value='N']").trigger('click');
            },100)
            //MoreEligibilityQuestions
            $(".el-collapse-item__header").trigger('click');
            $("input[name*='coverageReplace'][value='Y']").trigger('click');//humana
            $("input[name*='submittingApplication'][value='Y']").trigger('click');//humana
            $("input[name*='group.$attr.answer'][value='Y']").trigger('click');//humana
            $('.el-collapse-item__arrow').trigger('click');//click down arrow
            $("input[name*='medicaid'][type='radio'][value='Y']").trigger('click');
            // $("input[name*='longTerm'][type='radio'][value='N']").trigger('click');
            $("input[name*='longTerm'][type='radio'][value='Y']").trigger('click');
            $("input[name*='employerHealth'][type='radio'][value='Y']").trigger('click');
            $("input[name*='coverage.work'][type='radio'][value='Y']").trigger('click');
            $("input[name*='drug'][type='radio'][value='Y']").trigger('click');
            setTimeout(function(){//set questions are Y
                $("input[name*='coverage.drug.phone']").val('213-213-4000').trigger('input');//humana
                $("input[name*='group.carrierName']").val('humana').trigger('input');//humana
                $("input[name*='group.id']").val('112233').trigger('input');//humana
                $("input[name*='group.policyNumber']").val('11223344').trigger('input');//humana
                $("input[name*='group.includeBenefit'][value='Y']").trigger('click');//humana
                $("input[name*='medicaidNumber']").val('adb123ccd654').trigger('input');
                $("input[name*='nameInstitution']").val(firstName).trigger('input');
                $("input[name*='phoneNumber']").val('213-213-3456').trigger('input');
                $("input[name*='street']").val('mailingstreet').trigger('input');
                $("input[name*='city']").val('mailingcity').trigger('input');
                $("input[name*='zip']").val('90001').trigger('input');
                $("input[name*='ifOtherInsurance'][type='radio'][value='Y']").trigger('click');
                $('.cube-select-placeholder').click().change();
                $('.cube-picker-confirm').click();
            },200)
            setTimeout(function(){//set followup input
                $("input[name*='companyName']").val('companay').trigger('input');
                $("input[name*='subscriberName']").val('subscriberName').trigger('input');
                $("input[name*='groupId']").val('123').trigger('input');
                $("input[name*='memberId']").val('123').trigger('input');
                $("input[name*='effectiveDateStart']").val('02/01/2019').trigger('change');
                $("input[name*='effectiveDateEnd']").val('12/01/2019').trigger('change');
                $("input[name*='nameCoverage']").val('nameCoverage').trigger('input');
                $("input[name*='idCoverage']").val('1234').trigger('input');
                $("input[name*='groupNumber']").val('1234').trigger('input');
                $("input[name*='dateStart']").val('10/01/2019').trigger('change');
            },300)
            //PhysicianInformation
            $("#PhysicianInformation > h2").trigger('click');
            setTimeout(function(){//set pcp1
                $("input[name*='providerInfo.name']").val('Smith Denise').trigger('input')
                $("input[name*='providerInfo.pcpId']").val('12345').trigger('input')
                $("input[name*='dentalInfo.pcpId']").val('12345678').trigger('input')//aetna
                $("input[name*='dentalInfo.name']").val('dental').trigger('input')//aetna
                $("input[name*='providerInfo.phone']").val('213-213-5678').trigger('input')
                $("input[name*='providerInfo.address.city']").val('cityone').trigger('input')
                $("input[name*='currentPatient'][type='radio'][value='Y']").trigger('click');
                $("input[name*='providerInfo.state']").trigger('click')
                $('div.el-select-dropdown > div.el-scrollbar > div.el-select-dropdown__wrap> ul > li:nth-child(5)').click();
            },50)

            //pffs pcp
            if($('.physician-container').css('display') == 'block'){
                $('#PhysicianInformation > div > div > a').click();
                $('#PhysicianInformation > div > div > a').click();
                setTimeout(function(){//set pcp2 pcp3
                    $("input[name*='providerInfo2.name']").val('nametwo').trigger('input')
                    $("input[name*='providerInfo2.address.city']").val('city').trigger('input')
                    $("input[name*='providerInfo2.address.state']").trigger('click')
                    $("input[name*='providerInfo2.address.zip']").val('90001').trigger('input')
                    $("input[name*='providerInfo2.phone']").val('213-213-4511').trigger('input')
                    $("input[name*='providerInfo3.name']").val('namethree').trigger('input')
                    $("input[name*='providerInfo3.address.city']").val('city').trigger('input')
                    $("input[name*='providerInfo3.address.state']").trigger('click');
                    $("input[name*='providerInfo3.address.zip']").val('90001').trigger('input')
                    $("input[name*='providerInfo3.phone']").val('213-213-4511').trigger('input')
               },100)
               setTimeout(function(){//set state
                    $('div.el-select-dropdown > div.el-scrollbar > div.el-select-dropdown__wrap> ul > li:nth-child(5)').click();
                    $('body > div:nth-child(35) > div.el-scrollbar > div.el-select-dropdown__wrap.el-scrollbar__wrap > ul > li:nth-child(5)').click()
               },200)
            }
            //Howtopay
            setTimeout(function(){//click next btn
                $("#HowtoPay > h2").click();            
                $("input[name*='claimNumberType']").trigger('click');//claimNumberType
                $('div.el-select-dropdown > div.el-scrollbar > div.el-select-dropdown__wrap> ul > li').first().click();
                $("input[name*='methodAndPeriod'][type='radio'][value='SSB-M']").trigger('click');
                $("input[name*='methodAndPeriod'][type='radio'][value='CO-M']").trigger('click');//humana
                $('.cube-btn.cube-button-next').trigger('click');
            },1000)
            
        } else if ($('#ReviewYourApplication').css('display') == 'block') {
            //reviewSubmit 
            $("input[name*='relationEnrollee'][type='radio'][value='self']").trigger('click');
            setTimeout(function(){
                $('.cube-checkbox-input').trigger('click');
                $(".cube-btn").trigger('click');
            },1000)

        } 
    }

}
