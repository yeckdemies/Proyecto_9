const puppeteer = require('puppeteer');
const fs = require('fs');

const productsArray = [];

const scrapper = async (url) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1024 });

  await page.goto(url);
  await repeat(page, browser);

  write(productsArray);
};

const repeat = async (page, browser) => {
  const arrayDivs = await page.$$('.item');

  for (const productDiv of arrayDivs) {
    let price;
    let title = await productDiv.$eval('.title', (el) => el.textContent.trim());
    let img = await productDiv.$eval('img', (el) => el.src);

    try {
      price = await productDiv.$eval('.precio', (el) =>
        parseFloat(el.textContent.slice(0, el.textContent.length - 1))
      );
      const product = {
        title,
        price,
        img
      };
      productsArray.push(product);
    } catch (error) {
      console.log('Product without price');
    }
  }

  try {
    const nextPageButton = await page.$('.paginador a i.fa-chevron-right');

    if (nextPageButton) {
      const nextPageHref = await page.$eval(
        '.paginador a i.fa-chevron-right',
        (el) => el.parentElement.href
      );

      console.log(`Next page: ${nextPageHref}`);
      await page.goto(nextPageHref);
      await repeat(page, browser);
    } else {
      console.log('Finish. No more pages.');
      await browser.close();
    }
  } catch (error) {
    console.log('Error next page:', error);
    await browser.close();
  }
};

const write = (productsArray) => {
  fs.writeFile('products.json', JSON.stringify(productsArray, null, 2), () => {
    console.log('File created');
  });
};

module.exports = { scrapper };
