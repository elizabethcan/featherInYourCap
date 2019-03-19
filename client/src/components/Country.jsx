import React from 'react';

const Country = (props) => {
  if (props.show === true && props.countryInfo) {
    return (
      <div>
        <h1>{props.countryInfo.info.name}</h1>
        <div>For more information and to find flights visit {props.countryInfo.info.url}</div>
      </div>
    )
  } else {
    return null;
  }
};

export default Country;