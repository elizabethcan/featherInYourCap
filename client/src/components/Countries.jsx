import React from 'react';

const Countries = ({
  countries,
  setCountry
}) => {
  return (
    <select name="location" onChange={setCountry}>
      <option>Select A Country</option>
      {countries.map((country, index) => {
        return <option value={index} key={index}>{country.name}</option>
      })}
    </select>
  )
};

export default Countries;