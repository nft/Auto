const loginPage = require("../Pages/login.js");
const dashboardPage = require("../Pages/dashboard.js");
const analyticsPage = require("../Pages/analytics.js");
const commonMethods = require("../Helper/commonMethods.js");
const config = require("../Helper/config.js");
const expect = require("chai").expect; // из всего чай берем только expect

describe('Analytics widgets adding', function() {
    before('login to CVOP as developer and open Login page', function(){
        loginPage.loginToCVOP(config.developerUser_userName, config.developerUser_userPasswd);
        dashboardPage.canvas.waitForExist(5000);
        analyticsPage.open(); // url
        commonMethods.wait(3000);
        
    });

    afterEach('refresh pageafter test is completed', function() {
        browser.refresh();
        analyticsPage.pageHeader.waitForExist(5000);        
    });

    it.skip('campaign analytics widget', function() {
        let dashboardWidgetCountBefore = commonMethods.elementsCount(".widget"); 
        console.log("Number of widgets is " + dashboardWidgetCountBefore);
        let dimensions = ["Rule status"];
        let measures = ["Opened notifications"];

//for (var i = 0; i < 15; i++) {
        analyticsPage.newWidgetButton.click();
        analyticsPage.modalWindowHeader.waitForExist(5000);
        analyticsPage.widgetTitleInput.setValue("Auto Test");
        analyticsPage.chooseDataSource("Campaign analytics");
        commonMethods.wait(3000);  
       analyticsPage.chooseChartType("Bar chart");
        analyticsPage.chooseTimeRange("Yesterday");
        commonMethods.wait(1000);  
        analyticsPage.chooseDimensions(dimensions); //
        commonMethods.wait(1000);  
      //  commonMethods.changeFocus(analyticsPage.modalWindowHeader);
        analyticsPage.chooseMesures(measures);
      //  commonMethods.wait(1000);  
     //   commonMethods.changeFocus(analyticsPage.modalWindowHeader);
     // analyticsPage.rowLimitChange(1000);        
        analyticsPage.addButton.click();
        commonMethods.wait(2000);

        let dashboardWidgetCountAfter = commonMethods.elementsCount(".widget");
        console.log("Number of widgets is " + dashboardWidgetCountAfter);

        expect(dashboardWidgetCountAfter).to.be.equal(dashboardWidgetCountBefore + 1);
        expect(analyticsPage.isWidgetAdded('Auto Test')).to.be.equal(true);
//};   
    });

    it('Widget delition', function(){
        let dashboardWidgetCountBefore = commonMethods.elementsCount(".widget"); 

        analyticsPage.clickOnWidgetHiddenButton('Auto Test');
        commonMethods.wait(3000);  
        analyticsPage.chooseWidgetOption('Auto Test', 'Delete');
        commonMethods.wait(3000);
        // analyticsPage.deleteWidgetAction('Yes, delete');
        // commonMethods.wait(3000);

        // let dashboardWidgetCountAfter = commonMethods.elementsCount(".widget");
        // console.log("Number of widgets is " + dashboardWidgetCountAfter);

        // expect(dashboardWidgetCountAfter).to.be.equal(dashboardWidgetCountBefore - 1);
        // expect(analyticsPage.isWidgetAdded('Auto Test')).to.be.equal(true);

    });

});