'use strict';

var logo = function() {

    var logo = {};
    //logo1
    var logo1 = new DataTable(['allid']);
    logo1.add(['asp6338000']);//changed for ALGO-1284
    logo1.add(['asp6318000']);//changed for ALGO-1284
    logo1.add(['asp6328000']);
    logo1.add(['asp6239000']);
    logo1.add(['asp6219000']);
    logo1.add(['asp6229000']);
    logo1.add(['asp6234000']);
    logo1.add(['asp6214000']);
    logo1.add(['asp6224000']);

    var logo11 = new DataTable(['allid']);
    logo11.add(['asp6333000']);
    logo11.add(['asp6313000']);
    logo11.add(['asp6323000']);
    logo11.add(['sum6353000']);
    logo11.add(['sum6343000']);
    logo11.add(['sum6348000']);
   // logo11.add(['sta7854000']);
    logo11.add(['sum7853000']);
   // logo11.add(['sta6378000']); ALGO-1284
    //logo11.add(['sta6358000']); -- removed ALGO-1284
   // logo11.add(['sta6368000']); ALGO-1284

    //logo2
    var logo2 = new DataTable(['allid']);
    logo2.add(['wel8641000']);
    logo2.add(['che7678000']);
    logo2.add(['che7602000']);
    logo2.add(['che7601000']);
    logo2.add(['che7600000']);
    logo2.add(['ren7759000']);
    logo2.add(['ren7702000']);
    logo2.add(['ren7703000']);
    logo2.add(['ren7704000']);
    //logo2.add(['sta6365000']);

    var logo12 = new DataTable(['allid']);
    //logo12.add(['sta7855000']);
    //logo12.add(['sta6383000']); ALGO -1284
   // logo12.add(['sta6373000']); ALGO-1284
    logo12.add(['dea6469000']);
    logo12.add(['dea6459000']);
    logo12.add(['dea6464000']);
    logo12.add(['mem6398000']);
    logo12.add(['mem6388000']);
    logo12.add(['mem6393000']);


    //logo3
    var logo3 = new DataTable(['allid']);
    logo3.add(['joh6413000']);
    logo3.add(['joh6403000']);
    logo3.add(['joh6408000']);
    logo3.add(['pro6499000']);
    logo3.add(['pro6479000']);
    logo3.add(['pro6489000']);
    logo3.add(['pro6494000']);
    logo3.add(['pro6474000']);
    logo3.add(['pro6484000']);
    logo3.add(['pro7969000']);
    logo3.add(['pro7968000']);

    var logo13 = new DataTable(['allid']);
    logo13.add(['uni5982000']);
    logo13.add(['aep6443000']);
    logo13.add(['tiv6701000']);
    logo13.add(['tiv6713000']);
    logo13.add(['bla6297000']);
    logo13.add(['bla6298000']);
    logo13.add(['bla6299000']);
    logo13.add(['bla6300000']);
    logo13.add(['bla6301000']);
    logo13.add(['bla6302000']);
    logo13.add(['wal6303000']);
    logo13.add(['wal6304000']);
    logo13.add(['wal6305000']);


    //logo4
    var logo4 = new DataTable(['allid']);
    logo4.add(['wal6666000']);
    logo4.add(['wal6667000']);
    logo4.add(['wel6662000']);
    logo4.add(['wel6663000']);
    logo4.add(['wal6275000']);
    logo4.add(['wal577000']);
    logo4.add(['wal576000']);
    logo4.add(['wal575000']);
    logo4.add(['wal574000']);
    logo4.add(['pai568000']);
    logo4.add(['cir567000']);

    var logo14 = new DataTable(['allid']);
    logo14.add(['ema566000']);
    logo14.add(['out565000']);
    logo14.add(['hea564000']);
    logo14.add(['dir563000']);
    logo14.add(['vid562000']);
    logo14.add(['pai561000']);
    logo14.add(['sav558000']);
    logo14.add(['new557000']);
    logo14.add(['mag556000']);
    logo14.add(['cir555000']);
    logo14.add(['dir554000']);
    logo14.add(['sav553000']);


    //logo5
    var logo5 = new DataTable(['allid']);
    logo5.add(['agi6930000']);
    logo5.add(['agi6924000']);
    logo5.add(['agi6923000']);
    logo5.add(['agi6922000']);
    logo5.add(['agi6929000']);
    logo5.add(['agi6928000']);
    logo5.add(['agi6921000']);
    logo5.add(['agi6927000']);
    logo5.add(['agi6926000']);
    logo5.add(['agi6925000']);
    logo5.add(['agi6931000']);
    logo5.add(['pro6975000']);
    logo5.add(['pro6977000']);

    var logo15 = new DataTable(['allid']);
    logo15.add(['ren7759000']);
    logo15.add(['ren7704000']);
    logo15.add(['ren7703000']);
    logo15.add(['ren7702000']);
    logo15.add(['cho7758000']);
    logo15.add(['cho7707000']);
    logo15.add(['cho7706000']);
    logo15.add(['cho7705000']);
    logo15.add(['che7678000']);
    logo15.add(['che7601000']);
    logo15.add(['che7602000']);
    logo15.add(['che7600000']);
    logo15.add(['che7686000']);
    logo15.add(['che7682000']);
    logo15.add(['orl7740000']);
    logo15.add(['ced7836000']);


    //logo6
    var logo6 = new DataTable(['allid']);
    logo6.add(['adv7832000']);
    logo6.add(['uni7445000']);
    logo6.add(['san7970000']);
    logo6.add(['her7963000']);
    logo6.add(['ced7839000']);
    logo6.add(['ced7838000']);
    logo6.add(['ced7837000']);
    logo6.add(['ced7840000']);
    logo6.add(['car7983000']);
    logo6.add(['car7984000']);
    logo6.add(['san7971000']);
    logo6.add(['san7972000']);
    logo6.add(['san7973000']);

    var logo16 = new DataTable(['allid']);
    logo16.add(['che7681000']);
    logo16.add(['che7680000']);
    logo16.add(['che7679000']);
    logo16.add(['che7685000']);
    logo16.add(['che7684000']);
    logo16.add(['che7683000']);
    logo16.add(['orl7739000']);
    logo16.add(['orl7738000']);
    logo16.add(['orl7610000']);
    logo16.add(['orl7742000']);
    logo16.add(['adv7835000']);
    logo16.add(['adv7834000']);
    logo16.add(['adv7833000']);
    logo16.add(['adv7863000']);
    logo16.add(['adv7941000']);
    logo16.add(['adv7940000']);
    logo16.add(['her7964000']);


    //logo7
    var logo7 = new DataTable(['allid']);
    logo7.add(['her7965000']);
    logo7.add(['her7966000']);
    logo7.add(['cvm8301000']);
    logo7.add(['cvm8302000']);
    logo7.add(['car8030000']);
    logo7.add(['car8029000']);
    logo7.add(['car8028000']);
    logo7.add(['car8027000']);
    logo7.add(['car7982000']);
    logo7.add(['car8031000']);
    // logo7.add(['pri8054000']); removed as per Kelly on 10/09/2019
    // logo7.add(['pri8401000']);
    // logo7.add(['pri8400000']);
    // logo7.add(['pri8399000']);
    // logo7.add(['pri8398000']);

    var logo17 = new DataTable(['allid']);
    // logo17.add(['pri8397000']);removed as per Kelly on 10/09/2019
    // logo17.add(['pri8396000']);
    // logo17.add(['pri8395000']);
    // logo17.add(['pri8394000']);
    // logo17.add(['pri7981000']);
    logo17.add(['ste7980000']);
    logo17.add(['ste8046000']);
    logo17.add(['ste8047000']);
    logo17.add(['ste8048000']);
    logo17.add(['agi8421000']);
    logo17.add(['car8365000']);
    logo17.add(['equ8313000']);
    logo17.add(['equ8314000']);
    logo17.add(['equ8315000']);
    logo17.add(['equ8316000']);


    //logo8
    var logo8 = new DataTable(['allid']);
    logo8.add(['equ8317000']);
    logo8.add(['ste8309000']);
    logo8.add(['ste8310000']);
    logo8.add(['ste8311000']);
    logo8.add(['ste8312000']);
    logo8.add(['cen8318000']);
    logo8.add(['cen8319000']);
    logo8.add(['cen8320000']);
    logo8.add(['cen8321000']);
    logo8.add(['cen8322000']);
    logo8.add(['orl8402000']);
   // logo8.add(['sta6382000']); ALGO-1284
   // logo8.add(['sta6386000']); ALGO-1284
    logo8.add(['wal6306000']);
    logo8.add(['cap6213000']);
    logo8.add(['med559000']);
    logo8.add(['sil6711000']);
    logo8.add(['env6660000']);
    logo8.add(['env6661000']);


    //logo9
    var logo9 = new DataTable(['allid']);
   // logo9.add(['sta6379000']);ALGO-1284
   // logo9.add(['sta6384000']);ALGO-1284
   // logo9.add(['sta6372000']); ALGO-1284
   // logo9.add(['sta6359000']);  Removed as ALGO-1284
    //logo9.add(['sta6385000']); ALGO-1284
   // logo9.add(['sta6387000']);ALGO-1284
    //logo9.add(['sta6370000']); ALGO-1284
   // logo9.add(['sta6381000']); ALGO-1284
   // logo9.add(['sta6369000']); ALGO-1284
   // logo9.add(['sta6377000']); ALGO-1284
   // logo9.add(['sta6371000']); ALGO-1284
    //logo9.add(['sta6380000']); ALGO-1284
    logo9.add(['sut6179000']);

    var logo19 = new DataTable(['allid']);
    logo19.add(['sut6424000']);
    logo19.add(['sut6423000']);
    logo19.add(['sut6181000']);
    logo19.add(['sut6177000']);
    logo19.add(['sut6176000']);
    logo19.add(['sut5497000']);
    logo19.add(['sut5494000']);
    logo19.add(['sut5499000']);
    logo19.add(['sut5500000']);
    logo19.add(['sut5526000']);
    logo19.add(['sut5495000']);
    logo19.add(['sut5491000']);
    logo19.add(['sut5496000']);
    logo19.add(['sut6174000']);


    //logo10
    var logo10 = new DataTable(['allid']);
    logo10.add(['sut6178000']);
    logo10.add(['sut6421000']);
    logo10.add(['sut6420000']);
    logo10.add(['sut6175000']);
    logo10.add(['sut6426000']);
    logo10.add(['sut6180000']);
    logo10.add(['sut6422000']);
    logo10.add(['sut5527000']);
    logo10.add(['sut6430000']);
    logo10.add(['sut6431000']);
    logo10.add(['sut6429000']);
    logo10.add(['wel8946000']);//MEDI-19576
    logo10.add(['wel8947000']);//MEDI-19576

    var logo18 = new DataTable(['allid']);
    logo18.add(['sut6428000']);
    logo18.add(['sut6427000']);
    logo18.add(['sut6425000']);
    logo18.add(['sut6418000']);
    logo18.add(['sut6419000']);
    logo18.add(['sut6432000']);
    logo18.add(['uni6006000']);
    logo18.add(['uni6149000']);
    logo18.add(['wel8641000']);
   // logo18.add(['sta6362000']); ALGO-1284
   // logo18.add(['sta6361000']); ALGO-1284
   // logo18.add(['sta6360000']); removedas ALGO-1284

    //logo20
    var logo20 = new DataTable(['allid']);
    logo20.add(['car9155000']);//MEDI-20430
    logo20.add(['car9156000']);
    logo20.add(['car9157000']);
    logo20.add(['car9158000']);
    logo20.add(['car9159000']);
    // logo20.add(['pri9188000']);//MEDI-20427 Removed as per Kelly on 10/09/2019
    // logo20.add(['pri9189000']);
    // logo20.add(['pri9190000']);
    // logo20.add(['pri9191000']);
    // logo20.add(['pri9192000']);
    logo20.add(['cen9166000']);//MEDI-20428
    logo20.add(['cen9167000']);
    logo20.add(['cen9168000']);

     //logo21
     var logo21 = new DataTable(['allid']);
     logo21.add(['cen9169000']);
     logo21.add(['adv9152000']);//MEDI-20422
     logo21.add(['adv9153000']);
     logo21.add(['adv9154000']);
     logo21.add(['adv9160000']);
     logo21.add(['adv9161000']);

//logo22
var logo22 = new DataTable(['allid']);
// logo22.add(['pri8053000']);
// logo22.add(['pri8052000']);
// logo22.add(['pri8044000']);
// logo22.add(['pri8043000']);
// logo22.add(['pri8042000']);
// logo22.add(['pri8041000']);
// logo22.add(['pri8040000']);
// logo22.add(['pri8039000']);
// logo22.add(['pri8036000']);
// logo22.add(['pri8035000']);
// logo22.add(['pri8038000']);
// logo22.add(['pri8037000']);
// logo22.add(['pri8034000']);
// logo22.add(['pri8033000']);
// logo22.add(['pri8032000']);
// logo22.add(['pri7981000']);

//logo23
var logo23 = new DataTable(['allid']);
// logo23.add(['pri9188000']);
// logo23.add(['pri9189000']);
// logo23.add(['pri9190000']);
// logo23.add(['pri9191000']);
// logo23.add(['pri9192000']);
logo23.add(['dup8323000']);
logo23.add(['cvm6521000']);
logo23.add(['cvm6520000']);
logo23.add(['cvm6519000']);
logo23.add(['cvm6518000']);
logo23.add(['cvm6517000']);
logo23.add(['cvm6516000']);
logo23.add(['cvm6515000']);
logo23.add(['cvm6514000']);
logo23.add(['cvm6513000']);
logo23.add(['cvm6512000']);


//logo24
var logo24 = new DataTable(['allid']);
logo24.add(['cvm6511000']);
logo24.add(['cvm6510000']);
logo24.add(['cvm6509000']);
logo24.add(['cvm6508000']);
logo24.add(['cvm6507000']);
logo24.add(['cen9166000']);
logo24.add(['cen9167000']);
logo24.add(['cen9168000']);
logo24.add(['cen9169000']);
logo24.add(['car9155000']);
logo24.add(['car9156000']);
logo24.add(['car9157000']);
logo24.add(['car9158000']);
logo24.add(['car9159000']);


 //logo25
 var logo25 = new DataTable(['allid']);
 logo25.add(['ced9162000']);
logo25.add(['ced9163000']);
logo25.add(['ced9164000']);
logo25.add(['ced9165000']);
 //logo25.add(['sta6362000']);
 //logo25.add(['sta6361000']);
 //logo25.add(['sta6366000']); ALGO-1284
 //logo25.add(['sta6365000']); ALGO-1284
// logo25.add(['sta6375000']); ALGO-1284
 //logo25.add(['sta6364000']);ALGO-1284
 //logo25.add(['sta6367000']);ALGO-1284
 logo25.add(['adv9152000']);
 logo25.add(['adv9153000']);
 logo25.add(['adv9160000']);
 logo25.add(['adv9161000']);
 logo25.add(['gen8530000']);
   logo25.add(['gen8529000']);
   logo25.add(['gen8528000']);
   logo25.add(['gen8527000']);

//logo26
   var logo26 = new DataTable(['allid']);
   
   logo26.add(['hac8526000']);
   logo26.add(['hac8525000']);
   logo26.add(['hac8524000']);
   logo26.add(['hac8523000']);
   logo26.add(['uni6149000']);
   logo26.add(['uni6006000']);
   logo26.add(['wel8641000']);
   logo26.add(['wel8947000']);
   logo26.add(['wel8946000']);
   logo26.add(['tiv6725000']);
   logo26.add(['tiv6726000']);
   logo26.add(['tiv6727000']);
   logo26.add(['tiv6728000']);
   logo26.add(['tiv6729000']);
   logo26.add(['tiv6730000']); 
   //logo27
   var logo27 = new DataTable(['allid']); 
   logo27.add(['gom7443000']);
   logo27.add(['co-560000']);
  


    logo.logo1 = logo1;
    logo.logo2 = logo2;
    logo.logo3 = logo3;
    logo.logo4 = logo4;
    logo.logo5 = logo5;
    logo.logo6 = logo6;
    logo.logo7 = logo7;
    logo.logo8 = logo8;
    logo.logo9 = logo9;
    logo.logo10 = logo10;
    logo.logo11 = logo11;
    logo.logo12 = logo12;
    logo.logo13 = logo13;
    logo.logo14 = logo14;
    logo.logo15 = logo15;
    logo.logo16 = logo16;
    logo.logo17 = logo17;
    logo.logo18 = logo18;
    logo.logo19 = logo19;
    logo.logo20 = logo20;
    logo.logo21 = logo21;
    logo.logo22 = logo22;
    logo.logo23 = logo23;
    logo.logo24 = logo24;
    logo.logo25 = logo25;
    logo.logo26 = logo26;
    logo.logo27 = logo27;

    return logo;
}

module.exports = logo;