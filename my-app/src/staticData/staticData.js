//https://pokeapi.co/api/v2/generation/

const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch({
    headless: 'new',
  });
  const page = await browser.newPage();
  await page.goto('https://www.smogon.com/dex/sv/pokemon/aerodactyl/');


  //pulls what formats mon is used in 
  const htmlContent = await page.$eval('.PokemonPage-StrategySelector', el => el.innerText);

  console.log(htmlContent);

  await browser.close();
}

run();
