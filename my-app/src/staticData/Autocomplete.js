import React, { useState } from 'react';
import { pokedex } from './pokedex';
import axios from 'axios';

const AutocompleteInput = () => {
//this section handles states

  //these values manage States
    const [OutputValue, setOutput] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

  //to hold the capitalized requested mon's name
    
  
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
          console.error(error);
        }
      };

//this section handles the visuals

    //default state / pre-selection state
    if (OutputValue === '') {

    return (
      <div>
        <div>
          <input type="text" className='PokemonSearch' value={inputValue} onChange={handleInputChange} />
          <ul>
            {suggestions.map((suggestion) => (
              <li key={suggestion} className='Sugestion' onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
          <button onClick={() => handleSubmit(inputValue) }>Submit</button>
        </div>
      </div>
    );
    }

    //TODO waiting for data aka Promise state

    //data returned state
    if (OutputValue !== '') {
      const imageUrl = OutputValue['generationData']['9']['sprite']
      const spriteStyle = {
        backgroundImage: `url(${imageUrl})`
      }

    //capitalizing the mon's name again for visuals (all practical functions NEED lowercase)
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const capitalizedString = capitalizeFirstLetter(OutputValue['name']);

      return (
        <div>
          <div>
            <input type="text" className='PokemonSearch' value={inputValue} onChange={handleInputChange} />
            <ul>
              {suggestions.map((suggestion) => (
                <li key={suggestion} className='Sugestion' onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion}
                </li>
              ))}
            </ul>
            <button onClick={() => handleSubmit(inputValue) }>Submit</button>
          </div>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <div>
            <div class="infoTitle" style={spriteStyle}><span class="pokemonName">{capitalizedString}</span></div>
            <div class="infoBody">
              <span class="Generation-X">{OutputValue['bestGeneration']}</span>
              <span class="tier">{OutputValue['bestGenTier']}</span>
              <br></br>
              <span class="moreInfo" href={OutputValue['generationData'][OutputValue['bestGeneration']]['page']}>Get details on movesets and strategies</span>
            </div>
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

