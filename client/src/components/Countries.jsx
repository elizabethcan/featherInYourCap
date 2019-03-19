import React from 'react';

const Countries = (props) => {
  return (
    <select name="location" onChange={props.setCountry}>
      {props.countries.map((country, index) => {
        return <option value={index} key={index}>{country.name}</option>
      })}
    </select>
  )
};

export default Countries;