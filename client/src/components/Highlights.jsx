import React from 'react';

const Highlights = (props) => {
  if (props.countryHighlights) {
    return (
      <div id="highlights-container"> 
        <div id="country-highlights">Country Highlights:</div>
        {props.countryHighlights.map((item, index) => {
          return (
            <div key={index} id="highlight">
              <div id="description">{item.description}:</div>
              <div> ${(item.cost * props.conversionRate).toFixed()}</div>
            </div>
          )
        })}
      </div>
    )
  } else {
    return null;
  }
};

export default Highlights;