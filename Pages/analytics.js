const Page = require("./Page");
const commonMethods = require("../Helper/commonMethods.js");

let analyticsPage = Object.create(Page, {
    // web elements
    pageHeader: Page.createPageElement('div.left.floated.ten.wide.column > div > div > div'),
    widgetTitleInput: Page.createPageElement('[name="title"]'),
    newWidgetButtonNoWidget: Page.createPageElement('div.no-widgets > div.no-widgets-controls > button'),
    // dashboard widget element
    newWidgetButton: Page.createPageElement('button=New widget'),
//    widgetHiddenButton: Page.createPageElement('div.widget-header > div[title="Analytics test"]'), /////
    // modal window elements
    modalWindowHeader: Page.createPageElement('.header'),
    addButton: Page.createPageElement('button=Add'),
    datasourceInput: Page.createPageElement('[name="datasource-search"]'),
    chartTypeDiv: Page.createPageElement('form > div:nth-child(3) > div'), 
    timeRangeDiv: Page.createPageElement('form > div:nth-child(4) > div > div'),
    dimensionsInput: Page.createPageElement("[name='dimensions-search']"),
    measuresDiv: Page.createPageElement('form > div:nth-child(6) > div'),
  //  rowLimit: Page.createPageElement('form input[value="10"]'),

    // methods
    open: {
        value: function() {
            Page.open.call(this, 'analytics');
        }},
    chooseDataSource: {
        value: function(datasource) {
            this.datasourceInput.click();
            browser.element('span=' + datasource).click();
        }},
    chooseChartType: {
        value: function(chartType) {
            this.chartTypeDiv.click();
            browser.element('span=' + chartType).click(); // 
        }},
    chooseTimeRange: {
        value: function(timeRange) {
            this.timeRangeDiv.click();
            browser.element('div=' + timeRange).click();
        }},
    chooseDimensions: {
        value: function(dimensions) {
            this.dimensionsInput.click();
            dimensions.forEach(function(dimension) {
                 browser.element('span=' + dimension).click();
            });
            commonMethods.changeFocus(this.modalWindowHeader); // click on empty space to close drop-down            
        }},
    chooseMesures: {
        value: function(measures) {
            this.measuresDiv.click();
            measures.forEach(function(measure) {
                 browser.element('span=' + measure).click();
            });
            commonMethods.changeFocus(this.modalWindowHeader); // click on empty space to close drop-down
        }},
    rowLimitChange: {
        value: function(newLimit) {
            this.rowLimit.click();
            this.rowLimit.setValue("1000");
        }},
    isWidgetAdded: {
        value: function(expectedWidgetName) {
            let result = browser.element("[title='" + expectedWidgetName + "']").isExisting();
            result ? console.log("Yes! Widget " + expectedWidgetName + " is added") : false;
            return result;
        }
    },
    clickOnWidgetHiddenButton: {
        value: function(widgetName) {
            let widgetByTitle = "[title='" + widgetName + "']";
            let widgetDropdownButton = '~ .widget-controls > div.dropdown > i';
            let deleteButton = '~ .widget-controls > div.dropdown > .menu transition';
            browser.moveToObject(widgetByTitle);
            browser.element(widgetByTitle + widgetDropdownButton).click();
        }
    },
    chooseWidgetOption: {
        value: function(widgetName, option) {
            let widgetByTitle = "[title='" + widgetName + "']";
            let optionSelector = '~ .widget-controls > div.dropdown > div.menu.transition.visible';
            browser.element(widgetByTitle + optionSelector).element("span=" + option).click();
        }
    },
    deleteWidgetAction: {
        value: function(action) {
            browser.element("button=" + action).click();
        }
    }
});

module.exports = analyticsPage;


// поиск елементов в консоле : $('canvas') - $$('canvas') - $('canvas').length;
// #app > div > div > div > div.cvo-layout__page-viewport > div > div.react-grid-layout > div:nth-child(7) > div
// сделать: переделать добавление виджета + сделать редактирование виджета