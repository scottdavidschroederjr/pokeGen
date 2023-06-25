import React from 'react';

function ResultBox(returnedData) {
  
    if (typeof returnedData != Object) {
      return (
        <h1>Please pick a Pokemon!</h1>
      );
    }

    return (
      <div>
  
        <div class="infoTitle">
          <span class="pokemonName">{returnedData['name']}</span>
        </div>
  
        <div class="infoBody">
          <span class="Generation-X">{returnedData['bestGeneration']}</span>
          <span class="tier">{returnedData['bestGenTier']}</span>
          <br></br>
          <span class="moreInfo" href={returnedData['generationData'][returnedData['bestGeneration']]['page']}>Get details on movesets and strategies</span>
        </div>
      </div>
    )
};

export default ResultBox;