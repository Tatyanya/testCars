

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CarsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get stockType () {
        return $('select#stock-type-select');
    }

    get zipCodeInp(){
        return $('#zip-input');
    }

    get carTile(){
        return $$('#vehicle-cards-container>.vehicle-card');
    }
 
    async selectStockType (text) {
        await this.stockType.selectByVisibleText(text)
     }

     async isStockWithValueSelected(text){
    
        await expect(await this.stockType.$('option:checked')).toHaveText(text);
    
      }

      async selectCarByIndex (int) {
        // use minus 1 because first element of array have index 0 
        await this.carTile[int-1].$('a.vehicle-card-link').click()
     }

}

module.exports = new CarsPage();
