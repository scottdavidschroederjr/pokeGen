//const puppeteer = require('puppeteer');

async function run() {
    const browser = await puppeteer.launch({
      headless: 'new',
    });
    const page = await browser.newPage();
    await page.goto('https://www.smogon.com/dex/sv/pokemon/glastrier/');
  
  
    //pulls what formats mon is used in 
    //TODO some pages have TWO values (mega rayqa), pull the higher
    const htmlContent = await page.$eval('.FormatList', el => el.innerText);
  
  
    console.log(htmlContent);
  
    await browser.close();
  }
  
  run();