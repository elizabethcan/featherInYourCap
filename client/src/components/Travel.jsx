import React from 'react';
import Countries from './Countries.jsx';

const Travel = ({
  calculate,
  changeNumber,
  changeString,
  countries,
  days,
  months,
  setCountry,
  show
}) => {
  if (show === true && countries) {
    return (
      <div className="container" id="travel">
        <div>Where would you like to travel?</div>
        <Countries 
          countries={countries}
          setCountry={setCountry}
        />
        <div>How many months until your desired trip date?</div>
          <input name="monthsToGoal" value={months} onChange={changeNumber}></input>
        <div>What type of budget would you want?</div>
        <select name="budget" onChange={changeString}>
          <option value="value_budget">Ballin' on a Budget</option>
          <option value="value_luxury">Livin' Like a King</option>
          <option value="value_midrange">Somewhere in Between</option>
        </select>
        <div>How many days will your trip be?</div>
        <input name="days" value={days} onChange={changeNumber}></input>
        <button onClick={calculate}>Let's Do It!</button>
      </div>
    )
  } else {
    return null;
  }
};

export default Travel;