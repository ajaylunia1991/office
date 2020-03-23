var config = require("config");
var host = config.get('host');
var port = config.get('port');
var dateFormat = require('dateformat');
const include=require(process.cwd() +'/utils/getPages').pages();
var chromeOptions = {
    "useAutomationExtension": false,
    "args": ["--window-size=1800,1600"]
};

exports.config = {
    "tests": "./test/ehmp/*/*.js",
    "timeout": 100000,
    "output": "./output",
    "include": include,
    "helpers": {
        "BifrostHelper": {
          "require": "./node_modules/bifrost-io/codeceptjs/dashboard_helper.js"
        },
        "WebDriverIO": {
            "url": "https://",
            "browser": "chrome",
            "restart": false,
            "keepBrowserState": false,
            "keepCookies": false,
            "waitForTimeout": 10000,
            "smartWait": 100,
            "host": host,
            "port": port,
            "seleniumAddress": host +":"+ port,
            "desiredCapabilities": {
                "browserName": "chrome",
                "version":"71.0",
                "enableVNC":true,
                "enableVideo":false,
                "name":"Medicare XM E2E",
                "build":"Medicare XM Team",
                "chromeOptions": chromeOptions
              }
        }
    },
    "name": "medicare",
    "multiple": {
        "parallel": {
            "chunks": 32,
            "browsers": [{
                "browser": "chrome"
            }]
        }
    },
    plugins: {
       // command: export TEST=sanity && export NODE_ENV=cm && npx codeceptjs run-multiple --all -c testrail.conf.js --profile '870' --grep '@C12761|@C12762|@C12763'
      testrail: {
         require: './codeceptjs-testrail',
        host: 'https://testrail.ehealthinsurance.com',
        user: 'testrail@ehealth.com',
        password: 'qwe123',
        suiteId: 6,
        projectId: 3,
        runId: process.profile,
        runName: `${dateFormat(new Date(),"mm-dd-yyyy")}` + '-' + process.env.NODE_ENV + '-' + process.env.TEST ,
        enabled: true
   }
  }
}