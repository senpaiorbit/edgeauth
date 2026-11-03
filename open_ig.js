const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/accounts/signup/email/');
  // Keep browser open
  await page.waitForTimeout(60000);
  await browser.close();
})();
