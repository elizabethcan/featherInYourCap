import React from 'react';
import Highlights from './Highlights.jsx'

const Country = (props) => {
  if (props.show === true && props.countryInfo) {
    return (
      <div>
        <h1>{props.countryInfo.info.name}</h1>
        <Highlights countryHighlights={props.countryHighlights} conversionRate={props.conversionRate}/>
        <div id="byt">For more information and to find flights visit
          <a href={props.countryInfo.info.url}> Budget Your Trip</a>
        </div>
      </div>
    )
  } else {
    return null;
  }
};

export default Country;