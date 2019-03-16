import React from 'react';

const Travel = (props) => {
  if (props.view === 'travelGoal') {
    return (
      <div>
        <div>Where would you like to travel?</div>
        <select>
          <option>Bali(Indonesia)</option>
          <option>Costa Rica</option>
          <option>France</option>
          <option>Japan</option>
          <option>Spain</option>
          <option>Thailand</option>
        </select>
        <div>What type of budget would you want?</div>
        <select>
          <option>Ballin' on a Budget</option>
          <option>Livin' Like a King</option>
          <option>Somewhere in Between</option>
        </select>
        <div>How long do you want to go for?</div>
        <input></input>
        <button>Let's Do It!</button>
      </div>
    )
  } else {
    return null;
  }
};

export default Travel;