/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
const userData = require('../data/user_data');

module.exports = class Page {
    /**
    * Opens a sub page of the page
    */
    open (page) {
        // const environment = browser.config.params.env;

        return browser.url(userData.urls[page])
    }

    isSelected(){}
}
