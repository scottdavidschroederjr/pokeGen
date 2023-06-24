import React from 'react';
import AutocompleteInput from './staticData/Autocomplete.js';

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
        <span class="explainer">Want to work your favorite pokemon into a competitive team? Use this tool to see which generation your selected Pokemon 
        peaked in terms of tier of competitive Pokemon singles.
        </span>
      </div>
    </div>
  );
}

function ChooseBox() {
  return (
    <div class="chooseBox">
      <span class="Choose-your-Pokemon">Choose your Pokemon</span>
      <AutocompleteInput />
    </div>
  )
}


export default App;

