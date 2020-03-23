'use strict';

var carrierMiniSite = function () {
    //For ehm tag is Y,domain is ehm site, or ehmp site.
    var carrierMiniSite = {};
    var carrierMiniSiteUrl1 = new DataTable(['carrierName', 'ehmTag', 'allid', 'msType', 'h1', 'h3Color', 'borderTopColor', 'borderBottomColor']);
    var carrierMiniSiteUrl1_1 = new DataTable(['carrierName', 'ehmTag', 'allid', 'msType', 'h1', 'h3Color', 'borderTopColor', 'borderBottomColor']);
    var carrierMiniSiteUrl1_2 = new DataTable(['carrierName', 'ehmTag', 'allid', 'msType', 'h1', 'h3Color', 'borderTopColor', 'borderBottomColor']);
    
    var carrierMiniSiteUrl2 = new DataTable(['carrierName', 'ehmTag', 'allid', 'msType', 'h1', 'h3Color', 'findPlansColor', 'hoverUpFindPlanColor']);

    carrierMiniSiteUrl1.add(['Aetna', 'Y', 'Aet32546', 'msc-aetna', 'Find your Medicare Advantage plan', '#78a12e', '#cc148f', '#6f014d']);
    carrierMiniSiteUrl1.add(['UHC', 'Y', 'UHC37092', 'msc-unitedhealthone', 'Find your Medicare Advantage plan', '#78a12e', '#064b86', '#013466']);
    carrierMiniSiteUrl1.add(['BCBSMI', 'Y', 'BCB35051', 'msc-bcbsmi', 'Find your Medicare Advantage plan', '#78a12e', '#3d71b4', '#033e7a']);
    carrierMiniSiteUrl1.add(['BCBSIL', 'Y', 'HCS37544', 'msc-bcbsil', 'Find your Medicare Advantage plan', '#78a12e', '#a2cb26', '#76a839']);
    carrierMiniSiteUrl1.add(['BCBSMT', 'Y', 'BCB45658', 'msc-bcbsmt', 'Find your Medicare Advantage plan', '#78a12e', '#a2cb26', '#76a839']);
    carrierMiniSiteUrl1.add(['BCBSNM', 'Y', 'HCS37528', 'msc-bcbsnm', 'Find your Medicare Advantage plan', '#78a12e', '#a2cb26', '#76a839']);
    carrierMiniSiteUrl1_1.add(['BCBSOK', 'Y', 'HCS37531', 'msc-bcbsok', 'Find your Medicare Advantage plan', '#78a12e', '#a2cb26', '#76a839']);
    // carrierMiniSiteUrl1_1.add(['BCBSTX', 'Y', 'HCS37533', 'msc-bcbstx', 'Find your Medicare Advantage plan', '#78a12e', '#a2cb26', '#76a839']);
    carrierMiniSiteUrl1_1.add(['Health net', 'Y', 'Hea37283', 'msc-healthnet', 'Find your Medicare Advantage plan', '#78a12e', '#fd953b', '#f45d0a']);
    carrierMiniSiteUrl1_1.add(['Highmark', 'Y', 'hig5473000', 'msc-highmark', 'Find your Medicare Advantage plan', '#78a12e', '#064b86', '#006e9b']);
    carrierMiniSiteUrl1_1.add(['Horizon', 'Y', 'Hor37545', 'msc-horizon', 'Find your Medicare Advantage plan', '#78a12e', '#ff991f', '#e2840a']);
    carrierMiniSiteUrl1_1.add(['Humana', 'Y', 'Hum32544', 'msc-humana', 'Find your Medicare Advantage plan', '#78a12e', '#226a35', '#1b582b']);
    // carrierMiniSiteUrl1_1.add(['Premera', 'Y', 'Pre37548', 'msc-premera', 'Find your Medicare Advantage plan', '#78a12e', '#f98c49', '#d86905']);
    carrierMiniSiteUrl1_2.add(['SCAN Health', 'Y', 'Hea37550', 'msc-scan', 'Find your Medicare Advantage plan', '#78a12e', '#94c800', '#65a600']);
    carrierMiniSiteUrl1_2.add(['Cigna', 'N', 'Cig37523', 'msc-cigna', 'Find your Medicare Advantage plan', '#78a12e', '#64af07', '#65a416']);
    // carrierMiniSiteUrl1_2.add(['Anthem', 'N', 'Ant32564', 'msc-anthem', 'Find your Medicare Advantage plan', '#78a12e', '#f98c49', '#d86905']);
    carrierMiniSiteUrl1_2.add(['Fallon', 'N', 'Fal37549', 'msc-fallon', 'Find your Medicare Advantage plan', '#78a12e', '#9aa401', '#7a8109']);
    // carrierMiniSiteUrl1_2.add(['SilverScript', 'N', 'CVS39351', 'msc-silverscript', 'Find your Medicare Part D plan', '#78a12e', '#e72c41', '#b41e2f']);
    // carrierMiniSiteUrl1_2.add(['WellCare', 'N', 'Wel35109', 'msc-wellcare', 'Find your Medicare Advantage plan', '#78a12e', '#0064bc', '#045faf']);
    carrierMiniSiteUrl1_2.add(['Kaiser', 'N', 'Kai45518', 'msc-kaiser', 'Find your Medicare Advantage plan', '#78a12e', '#064b86', '#006e9b']);

    carrierMiniSiteUrl2.add(['Amerigroup','N','ame6096000','msc-amerigroup','Find your Medicare Advantage plan','#78a12e','#59b649','#47913a']);
    carrierMiniSiteUrl2.add(['Coventry','Y','Cov31782','msc-coventry','Find your Medicare Advantage plan','#78a12e','#532380','#3a0a67']);
    // carrierMiniSiteUrl2.add(['Geisinger','Y','Gei41362','msc-geisinger','Find your Medicare Advantage plan','#f69234','#532380','#3a0a67']);//no customization
    // carrierMiniSiteUrl2.add(['BCBSAZ','Y','BCB41361','msc-bcbsaz','Find your Medicare Advantage plan','#78a12e','#532380','#3a0a67']);
    // carrierMiniSiteUrl2.add(['HealthSpring','Y','Hea36233','msc-healthspring','Find your Medicare Advantage plan','#78a12e','#532380','#dd832e']);//double check last field
    carrierMiniSiteUrl2.add(['Medica','Y','Med37285','msc-medica','Find your Medicare Advantage plan','#78a12e','#d7d413','#bebb00']);
    carrierMiniSiteUrl2.add(['Priority Health','Y','Pri41624','msc-priority','Find your Medicare Advantage plan','#78a12e','#f69234','#dd832e']);
    carrierMiniSiteUrl2.add(['GHC','N','GHC41626','msc-ghc','Find your Medicare Advantage plan','#78a12e','#f69234','#dd832e']);
    carrierMiniSiteUrl2.add(['BSCA', 'N', 'BCB41622', 'msc-bsca', 'Find your Medicare Advantage plan', '#78a12e', '#f69234', '#dd832e']);


    carrierMiniSite.carrierMiniSite1 = carrierMiniSiteUrl1;
    carrierMiniSite.carrierMiniSite1_1 = carrierMiniSiteUrl1_1;
    carrierMiniSite.carrierMiniSite1_2 = carrierMiniSiteUrl1_2;
    carrierMiniSite.carrierMiniSite2 = carrierMiniSiteUrl2;
    return carrierMiniSite;
}

module.exports = carrierMiniSite;
