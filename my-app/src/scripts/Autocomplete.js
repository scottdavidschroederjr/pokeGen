import React, { useState } from 'react';
import axios from 'axios';
const { pokedex } = require('./pokedex.js')


const AutocompleteInput = () => {
  //these values manage States
  const [OutputValue, setOutput] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  //makes the auto fill magic happen
  const handleInputChange = (event) => {
      const value = event.target.value;
      setInputValue(value);
    
        // Filter the keys of the pokedex object based on the input value
      const filteredSuggestions = Object.keys(pokedex)
          .filter((key) => key.toLowerCase().includes(value.toLowerCase()))
          .slice(0, 5); // Limit to 5 suggestions
    
        setSuggestions(filteredSuggestions);
      };
    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion);
        setSuggestions([]);
      }

  //requests the data using puppet
    const handleSubmit = async (data) => {
        try {
          const response = await axios.post('http://localhost:3001/api/data', { data }, config);
          setOutput(response.data)
          return null
 
        } catch (error) {
          //TODO make more visual error
          OutputValue = "error"
        }
      };

//this section handles the visuals
    //default state / pre-selection state
    console.log(inputValue)

    if (OutputValue === '') {

    return (
      <div>
        <div className='chooseBox'>
        <button class="button-30" onClick={() => handleSubmit(inputValue) }>Select Pokemon</button>
          <input type="text" class="autocomplete-input" value={inputValue} onChange={handleInputChange} />
          <ul>
            {suggestions.map((suggestion) => (
              <li key={suggestion} className='autocomplete-item' onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
          
        </div>
      </div>
    );
    }

    //TODO waiting for data aka Promise state


    //error catching
    if (OutputValue === "error") {
      return (
        <div>
          <div className='chooseBox'>
            <button class="button-30" onClick={() => handleSubmit(inputValue) }>Select Pokemon</button>
            <input type="text" class="autocomplete-input" value={inputValue} onChange={handleInputChange} />
            <ul>
                {suggestions.map((suggestion) => (
                  <li key={suggestion} className='autocomplete-item' onClick={() => handleSuggestionClick(suggestion)}>
                    {suggestion}
                  </li>
                ))}
            </ul>
          </div>
            <br/><br/>
          <div class="errorBox">We ran into an error searching for that Pokemon. Please try again!</div> 
            <br/><br/>
        </div>
      )
      
    }

    //data returned state
    if (OutputValue !== '') {

      //pokemon sprite setup
      const imageUrl = OutputValue['generationData']['9']['sprite']
      const spriteStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: `contain`,
      }

      //capitalizing the mon's name again for visuals (all practical functions NEED lowercase)
      function capitalizeFirstLetter(string) {
            string = string.toString()
            return string.charAt(0).toUpperCase() + string.slice(1);
          }
      const capitalizedString = capitalizeFirstLetter(OutputValue['name']);

      //creating table to hold all data
      function Table({ originGen }) {
        const rows = [];
      
        // Generate rows based on the input number
        for (let i = originGen; i <= 9; i++) {
          rows.push(
            React.createElement(
              "tr",
              { key: i },
              React.createElement("td", null, i),
              React.createElement("td", null, OutputValue['generationData'][i]['tier'])
            )
          );
        }
      
        return React.createElement(
          "table",
          null,
          React.createElement(
            "thead",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement("th", null, "Gen"),
              React.createElement("th", null, "Tier")
            )
          ),
          React.createElement("tbody", null, rows)
        );
      }
      
  
        return (
          <div>
            <div class="chooseBox">
            <button class="button-30" onClick={() => handleSubmit(inputValue) }>Select Pokemon</button>
              <input type="text" class="autocomplete-input" value={inputValue} onChange={handleInputChange} />
              <ul>
                {suggestions.map((suggestion) => (
                  <li key={suggestion} className='Sugestion' onClick={() => handleSuggestionClick(suggestion)}>
                    {suggestion}
                  </li>
                ))}
              </ul>

            </div>

            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>

            <div class="infoBox">
              <div class="infoTitle" style={spriteStyle}>
                <span class="pokemonName">{capitalizedString}</span>
              </div>
              <div class="infoBody">
                <span class="Generation-X">Gen {OutputValue['bestGeneration']} - {OutputValue['bestGenTier']}</span>
                <br></br>
              </div>
            </div>
            <div class="TableOutput">
              <Table originGen={OutputValue.originGen} />
            </div>
          </div>
        )
      }
;
  

  };

//for handing data
const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};




export default AutocompleteInput

