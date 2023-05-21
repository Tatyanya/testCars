

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CarDetailsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get firstNameInput () {
        return $('input#first_name');
    }

    get lastNameInput(){
        return $('#last_name');
    }

    get emailInput(){
        return $('#email');
    }
 
    async enterFirstName (text) {
        await this.firstNameInput.setValue(text)
     }

     async enterLastName (text) {
        await this.lastNameInput.setValue(text)
     }
     async enterEmail (text) {
        await this.emailInput.setValue(text)
     }

}

module.exports = new CarDetailsPage();
