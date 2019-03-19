import React from 'react';
import Country from './Country.jsx';

const Travel = (props) => {
  if (props.show === true) {
    return (
      <div id="travel-container">
        <div>Where would you like to travel?</div>
        <Country countries={props.countries} changeState={props.changeState}/>
        <div>How many months until your desired trip date?</div>
          <input name="monthsToGoal" value={props.months} onChange={props.changeState}></input>
        <div>What type of budget would you want?</div>
        <select name="budget" onChange={props.changeState}>
          <option value="0">Ballin' on a Budget</option>
          <option value="2">Livin' Like a King</option>
          <option value="1">Somewhere in Between</option>
        </select>
        <div>How many days will your trip be?</div>
        <input name="days" value={props.days} onChange={props.changeState}></input>
        <button onClick={props.calculate}>Let's Do It!</button>
      </div>
    )
  } else {
    return null;
  }
};

export default Travel;