const Helper = codecept_helper;



class gmgHelper extends Helper {
    changeToTab(num) {
        let client = this.helpers['WebDriverIO'].browser;
        return client
            .getTabIds().then(function(handles) {
                return this.switchTab(handles[num - 1]);
            });
    }
    waitForTabLoading(ammountOfTabs, timeout) {
        let client = this.helpers['WebDriverIO'].browser;
        return client
            .waitUntil(function() {
                return this.getTabIds().then(function(handles) {
                    return handles.length === ammountOfTabs
                });
            }, timeout * 1000);
    }
    waitForUrl(urlPart, timeout) {
        let client = this.helpers['WebDriverIO'].browser;
        let currUrl;
        return client
            .waitUntil(function() {
                return this.url().then(function(res) {
                    currUrl = res.value;
                    return (decodeURIComponent(decodeURIComponent(decodeURIComponent(res.value.replace(/\+/g, " "))).replace(/\+/g, " "))).indexOf(urlPart.replace(/\+/g, " ")) > -1;
                });
            }, timeout * 1000);
    }
}

module.exports = gmgHelper;