const puppeteer = require('puppeteer');
const { tierValue } = require('./referenceData.js')
const { generations } = require('./referenceData.js')
const { pokedex } = require('./pokedex.js')

async function pullData(pokemon) {

    //TODO originGen needs to be set by input
    let pokemonData = {
        "name" : pokemon,
        "bestGeneration": "",
        "altBestGeneration": [],
        "originGen": 1,        
        "generationData": {
            "1": {
                "tier": "",
                "page": ""
            },
            "2": {
                "tier": "",
                "page": ""
            },
            "3": {
                "tier": "",
                "page": ""
            },
            "4": {
                "tier": "",
                "page": ""
            },
            "5": {
                "tier": "",
                "page": ""
            },
            "6": {
                "tier": "",
                "page": ""
            },
            "7": {
                "tier": "",
                "page": ""
            },
            "8": {
                "tier": "",
                "page": ""
            },
            "9": {
                "tier": "",
                "page": ""
            }
        }

    }

    for (let x = pokemonData["originGen"]; x < 10; x++) {

    //request site for each generation the mon has existed
        const browser = await puppeteer.launch({
            headless: 'new',
          });
        const page = await browser.newPage();
        var requestUrl = "https://www.smogon.com/dex/" + generations[x] + "/pokemon/" + pokemon
        await page.goto(requestUrl)

    //saves URL of info page
        pokemonData["generationData"][x]["page"] = requestUrl

    //saves image of pokemon    

    //pulls what formats mon is used //TODO some pages have TWO values (mega rayqa), pull the higher
        pokemonData["generationData"][x]["tier"] = await page.$eval('.FormatList', el => el.innerText)

    //TODO adjusts value for best gen (& wipes alt array) and adds to best gen array if tie


    //closes site request before loop
        await browser.close();
    }

  }
  
pullData("raichu");
