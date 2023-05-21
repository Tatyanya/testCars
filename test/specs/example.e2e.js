const HomePage = require('../pageobjects/home.page')
const CarsPage = require('../pageobjects/cars.page')
const CarDetailsPage = require('../pageobjects/carDetails.page');

const carsData = require('../data/cars_data');
const car = carsData.car1;
const user = carsData.userDetail;


describe('cars tests', () => {
    it('search to car', async () => {

        await HomePage.open()

        await HomePage.selectStockType(car.stockUsed);
        await HomePage.selectMakesType(car.make);
        await HomePage.isStockWithValueSelected(car.stockUsed)

        await HomePage.selectModelsType(car.model);
        await HomePage.selectPriceByValueType(car.priceValue);
        await HomePage.selectDistanceType(car.distance);
        await HomePage.enterZipCode(car.zip);
        await HomePage.clickSearch();

    })

    it('change filter', async () => {
        // Validate using assertion that the `New` filter is displayed and `Used` is NOT displayed
        await CarsPage.selectStockType(car.stockNew);

        // change focus
        await CarsPage.zipCodeInp.click();
        await CarsPage.isStockWithValueSelected(car.stockNew);
    })

    it('open car', async () => {
        // Select the second available car
        await CarsPage.selectCarByIndex(2);
        // In the Contact Seller section enter:
        await CarDetailsPage.enterFirstName(user.firstName)
        await CarDetailsPage.enterLastName(user.lastName)
        await CarDetailsPage.enterEmail(user.email)


        await expect(await CarDetailsPage.firstNameInput).toHaveValue(user.firstName, { ignoreCase: true })
        await expect(await CarDetailsPage.lastNameInput).toHaveValue(user.lastName, { ignoreCase: true })
        await expect(await CarDetailsPage.emailInput).toHaveValue(user.email, { ignoreCase: true })


    })
})

