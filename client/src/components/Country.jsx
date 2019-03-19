import React from 'react';

const Country = (props) => {
  return (
    <select name="location" onChange={props.changeState}>
      {props.countries.map((country, index) => {
        return <option value={country.id} key={index}>{country.name}</option>
      })}
    </select>
  )
};

export default Country;