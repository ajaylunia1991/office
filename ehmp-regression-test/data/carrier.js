'use strict';

var carrier = function(){
    //For ehm tag is Y,domain is ehm site, or ehmp site.
    var carrier = {};
    //no filter
    var carrier_no_filter_1 = new DataTable(['carrierName','ehmTag','allid','msType','zip','checkDetailTag']);
    var carrier_no_filter_2 = new DataTable(['carrierName','ehmTag','allid','msType','zip','checkDetailTag']);
    var carrier_no_filter_3 = new DataTable(['carrierName','ehmTag','allid','msType','zip','checkDetailTag']);
    var carrier_no_filter_4 = new DataTable(['carrierName','ehmTag','allid','msType','zip','checkDetailTag']);
    var carrier_no_filter_5 = new DataTable(['carrierName','ehmTag','allid','msType','zip','checkDetailTag']);
    var carrier_no_filter_6 = new DataTable(['carrierName','ehmTag','allid','msType','zip','checkDetailTag']);
    var carrier_no_filter_7 = new DataTable(['carrierName','ehmTag','allid','msType','zip','checkDetailTag']);
    carrier_no_filter_1.add(['Aetna','Y','Aet32546','msc-aetna','89199','Y']);
    carrier_no_filter_1.add(['Coventry','Y','Cov31782','msc-coventry','16201','N']);
    carrier_no_filter_1.add(['Geisinger','Y','Gei41362','msc-geisinger','18360','N']);
    carrier_no_filter_1.add(['UHC','Y','UHC37092','msc-unitedhealthone','33010','Y']);

    carrier_no_filter_2.add(['BCBSAZ','Y','BCB41361','msc-bcbsaz','85373','N']);
    carrier_no_filter_2.add(['BCBSMI','Y','BCB35051','msc-bcbsmi','48009','N']);
    carrier_no_filter_2.add(['BCBSIL','Y','HCS37544','msc-bcbsil','60004','N']);
    carrier_no_filter_2.add(['BCBSMT','Y','BCB45658','msc-bcbsmt','59477','N']);

    carrier_no_filter_3.add(['BCBSNM','Y','HCS37528','msc-bcbsnm','87101','N']);
    carrier_no_filter_3.add(['BCBSOK','Y','HCS37531','msc-bcbsok','74101','N']);
    carrier_no_filter_3.add(['BCBSTX','Y','HCS37533','msc-bcbstx','75201','N']);
    carrier_no_filter_3.add(['HealthSpring','Y','Hea36233','msc-healthspring','90001','N']);

    carrier_no_filter_4.add(['Health net','Y','Hea37283','msc-healthnet','85001','N']);
    carrier_no_filter_4.add(['Highmark','Y','hig5473000','msc-highmark','19019','N']);
    carrier_no_filter_4.add(['Horizon','Y','Hor37545','msc-horizon','07059','N']);
    carrier_no_filter_4.add(['Humana','Y','Hum32544','msc-humana','77008','Y']);

    carrier_no_filter_5.add(['Medica','Y','Med37285','msc-medica','55305','N']);
    carrier_no_filter_5.add(['Premera','Y','Pre37548','msc-premera','99003','N']);
    carrier_no_filter_5.add(['Priority Health','Y','Pri41624','msc-priority','48201','N']);
    carrier_no_filter_5.add(['SCAN Health','Y','Hea37550','msc-scan','94043','N']);

    carrier_no_filter_6.add(['Cigna','N','Cig37523','msc-cigna','85001','N']);
    carrier_no_filter_6.add(['Anthem','N','Ant32564','msc-anthem','90001','N']);
    carrier_no_filter_6.add(['Fallon','N','Fal37549','msc-fallon','01608','N']);
    carrier_no_filter_6.add(['SilverScript','N','CVS39351','msc-silverscript','90001','N']);

    carrier_no_filter_7.add(['GHC','N','GHC41626','msc-ghc','98559','N']);
    carrier_no_filter_7.add(['BSCA','N','BCB41622','msc-bsca','90001','N']);
    carrier_no_filter_7.add(['WellCare','N','Wel35109','msc-wellcare','33010','N']);
    carrier_no_filter_7.add(['Kaiser','N','Kai45518','msc-kaiser','31144','N']);


    //has filter
    var carrier_has_filter_1 = new DataTable(['carrierName','ehmTag','allid','msType','zip','carrierFamilyID','checkDetailTag']);
    var carrier_has_filter_2 = new DataTable(['carrierName','ehmTag','allid','msType','zip','carrierFamilyID','checkDetailTag']);
    var carrier_has_filter_3 = new DataTable(['carrierName','ehmTag','allid','msType','zip','carrierFamilyID','checkDetailTag']);
    var carrier_has_filter_4 = new DataTable(['carrierName','ehmTag','allid','msType','zip','carrierFamilyID','checkDetailTag']);
    var carrier_has_filter_5 = new DataTable(['carrierName','ehmTag','allid','msType','zip','carrierFamilyID','checkDetailTag']);
    var carrier_has_filter_6 = new DataTable(['carrierName','ehmTag','allid','msType','zip','carrierFamilyID','checkDetailTag']);
    var carrier_has_filter_7 = new DataTable(['carrierName','ehmTag','allid','msType','zip','carrierFamilyID','checkDetailTag']);
    var carrier_has_filter_8 = new DataTable(['carrierName','ehmTag','allid','msType','zip','carrierFamilyID','checkDetailTag']);
    carrier_has_filter_1.add(['Coventry','Y','Cov31782','msc-coventry-39','16201','39','N']);
    carrier_has_filter_1.add(['Aetna','Y','Aet32546','msc-aetna-3','89199','3','Y']);
    carrier_has_filter_1.add(['BCBSAZ','Y','BCB41361','msc-bcbsaz-16','85373','16','N']);
    carrier_has_filter_1.add(['Geisinger','Y','Gei41362','msc-geisinger-71','18360','71','N']);

    carrier_has_filter_2.add(['BCBSMI','Y','BCB35051','msc-bcbsmi-22','48009','22','N']);
    carrier_has_filter_2.add(['BCBSIL','Y','HCS37544','msc-bcbsil-64','60004','64','N']);
    carrier_has_filter_2.add(['BCBSMT','Y','BCB45658','msc-bcbsmt-64','59477','64','N']);
    carrier_has_filter_2.add(['BCBSNM','Y','HCS37528','msc-bcbsnm-64','87101','64','N']);

    carrier_has_filter_3.add(['BCBSOK','Y','HCS37531','msc-bcbsok-64','73129','64','N']);
    carrier_has_filter_3.add(['BCBSTX','Y','HCS37533','msc-bcbstx-64','75201','64','N']);
    carrier_has_filter_3.add(['Highmark','Y','hig5473000','msc-highmark-60','19019','60','N']);
    carrier_has_filter_3.add(['Horizon','Y','Hor37545','msc-horizon-62','07059','62','N']);
    carrier_has_filter_3.add(['Humana','Y','Hum32544','msc-humana-66','90001','66','Y']);

    carrier_has_filter_4.add(['Premera','Y','Pre37548','msc-premera-90','90001','AllCarriers','N']);
    carrier_has_filter_4.add(['Priority Health','Y','Pri41624','msc-priority-133','48201','133','N']);
    carrier_has_filter_4.add(['Regence','Y','Reg37541','msc-regence-94','90001','AllCarriers','N']);
    carrier_has_filter_4.add(['UHC','Y','UHC37092','msc-unitedhealthone-108','33010','108','Y']);
    carrier_has_filter_4.add(['SCAN Health','Y','Hea37550','msc-scan-146','94043','146','N']);

    carrier_has_filter_5.add(['CarePlus','N','car6191000','msc-careplus-66','33158','66','N']);
    carrier_has_filter_5.add(['Amerigroup','N','ame6096000','msc-amerigroup-1029','87001','1029','N']);
    carrier_has_filter_5.add(['HealthSpring','N','Hea36233','msc-healthspring-143','77008','143','N']);
    carrier_has_filter_5.add(['Anthem','N','Ant32564','msc-anthem-113','90001','113','N']);

    carrier_has_filter_6.add(['Centene(Awell)','N','cen6704000','msc-centene-158','33158','158','N']);
    carrier_has_filter_6.add(['Fallon','N','Fal37549','msc-fallon-48','01608','48','N']);
    carrier_has_filter_6.add(['GHC','N','GHC41626','msc-ghc-50','98177','50','N']);
    carrier_has_filter_6.add(['BSCA','N','BCB41622','msc-bsca-32','90001','32','N']);

    carrier_has_filter_7.add(['Humana','N','Hum32544','msc-humana-66&doctorSearch=true','77008','66','N']);
    carrier_has_filter_7.add(['Medica','N','Med37285','msc-medica-76','55305','76','N']);
    carrier_has_filter_7.add(['Molina','N','mol6703000','msc-molina-167','87001','167','N']);

    carrier_has_filter_8.add(['SilverScript','N','CVS39351','msc-silverscript-140','90001','140','N']);
    carrier_has_filter_8.add(['WellCare','N','Wel35109','msc-wellcare-124','33010','124','Y']);
    carrier_has_filter_8.add(['Kaiser','N','Kai45518','msc-kaiser-70','90001','70','N']);

    carrier.carrier_no_filter_1 = carrier_no_filter_1;
    carrier.carrier_no_filter_2 = carrier_no_filter_2;
    carrier.carrier_no_filter_3 = carrier_no_filter_3;
    carrier.carrier_no_filter_4 = carrier_no_filter_4;
    carrier.carrier_no_filter_5 = carrier_no_filter_5;
    carrier.carrier_no_filter_6 = carrier_no_filter_6;
    carrier.carrier_no_filter_7 = carrier_no_filter_7;
    carrier.carrier_has_filter_1 = carrier_has_filter_1;
    carrier.carrier_has_filter_2 = carrier_has_filter_2;
    carrier.carrier_has_filter_3 = carrier_has_filter_3;
    carrier.carrier_has_filter_4 = carrier_has_filter_4;
    carrier.carrier_has_filter_5 = carrier_has_filter_5;
    carrier.carrier_has_filter_6 = carrier_has_filter_6;
    carrier.carrier_has_filter_7 = carrier_has_filter_7;
    carrier.carrier_has_filter_8 = carrier_has_filter_8;
    return carrier;
}

module.exports = carrier;