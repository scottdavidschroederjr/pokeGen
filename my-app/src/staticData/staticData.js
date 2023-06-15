//https://pokeapi.co/api/v2/generation/
//https://www.smogon.com/stats/2023-05/

const puppeteer = require('puppeteer');

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


const tierValue = {
  "AG" : 0,
  "Uber": 1,
  "OU": 2,
  "UUBL": 3,
  "UU": 4,
  "RUBL": 5,
  "RU": 6,
  "NUBL": 7,
  "NU": 8,
  "PUBL": 9,
  "PU": 10,
  "Untiered": 11
}



const pokemonData = [
  {
    "name": "bulbasaur",
    "generation": 1
  },
  {
    "name": "charmander",
    "generation": 1
  },
  {
    "name": "squirtle",
    "generation": 1
  },
  {
    "name": "caterpie",
    "generation": 1
  },
  {
    "name": "weedle",
    "generation": 1
  },
  {
    "name": "pidgey",
    "generation": 1
  },
  {
    "name": "rattata",
    "generation": 1
  },
  {
    "name": "spearow",
    "generation": 1
  },
  {
    "name": "ekans",
    "generation": 1
  },
  {
    "name": "sandshrew",
    "generation": 1
  },
  {
    "name": "nidoran-f",
    "generation": 1
  },
  {
    "name": "nidoran-m",
    "generation": 1
  },
  {
    "name": "vulpix",
    "generation": 1
  },
  {
    "name": "zubat",
    "generation": 1
  },
  {
    "name": "oddish",
    "generation": 1
  },
  {
    "name": "paras",
    "generation": 1
  },
  {
    "name": "venonat",
    "generation": 1
  },
  {
    "name": "diglett",
    "generation": 1
  },
  {
    "name": "meowth",
    "generation": 1
  },
  {
    "name": "psyduck",
    "generation": 1
  },
  {
    "name": "mankey",
    "generation": 1
  },
  {
    "name": "growlithe",
    "generation": 1
  },
  {
    "name": "poliwag",
    "generation": 1
  },
  {
    "name": "abra",
    "generation": 1
  },
  {
    "name": "machop",
    "generation": 1
  },
  {
    "name": "bellsprout",
    "generation": 1
  },
  {
    "name": "tentacool",
    "generation": 1
  },
  {
    "name": "geodude",
    "generation": 1
  },
  {
    "name": "ponyta",
    "generation": 1
  },
  {
    "name": "slowpoke",
    "generation": 1
  },
  {
    "name": "magnemite",
    "generation": 1
  },
  {
    "name": "farfetchd",
    "generation": 1
  },
  {
    "name": "doduo",
    "generation": 1
  },
  {
    "name": "seel",
    "generation": 1
  },
  {
    "name": "grimer",
    "generation": 1
  },
  {
    "name": "shellder",
    "generation": 1
  },
  {
    "name": "gastly",
    "generation": 1
  },
  {
    "name": "onix",
    "generation": 1
  },
  {
    "name": "drowzee",
    "generation": 1
  },
  {
    "name": "krabby",
    "generation": 1
  },
  {
    "name": "voltorb",
    "generation": 1
  },
  {
    "name": "exeggcute",
    "generation": 1
  },
  {
    "name": "cubone",
    "generation": 1
  },
  {
    "name": "lickitung",
    "generation": 1
  },
  {
    "name": "koffing",
    "generation": 1
  },
  {
    "name": "rhyhorn",
    "generation": 1
  },
  {
    "name": "tangela",
    "generation": 1
  },
  {
    "name": "kangaskhan",
    "generation": 1
  },
  {
    "name": "horsea",
    "generation": 1
  },
  {
    "name": "goldeen",
    "generation": 1
  },
  {
    "name": "staryu",
    "generation": 1
  },
  {
    "name": "scyther",
    "generation": 1
  },
  {
    "name": "pinsir",
    "generation": 1
  },
  {
    "name": "tauros",
    "generation": 1
  },
  {
    "name": "magikarp",
    "generation": 1
  },
  {
    "name": "lapras",
    "generation": 1
  },
  {
    "name": "ditto",
    "generation": 1
  },
  {
    "name": "eevee",
    "generation": 1
  },
  {
    "name": "porygon",
    "generation": 1
  },
  {
    "name": "omanyte",
    "generation": 1
  },
  {
    "name": "kabuto",
    "generation": 1
  },
  {
    "name": "aerodactyl",
    "generation": 1
  },
  {
    "name": "articuno",
    "generation": 1
  },
  {
    "name": "zapdos",
    "generation": 1
  },
  {
    "name": "moltres",
    "generation": 1
  },
  {
    "name": "dratini",
    "generation": 1
  },
  {
    "name": "mewtwo",
    "generation": 1
  },
  {
    "name": "mew",
    "generation": 1
  },
  {
    "name": "ivysaur",
    "generation": 1
  },
  {
    "name": "venusaur",
    "generation": 1
  },
  {
    "name": "charmeleon",
    "generation": 1
  },
  {
    "name": "charizard",
    "generation": 1
  },
  {
    "name": "wartortle",
    "generation": 1
  },
  {
    "name": "blastoise",
    "generation": 1
  },
  {
    "name": "metapod",
    "generation": 1
  },
  {
    "name": "butterfree",
    "generation": 1
  },
  {
    "name": "kakuna",
    "generation": 1
  },
  {
    "name": "beedrill",
    "generation": 1
  },
  {
    "name": "pidgeotto",
    "generation": 1
  },
  {
    "name": "pidgeot",
    "generation": 1
  },
  {
    "name": "raticate",
    "generation": 1
  },
  {
    "name": "fearow",
    "generation": 1
  },
  {
    "name": "arbok",
    "generation": 1
  },
  {
    "name": "pikachu",
    "generation": 1
  },
  {
    "name": "raichu",
    "generation": 1
  },
  {
    "name": "sandslash",
    "generation": 1
  },
  {
    "name": "nidorina",
    "generation": 1
  },
  {
    "name": "nidoqueen",
    "generation": 1
  },
  {
    "name": "nidorino",
    "generation": 1
  },
  {
    "name": "nidoking",
    "generation": 1
  },
  {
    "name": "clefairy",
    "generation": 1
  },
  {
    "name": "clefable",
    "generation": 1
  },
  {
    "name": "ninetales",
    "generation": 1
  },
  {
    "name": "jigglypuff",
    "generation": 1
  },
  {
    "name": "wigglytuff",
    "generation": 1
  },
  {
    "name": "golbat",
    "generation": 1
  },
  {
    "name": "gloom",
    "generation": 1
  },
  {
    "name": "vileplume",
    "generation": 1
  },
  {
    "name": "parasect",
    "generation": 1
  },
  {
    "name": "venomoth",
    "generation": 1
  },
  {
    "name": "dugtrio",
    "generation": 1
  },
  {
    "name": "persian",
    "generation": 1
  },
  {
    "name": "golduck",
    "generation": 1
  },
  {
    "name": "primeape",
    "generation": 1
  },
  {
    "name": "arcanine",
    "generation": 1
  },
  {
    "name": "poliwhirl",
    "generation": 1
  },
  {
    "name": "poliwrath",
    "generation": 1
  },
  {
    "name": "kadabra",
    "generation": 1
  },
  {
    "name": "alakazam",
    "generation": 1
  },
  {
    "name": "machoke",
    "generation": 1
  },
  {
    "name": "machamp",
    "generation": 1
  },
  {
    "name": "weepinbell",
    "generation": 1
  },
  {
    "name": "victreebel",
    "generation": 1
  },
  {
    "name": "tentacruel",
    "generation": 1
  },
  {
    "name": "graveler",
    "generation": 1
  },
  {
    "name": "golem",
    "generation": 1
  },
  {
    "name": "rapidash",
    "generation": 1
  },
  {
    "name": "slowbro",
    "generation": 1
  },
  {
    "name": "magneton",
    "generation": 1
  },
  {
    "name": "dodrio",
    "generation": 1
  },
  {
    "name": "dewgong",
    "generation": 1
  },
  {
    "name": "muk",
    "generation": 1
  },
  {
    "name": "cloyster",
    "generation": 1
  },
  {
    "name": "haunter",
    "generation": 1
  },
  {
    "name": "gengar",
    "generation": 1
  },
  {
    "name": "hypno",
    "generation": 1
  },
  {
    "name": "kingler",
    "generation": 1
  },
  {
    "name": "electrode",
    "generation": 1
  },
  {
    "name": "exeggutor",
    "generation": 1
  },
  {
    "name": "marowak",
    "generation": 1
  },
  {
    "name": "hitmonlee",
    "generation": 1
  },
  {
    "name": "hitmonchan",
    "generation": 1
  },
  {
    "name": "weezing",
    "generation": 1
  },
  {
    "name": "rhydon",
    "generation": 1
  },
  {
    "name": "chansey",
    "generation": 1
  },
  {
    "name": "seadra",
    "generation": 1
  },
  {
    "name": "seaking",
    "generation": 1
  },
  {
    "name": "starmie",
    "generation": 1
  },
  {
    "name": "mr-mime",
    "generation": 1
  },
  {
    "name": "jynx",
    "generation": 1
  },
  {
    "name": "electabuzz",
    "generation": 1
  },
  {
    "name": "magmar",
    "generation": 1
  },
  {
    "name": "gyarados",
    "generation": 1
  },
  {
    "name": "vaporeon",
    "generation": 1
  },
  {
    "name": "jolteon",
    "generation": 1
  },
  {
    "name": "flareon",
    "generation": 1
  },
  {
    "name": "omastar",
    "generation": 1
  },
  {
    "name": "kabutops",
    "generation": 1
  },
  {
    "name": "snorlax",
    "generation": 1
  },
  {
    "name": "dragonair",
    "generation": 1
  },
  {
    "name": "dragonite",
    "generation": 1
  },
    {
      "name": "chikorita",
      "generation": 2
    },
    {
      "name": "cyndaquil",
      "generation": 2
    },
    {
      "name": "totodile",
      "generation": 2
    },
    {
      "name": "sentret",
      "generation": 2
    },
    {
      "name": "hoothoot",
      "generation": 2
    },
    {
      "name": "ledyba",
      "generation": 2
    },
    {
      "name": "spinarak",
      "generation": 2
    },
    {
      "name": "chinchou",
      "generation": 2
    },
    {
      "name": "pichu",
      "generation": 2
    },
    {
      "name": "cleffa",
      "generation": 2
    },
    {
      "name": "igglybuff",
      "generation": 2
    },
    {
      "name": "togepi",
      "generation": 2
    },
    {
      "name": "natu",
      "generation": 2
    },
    {
      "name": "mareep",
      "generation": 2
    },
    {
      "name": "hoppip",
      "generation": 2
    },
    {
      "name": "aipom",
      "generation": 2
    },
    {
      "name": "sunkern",
      "generation": 2
    },
    {
      "name": "yanma",
      "generation": 2
    },
    {
      "name": "wooper",
      "generation": 2
    },
    {
      "name": "murkrow",
      "generation": 2
    },
    {
      "name": "misdreavus",
      "generation": 2
    },
    {
      "name": "unown",
      "generation": 2
    },
    {
      "name": "girafarig",
      "generation": 2
    },
    {
      "name": "pineco",
      "generation": 2
    },
    {
      "name": "dunsparce",
      "generation": 2
    },
    {
      "name": "gligar",
      "generation": 2
    },
    {
      "name": "snubbull",
      "generation": 2
    },
    {
      "name": "qwilfish",
      "generation": 2
    },
    {
      "name": "shuckle",
      "generation": 2
    },
    {
      "name": "heracross",
      "generation": 2
    },
    {
      "name": "sneasel",
      "generation": 2
    },
    {
      "name": "teddiursa",
      "generation": 2
    },
    {
      "name": "slugma",
      "generation": 2
    },
    {
      "name": "swinub",
      "generation": 2
    },
    {
      "name": "corsola",
      "generation": 2
    },
    {
      "name": "remoraid",
      "generation": 2
    },
    {
      "name": "delibird",
      "generation": 2
    },
    {
      "name": "skarmory",
      "generation": 2
    },
    {
      "name": "houndour",
      "generation": 2
    },
    {
      "name": "phanpy",
      "generation": 2
    },
    {
      "name": "stantler",
      "generation": 2
    },
    {
      "name": "smeargle",
      "generation": 2
    },
    {
      "name": "tyrogue",
      "generation": 2
    },
    {
      "name": "smoochum",
      "generation": 2
    },
    {
      "name": "elekid",
      "generation": 2
    },
    {
      "name": "magby",
      "generation": 2
    },
    {
      "name": "miltank",
      "generation": 2
    },
    {
      "name": "raikou",
      "generation": 2
    },
    {
      "name": "entei",
      "generation": 2
    },
    {
      "name": "suicune",
      "generation": 2
    },
    {
      "name": "larvitar",
      "generation": 2
    },
    {
      "name": "lugia",
      "generation": 2
    },
    {
      "name": "ho-oh",
      "generation": 2
    },
    {
      "name": "celebi",
      "generation": 2
    },
    {
      "name": "bayleef",
      "generation": 2
    },
    {
      "name": "meganium",
      "generation": 2
    },
    {
      "name": "quilava",
      "generation": 2
    },
    {
      "name": "typhlosion",
      "generation": 2
    },
    {
      "name": "croconaw",
      "generation": 2
    },
    {
      "name": "feraligatr",
      "generation": 2
    },
    {
      "name": "furret",
      "generation": 2
    },
    {
      "name": "noctowl",
      "generation": 2
    },
    {
      "name": "ledian",
      "generation": 2
    },
    {
      "name": "ariados",
      "generation": 2
    },
    {
      "name": "crobat",
      "generation": 2
    },
    {
      "name": "lanturn",
      "generation": 2
    },
    {
      "name": "togetic",
      "generation": 2
    },
    {
      "name": "xatu",
      "generation": 2
    },
    {
      "name": "flaaffy",
      "generation": 2
    },
    {
      "name": "ampharos",
      "generation": 2
    },
    {
      "name": "bellossom",
      "generation": 2
    },
    {
      "name": "marill",
      "generation": 2
    },
    {
      "name": "azumarill",
      "generation": 2
    },
    {
      "name": "sudowoodo",
      "generation": 2
    },
    {
      "name": "politoed",
      "generation": 2
    },
    {
      "name": "skiploom",
      "generation": 2
    },
    {
      "name": "jumpluff",
      "generation": 2
    },
    {
      "name": "sunflora",
      "generation": 2
    },
    {
      "name": "quagsire",
      "generation": 2
    },
    {
      "name": "espeon",
      "generation": 2
    },
    {
      "name": "umbreon",
      "generation": 2
    },
    {
      "name": "slowking",
      "generation": 2
    },
    {
      "name": "wobbuffet",
      "generation": 2
    },
    {
      "name": "forretress",
      "generation": 2
    },
    {
      "name": "steelix",
      "generation": 2
    },
    {
      "name": "granbull",
      "generation": 2
    },
    {
      "name": "scizor",
      "generation": 2
    },
    {
      "name": "ursaring",
      "generation": 2
    },
    {
      "name": "magcargo",
      "generation": 2
    },
    {
      "name": "piloswine",
      "generation": 2
    },
    {
      "name": "octillery",
      "generation": 2
    },
    {
      "name": "mantine",
      "generation": 2
    },
    {
      "name": "houndoom",
      "generation": 2
    },
    {
      "name": "kingdra",
      "generation": 2
    },
    {
      "name": "donphan",
      "generation": 2
    },
    {
      "name": "porygon2",
      "generation": 2
    },
    {
      "name": "hitmontop",
      "generation": 2
    },
    {
      "name": "blissey",
      "generation": 2
    },
    {
      "name": "pupitar",
      "generation": 2
    },
    {
      "name": "tyranitar",
      "generation": 2
    }

];





//this will get the generation of the mon from their name
console.log(pokemonData.filter(item => item.name === 'donphan').map(item => item.generation))