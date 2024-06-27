// username = process.env.BROWSERSTACK_USERNAME
// accessKey = process.env.BROWSERSTACK_ACCESS_KEY
// var buildName = process.env.BROWSERSTACK_BUILD_NAME;
// browserstackLocal = process.env.BROWSERSTACK_LOCAL
// browserstackLocalIdentifier = process.env.BROWSERSTACK_LOCAL_IDENTIFIER
  
// var capabilities = {
//  "os" : "os x",
//  "browser" : "playwright-firefox",
//  	"build" : buildName, // CI/CD job name using BROWSERSTACK_BUILD_NAME env variable
//  "browserstack.local" : browserstackLocal,
//  "browserstack.localIdentifier" : browserstackLocalIdentifier,
//  "browserstack.user" : username,
//  "browserstack.key" : accessKey
// }

const { expect, test } = require('@playwright/test');
const { chromium } = require('playwright');
const percySnapshot = require('@percy/playwright');

test('BStackDemo test checkout flow', async ({ page }) => {
  // visit the site
  await page.goto('https://bstackdemo.com/');

  // sign in
  await page.click('#signin', { delay: 100 });
  await page.fill('#react-select-2-input', 'fav_user');
  await page.press('#react-select-2-input', 'Enter');
  await page.fill('#react-select-3-input', 'testingisfun99');
  await page.press('#react-select-3-input', 'Enter');
  await page.click('#login-btn');
  await percySnapshot(page, 'Example Site');
  // await page.waitForNavigation();

  // click on buy item
  await page.click('#\\31 > .shelf-item__buy-btn');
  await page.click('div.float-cart__close-btn');
  await page.click('#\\32 > .shelf-item__buy-btn');
  await page.click('.buy-btn');

  // add address details
  await page.fill('#firstNameInput', 'Parth');
  await page.fill('#lastNameInput', 'Barai');
  await page.fill('#addressLine1Input', 'B/22');
  await page.fill('#provinceInput', 'Mumbai');
  await page.fill('#postCodeInput', '400092ß');
  await percySnapshot(page, 'Checkout page');

  // checkout
  await page.click('#checkout-shipping-continue');
  await page.click('text=Continue');
  await page.click('text=Orders');

  const list = page.locator('.a-fixed-left-grid-inner');
  await expect(list).toHaveCount(2);
});
