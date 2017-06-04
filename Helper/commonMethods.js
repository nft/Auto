let commonMethods = {
    changeFocus: function(elem) {
        elem.click();
    },
    wait: function(milSec) {
        browser.pause(milSec);
    },
    elementsCount: function(selector) {
        let elements = browser.elements(selector); // возвращает объект 
        return elements.value.length; // с помощью value из объекта делаем массив и узнаем его длину
    }
};

module.exports = commonMethods;