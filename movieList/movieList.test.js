import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/exercises/automation/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Sould add a movie to the page', async () => {
    let searchBar = await driver.findElement(By.name('input'))
    await searchBar.sendKeys('Tommy boy')
    await driver.sleep(3000)
    let button = await driver.findElement(By.name('button'))
    await button.click()
     await driver.sleep(3000)
})