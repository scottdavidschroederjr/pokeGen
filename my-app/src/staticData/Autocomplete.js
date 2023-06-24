import React, { useState } from 'react';
import { pokedex } from './pokedex';
import axios from 'axios';


const AutocompleteInput = () => {
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
  };

  return (
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
  );
};

//for handing data
const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};

const handleSubmit = async (data) => {
  try {
    const response = await axios.post('http://localhost:3001/api/data', {data}, config);

    //here's where we'd put all that data into the proper spots
    console.log(response.data)
    console.log(response.data['bestGeneration']);
    console.log(response.data['name']);
  } catch (error) {
    console.error(error);
  }
};

export default AutocompleteInput;

