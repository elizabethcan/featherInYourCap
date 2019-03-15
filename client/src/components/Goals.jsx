import React from 'react';

const Goals = (props) => {
  if (props.view === 'goals') {
    return (
      <div>
        <div>You Have ${props.toSpend} To Contribute To A Goal!</div>
        <div>Create a New Goal:</div>
        <select>
          <option>Travel</option>
          <option>House</option>
          <option>Car</option>
          <option>Retirement</option>
        </select>
      </div>
    )
  } else {
    return null;
  }
};

export default Goals;