import React from 'react';

const Country = (props) => {
  return (
    <select>
      {props.countries.map((country, index) => {
        return <option key={index}>{country.name}</option>
      })}
    </select>
  )
};

export default Country;