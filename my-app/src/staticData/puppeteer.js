const puppeteer = require('puppeteer');
const { generations } = require('./referenceData.js')
const { tierValue } = require('./referenceData.js')
const { pokedex } = require('./pokedex.js')


async function pullData(pokemon) {

    //creating object to store mon's data
    let pokemonData = {
        "name" : pokemon,
        "bestGeneration": "",
        "bestGenTier": "",
        "altBestGeneration": [],
        "originGen": 0,        
        "generationData": {
            "1": {
                "tier": "",
                "sprite": "https://www.smogon.com/dex/media/sprites/rb/" + [pokemon] + ".png",
                "page": ""
            },
            "2": {
                "tier": "",
                "sprite": "https://www.smogon.com/dex/media/sprites/c/" + [pokemon] + ".gif",
                "page": ""
            },
            "3": {
                "tier": "",
                "sprite": "https://www.smogon.com/dex/media/sprites/rs/" + [pokemon] + ".png",
                "page": ""
            },
            "4": {
                "tier": "",
                "sprite": "https://www.smogon.com/dex/media/sprites/dp/" + [pokemon] + ".png",
                "page": ""
            },
            "5": {
                "tier": "",
                "sprite": "https://www.smogon.com/dex/media/sprites/bw/" + [pokemon] + ".gif",
                "page": ""
            },
            "6": {
                "tier": "",
                "sprite": "https://www.smogon.com/dex/media/sprites/xy/" + [pokemon] + ".gif",
                "page": ""
            },
            "7": {
                "tier": "",
                "sprite": "https://www.smogon.com/dex/media/sprites/xy/" + [pokemon] + ".gif",
                "page": ""
            },
            "8": {
                "tier": "",
                "sprite": "https://www.smogon.com/dex/media/sprites/xy/" + [pokemon] + ".gif",
                "page": ""
            },
            "9": {
                "tier": "",
                "sprite": "https://www.smogon.com/dex/media/sprites/xy/" + [pokemon] + ".gif",
                "page": ""
            }
        }

    }

    //gets proper origin gen from dex
    pokemonData["originGen"] = pokedex[pokemon]

    //getting data for every generation
    for (let x = pokemonData["originGen"]; x < 10; x++) {

    //requesting site
        const browser = await puppeteer.launch({
            headless: 'new',
          });
        const page = await browser.newPage();
        var requestUrl = "https://www.smogon.com/dex/" + generations[x] + "/pokemon/" + pokemon
        await page.goto(requestUrl)

    //saves URL of info page
        pokemonData["generationData"][x]["page"] = requestUrl

    //pulls what formats mon is used //TODO some pages have TWO values (mega rayqa), pull the higher
        pokemonData["generationData"][x]["tier"] = await page.$eval('.FormatList', el => el.innerText)

    //updates best gen data
        if (tierValue[pokemonData["generationData"][x]["tier"]] < tierValue[pokemonData["bestGenTier"]] || pokemonData["bestGeneration"] === "") {
            pokemonData["bestGeneration"] = x
            pokemonData["bestGenTier"] = pokemonData["generationData"][x]["tier"]
            pokemonData["altBestGeneration"] = []
        } else if (tierValue[pokemonData["generationData"][x]["tier"]] === tierValue[pokemonData["bestGenTier"]]) {
            pokemonData["altBestGeneration"].push(x)
        }

    //closes site request before loop
        await browser.close();
        
    }
    console.log(pokemonData["bestGeneration"])
    return pokemonData
  }
  
module.exports = { pullData };