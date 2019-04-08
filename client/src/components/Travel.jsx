import React from 'react';
import Countries from './Countries.jsx';

const Travel = (props) => {
  if (props.show === true && props.countries) {
    return (
      <div className="container" id="travel">
        <div>Where would you like to travel?</div>
        <Countries countries={props.countries} setCountry={props.setCountry}/>
        <div>How many months until your desired trip date?</div>
          <input name="monthsToGoal" value={props.months} onChange={props.changeNumber}></input>
        <div>What type of budget would you want?</div>
        <select name="budget" onChange={props.changeString}>
          <option value="value_budget">Ballin' on a Budget</option>
          <option value="value_luxury">Livin' Like a King</option>
          <option value="value_midrange">Somewhere in Between</option>
        </select>
        <div>How many days will your trip be?</div>
        <input name="days" value={props.days} onChange={props.changeNumber}></input>
        <button onClick={props.calculate}>Let's Do It!</button>
      </div>
    )
  } else {
    return null;
  }
};

export default Travel;