'use strict';

var planDetails = function(){

    var planDetails = {};

    var MA_Cherrie_1 = new DataTable(['carrierName', 'productline','url']);
    MA_Cherrie_1.add(['Fallon','MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&previewPeriod=false&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MA/02141/22090/MIDDLESEX/H9001/034/009']);
    MA_Cherrie_1.add(['Geisinger','MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&previewPeriod=false&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MA/17001/39270/CUMBERLAND/H3924/060/017']);

    var MA_Cherrie_2 = new DataTable(['carrierName', 'productline','url']);
    MA_Cherrie_2.add(['HarvardPilgrim','MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&previewPeriod=false&turnOnPlanReview=Y&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y&qascript=Y#plan-benefits/MA/02141/22090/MIDDLESEX/H1660/016/002']);	
    MA_Cherrie_2.add(['HealthAllidMedicalPlans','MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&previewPeriod=false&turnOnPlanReview=Y&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MA/62474/14110/CLARK/H1463/008/000']);

    var MA_Cherrie_3 = new DataTable(['carrierName', 'productline','url']);
    MA_Cherrie_3.add(['Healthnet','MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&previewPeriod=false&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MA/90001/05200/LOS%20ANGELES/H0562/044/000']);
    MA_Cherrie_3.add(['HighmarkChoiceCompany','MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&previewPeriod=false&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MA/17001/39270/CUMBERLAND/H3957/042/002']);

    var MA_Cherrie_4 = new DataTable(['carrierName', 'productline','url']);
    MA_Cherrie_4.add(['HighmarkSeniorHealth','MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&previewPeriod=false&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MA/17001/39270/CUMBERLAND/H3916/034/003']);
    MA_Cherrie_4.add(['HighmarkSeniorSolutions','MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&previewPeriod=false&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MA/25156/51190/KANAWHA/H5106/013/000']);

    var MA_Cherrie_5 = new DataTable(['carrierName', 'productline','url']);
    MA_Cherrie_5.add(['HorizonBCBSofNJ','MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&previewPeriod=false&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MA/07676/31100/BERGEN/H3154/030/000']);
    MA_Cherrie_5.add(['Humana','MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&previewPeriod=false&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MA/89199/29010/CLARK/H5216/037/000']);
    MA_Cherrie_5.add(['Innovacare','MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&previewPeriod=false&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MA/33023/10050/BROWARD/H3293/002/000']);
     
    var MA_Rachel_1 = new DataTable(['carrierName', 'productline','url']);
    // Centene PCP too long, can't get through.
    MA_Rachel_1.add(['Centene', 'MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MA/33158/10120/MIAMI-DADE/H9276/004/000']);
    MA_Rachel_1.add(['Clover', 'MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MA/85756/03090/PIMA/H5141/040/000']);

    var MA_Rachel_2 = new DataTable(['carrierName', 'productline','url']);
    // Coventry PCP too long, can't get through.
    // MA_Rachel_2.add(['Coventry', 'MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MA/33351/10050/BROWARD/H1609/018/000']);
    MA_Rachel_2.add(['CDPHA', 'MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MA/12250/33000/ALBANY/H3388/014/000']);

    var MA_Rachel_3 = new DataTable(['carrierName', 'productline','url']);
    // Emblem PCP too long, can't get through.
    MA_Rachel_3.add(['Dean', 'MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MA/53534/52120/DANE/H9096/004/000']);
    // MA_Rachel_3.add(['Emblem', 'MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MA/11237/33331/KINGS/H3330/040/000']);

    var MA_Vivian_1 = new DataTable(['carrierName', 'productline','url']);
    MA_Vivian_1.add(['Aetna', 'MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MA/90001/05200/LOS%20ANGELES/H0523/061/000']);
    MA_Vivian_1.add(['Amerigroup', 'MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MA/87001/32210/SANDOVAL/H5746/016/000']);

    var MA_Vivian_2 = new DataTable(['carrierName', 'productline','url']);
    MA_Vivian_2.add(['BrightHealth', 'MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MA/80241/06000/ADAMS/H7853/003/000']);
    MA_Vivian_2.add(['Anthem', 'MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MA/90001/05200/LOS%20ANGELES/H0544/002/000']);

    var MA_Vivian_3 = new DataTable(['carrierName', 'productline','url']);
    MA_Vivian_3.add(['BCBSGA', 'MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MA/30002/11370/DEKALB/H7728/006/000']);
    MA_Vivian_3.add(['BCBSMI', 'MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MA/48001/23730/SAINT%20CLAIR/H9572/004/004']);
    MA_Vivian_3.add(['BSCA', 'MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MA/90001/05200/LOS%20ANGELES/H0504/021/000']);
         
    var MA_Suping_1 = new DataTable(['carrierName', 'productline','url']);
    MA_Suping_1.add(['Empire','MA','/?planYear=2019&carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&previewPeriod=false&hideEnrollPage=true&qascript=Y#plan-benefits/MA/12250/33000/ALBANY/H8432/017/000	']);
    MA_Suping_1.add(['Medica','MA','/?planYear=2019&carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&previewPeriod=false&hideEnrollPage=true&detailCompareRedesign=true&qascript=Y#plan-benefits/MA/55102/24610/RAMSEY/H6154/001/000']);
    MA_Suping_1.add(['MolinaHealthCare','MA','/?planYear=2019&carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&previewPeriod=false&hideEnrollPage=true&detailCompareRedesign=true&qascript=Y#plan-benefits/MA/83301/13410/TWIN%20FALLS/H5628/010/000']);

    var MA_Suping_2 = new DataTable(['carrierName', 'productline','url']);
    MA_Suping_2.add(['PriorityHealth','MA','/?planYear=2019&carrierCode=026882ECE3464942AC330478F5F5FBEF&previewPeriod=false&turnOnPlanReview=Y&hideEnrollPage=true&detailCompareRedesign=true&qascript=Y#plan-benefits/MA/48001/23730/SAINT%20CLAIR/H2320/022/002']);
    MA_Suping_2.add(['SelectHealth','MA','/?planYear=2019&carrierCode=026882ECE3464942AC330478F5F5FBEF&previewPeriod=false&turnOnPlanReview=Y&hideEnrollPage=true&detailCompareRedesign=true&qascript=Y#plan-benefits/MA/83641/13000/ADA/H1994/003/000']);
    MA_Suping_2.add(['Stanford','MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&previewPeriod=false&isShowPlanYearElement=true&turnOnPlanReview=Y&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MA/95150/05530/SANTA%20CLARA/H2986/002/000']);

    var MA_Suping_3 = new DataTable(['carrierName', 'productline','url']);
    MA_Suping_3.add(['UHC','MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&previewPeriod=false&isShowPlanYearElement=true&applicationFlow=C&turnOnPlanReview=Y&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MA/95150/05530/SANTA%20CLARA/H0543/180/000']);
    MA_Suping_3.add(['WellCare','MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&previewPeriod=false&isShowPlanYearElement=true&turnOnPlanReview=Y&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MA/90001/05200/LOS%20ANGELES/H5087/005/000']);
   
    var MD_Cherrie = new DataTable(['carrierName', 'productline','url']);
    MD_Cherrie.add(['HM','MD','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&previewPeriod=false&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MD/25721/51050/CABELL/S5593/002/000']);
    MD_Cherrie.add(['Horizon','MD','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&previewPeriod=false&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MD/07676/31100/BERGEN/S5993/001/000']);
    MD_Cherrie.add(['Humana','MD','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&previewPeriod=false&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MD/89199/29010/CLARK/S5884/112/000']);

    var MD_Rachel = new DataTable(['carrierName', 'productline','url']);
    MD_Rachel.add(['Coventry', 'MD','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MD/20001/09000/DISTRICT%20OF%20COLUMBIA/S5768/128/000']);
    MD_Rachel.add(['Envision', 'MD','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MD/20001/09000/DISTRICT%20OF%20COLUMBIA/S7694/005/000']);
    MD_Rachel.add(['Express scripts', 'MD','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MD/20001/09000/DISTRICT%20OF%20COLUMBIA/S5660/221/000']);

    var MD_Vivian_1 = new DataTable(['carrierName', 'productline','url']);
    MD_Vivian_1.add(['Aetna', 'MD','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MD/90001/05200/LOS%20ANGELES/S5810/295/000']);
    MD_Vivian_1.add(['Anthem', 'MD','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MD/90001/05200/LOS%20ANGELES/S5596/034/000']);
    
    var MD_Vivian_2 = new DataTable(['carrierName', 'productline','url']);
    MD_Vivian_2.add(['BCBSGA', 'MD','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MD/30002/11370/DEKALB/S5596/009/000']);
    MD_Vivian_2.add(['BCBSMI', 'MD','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MD/48001/23730/SAINT%20CLAIR/S5584/001/000']);
    MD_Vivian_2.add(['BSCA', 'MD','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MD/90001/05200/LOS%20ANGELES/S5596/034/000']);
    
    var MD_Suping = new DataTable(['carrierName', 'productline','url']);
    MD_Suping.add(['UHC','MD','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&previewPeriod=false&isShowPlanYearElement=true&turnOnPlanReview=Y&applicationFlow=C&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MD/90001/05200/LOS%20ANGELES/S5921/376/000']);
    MD_Suping.add(['WellCare','MD','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&previewPeriod=false&isShowPlanYearElement=true&turnOnPlanReview=Y&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MD/90001/05200/LOS%20ANGELES/S4802/163/000']);
    
    var onlyTele_Cherrie = new DataTable(['carrierName', 'productline','url','QA']);
    // onlyTele_Cherrie.add(['InnovationHealth', 'MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MA/22301/49011/ALEXANDRIA%20CITY/H2829/001/000','Cherrie']);
    onlyTele_Cherrie.add(['Careplus', 'MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&previewPeriod=false&isShowPlanYearElement=true&defaultPlanYear=2019&hideEnrollPage=true&qascript=Y#plan-benefits/MA/33158/10120/MIAMI-DADE/H1019/076/000','Rachel']);
    onlyTele_Cherrie.add(['Kaiser','MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&previewPeriod=false&isShowPlanYearElement=true&defaultPlanYear=2019&hideEnrollPage=true&qascript=Y#plan-benefits/MA/31144/11290/COBB/H1170/009/000','Cherrie']);
    onlyTele_Cherrie.add(['BCBSNE','MA','/?planYear=2019&carrierCode=026882ECE3464942AC330478F5F5FBEF&previewPeriod=false&hideEnrollPage=true&qascript=Y#plan-benefits/MA/51557/28100/BURT/H3170/001/000','Vivian']);
    
    //Redirect to carrier site
    var clickOffAppList = new DataTable(['carrierName', 'productline','url','QA','comment']);
    clickOffAppList.add(['Silverscript', 'MD','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MD/33351/10050/BROWARD/S5601/022/000','Rachel','silverscript']);
    clickOffAppList.add(['GroupHealth','MA','/?carrierCode=026882ECE3464942AC330478F5F5FBEF&turnOnPlanReview=Y&previewPeriod=false&isShowPlanYearElement=true&defaultPlanYear=2019&detailCompareRedesign=true&hideEnrollPage=true&qascript=Y#plan-benefits/MA/98064/50160/KING/H5050/022/000','Cherrie','ghc']);	
    
    //2019 mose
    var uhcMaMd = new DataTable(['carrierName', 'productline','url']);
    uhcMaMd.add(['UHC', 'MA','/?carrierCode=C95B4C50D7D065014A9BED535BB66D44&qascript=Y&hideEnrollPage=true&previewPeriod=false#plan-benefits/MA/96701/12020/HONOLULU/H2228/024/000']);
    uhcMaMd.add(['UHC', 'PFFS','/?carrierCode=C95B4C50D7D065014A9BED535BB66D44&qascript=Y&hideEnrollPage=true&previewPeriod=false#plan-benefits/MA/39813/11161/CALHOUN/H5435/001/000']);
    uhcMaMd.add(['UHC', 'MD','/?carrierCode=C95B4C50D7D065014A9BED535BB66D44&qascript=Y&hideEnrollPage=true&previewPeriod=false#plan-benefits/MD/96701/12020/HONOLULU/S5921/381/000']);

    var wellcareMaMd = new DataTable(['carrierName', 'productline','url']);
    wellcareMaMd.add(['wellcare', 'MA','/?carrierCode=C95B4C50D7D065014A9BED535BB66D44&qascript=Y&hideEnrollPage=true&previewPeriod=false&defaultPlanYear=2019&applicationFlow=M#plan-benefits/MA/90001/05200/LOS%20ANGELES/H5087/005/000']);
    wellcareMaMd.add(['wellcare', 'PFFS','/?carrierCode=C95B4C50D7D065014A9BED535BB66D44&qascript=Y&hideEnrollPage=true&previewPeriod=false&defaultPlanYear=2019&applicationFlow=M#plan-benefits/MA/12250/33000/ALBANY/H2816/035/001']);
    wellcareMaMd.add(['wellcare', 'MD','/?carrierCode=C95B4C50D7D065014A9BED535BB66D44&qascript=Y&hideEnrollPage=true&previewPeriod=false&defaultPlanYear=2019&applicationFlow=M#plan-benefits/MD/90001/05200/LOS%20ANGELES/S4802/163/000']);

    var humanaMaMd = new DataTable(['carrierName', 'productline','url']);
    humanaMaMd.add(['humana', 'MA PCP required','/?carrierCode=C95B4C50D7D065014A9BED535BB66D44&qascript=Y&hideEnrollPage=true&previewPeriod=false&defaultPlanYear=2019&applicationFlow=M#plan-benefits/MA/90001/05200/LOS%20ANGELES/H5087/005/000']);
    humanaMaMd.add(['humana', 'MA PCP optional','/?carrierCode=C95B4C50D7D065014A9BED535BB66D44&qascript=Y&hideEnrollPage=true&previewPeriod=false&defaultPlanYear=2019&applicationFlow=M#plan-benefits/MA/12250/33000/ALBANY/H5970/018/000']);
    humanaMaMd.add(['humana', 'MD','/?carrierCode=C95B4C50D7D065014A9BED535BB66D44&qascript=Y&hideEnrollPage=true&previewPeriod=false&defaultPlanYear=2019&applicationFlow=M#plan-benefits/MD/12250/33000/ALBANY/S5552/005/000']);

    planDetails.MA_Cherrie_1=MA_Cherrie_1;
    planDetails.MA_Cherrie_2=MA_Cherrie_2;
    planDetails.MA_Cherrie_3=MA_Cherrie_3;
    planDetails.MA_Cherrie_4=MA_Cherrie_4;
    planDetails.MA_Cherrie_5=MA_Cherrie_5;
    planDetails.MA_Rachel_1=MA_Rachel_1;
    planDetails.MA_Rachel_2=MA_Rachel_2;
    planDetails.MA_Rachel_3=MA_Rachel_3;
    planDetails.MA_Vivian_1=MA_Vivian_1;
    planDetails.MA_Vivian_2=MA_Vivian_2;
    planDetails.MA_Vivian_3=MA_Vivian_3;
    planDetails.MA_Suping_1=MA_Suping_1;
    planDetails.MA_Suping_2=MA_Suping_2;
    planDetails.MA_Suping_3=MA_Suping_3;
    planDetails.MD_Cherrie=MD_Cherrie;
    planDetails.MD_Rachel=MD_Rachel;
    planDetails.MD_Vivian_1=MD_Vivian_1;
    planDetails.MD_Vivian_2=MD_Vivian_2;
    planDetails.MD_Suping=MD_Suping;
    planDetails.onlyTele_Cherrie=onlyTele_Cherrie;
    planDetails.clickOffAppList=clickOffAppList;
    planDetails.uhcMaMd=uhcMaMd;
    planDetails.wellcareMaMd=wellcareMaMd;
    planDetails.humanaMaMd=humanaMaMd;

    return planDetails;
}

module.exports = planDetails;
