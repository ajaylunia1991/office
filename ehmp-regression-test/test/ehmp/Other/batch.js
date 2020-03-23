// http://sjcmmcbch01:8080/mcws-batch/upload.html
// http://sjcmmcbch01:8080/mcws-batch/runJob.html
Feature('batch');

var config = require('config');
var Batch = config.get('Batch');


Scenario('batch' , {retries: 3},(I) => {
    I.amOnPage( Batch +'/mcws-batch/upload.html');
    I.waitForText('Plan-comparison');

    I.amOnPage(Batch+'/mcws-batch/runJob.html');
    I.waitForText('Select a DB');
   
  
});
