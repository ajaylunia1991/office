'use strict';

// 2020 carriers list
var planDetails = function(){

    var planDetails = {};
    //mose carrier

    //cherrie
    var uhc = new DataTable(['carrierName', 'productline','url']);
    uhc.add(['UHC','MA','/?isShowPlanYearElement=true&previewPeriod=false&hideEnrollPage=true&turnOnPlanReview=Y&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/96701/12020/HONOLULU/H2228/024/000']);
    uhc.add(['UHC','PFFS','/?isShowPlanYearElement=true&previewPeriod=false&hideEnrollPage=true&turnOnPlanReview=Y&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/39813/11161/CALHOUN/H5435/001/000']);
    uhc.add(['UHC','MD','/?isShowPlanYearElement=true&previewPeriod=false&hideEnrollPage=true&turnOnPlanReview=Y&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MD/96701/12020/HONOLULU/S5921/381/000']);
    var humana = new DataTable(['carrierName', 'productline','url']);
    humana.add(['Humana','MA','/?isShowPlanYearElement=true&previewPeriod=false&hideEnrollPage=true&turnOnPlanReview=Y&turnOnPlanPreview=N&&defaultPlanYear=2020&qascript=Y&turnOnPlanReview=Y&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/96701/12020/HONOLULU/H0028/004/000']);	
    humana.add(['Humana','MD','/?isShowPlanYearElement=true&previewPeriod=false&hideEnrollPage=true&turnOnPlanReview=Y&turnOnPlanPreview=N&&defaultPlanYear=2020&qascript=Y&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MD/17001/39270/CUMBERLAND/S5884/185/000']);	
    var highmark = new DataTable(['carrierName', 'productline','url']);
    highmark.add(['Highmark','MA','/?isShowPlanYearElement=true&previewPeriod=false&hideEnrollPage=true&turnOnPlanReview=Y&turnOnPlanPreview=N&&defaultPlanYear=2020&qascript=Y&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/17001/39270/CUMBERLAND/H3916/037/002']);	
    highmark.add(['Highmark','MD','/?isShowPlanYearElement=true&previewPeriod=false&hideEnrollPage=true&turnOnPlanReview=Y&turnOnPlanPreview=N&&defaultPlanYear=2020&qascript=Y&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MD/17001/39270/CUMBERLAND/S5593/002/000']);	
    var scan_cdphp = new DataTable(['carrierName', 'productline','url']);
    scan_cdphp.add(['CDPHP','MA','/?isShowPlanYearElement=true&previewPeriod=false&hideEnrollPage=true&turnOnPlanReview=Y&turnOnPlanPreview=N&&defaultPlanYear=2020&qascript=Y&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/12250/33000/ALBANY/H3388/014/000']);	
    scan_cdphp.add(['Scan','MA','/?isShowPlanYearElement=true&previewPeriod=false&hideEnrollPage=true&turnOnPlanReview=Y&turnOnPlanPreview=N&&defaultPlanYear=2020&qascript=Y&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/90001/05200/LOS%20ANGELES/H5425/006/000']);
    var bcbsmi = new DataTable(['carrierName', 'productline','url']);
    bcbsmi.add(['BCBSMI','MA','/?applicationFlow=M&turnOnPlanReview=Y&turnOnPlanPreview=N&hideEnrollPage=true&defaultPlanYear=2020&qascript=Y&previewPeriod=false&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/48203/23810/WAYNE/H5883/011/003']);
    bcbsmi.add(['BCBSMI','MD','/?applicationFlow=M&turnOnPlanReview=Y&turnOnPlanPreview=N&hideEnrollPage=true&defaultPlanYear=2020&qascript=Y&previewPeriod=false&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MD/48203/23810/WAYNE/S5584/001/000']); 	
    var aetna = new DataTable(['carrierName', 'productline','url']);
    aetna.add(['Aetna','MA','/?isShowPlanYearElement=true&previewPeriod=false&hideEnrollPage=true&turnOnPlanReview=Y&turnOnPlanPreview=N&&defaultPlanYear=2020&qascript=Y&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/90001/05200/LOS%20ANGELES/H0523/061/000']);	
    aetna.add(['Allina health','MA','/?isShowPlanYearElement=true&previewPeriod=false&hideEnrollPage=true&turnOnPlanReview=Y&turnOnPlanPreview=N&&defaultPlanYear=2020&qascript=Y&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/55118/24180/DAKOTA/H3219/005/000']);	
    var aetna_2 = new DataTable(['carrierName', 'productline','url']);
    aetna_2.add(['Innovation health','MA','/?isShowPlanYearElement=true&previewPeriod=false&hideEnrollPage=true&turnOnPlanReview=Y&turnOnPlanPreview=N&&defaultPlanYear=2020&qascript=Y&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/22301/49011/ALEXANDRIA%20CITY/H2829/001/000']);	
    aetna_2.add(['Aetna DC','MA','/?isShowPlanYearElement=true&previewPeriod=false&hideEnrollPage=true&turnOnPlanReview=Y&turnOnPlanPreview=N&&defaultPlanYear=2020&qascript=Y&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/20001/09000/DISTRICT%20OF%20COLUMBIA/H3931/095/000']);	
    var priorityHealth = new DataTable(['carrierName', 'productline','url']);
    priorityHealth.add(['priority Health','MA','/?applicationFlow=M&isShowPlanYearElement=true&previewPeriod=false&hideEnrollPage=true&turnOnPlanReview=Y&turnOnPlanPreview=N&&defaultPlanYear=2020&qascript=Y&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/48203/23810/WAYNE/H2320/022/005']);	
    var bsca = new DataTable(['carrierName', 'productline','url']);
    bsca.add(['Blue Shield of California HMO','MA','/?applicationFlow=M&isShowPlanYearElement=true&previewPeriod=false&hideEnrollPage=true&turnOnPlanReview=Y&turnOnPlanPreview=N&&defaultPlanYear=2020&qascript=Y&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/90001/05200/LOS%20ANGELES/H0504/015/000']);	
    var bsca_ppo = new DataTable(['carrierName', 'productline','url']);
    bsca_ppo.add(['Blue Shield of California PPO','MA','/?applicationFlow=M&isShowPlanYearElement=true&previewPeriod=false&hideEnrollPage=true&turnOnPlanReview=Y&turnOnPlanPreview=N&&defaultPlanYear=2020&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/95377/05000/ALAMEDA/H4937/001/000']);
    var standford = new DataTable(['carrierName', 'productline','url']);
    standford.add(['Standford','MA','/?applicationFlow=M&isShowPlanYearElement=true&previewPeriod=false&hideEnrollPage=true&turnOnPlanReview=Y&turnOnPlanPreview=N&&defaultPlanYear=2020&qascript=Y&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/94010/05510/SAN%20MATEO/H2986/007/000']);	
    var envision = new DataTable(['carrierName', 'productline','url']);
    envision.add(['Envision','MD','/?applicationFlow=M&isShowPlanYearElement=true&previewPeriod=false&hideEnrollPage=true&turnOnPlanReview=Y&turnOnPlanPreview=N&&defaultPlanYear=2020&qascript=Y&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MD/90053/05200/LOS%20ANGELES/S7694/032/000']);	
    var expressScript = new DataTable(['carrierName', 'productline','url']);
    expressScript.add(['Express Script','MD','/?applicationFlow=M&isShowPlanYearElement=true&previewPeriod=false&hideEnrollPage=true&turnOnPlanReview=Y&turnOnPlanPreview=N&&defaultPlanYear=2020&qascript=Y&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MD/33351/10050/BROWARD/S5660/227/000']);	

    //Rachel
    var Wellcare = new DataTable(['carrierName', 'productline','url']);
    Wellcare.add(['Wellcare','MA Generic','/?isShowPlanYearElement=true&previewPeriod=false&hideEnrollPage=true&turnOnPlanReview=Y&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/33351/10050/BROWARD/H1032/196/000']);
    Wellcare.add(['Wellcare','MA PFFS','/?isShowPlanYearElement=true&previewPeriod=false&hideEnrollPage=true&turnOnPlanReview=Y&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/04263/20000/ANDROSCOGGIN/H2816/040/000']);
    Wellcare.add(['Wellcare','MD','/?isShowPlanYearElement=true&previewPeriod=false&hideEnrollPage=true&turnOnPlanReview=Y&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MD/33351/10050/BROWARD/S4802/180/000']);
    var Centene = new DataTable(['carrierName', 'productline','url']);
    Centene.add(['Allwell','MA','/?isShowPlanYearElement=true&previewPeriod=false&hideEnrollPage=true&turnOnPlanReview=Y&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/33158/10120/MIAMI-DADE/H9276/004/000']);
    Centene.add(['Healthnet','MA','/?isShowPlanYearElement=true&previewPeriod=false&hideEnrollPage=true&turnOnPlanReview=Y&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/90001/05200/LOS%20ANGELES/H0562/101/001']);
    Centene.add(['Ascension','MA','/?isShowPlanYearElement=true&previewPeriod=false&hideEnrollPage=true&turnOnPlanReview=Y&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/60070/14141/COOK/H7399/002/000']);
    var Clover = new DataTable(['carrierName', 'productline','url']);
    Clover.add(['Clover','MA','/?isShowPlanYearElement=true&previewPeriod=false&hideEnrollPage=true&turnOnPlanReview=Y&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/07676/31100/BERGEN/H5141/004/000']);
    var bscaMD = new DataTable(['carrierName', 'productline','url']);
    bscaMD.add(['Blue Shield','MD','/?&turnOnPlanReview=Y&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&previewPeriod=false&hideEnrollPage=true&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MD/90001/05200/LOS%20ANGELES/S2468/003/000']);
    var BrightHealth = new DataTable(['carrierName', 'productline','url']);
    BrightHealth.add(['BrightHealth', 'MA','/?isShowPlanYearElement=true&previewPeriod=false&hideEnrollPage=true&turnOnPlanReview=Y&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/80241/06000/ADAMS/H7853/003/000']);

    
    //non-mose carrier

        
    //vivian
    var HAMP = new DataTable(['carrierName', 'productline','url']);
    HAMP.add(['Health Alliance Medical Plans','MA','/?isShowPlanYearElement=true&previewPeriod=false&hideEnrollPage=true&turnOnPlanReview=Y&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/98807/50030/CHELAN/H3471/003/000']);
    
    //cherrie
    var geisinger = new DataTable(['carrierName', 'productline','url']);
    geisinger.add(['Geisinger','MA','/?applicationFlow=C&turnOnPlanReview=Y&turnOnPlanPreview=N&hideEnrollPage=true&defaultPlanYear=2020&qascript=Y&previewPeriod=false&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/17001/39270/CUMBERLAND/H3954/159/017']);
    geisinger.add(['Fallon','MA','/?applicationFlow=C&isShowPlanYearElement=true&hideEnrollPage=true&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&previewPeriod=false&carrierCode=C95B4C50D7D065014A9BED535BB66D44&#plan-benefits/MA/02141/22090/MIDDLESEX/H9001/034/009']);
    
    var emblem = new DataTable(['carrierName', 'productline','url']);
    emblem.add(['Emblem','MA','/?applicationFlow=C&turnOnPlanReview=Y&turnOnPlanPreview=N&hideEnrollPage=true&defaultPlanYear=2020&qascript=Y&previewPeriod=false&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/11237/33331/KINGS/H3330/040/000']);
    emblem.add(['Emblem','MD','/?applicationFlow=C&turnOnPlanReview=Y&hideEnrollPage=true&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&previewPeriod=false&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MD/11237/33331/KINGS/S5966/003/000']);
    
    var cigna_select = new DataTable(['carrierName', 'productline','url']);
    cigna_select.add(['Cigna','MA','/?applicationFlow=C&turnOnPlanReview=Y&hideEnrollPage=true&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&previewPeriod=false&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/31144/11290/COBB/H0439/008/000']);
    cigna_select.add(['Select Health','MA','/?applicationFlow=C&turnOnPlanReview=Y&hideEnrollPage=true&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&previewPeriod=false&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/83641/13000/ADA/H1994/003/000']);
    
    var bcbsaz = new DataTable(['carrierName', 'productline','url']);
    bcbsaz.add(['BCBSAZ','MA','/?applicationFlow=C&turnOnPlanReview=Y&hideEnrollPage=true&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&previewPeriod=false&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/85721/03090/PIMA/H6936/005/000']);
    bcbsaz.add(['BCBSAZ','MD','/?applicationFlow=C&turnOnPlanReview=Y&hideEnrollPage=true&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&previewPeriod=false&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MD/85721/03090/PIMA/S6506/003/000']);       
    
    var dean_molina = new DataTable(['carrierName', 'productline','url']);
    dean_molina.add(['Dean Health','MA','/?applicationFlow=C&turnOnPlanReview=Y&hideEnrollPage=true&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&previewPeriod=false&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/53534/52120/DANE/H9096/004/000']);
    dean_molina.add(['Molina','MA','/?applicationFlow=C&turnOnPlanReview=Y&hideEnrollPage=true&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&previewPeriod=false&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/83301/13410/TWIN%20FALLS/H5628/010/000']);
    
    var medica_oscar = new DataTable(['carrierName', 'productline','url']);
    medica_oscar.add(['Medica','MA','/?applicationFlow=C&turnOnPlanReview=Y&hideEnrollPage=true&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&previewPeriod=false&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/55102/24610/RAMSEY/H6154/001/000']);
    medica_oscar.add(['Oscar','MA','/?applicationFlow=C&turnOnPlanReview=Y&hideEnrollPage=true&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&previewPeriod=false&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/77008/45610/HARRIS/H5126/001/000']);
    
    var harvard_upmc = new DataTable(['carrierName', 'productline','url']);
    harvard_upmc.add(['Harvard Pilgrim','MA','/?applicationFlow=C&turnOnPlanReview=Y&hideEnrollPage=true&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&previewPeriod=false&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/02141/22090/MIDDLESEX/H1660/014/000']);
    harvard_upmc.add(['UPMC','MA','/?applicationFlow=C&turnOnPlanReview=Y&hideEnrollPage=true&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&previewPeriod=false&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/19103/39620/PHILADELPHIA/H3907/002/000']);
    
    var hcsc = new DataTable(['carrierName', 'productline','url']);
    hcsc.add(['BCBS(HCSC)','MA','/?applicationFlow=C&turnOnPlanReview=Y&hideEnrollPage=true&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&previewPeriod=false&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/60070/14141/COOK/H3822/001/000']);
    hcsc.add(['BCBS(HCSC)','MD','/?applicationFlow=C&turnOnPlanReview=Y&hideEnrollPage=true&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&previewPeriod=false&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MD/60070/14141/COOK/S5715/012/000']);
    
    var horizon = new DataTable(['carrierName', 'productline','url']);
    horizon.add(['Horizon','MA','/?applicationFlow=C&turnOnPlanReview=Y&hideEnrollPage=true&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&previewPeriod=false&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/07676/31100/BERGEN/H3154/030/000']);
    horizon.add(['Horizon','MD','/?applicationFlow=C&turnOnPlanReview=Y&hideEnrollPage=true&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&previewPeriod=false&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MD/07676/31100/BERGEN/S5993/001/000']);
    
    var stanford_innovation = new DataTable(['carrierName', 'productline','url']);
    stanford_innovation.add(['Stanford','MA','/?applicationFlow=C&turnOnPlanReview=Y&hideEnrollPage=true&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&previewPeriod=false&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/94505/05000/ALAMEDA/H2986/005/000']);
    stanford_innovation.add(['Innovation Health','MA','/?applicationFlow=C&turnOnPlanReview=Y&hideEnrollPage=true&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&previewPeriod=false&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/22150/49290/FAIRFAX/H2829/001/000']);
    
    var alignment = new DataTable(['carrierName', 'productline','url']);
    alignment.add(['Alignment Healthcare','MA','/?applicationFlow=C&turnOnPlanReview=Y&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&hideEnrollPage=true&previewPeriod=false&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/90001/05200/LOS%20ANGELES/H3815/013/000']);
        
    var anthemMD = new DataTable(['carrierName', 'productline','url']);
    anthemMD.add(['Anthem','MD','/?applicationFlow=C&turnOnPlanReview=Y&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&previewPeriod=false&hideEnrollPage=true&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MD/94505/05000/ALAMEDA/S5596/076/000']);
    anthemMD.add(['Anthem (BCBS)','MD','/?applicationFlow=C&turnOnPlanReview=Y&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&previewPeriod=false&hideEnrollPage=true&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MD/30333/11370/DEKALB/S5596/070/000']);
    anthemMD.add(['Anthem (Amerigroup)','MD','/?applicationFlow=C&turnOnPlanReview=Y&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&previewPeriod=false&hideEnrollPage=true&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MD/77008/45610/HARRIS/S8182/002/000']);

    var Anthem = new DataTable(['carrierName', 'productline', 'url']);
    Anthem.add(['Anthem', 'MA', '/?isShowPlanYearElement=true&leadFormEnabled=false&hideEnrollPage=true&defaultPlanYear=2020&previewPeriod=false&carrierCode=C95B4C50D7D065014A9BED535BB66D44&turnOnPlanPreview=N&forceV1=true#plan-benefits/MA/90001/05200/LOS%20ANGELES/H0544/002/000'])
    var clickOff = new DataTable(['carrierName', 'productline','url','comment']);
    clickOff.add(['Kaiser','MA','/?applicationFlow=C&turnOnPlanReview=Y&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&previewPeriod=false&hideEnrollPage=true&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/98064/50160/KING/H5050/022/000','kaiser']);
    clickOff.add(['Silverscript','MD','/?applicationFlow=C&turnOnPlanReview=Y&turnOnPlanPreview=N&defaultPlanYear=2020&qascript=Y&previewPeriod=false&hideEnrollPage=true&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MD/90001/05200/LOS%20ANGELES/S5601/064/000','silver']);

    var teleOnly = new DataTable(['carrierName', 'productline','url']);
    teleOnly.add(['BCBSNE','MA','/?isShowPlanYearElement=true&defaultPlanYear=2020&hideEnrollPage=true&qascript=Y&previewPeriod=false&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/68956/28000/ADAMS/H3170/001/000']);
    teleOnly.add(['CarePlus','MA','/?isShowPlanYearElement=true&defaultPlanYear=2020&hideEnrollPage=true&qascript=Y&previewPeriod=false&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/33158/10120/MIAMI-DADE/H1019/006/000']);
    teleOnly.add(['Kaiser','MA','/?isShowPlanYearElement=true&defaultPlanYear=2020&hideEnrollPage=true&qascript=Y&previewPeriod=false&carrierCode=C95B4C50D7D065014A9BED535BB66D44#plan-benefits/MA/31144/11290/COBB/H1170/009/000']);

    //mose
    planDetails.uhc=uhc;
    planDetails.humana=humana;
    planDetails.highmark=highmark;
    planDetails.scan_cdphp=scan_cdphp;
    planDetails.aetna=aetna;
    planDetails.aetna_2=aetna_2;
    planDetails.priorityHealth=priorityHealth;
    planDetails.bsca=bsca;
    planDetails.standford=standford;
    planDetails.envision=envision;
    planDetails.expressScript=expressScript;
    planDetails.Wellcare=Wellcare;
    planDetails.Centene=Centene;
    planDetails.bcbsmi=bcbsmi;
    planDetails.Clover=Clover;
    planDetails.bscaMD=bscaMD;
    planDetails.BrightHealth=BrightHealth;
    
    //non-mose
    planDetails.HAMP=HAMP;
    planDetails.Anthem=Anthem;
    planDetails.emblem=emblem;
    planDetails.cigna_select=cigna_select;
    planDetails.dean_molina=dean_molina;
    planDetails.medica_oscar=medica_oscar;
    planDetails.hcsc=hcsc;
    planDetails.harvard_upmc=harvard_upmc;
    planDetails.geisinger=geisinger;
    planDetails.bcbsaz=bcbsaz;
    planDetails.horizon=horizon;
    planDetails.stanford_innovation=stanford_innovation;
    planDetails.alignment=alignment;
    planDetails.clickOff=clickOff;
    planDetails.teleOnly=teleOnly;
    planDetails.anthemMD=anthemMD;
    planDetails.bsca_ppo=bsca_ppo;


    return planDetails;
}

module.exports = planDetails;