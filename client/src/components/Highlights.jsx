import React from 'react';

const Highlights = (props) => {
  if (props.countryHighlights) {
    if (props.countryHighlights.length > 0) {
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
      return <div>No Highlights Available For This Country</div>;
    }
  } else {
    return null;
  }
};

export default Highlights;