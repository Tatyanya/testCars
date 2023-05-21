

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get stockType () {
        return $('select#make-model-search-stocktype');
    }

    get makesType () {
        return $('#makes');
    }

    get modelsType () {
        return $('#models');
    }

    get price(){
        return $('#make-model-max-price');
    }

    get distance(){
        return $('#make-model-maximum-distance');
    }

    get zipCodeInp(){
        return $('#make-model-zip');
    }
    
    get searchBtn(){
        return $('button.sds-button[data-searchtype=make]');
    }
    

    /**
     * a method to encapsule automation code to interact with the page
     */
    async selectStockType (text) {
       await this.stockType.selectByVisibleText(text)
    }

    async selectMakesType (text) {
        await this.makesType.selectByVisibleText(text)
     }
     async selectModelsType (text) {
        await this.modelsType.selectByVisibleText(text)
     }
  
     async selectPriceByValueType (text) {
        await this.price.selectByAttribute('value', text)
     }

     async selectDistanceType (text) {
        await this.distance.selectByVisibleText(text)
     }

     async enterZipCode (text) {
        await this.zipCodeInp.setValue(text)
     }
  
     async clickSearch () {
        await this.searchBtn.click()
     }

 async isStockWithValueSelected(text){


    await expect(await this.stockType.$('option:checked')).toHaveText(text);

  }


    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('cars');
    }
}

module.exports = new HomePage();
