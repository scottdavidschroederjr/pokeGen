//https://pokeapi.co/api/v2/generation/
//https://www.smogon.com/stats/2023-05/


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
    "Untiered": 11,
    "LC": 12,
    "NFE": 13
  }

const generations = {
    1: "RB",
    2: "GS",
    3: "RS",
    4: "DP",
    5: "BW",
    6: "XY",
    7: "SM",
    8: "SS",
    9: "SV"
  }


module.exports = {
  tierValue,
  generations
}
