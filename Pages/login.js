const Page = require("./Page");

let loginPage = Object.create(Page, {
    // web elements
    userNameInput: Page.createPageElement('input[type="text"]'),
    userPasswd: Page.createPageElement('input[type="password"]'),
    loginBtn: Page.createPageElement('input[type="submit"]'),

    // methods
    open: {
        value: function() {
            Page.open.call(this, '');
        }},

    loginToCVOP: {
        value: function(userName, userPasswd) {
            this.open();
            this.loginBtn.waitForExist(500);
            this.userNameInput.setValue(userName);
            this.userPasswd.setValue(userPasswd);
            this.loginBtn.click();
            browser.pause(2000); // wait 2 min for main page to load
        }}
});

module.exports = loginPage;