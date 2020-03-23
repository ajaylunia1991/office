var browsers = [{
    "browser": "safari",
    "desiredCapabilities": {
        'os_version' : '12',
        'device' : 'iPhone XS',
        'browserName':'safari',
        'real_mobile' : 'true',
        'build' : 'Medicare XM',
        'browserstack.debug' : 'true',
        'browserstack.local' : 'false',
        'project':'iphone'
    }
},{
    "browser": "safari",
    "desiredCapabilities":{
        'os_version' : '12',
        'device' : 'iPad Pro 11 2018',
        'browserName':'safari',
        'real_mobile' : 'true',
        'build' : 'Medicare XM',
        'browserstack.debug' : 'true',
        'browserstack.local' : 'false',
        'project':'ipad'
    }
},{
    "browser": "chrome",
    "desiredCapabilities":{
        'os_version' : '9.0',
        'device' : 'Google Pixel 2',
        'browserName':'chrome',
        'real_mobile' : 'true',
        'build' : 'Medicare XM',
        'browserstack.debug' : 'true',
        'browserstack.local' : 'false',
        'project':'android'
    }
},{
    "browser": "chrome",
    "desiredCapabilities":{
        'os_version' : '8.1',
        'device' : 'Samsung Galaxy Tab S4',
        'browserName':'chrome',
        'real_mobile' : 'true',
        'build' : 'Medicare XM',
        'browserstack.debug' : 'true',
        'browserstack.local' : 'false',
        'project':'android tablet'
    }
}]
const include=require(process.cwd() +'/utils/getPages').pages();
exports.config = {
    "tests": process.profile,
    "timeout": 100000,
    "output": "./output",
    "include": include,
    "helpers": {
        WebDriverIO: {
            url: "colin38:qqZEdKX3ijRZ2nHamg9o@hub.browserstack.com",
            user: "colin38",
            key: "qqZEdKX3ijRZ2nHamg9o",
            'browser': 'chrome',//safari
            'protocol': 'http',//Can't connect to WebDriver. Error: socket hang up
            desiredCapabilities: {
                /* 'os_version' : '12',
                'device' : 'iPhone XS Max',
                'browserName':'safari',
                'real_mobile' : 'true',
                'build' : 'Medicare XM',
                'browserstack.debug' : 'true',
                'browserstack.local' : 'false',
                'browserstack.video' : 'true',
                // 'browserstack.appium_version' : '1.9.1',
                // 'name':'Medicare',
                'project':'Medicare Multi-device Test' */

                'os_version' : '9.0',
                'device' : 'Google Pixel 2',
                'browserName':'chrome',
                'real_mobile' : 'true',
                'build' : 'Medicare XM',
                'browserstack.debug' : 'true',
                'browserstack.local' : 'false',
                'project':'android'

                // 'os' : 'Windows',
                // 'os_version' : '10',
                // 'browserName':'IE',
                // 'browser_version':'11.0',
                // 'build' : 'Medicare XM',
                // 'browserstack.debug' : 'true',
                // 'browserstack.local' : 'false',
                // 'project':'windows-ie'
            }
        }
    },
    "name": "layer-x",
    "multiple": {
        "parallel": {
            "chunks": 32,
            "browsers": browsers
        }
    }
}