import React from 'react';
import AutocompleteInput from './scripts/Autocomplete.js';

function App() {
  return (
    <div>
      <InfoBox />
      <ChooseBox />
    </div>
  );
}

function InfoBox() {
  return (
    <div>
      <div class="topTitleBox">
        <span class="Best-Competitive-Generation">Best Competitive Generation</span>
      </div> 
      <div class="topTextBox">
        <div class="explainer">Want to work your favorite pokemon into a competitive team? Use this tool to see which generation your selected Pokemon 
        peaked in terms of tier of competitive Pokemon singles.</div>
      </div>
    </div>
  );
}

function ChooseBox() {
  return (
    <div>
      <div class="chooseBox"><span class="Choose-your-Pokemon">Choose your Pokemon</span></div>
      <AutocompleteInput />
    </div>
  )
}


export default App;

