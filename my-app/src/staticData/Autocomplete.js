import React, { useState } from 'react';
import { pokedex } from './pokedex';
import axios from 'axios';

const AutocompleteInput = () => {
    const [OutputValue, setOutput] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
  
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

      const handleSubmit = async (data) => {
        try {
          console.log(data)
          const response = await axios.post('http://localhost:3001/api/data', { data }, config);
          setOutput(response.data)
          console.log(response.data)
          
          return null
 
        } catch (error) {
          console.error(error);
        }
      };
      

    console.log(OutputValue)
    //pre selection state
    if (OutputValue == '') {

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

    //once data is returned, render new box
    if (OutputValue != '') {
      const imageUrl = OutputValue['generationData']['9']['sprite']
      const spriteStyle = {
        backgroundImage: `url(${imageUrl})`
      }

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
            <div class="infoTitle" style={spriteStyle}><span class="pokemonName">{inputValue}</span></div>
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

