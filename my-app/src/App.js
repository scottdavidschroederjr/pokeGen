import './App.css';
import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div> 
      <input type="text" value={inputText} onChange={handleInputChange} />
      <p>You typed: {inputText}</p>
    </div>
  );
}

export default App;

