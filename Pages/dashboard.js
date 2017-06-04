const Page = require("./Page");

let dashboardPage = Object.create(Page, {
    // web elements
    canvas: Page.createPageElement('canvas'),

    // methods
    open: {
        value: function() {
            Page.open.call(this, '#/dashboard');
        }},
});

module.exports = dashboardPage;


// поиск елементов в консоле : $('canvas') - $$('canvas') - $('canvas').length;