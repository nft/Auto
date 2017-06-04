function Page() {

};


Page.prototype.open = function (path) {
    browser.windowHandleMaximize("current");
    browser.url('/' + path);
};

Page.prototype.createPageElement =  function(selector) {
    return {
        get: function() { 
            return browser.element(selector);
        } 
    };
};

module.exports = new Page();