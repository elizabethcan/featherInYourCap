import React from 'react';
import Country from './Country.jsx';

const Travel = (props) => {
  if (props.show === true) {
    return (
      <div>
        <div>Where would you like to travel?</div>
        <Country countries={props.countries}/>
        <div>How many months until your desired trip date?</div>
          <input name="monthsToGoal" value={props.goal.months} onChange={props.setMonths}></input>
        <div>What type of budget would you want?</div>
        <select>
          <option>Ballin' on a Budget</option>
          <option>Livin' Like a King</option>
          <option>Somewhere in Between</option>
        </select>
        <div>How many days will your trip be?</div>
        <input name="days" value={props.goal.days}></input>
        <button onClick={props.createGoal}>Let's Do It!</button>
      </div>
    )
  } else {
    return null;
  }
};

export default Travel;