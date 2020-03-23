'use strict';

var carrier = function(){
    var carrier = {};
    //no filter
    var carrier1 = new DataTable(['minisiteAllid','msType','landingPage','shopNow','logo']);
    var carrier2 = new DataTable(['minisiteAllid','msType','landingPage','shopNow','logo']);
    var carrier3 = new DataTable(['minisiteAllid','msType','landingPage','shopNow','logo']);
    var carrier4 = new DataTable(['minisiteAllid','msType','landingPage','shopNow','logo']);
    var carrier5 = new DataTable(['minisiteAllid','msType','landingPage','shopNow','logo']);
    var carrier6 = new DataTable(['minisiteAllid','msType','landingPage','shopNow','logo']);
    var carrier7 = new DataTable(['minisiteAllid','msType','landingPage','shopNow','logo']);

    carrier1.add(['Aet32546','msc-aetna-3','LAHero','shopNow','AetnaMedicareLogo.gif']);
    carrier1.add(['Cov31782','msc-coventry-39','LAHero','shopNow','/logos/macoventry.gif']);
    carrier1.add(['Wel35109','msc-wellcare-124','LAHero','shopNow','/CarrierProfile/logos/WellCare.gif']);
    carrier1.add(['Pri41624','msc-priority-133','LAHero','shopNow','/CarrierProfile/logos/priority-health.gif']);
    carrier1.add(['Gei41362','msc-geisinger-71','LAHero','shopNow','/CarrierProfile/logos/Geisinger_Gold.gif']);


    carrier2.add(['Hum32544','msc-humana-66','LAHero','shopNow','/logos/HumanaMedicare.gif']);
    carrier2.add(['BCB41361','msc-bcbsaz-16','LAHero','shopNow','/logos/BCBSArizona.jpg']);
    carrier2.add(['Ant32564','msc-anthem-113','LAHero','shopNow','/logos/AnthemBCBSVA.gif']);
    carrier2.add(['BCB41622','msc-bsca-32','LAHero','shopNow','/logos/bs-of-ca.gif']);
    carrier2.add(['UHC37092','msc-unitedhealthone-108','LAHero','shopNow','/logos/UnitedHealthcare.png']);


    carrier3.add(['Fal37549','msc-fallon-48','LAHero','shopNow','/logos/115200.gif']);
    carrier3.add(['Hor37545','msc-horizon-62','LAHero','shopNow','/logos/1714.gif']);
    carrier3.add(['BCB35051','msc-bcbsmi-22','LAHero','shopNow','/CarrierProfile/logos/BCBSMI.gif']);
    carrier3.add(['Hea37550','msc-scan-146','LAHero','shopNow','/CarrierProfile/logos/Scan.png']);
    carrier3.add(['hig5473000','msc-highmark-60','LAHero','shopNow','/CarrierProfile/logos/HighmarkMedicare.png']);


    carrier4.add(['HCS37531','msc-bcbsok-64','LAHero','shopNow','/CarrierProfile/logos/HCSC-BCBSOK.png']);
    carrier4.add(['Kai45518','msc-kaiser-70','LAHero','shopNow','CarrierProfile/logos/KaiserMedicare.jpg']);
    carrier4.add(['GHC41626','msc-ghc-50','LAHero','shopNow','CarrierProfile/logos/group-health.gif']);
    carrier4.add(['Med37285','msc-medica-7','LAHero','shopNow','/CarrierProfile/logos/medica.gif']);

    carrier5.add(['Pre37548','msc-premera-90','LAHero','shopNow','/CarrierProfile/logos/Premera.png']);
    carrier5.add(['Reg37541','msc-regence-94','LAHero','shopNow','/CarrierProfile/logos/Regence.png']);
    carrier5.add(['CVS39351','msc-silverscript-140','LAHero','shopNow','/logos/silverscript-lg-logo-232x70.png']);
    carrier5.add(['Hea37283','msc-healthnet-158','LAHero','shopNow','/CarrierProfile/logos/HealthNetCA.gif']);
    carrier5.add(['ame6096000','msc-amerigroup-1029','LAHero','shopNow','/CarrierProfile/logos/Amerigroup.jpg']);

    carrier6.add(['car6191000','msc-careplus-206','LAHero','shopNow','/CarrierProfile/logos/CarePlus.png']);
    carrier6.add(['cen6704000','msc-centene-158','LAHero','shopNow','/CarrierProfile/logos/Centene.png']);
    carrier6.add(['Cig37523','msc-cigna-126','LAHero','shopNow','/CarrierProfile/logos/Cigna.gif']);
    carrier6.add(['Hea36233','msc-healthspring-143','LAHero','shopNow','/CarrierProfile/logos/HealthSpring.gif']);
    carrier6.add(['mol6703000','msc-molina-167','LAHero','shopNow','/CarrierProfile/logos/Molina.png']);

    carrier7.add(['HCS37544','msc-bcbsil-64','LAHero','shopNow','/CarrierProfile/logos/HCSC-BCBSIL.png']);
    carrier7.add(['HCS37528','msc-bcbsnm-64','LAHero','shopNow','/CarrierProfile/logos/HCSC-BCBSNM.png']);
    carrier7.add(['HCS37533','msc-bcbstx-64','LAHero','shopNow','/CarrierProfile/logos/HCSC-BCBSTX.png']);



    carrier.carrier1 = carrier1;
    carrier.carrier2 = carrier2;
    carrier.carrier3 = carrier3;
    carrier.carrier4 = carrier4;
    carrier.carrier5 = carrier5;
    carrier.carrier6 = carrier6;
    carrier.carrier7 = carrier7;

    return carrier;
}

module.exports = carrier;