import React, { useState } from 'react';
import { pokedex } from './pokedex';


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

  const handleButtonSubmit = () => {
    // Run a function with the data input into the text field
    //pullData(inputValue);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
      <button onClick={handleButtonSubmit}>Submit</button>
    </div>
  );
};

export default AutocompleteInput;

