//TODO there are dups in here, clean them up even though it won't effect its use
const pokedex = [
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
    },
    {
      "name": "treecko",
      "generation": 3
    },
    {
      "name": "torchic",
      "generation": 3
    },
    {
      "name": "mudkip",
      "generation": 3
    },
    {
      "name": "poochyena",
      "generation": 3
    },
    {
      "name": "zigzagoon",
      "generation": 3
    },
    {
      "name": "wurmple",
      "generation": 3
    },
    {
      "name": "lotad",
      "generation": 3
    },
    {
      "name": "seedot",
      "generation": 3
    },
    {
      "name": "taillow",
      "generation": 3
    },
    {
      "name": "wingull",
      "generation": 3
    },
    {
      "name": "ralts",
      "generation": 3
    },
    {
      "name": "surskit",
      "generation": 3
    },
    {
      "name": "shroomish",
      "generation": 3
    },
    {
      "name": "slakoth",
      "generation": 3
    },
    {
      "name": "nincada",
      "generation": 3
    },
    {
      "name": "whismur",
      "generation": 3
    },
    {
      "name": "makuhita",
      "generation": 3
    },
    {
      "name": "azurill",
      "generation": 3
    },
    {
      "name": "nosepass",
      "generation": 3
    },
    {
      "name": "skitty",
      "generation": 3
    },
    {
      "name": "sableye",
      "generation": 3
    },
    {
      "name": "mawile",
      "generation": 3
    },
    {
      "name": "aron",
      "generation": 3
    },
    {
      "name": "meditite",
      "generation": 3
    },
    {
      "name": "electrike",
      "generation": 3
    },
    {
      "name": "plusle",
      "generation": 3
    },
    {
      "name": "minun",
      "generation": 3
    },
  {
    "name": "volbeat",
    "generation": 3
  },
  {
    "name": "illumise",
    "generation": 3
  },
  {
    "name": "gulpin",
    "generation": 3
  },
  {
    "name": "carvanha",
    "generation": 3
  },
  {
    "name": "wailmer",
    "generation": 3
  },
  {
    "name": "numel",
    "generation": 3
  },
  {
    "name": "torkoal",
    "generation": 3
  },
  {
    "name": "spoink",
    "generation": 3
  },
  {
    "name": "spinda",
    "generation": 3
  },
  {
    "name": "trapinch",
    "generation": 3
  },
  {
    "name": "cacnea",
    "generation": 3
  },
  {
    "name": "swablu",
    "generation": 3
  },
  {
    "name": "zangoose",
    "generation": 3
  },
  {
    "name": "seviper",
    "generation": 3
  },
  {
    "name": "lunatone",
    "generation": 3
  },
  {
    "name": "solrock",
    "generation": 3
  },
  {
    "name": "barboach",
    "generation": 3
  },
  {
    "name": "corphish",
    "generation": 3
  },
  {
    "name": "baltoy",
    "generation": 3
  },
  {
    "name": "lileep",
    "generation": 3
  },
  {
    "name": "anorith",
    "generation": 3
  },
  {
    "name": "feebas",
    "generation": 3
  },
  {
    "name": "castform",
    "generation": 3
  },
  {
    "name": "volbeat",
    "generation": 3
  },
  {
    "name": "illumise",
    "generation": 3
  },
  {
    "name": "gulpin",
    "generation": 3
  },
  {
    "name": "carvanha",
    "generation": 3
  },
  {
    "name": "wailmer",
    "generation": 3
  },
  {
    "name": "numel",
    "generation": 3
  },
  {
    "name": "torkoal",
    "generation": 3
  },
  {
    "name": "spoink",
    "generation": 3
  },
  {
    "name": "spinda",
    "generation": 3
  },
  {
    "name": "trapinch",
    "generation": 3
  },
  {
    "name": "cacnea",
    "generation": 3
  },
  {
    "name": "swablu",
    "generation": 3
  },
  {
    "name": "zangoose",
    "generation": 3
  },
  {
    "name": "seviper",
    "generation": 3
  },
  {
    "name": "lunatone",
    "generation": 3
  },
  {
    "name": "solrock",
    "generation": 3
  },
  {
    "name": "barboach",
    "generation": 3
  },
  {
    "name": "corphish",
    "generation": 3
  },
  {
    "name": "baltoy",
    "generation": 3
  },
  {
    "name": "lileep",
    "generation": 3
  },
  {
    "name": "anorith",
    "generation": 3
  },
  {
    "name": "feebas",
    "generation": 3
  },
  {
    "name": "castform",
    "generation": 3
  },
  {
    "name": "kecleon",
    "generation": 3
  },
  {
    "name": "shuppet",
    "generation": 3
  },
  {
    "name": "duskull",
    "generation": 3
  },
  {
    "name": "tropius",
    "generation": 3
  },
  {
    "name": "absol",
    "generation": 3
  },
  {
    "name": "wynaut",
    "generation": 3
  },
  {
    "name": "snorunt",
    "generation": 3
  },
  {
    "name": "spheal",
    "generation": 3
  },
  {
    "name": "clamperl",
    "generation": 3
  },
  {
    "name": "relicanth",
    "generation": 3
  },
  {
    "name": "luvdisc",
    "generation": 3
  },
  {
    "name": "bagon",
    "generation": 3
  },
  {
    "name": "beldum",
    "generation": 3
  },
  {
    "name": "regirock",
    "generation": 3
  },
  {
    "name": "regice",
    "generation": 3
  },
  {
    "name": "registeel",
    "generation": 3
  },
  {
    "name": "latias",
    "generation": 3
  },
  {
    "name": "latios",
    "generation": 3
  },
  {
    "name": "kyogre",
    "generation": 3
  },
  {
    "name": "groudon",
    "generation": 3
  },
  {
    "name": "rayquaza",
    "generation": 3
  },
  {
    "name": "jirachi",
    "generation": 3
  },
  {
    "name": "deoxys",
    "generation": 3
  },
  {
    "name": "grovyle",
    "generation": 3
  },
  {
    "name": "sceptile",
    "generation": 3
  },
  {
    "name": "combusken",
    "generation": 3
  },
  {
    "name": "blaziken",
    "generation": 3
  },
  {
    "name": "marshtomp",
    "generation": 3
  },
  {
    "name": "swampert",
    "generation": 3
  },
  {
    "name": "mightyena",
    "generation": 3
  },
  {
    "name": "linoone",
    "generation": 3
  },
  {
    "name": "silcoon",
    "generation": 3
  },
  {
    "name": "beautifly",
    "generation": 3
  },
  {
    "name": "cascoon",
    "generation": 3
  },
  {
    "name": "dustox",
    "generation": 3
  },
  {
    "name": "lombre",
    "generation": 3
  },
  {
    "name": "ludicolo",
    "generation": 3
  },
  {
    "name": "nuzleaf",
    "generation": 3
  },
  {
    "name": "shiftry",
    "generation": 3
  },
  {
    "name": "swellow",
    "generation": 3
  },
  {
    "name": "pelipper",
    "generation": 3
  },
  {
    "name": "kirlia",
    "generation": 3
  },
  {
    "name": "gardevoir",
    "generation": 3
  },
  {
    "name": "masquerain",
    "generation": 3
  },
  {
    "name": "breloom",
    "generation": 3
  },
  {
    "name": "vigoroth",
    "generation": 3
  },
  {
    "name": "slaking",
    "generation": 3
  },
  {
    "name": "ninjask",
    "generation": 3
  },
  {
    "name": "shedinja",
    "generation": 3
  },
  {
    "name": "loudred",
    "generation": 3
  },
  {
    "name": "exploud",
    "generation": 3
  },
  {
    "name": "hariyama",
    "generation": 3
  },
  {
    "name": "delcatty",
    "generation": 3
  },
  {
    "name": "lairon",
    "generation": 3
  },
  {
    "name": "aggron",
    "generation": 3
  },
  {
    "name": "medicham",
    "generation": 3
  },
  {
    "name": "manectric",
    "generation": 3
  },
  {
    "name": "roselia",
    "generation": 3
  },
  {
    "name": "swalot",
    "generation": 3
  },
  {
    "name": "sharpedo",
    "generation": 3
  },
  {
    "name": "wailord",
    "generation": 3
  },
  {
    "name": "camerupt",
    "generation": 3
  },
  {
    "name": "grumpig",
    "generation": 3
  },
  {
    "name": "vibrava",
    "generation": 3
  },
  {
    "name": "flygon",
    "generation": 3
  },
  {
    "name": "cacturne",
    "generation": 3
  },
  {
    "name": "altaria",
    "generation": 3
  },
  {
    "name": "whiscash",
    "generation": 3
  },
  {
    "name": "crawdaunt",
    "generation": 3
  },
  {
    "name": "claydol",
    "generation": 3
  },
  {
    "name": "cradily",
    "generation": 3
  },
  {
    "name": "armaldo",
    "generation": 3
  },
  {
    "name": "milotic",
    "generation": 3
  },
  {
    "name": "banette",
    "generation": 3
  },
  {
    "name": "dusclops",
    "generation": 3
  },
  {
    "name": "chimecho",
    "generation": 3
  },
  {
    "name": "glalie",
    "generation": 3
  },
  {
    "name": "sealeo",
    "generation": 3
  },
  {
    "name": "walrein",
    "generation": 3
  },
  {
    "name": "huntail",
    "generation": 3
  },
  {
    "name": "gorebyss",
    "generation": 3
  },
  {
    "name": "shelgon",
    "generation": 3
  },
  {
    "name": "salamence",
    "generation": 3
  },
  {
    "name": "metang",
    "generation": 3
  },
  {
    "name": "metagross",
    "generation": 3
  },
  {
    "name": "turtwig",
    "generation": 4
  },
  {
    "name": "chimchar",
    "generation": 4
  },
  {
    "name": "piplup",
    "generation": 4
  },
  {
    "name": "starly",
    "generation": 4
  },
  {
    "name": "bidoof",
    "generation": 4
  },
  {
    "name": "kricketot",
    "generation": 4
  },
  {
    "name": "shinx",
    "generation": 4
  },
  {
    "name": "budew",
    "generation": 4
  },
  {
    "name": "cranidos",
    "generation": 4
  },
  {
    "name": "shieldon",
    "generation": 4
  },
  {
    "name": "burmy",
    "generation": 4
  },
  {
    "name": "combee",
    "generation": 4
  },
  {
    "name": "pachirisu",
    "generation": 4
  },
  {
    "name": "buizel",
    "generation": 4
  },
  {
    "name": "cherubi",
    "generation": 4
  },
  {
    "name": "shellos",
    "generation": 4
  },
  {
    "name": "drifloon",
    "generation": 4
  },
  {
    "name": "buneary",
    "generation": 4
  },
  {
    "name": "glameow",
    "generation": 4
  },
  {
    "name": "chingling",
    "generation": 4
  },
  {
    "name": "stunky",
    "generation": 4
  },
  {
    "name": "bronzor",
    "generation": 4
  },
  {
    "name": "bonsly",
    "generation": 4
  },
  {
    "name": "mime-jr",
    "generation": 4
  },
  {
    "name": "happiny",
    "generation": 4
  },
  {
    "name": "chatot",
    "generation": 4
  },
  {
    "name": "spiritomb",
    "generation": 4
  },
  {
    "name": "gible",
    "generation": 4
  },
  {
    "name": "munchlax",
    "generation": 4
  },
  {
    "name": "riolu",
    "generation": 4
  },
  {
    "name": "hippopotas",
    "generation": 4
  },
  {
    "name": "skorupi",
    "generation": 4
  },
  {
    "name": "croagunk",
    "generation": 4
  },
  {
    "name": "carnivine",
    "generation": 4
  },
  {
    "name": "finneon",
    "generation": 4
  },
  {
    "name": "mantyke",
    "generation": 4
  },
  {
    "name": "snover",
    "generation": 4
  },
  {
    "name": "rotom",
    "generation": 4
  },
  {
    "name": "uxie",
    "generation": 4
  },
  {
    "name": "mesprit",
    "generation": 4
  },
  {
    "name": "azelf",
    "generation": 4
  },
  {
    "name": "dialga",
    "generation": 4
  },
  {
    "name": "palkia",
    "generation": 4
  },
  {
    "name": "heatran",
    "generation": 4
  },
  {
    "name": "regigigas",
    "generation": 4
  },
  {
    "name": "giratina",
    "generation": 4
  },
  {
    "name": "cresselia",
    "generation": 4
  },
  {
    "name": "phione",
    "generation": 4
  },
  {
    "name": "manaphy",
    "generation": 4
  },
  {
    "name": "darkrai",
    "generation": 4
  },
  {
    "name": "shaymin",
    "generation": 4
  },
  {
    "name": "arceus",
    "generation": 4
  },
  {
    "name": "grotle",
    "generation": 4
  },
  {
    "name": "torterra",
    "generation": 4
  },
  {
    "name": "monferno",
    "generation": 4
  },
  {
    "name": "infernape",
    "generation": 4
  },
  {
    "name": "prinplup",
    "generation": 4
  },
  {
    "name": "empoleon",
    "generation": 4
  },
  {
    "name": "staravia",
    "generation": 4
  },
  {
    "name": "staraptor",
    "generation": 4
  },
  {
    "name": "bibarel",
    "generation": 4
  },
  {
    "name": "kricketune",
    "generation": 4
  },
  {
    "name": "luxio",
    "generation": 4
  },
  {
    "name": "luxray",
    "generation": 4
  },
  {
    "name": "roserade",
    "generation": 4
  },
  {
    "name": "rampardos",
    "generation": 4
  },
  {
    "name": "bastiodon",
    "generation": 4
  },
  {
    "name": "wormadam",
    "generation": 4
  },
  {
    "name": "mothim",
    "generation": 4
  },
  {
    "name": "vespiquen",
    "generation": 4
  },
  {
    "name": "floatzel",
    "generation": 4
  },
  {
    "name": "cherrim",
    "generation": 4
  },
  {
    "name": "gastrodon",
    "generation": 4
  },
  {
    "name": "ambipom",
    "generation": 4
  },
  {
    "name": "drifblim",
    "generation": 4
  },
  {
    "name": "lopunny",
    "generation": 4
  },
  {
    "name": "mismagius",
    "generation": 4
  },
  {
    "name": "honchkrow",
    "generation": 4
  },
  {
    "name": "purugly",
    "generation": 4
  },
  {
    "name": "skuntank",
    "generation": 4
  },
  {
    "name": "bronzong",
    "generation": 4
  },
  {
    "name": "gabite",
    "generation": 4
  },
  {
    "name": "garchomp",
    "generation": 4
  },
  {
    "name": "lucario",
    "generation": 4
  },
  {
    "name": "hippowdon",
    "generation": 4
  },
  {
    "name": "drapion",
    "generation": 4
  },
  {
    "name": "toxicroak",
    "generation": 4
  },
  {
    "name": "lumineon",
    "generation": 4
  },
  {
    "name": "abomasnow",
    "generation": 4
  },
  {
    "name": "weavile",
    "generation": 4
  },
  {
    "name": "magnezone",
    "generation": 4
  },
  {
    "name": "lickilicky",
    "generation": 4
  },
  {
    "name": "rhyperior",
    "generation": 4
  },
  {
    "name": "tangrowth",
    "generation": 4
  },
  {
    "name": "electivire",
    "generation": 4
  },
  {
    "name": "magmortar",
    "generation": 4
  },
  {
    "name": "togekiss",
    "generation": 4
  },
  {
    "name": "yanmega",
    "generation": 4
  },
  {
    "name": "leafeon",
    "generation": 4
  },
  {
    "name": "glaceon",
    "generation": 4
  },
  {
    "name": "gliscor",
    "generation": 4
  },
  {
    "name": "mamoswine",
    "generation": 4
  },
  {
    "name": "porygon-z",
    "generation": 4
  },
  {
    "name": "gallade",
    "generation": 4
  },
  {
    "name": "probopass",
    "generation": 4
  },
  {
    "name": "dusknoir",
    "generation": 4
  },
  {
    "name": "froslass",
    "generation": 4
  },
  {
    "name": "victini",
    "generation": 5
  },
  {
    "name": "snivy",
    "generation": 5
  },
  {
    "name": "tepig",
    "generation": 5
  },
  {
    "name": "oshawott",
    "generation": 5
  },
  {
    "name": "patrat",
    "generation": 5
  },
  {
    "name": "lillipup",
    "generation": 5
  },
  {
    "name": "purrloin",
    "generation": 5
  },
  {
    "name": "pansage",
    "generation": 5
  },
  {
    "name": "pansear",
    "generation": 5
  },
  {
    "name": "panpour",
    "generation": 5
  },
  {
    "name": "munna",
    "generation": 5
  },
  {
    "name": "pidove",
    "generation": 5
  },
  {
    "name": "blitzle",
    "generation": 5
  },
  {
    "name": "roggenrola",
    "generation": 5
  },
  {
    "name": "woobat",
    "generation": 5
  },
  {
    "name": "drilbur",
    "generation": 5
  },
  {
    "name": "audino",
    "generation": 5
  },
  {
    "name": "timburr",
    "generation": 5
  },
  {
    "name": "tympole",
    "generation": 5
  },
  {
    "name": "throh",
    "generation": 5
  },
  {
    "name": "sawk",
    "generation": 5
  },
  {
    "name": "sewaddle",
    "generation": 5
  },
  {
    "name": "venipede",
    "generation": 5
  },
  {
    "name": "cottonee",
    "generation": 5
  },
  {
    "name": "petilil",
    "generation": 5
  },
  {
    "name": "basculin",
    "generation": 5
  },
  {
    "name": "sandile",
    "generation": 5
  },
  {
    "name": "darumaka",
    "generation": 5
  },
  {
    "name": "maractus",
    "generation": 5
  },
  {
    "name": "dwebble",
    "generation": 5
  },
  {
    "name": "scraggy",
    "generation": 5
  },
  {
    "name": "sigilyph",
    "generation": 5
  },
  {
    "name": "yamask",
    "generation": 5
  },
  {
    "name": "tirtouga",
    "generation": 5
  },
  {
    "name": "archen",
    "generation": 5
  },
  {
    "name": "trubbish",
    "generation": 5
  },
  {
    "name": "zorua",
    "generation": 5
  },
  {
    "name": "minccino",
    "generation": 5
  },
  {
    "name": "gothita",
    "generation": 5
  },
  {
    "name": "solosis",
    "generation": 5
  },
  {
    "name": "ducklett",
    "generation": 5
  },
  {
    "name": "vanillite",
    "generation": 5
  },
  {
    "name": "deerling",
    "generation": 5
  },
  {
    "name": "emolga",
    "generation": 5
  },
  {
    "name": "karrablast",
    "generation": 5
  },
  {
    "name": "foongus",
    "generation": 5
  },
  {
    "name": "frillish",
    "generation": 5
  },
  {
    "name": "alomomola",
    "generation": 5
  },
  {
    "name": "joltik",
    "generation": 5
  },
  {
    "name": "ferroseed",
    "generation": 5
  },
  {
    "name": "klink",
    "generation": 5
  },
  {
    "name": "tynamo",
    "generation": 5
  },
  {
    "name": "elgyem",
    "generation": 5
  },
  {
    "name": "litwick",
    "generation": 5
  },
  {
    "name": "krookodile",
    "generation": 5
  },
  {
    "name": "darmanitan",
    "generation": 5
  },
  {
    "name": "crustle",
    "generation": 5
  },
  {
    "name": "scrafty",
    "generation": 5
  },
  {
    "name": "cofagrigus",
    "generation": 5
  },
  {
    "name": "carracosta",
    "generation": 5
  },
  {
    "name": "archeops",
    "generation": 5
  },
  {
    "name": "garbodor",
    "generation": 5
  },
  {
    "name": "zoroark",
    "generation": 5
  },
  {
    "name": "cinccino",
    "generation": 5
  },
  {
    "name": "gothorita",
    "generation": 5
  },
  {
    "name": "reuniclus",
    "generation": 5
  },
  {
    "name": "swanna",
    "generation": 5
  },
  {
    "name": "vanillish",
    "generation": 5
  },
  {
    "name": "vanilluxe",
    "generation": 5
  },
  {
    "name": "sawsbuck",
    "generation": 5
  },
  {
    "name": "escavalier",
    "generation": 5
  },
  {
    "name": "amoonguss",
    "generation": 5
  },
  {
    "name": "jellicent",
    "generation": 5
  },
  {
    "name": "galvantula",
    "generation": 5
  },
  {
    "name": "ferrothorn",
    "generation": 5
  },
  {
    "name": "klang",
    "generation": 5
  },
  {
    "name": "klinklang",
    "generation": 5
  },
  {
    "name": "eelektrik",
    "generation": 5
  },
  {
    "name": "eelektross",
    "generation": 5
  },
  {
    "name": "beheeyem",
    "generation": 5
  },
  {
    "name": "lampent",
    "generation": 5
  },
  {
    "name": "axew",
    "generation": 5
  },
  {
    "name": "cubchoo",
    "generation": 5
  },
  {
    "name": "cryogonal",
    "generation": 5
  },
  {
    "name": "shelmet",
    "generation": 5
  },
  {
    "name": "stunfisk",
    "generation": 5
  },
  {
    "name": "mienfoo",
    "generation": 5
  },
  {
    "name": "druddigon",
    "generation": 5
  },
  {
    "name": "golett",
    "generation": 5
  },
  {
    "name": "pawniard",
    "generation": 5
  },
  {
    "name": "bouffalant",
    "generation": 5
  },
  {
    "name": "rufflet",
    "generation": 5
  },
  {
    "name": "vullaby",
    "generation": 5
  },
  {
    "name": "heatmor",
    "generation": 5
  },
  {
    "name": "durant",
    "generation": 5
  },
  {
    "name": "deino",
    "generation": 5
  },
  {
    "name": "larvesta",
    "generation": 5
  },
  {
    "name": "cobalion",
    "generation": 5
  },
  {
    "name": "terrakion",
    "generation": 5
  },
  {
    "name": "virizion",
    "generation": 5
  },
  {
    "name": "tornadus",
    "generation": 5
  },
  {
    "name": "thundurus",
    "generation": 5
  },
  {
    "name": "reshiram",
    "generation": 5
  },
  {
    "name": "zekrom",
    "generation": 5
  },
  {
    "name": "landorus",
    "generation": 5
  },
  {
    "name": "kyurem",
    "generation": 5
  },
  {
    "name": "keldeo",
    "generation": 5
  },
  {
    "name": "meloetta",
    "generation": 5
  },
  {
    "name": "genesect",
    "generation": 5
  },
  {
    "name": "servine",
    "generation": 5
  },
  {
    "name": "serperior",
    "generation": 5
  },
  {
    "name": "pignite",
    "generation": 5
  },
  {
    "name": "emboar",
    "generation": 5
  },
  {
    "name": "dewott",
    "generation": 5
  },
  {
    "name": "samurott",
    "generation": 5
  },
  {
    "name": "watchog",
    "generation": 5
  },
  {
    "name": "herdier",
    "generation": 5
  },
  {
    "name": "stoutland",
    "generation": 5
  },
  {
    "name": "liepard",
    "generation": 5
  },
  {
    "name": "simisage",
    "generation": 5
  },
  {
    "name": "simisear",
    "generation": 5
  },
  {
    "name": "simipour",
    "generation": 5
  },
  {
    "name": "musharna",
    "generation": 5
  },
  {
    "name": "tranquill",
    "generation": 5
  },
  {
    "name": "unfezant",
    "generation": 5
  },
  {
    "name": "zebstrika",
    "generation": 5
  },
  {
    "name": "boldore",
    "generation": 5
  },
  {
    "name": "gigalith",
    "generation": 5
  },
  {
    "name": "swoobat",
    "generation": 5
  },
  {
    "name": "excadrill",
    "generation": 5
  },
  {
    "name": "gurdurr",
    "generation": 5
  },
  {
    "name": "conkeldurr",
    "generation": 5
  },
  {
    "name": "palpitoad",
    "generation": 5
  },
  {
    "name": "seismitoad",
    "generation": 5
  },
  {
    "name": "swadloon",
    "generation": 5
  },
  {
    "name": "leavanny",
    "generation": 5
  },
  {
    "name": "whirlipede",
    "generation": 5
  },
  {
    "name": "scolipede",
    "generation": 5
  },
  {
    "name": "whimsicott",
    "generation": 5
  },
  {
    "name": "lilligant",
    "generation": 5
  },
  {
    "name": "krokorok",
    "generation": 5
  },
  {
    "name": "gothitelle",
    "generation": 5
  },
  {
    "name": "duosion",
    "generation": 5
  },
  {
    "name": "chandelure",
    "generation": 5
  },
  {
    "name": "fraxure",
    "generation": 5
  },
  {
    "name": "haxorus",
    "generation": 5
  },
  {
    "name": "beartic",
    "generation": 5
  },
  {
    "name": "accelgor",
    "generation": 5
  },
  {
    "name": "mienshao",
    "generation": 5
  },
  {
    "name": "golurk",
    "generation": 5
  },
  {
    "name": "bisharp",
    "generation": 5
  },
  {
    "name": "braviary",
    "generation": 5
  },
  {
    "name": "mandibuzz",
    "generation": 5
  },
  {
    "name": "zweilous",
    "generation": 5
  },
  {
    "name": "hydreigon",
    "generation": 5
  },
  {
    "name": "volcarona",
    "generation": 5
  },
  {
    "name": "chespin",
    "generation": 6
  },
  {
    "name": "fennekin",
    "generation": 6
  },
  {
    "name": "froakie",
    "generation": 6
  },
  {
    "name": "bunnelby",
    "generation": 6
  },
  {
    "name": "fletchling",
    "generation": 6
  },
  {
    "name": "scatterbug",
    "generation": 6
  },
  {
    "name": "litleo",
    "generation": 6
  },
  {
    "name": "flabebe",
    "generation": 6
  },
  {
    "name": "skiddo",
    "generation": 6
  },
  {
    "name": "pancham",
    "generation": 6
  },
  {
    "name": "furfrou",
    "generation": 6
  },
  {
    "name": "espurr",
    "generation": 6
  },
  {
    "name": "honedge",
    "generation": 6
  },
  {
    "name": "spritzee",
    "generation": 6
  },
  {
    "name": "swirlix",
    "generation": 6
  },
  {
    "name": "inkay",
    "generation": 6
  },
  {
    "name": "binacle",
    "generation": 6
  },
  {
    "name": "skrelp",
    "generation": 6
  },
  {
    "name": "clauncher",
    "generation": 6
  },
  {
    "name": "helioptile",
    "generation": 6
  },
  {
    "name": "tyrunt",
    "generation": 6
  },
  {
    "name": "amaura",
    "generation": 6
  },
  {
    "name": "hawlucha",
    "generation": 6
  },
  {
    "name": "dedenne",
    "generation": 6
  },
  {
    "name": "carbink",
    "generation": 6
  },
  {
    "name": "goomy",
    "generation": 6
  },
  {
    "name": "klefki",
    "generation": 6
  },
  {
    "name": "phantump",
    "generation": 6
  },
  {
    "name": "pumpkaboo",
    "generation": 6
  },
  {
    "name": "bergmite",
    "generation": 6
  },
  {
    "name": "noibat",
    "generation": 6
  },
  {
    "name": "xerneas",
    "generation": 6
  },
  {
    "name": "yveltal",
    "generation": 6
  },
  {
    "name": "zygarde",
    "generation": 6
  },
  {
    "name": "diancie",
    "generation": 6
  },
  {
    "name": "hoopa",
    "generation": 6
  },
  {
    "name": "volcanion",
    "generation": 6
  },
  {
    "name": "quilladin",
    "generation": 6
  },
  {
    "name": "chesnaught",
    "generation": 6
  },
  {
    "name": "braixen",
    "generation": 6
  },
  {
    "name": "delphox",
    "generation": 6
  },
  {
    "name": "frogadier",
    "generation": 6
  },
  {
    "name": "greninja",
    "generation": 6
  },
  {
    "name": "diggersby",
    "generation": 6
  },
  {
    "name": "fletchinder",
    "generation": 6
  },
  {
    "name": "talonflame",
    "generation": 6
  },
  {
    "name": "spewpa",
    "generation": 6
  },
  {
    "name": "vivillon",
    "generation": 6
  },
  {
    "name": "pyroar",
    "generation": 6
  },
  {
    "name": "floette",
    "generation": 6
  },
  {
    "name": "florges",
    "generation": 6
  },
  {
    "name": "gogoat",
    "generation": 6
  },
  {
    "name": "pangoro",
    "generation": 6
  },
  {
    "name": "meowstic",
    "generation": 6
  },
  {
    "name": "doublade",
    "generation": 6
  },
  {
    "name": "aegislash",
    "generation": 6
  },
  {
    "name": "aromatisse",
    "generation": 6
  },
  {
    "name": "slurpuff",
    "generation": 6
  },
  {
    "name": "malamar",
    "generation": 6
  },
  {
    "name": "barbaracle",
    "generation": 6
  },
  {
    "name": "dragalge",
    "generation": 6
  },
  {
    "name": "clawitzer",
    "generation": 6
  },
  {
    "name": "heliolisk",
    "generation": 6
  },
  {
    "name": "tyrantrum",
    "generation": 6
  },
  {
    "name": "aurorus",
    "generation": 6
  },
  {
    "name": "sylveon",
    "generation": 6
  },
  {
    "name": "sliggoo",
    "generation": 6
  },
  {
    "name": "goodra",
    "generation": 6
  },
  {
    "name": "trevenant",
    "generation": 6
  },
  {
    "name": "gourgeist",
    "generation": 6
  },
  {
    "name": "avalugg",
    "generation": 6
  },
  {
    "name": "noivern",
    "generation": 6
  },
  {
    "name": "rowlet",
    "generation": 7
  },
  {
    "name": "litten",
    "generation": 7
  },
  {
    "name": "popplio",
    "generation": 7
  },
  {
    "name": "pikipek",
    "generation": 7
  },
  {
    "name": "yungoos",
    "generation": 7
  },
  {
    "name": "grubbin",
    "generation": 7
  },
  {
    "name": "crabrawler",
    "generation": 7
  },
  {
    "name": "oricorio",
    "generation": 7
  },
  {
    "name": "cutiefly",
    "generation": 7
  },
  {
    "name": "rockruff",
    "generation": 7
  },
  {
    "name": "wishiwashi",
    "generation": 7
  },
  {
    "name": "mareanie",
    "generation": 7
  },
  {
    "name": "mudbray",
    "generation": 7
  },
  {
    "name": "dewpider",
    "generation": 7
  },
  {
    "name": "fomantis",
    "generation": 7
  },
  {
    "name": "morelull",
    "generation": 7
  },
  {
    "name": "salandit",
    "generation": 7
  },
  {
    "name": "stufful",
    "generation": 7
  },
  {
    "name": "bounsweet",
    "generation": 7
  },
  {
    "name": "comfey",
    "generation": 7
  },
  {
    "name": "oranguru",
    "generation": 7
  },
  {
    "name": "passimian",
    "generation": 7
  },
  {
    "name": "wimpod",
    "generation": 7
  },
  {
    "name": "sandygast",
    "generation": 7
  },
  {
    "name": "pyukumuku",
    "generation": 7
  },
  {
    "name": "type-null",
    "generation": 7
  },
  {
    "name": "minior",
    "generation": 7
  },
  {
    "name": "komala",
    "generation": 7
  },
  {
    "name": "turtonator",
    "generation": 7
  },
  {
    "name": "togedemaru",
    "generation": 7
  },
  {
    "name": "mimikyu",
    "generation": 7
  },
  {
    "name": "bruxish",
    "generation": 7
  },
  {
    "name": "drampa",
    "generation": 7
  },
  {
    "name": "dhelmise",
    "generation": 7
  },
  {
    "name": "jangmo-o",
    "generation": 7
  },
  {
    "name": "tapu-koko",
    "generation": 7
  },
  {
    "name": "tapu-lele",
    "generation": 7
  },
  {
    "name": "tapu-bulu",
    "generation": 7
  },
  {
    "name": "tapu-fini",
    "generation": 7
  },
  {
    "name": "cosmog",
    "generation": 7
  },
  {
    "name": "nihilego",
    "generation": 7
  },
  {
    "name": "buzzwole",
    "generation": 7
  },
  {
    "name": "pheromosa",
    "generation": 7
  },
  {
    "name": "xurkitree",
    "generation": 7
  },
  {
    "name": "celesteela",
    "generation": 7
  },
  {
    "name": "kartana",
    "generation": 7
  },
  {
    "name": "guzzlord",
    "generation": 7
  },
  {
    "name": "necrozma",
    "generation": 7
  },
  {
    "name": "magearna",
    "generation": 7
  },
  {
    "name": "marshadow",
    "generation": 7
  },
  {
    "name": "poipole",
    "generation": 7
  },
  {
    "name": "stakataka",
    "generation": 7
  },
  {
    "name": "blacephalon",
    "generation": 7
  },
  {
    "name": "zeraora",
    "generation": 7
  },
  {
    "name": "meltan",
    "generation": 7
  },
  {
    "name": "dartrix",
    "generation": 7
  },
  {
    "name": "decidueye",
    "generation": 7
  },
  {
    "name": "torracat",
    "generation": 7
  },
  {
    "name": "incineroar",
    "generation": 7
  },
  {
    "name": "brionne",
    "generation": 7
  },
  {
    "name": "primarina",
    "generation": 7
  },
  {
    "name": "trumbeak",
    "generation": 7
  },
  {
    "name": "toucannon",
    "generation": 7
  },
  {
    "name": "gumshoos",
    "generation": 7
  },
  {
    "name": "charjabug",
    "generation": 7
  },
  {
    "name": "vikavolt",
    "generation": 7
  },
  {
    "name": "crabominable",
    "generation": 7
  },
  {
    "name": "ribombee",
    "generation": 7
  },
  {
    "name": "lycanroc",
    "generation": 7
  },
  {
    "name": "toxapex",
    "generation": 7
  },
  {
    "name": "mudsdale",
    "generation": 7
  },
  {
    "name": "araquanid",
    "generation": 7
  },
  {
    "name": "lurantis",
    "generation": 7
  },
  {
    "name": "shiinotic",
    "generation": 7
  },
  {
    "name": "salazzle",
    "generation": 7
  },
  {
    "name": "bewear",
    "generation": 7
  },
  {
    "name": "steenee",
    "generation": 7
  },
  {
    "name": "tsareena",
    "generation": 7
  },
  {
    "name": "golisopod",
    "generation": 7
  },
  {
    "name": "palossand",
    "generation": 7
  },
  {
    "name": "silvally",
    "generation": 7
  },
  {
    "name": "hakamo-o",
    "generation": 7
  },
  {
    "name": "kommo-o",
    "generation": 7
  },
  {
    "name": "cosmoem",
    "generation": 7
  },
  {
    "name": "solgaleo",
    "generation": 7
  },
  {
    "name": "lunala",
    "generation": 7
  },
  {
    "name": "naganadel",
    "generation": 7
  },
  {
    "name": "melmetal",
    "generation": 7
  },
  {
    "name": "scorbunny",
    "generation": 8
  },
  {
    "name": "sobble",
    "generation": 8
  },
  {
    "name": "skwovet",
    "generation": 8
  },
  {
    "name": "rookidee",
    "generation": 8
  },
  {
    "name": "blipbug",
    "generation": 8
  },
  {
    "name": "nickit",
    "generation": 8
  },
  {
    "name": "gossifleur",
    "generation": 8
  },
  {
    "name": "wooloo",
    "generation": 8
  },
  {
    "name": "chewtle",
    "generation": 8
  },
  {
    "name": "yamper",
    "generation": 8
  },
  {
    "name": "rolycoly",
    "generation": 8
  },
  {
    "name": "applin",
    "generation": 8
  },
  {
    "name": "silicobra",
    "generation": 8
  },
  {
    "name": "cramorant",
    "generation": 8
  },
  {
    "name": "arrokuda",
    "generation": 8
  },
  {
    "name": "toxel",
    "generation": 8
  },
  {
    "name": "sizzlipede",
    "generation": 8
  },
  {
    "name": "clobbopus",
    "generation": 8
  },
  {
    "name": "sinistea",
    "generation": 8
  },
  {
    "name": "hatenna",
    "generation": 8
  },
  {
    "name": "impidimp",
    "generation": 8
  },
  {
    "name": "milcery",
    "generation": 8
  },
  {
    "name": "falinks",
    "generation": 8
  },
  {
    "name": "pincurchin",
    "generation": 8
  },
  {
    "name": "snom",
    "generation": 8
  },
  {
    "name": "stonjourner",
    "generation": 8
  },
  {
    "name": "eiscue",
    "generation": 8
  },
  {
    "name": "indeedee",
    "generation": 8
  },
  {
    "name": "morpeko",
    "generation": 8
  },
  {
    "name": "cufant",
    "generation": 8
  },
  {
    "name": "dracozolt",
    "generation": 8
  },
  {
    "name": "arctozolt",
    "generation": 8
  },
  {
    "name": "dracovish",
    "generation": 8
  },
  {
    "name": "arctovish",
    "generation": 8
  },
  {
    "name": "duraludon",
    "generation": 8
  },
  {
    "name": "dreepy",
    "generation": 8
  },
  {
    "name": "zacian",
    "generation": 8
  },
  {
    "name": "zamazenta",
    "generation": 8
  },
  {
    "name": "eternatus",
    "generation": 8
  },
  {
    "name": "kubfu",
    "generation": 8
  },
  {
    "name": "zarude",
    "generation": 8
  },
  {
    "name": "regieleki",
    "generation": 8
  },
  {
    "name": "regidrago",
    "generation": 8
  },
  {
    "name": "glastrier",
    "generation": 8
  },
  {
    "name": "spectrier",
    "generation": 8
  },
  {
    "name": "calyrex",
    "generation": 8
  },
  {
    "name": "enamorus",
    "generation": 8
  },
  {
    "name": "thwackey",
    "generation": 8
  },
  {
    "name": "rillaboom",
    "generation": 8
  },
  {
    "name": "raboot",
    "generation": 8
  },
  {
    "name": "cinderace",
    "generation": 8
  },
  {
    "name": "drizzile",
    "generation": 8
  },
  {
    "name": "inteleon",
    "generation": 8
  },
  {
    "name": "greedent",
    "generation": 8
  },
  {
    "name": "corvisquire",
    "generation": 8
  },
  {
    "name": "corviknight",
    "generation": 8
  },
  {
    "name": "dottler",
    "generation": 8
  },
  {
    "name": "orbeetle",
    "generation": 8
  },
  {
    "name": "thievul",
    "generation": 8
  },
  {
    "name": "eldegoss",
    "generation": 8
  },
  {
    "name": "dubwool",
    "generation": 8
  },
  {
    "name": "drednaw",
    "generation": 8
  },
  {
    "name": "boltund",
    "generation": 8
  },
  {
    "name": "carkol",
    "generation": 8
  },
  {
    "name": "coalossal",
    "generation": 8
  },
  {
    "name": "flapple",
    "generation": 8
  },
  {
    "name": "appletun",
    "generation": 8
  },
  {
    "name": "sandaconda",
    "generation": 8
  },
  {
    "name": "barraskewda",
    "generation": 8
  },
  {
    "name": "toxtricity",
    "generation": 8
  },
  {
    "name": "centiskorch",
    "generation": 8
  },
  {
    "name": "grapploct",
    "generation": 8
  },
  {
    "name": "polteageist",
    "generation": 8
  },
  {
    "name": "hattrem",
    "generation": 8
  },
  {
    "name": "hatterene",
    "generation": 8
  },
  {
    "name": "morgrem",
    "generation": 8
  },
  {
    "name": "grimmsnarl",
    "generation": 8
  },
  {
    "name": "obstagoon",
    "generation": 8
  },
  {
    "name": "perrserker",
    "generation": 8
  },
  {
    "name": "cursola",
    "generation": 8
  },
  {
    "name": "sirfetchd",
    "generation": 8
  },
  {
    "name": "mr-rime",
    "generation": 8
  },
  {
    "name": "runerigus",
    "generation": 8
  },
  {
    "name": "alcremie",
    "generation": 8
  },
  {
    "name": "frosmoth",
    "generation": 8
  },
  {
    "name": "copperajah",
    "generation": 8
  },
  {
    "name": "drakloak",
    "generation": 8
  },
  {
    "name": "dragapult",
    "generation": 8
  },
  {
    "name": "urshifu",
    "generation": 8
  },
  {
    "name": "wyrdeer",
    "generation": 8
  },
  {
    "name": "kleavor",
    "generation": 8
  },
  {
    "name": "ursaluna",
    "generation": 8
  },
  {
    "name": "basculegion",
    "generation": 8
  },
  {
    "name": "sneasler",
    "generation": 8
  },
  {
    "name": "overqwil",
    "generation": 8
  },
  {
    "name": "pawmi",
    "generation": 9
  },
  {
    "name": "sprigatito",
    "generation": 9
  },
  {
    "name": "fuecoco",
    "generation": 9
  },
  {
    "name": "quaxly",
    "generation": 9
  },
  {
    "name": "lechonk",
    "generation": 9
  },
  {
    "name": "tarountula",
    "generation": 9
  },
  {
    "name": "nymble",
    "generation": 9
  },
  {
    "name": "tandemaus",
    "generation": 9
  },
  {
    "name": "fidough",
    "generation": 9
  },
  {
    "name": "smoliv",
    "generation": 9
  },
  {
    "name": "squawkabilly",
    "generation": 9
  },
  {
    "name": "nacli",
    "generation": 9
  },
  {
    "name": "charcadet",
    "generation": 9
  },
  {
    "name": "tadbulb",
    "generation": 9
  },
  {
    "name": "wattrel",
    "generation": 9
  },
  {
    "name": "maschiff",
    "generation": 9
  },
  {
    "name": "shroodle",
    "generation": 9
  },
  {
    "name": "bramblin",
    "generation": 9
  },
  {
    "name": "toedscool",
    "generation": 9
  },
  {
    "name": "klawf",
    "generation": 9
  },
  {
    "name": "capsakid",
    "generation": 9
  },
  {
    "name": "rellor",
    "generation": 9
  },
  {
    "name": "flittle",
    "generation": 9
  },
  {
    "name": "tinkatink",
    "generation": 9
  },
  {
    "name": "wiglett",
    "generation": 9
  },
  {
    "name": "bombirdier",
    "generation": 9
  },
  {
    "name": "finizen",
    "generation": 9
  },
  {
    "name": "varoom",
    "generation": 9
  },
  {
    "name": "cyclizar",
    "generation": 9
  },
  {
    "name": "orthworm",
    "generation": 9
  },
  {
    "name": "glimmet",
    "generation": 9
  },
  {
    "name": "greavard",
    "generation": 9
  },
  {
    "name": "flamigo",
    "generation": 9
  },
  {
    "name": "cetoddle",
    "generation": 9
  },
  {
    "name": "veluza",
    "generation": 9
  },
  {
    "name": "dondozo",
    "generation": 9
  },
  {
    "name": "tatsugiri",
    "generation": 9
  },
  {
    "name": "great-tusk",
    "generation": 9
  },
  {
    "name": "scream-tail",
    "generation": 9
  },
  {
    "name": "brute-bonnet",
    "generation": 9
  },
  {
    "name": "flutter-mane",
    "generation": 9
  },
  {
    "name": "slither-wing",
    "generation": 9
  },
  {
    "name": "sandy-shocks",
    "generation": 9
  },
  {
    "name": "iron-treads",
    "generation": 9
  },
  {
    "name": "iron-bundle",
    "generation": 9
  },
  {
    "name": "iron-hands",
    "generation": 9
  },
  {
    "name": "iron-jugulis",
    "generation": 9
  },
  {
    "name": "iron-moth",
    "generation": 9
  },
  {
    "name": "iron-thorns",
    "generation": 9
  },
  {
    "name": "frigibax",
    "generation": 9
  },
  {
    "name": "gimmighoul",
    "generation": 9
  },
  {
    "name": "wo-chien",
    "generation": 9
  },
  {
    "name": "chien-pao",
    "generation": 9
  },
  {
    "name": "ting-lu",
    "generation": 9
  },
  {
    "name": "chi-yu",
    "generation": 9
  },
  {
    "name": "roaring-moon",
    "generation": 9
  },
  {
    "name": "iron-valiant",
    "generation": 9
  },
  {
    "name": "koraidon",
    "generation": 9
  },
  {
    "name": "miraidon",
    "generation": 9
  },
  {
    "name": "walking-wake",
    "generation": 9
  },
  {
    "name": "iron-leaves",
    "generation": 9
  },
  {
    "name": "floragato",
    "generation": 9
  },
  {
    "name": "meowscarada",
    "generation": 9
  },
  {
    "name": "crocalor",
    "generation": 9
  },
  {
    "name": "skeledirge",
    "generation": 9
  },
  {
    "name": "quaxwell",
    "generation": 9
  },
  {
    "name": "quaquaval",
    "generation": 9
  },
  {
    "name": "oinkologne",
    "generation": 9
  },
  {
    "name": "spidops",
    "generation": 9
  },
  {
    "name": "lokix",
    "generation": 9
  },
  {
    "name": "pawmo",
    "generation": 9
  },
  {
    "name": "pawmot",
    "generation": 9
  },
  {
    "name": "maushold",
    "generation": 9
  },
  {
    "name": "dachsbun",
    "generation": 9
  },
  {
    "name": "dolliv",
    "generation": 9
  },
  {
    "name": "arboliva",
    "generation": 9
  },
  {
    "name": "naclstack",
    "generation": 9
  },
  {
    "name": "garganacl",
    "generation": 9
  },
  {
    "name": "armarouge",
    "generation": 9
  },
    {
      "name": "ceruledge",
      "generation": 9
    },
    {
      "name": "bellibolt",
      "generation": 9
    },
    {
      "name": "kilowattrel",
      "generation": 9
    },
    {
      "name": "mabosstiff",
      "generation": 9
    },
    {
      "name": "grafaiai",
      "generation": 9
    },
    {
      "name": "brambleghast",
      "generation": 9
    },
    {
      "name": "toedscruel",
      "generation": 9
    },
    {
      "name": "scovillain",
      "generation": 9
    },
    {
      "name": "rabsca",
      "generation": 9
    },
    {
      "name": "espathra",
      "generation": 9
    },
    {
      "name": "tinkatuff",
      "generation": 9
    },
    {
      "name": "tinkaton",
      "generation": 9
    },
    {
      "name": "wugtrio",
      "generation": 9
    },
    {
      "name": "palafin",
      "generation": 9
    },
    {
      "name": "revavroom",
      "generation": 9
    },
    {
      "name": "glimmora",
      "generation": 9
    },
    {
      "name": "houndstone",
      "generation": 9
    },
    {
      "name": "cetitan",
      "generation": 9
    },
    {
      "name": "annihilape",
      "generation": 9
    },
    {
      "name": "clodsire",
      "generation": 9
    },
    {
      "name": "farigiraf",
      "generation": 9
    },
    {
      "name": "dudunsparce",
      "generation": 9
    },
    {
      "name": "kingambit",
      "generation": 9
    },
    {
      "name": "arctibax",
      "generation": 9
    },
    {
      "name": "baxcalibur",
      "generation": 9
    },
    {
      "name": "gholdengo",
      "generation": 9
    }
  ];
  
module.exports = {pokedex}

