import React from 'react';

const Goals = (props) => {
  if (props.view === 'goals') {
    return (
      <div>
        Create a New Goal!
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