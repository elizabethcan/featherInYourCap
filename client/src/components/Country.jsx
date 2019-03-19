import React from 'react';

const Country = (props) => {
  if (props.show === true) {
    return (
      <div>
        <h1>{props.country.name}</h1>
        <div></div>
      </div>
    )
  } else {
    return null;
  }
};

export default Country;