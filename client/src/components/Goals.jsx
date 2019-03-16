import React from 'react';

const Goals = (props) => {
  if (props.view === 'goals') {
    return (
      <div>
        <div>You Have ${props.toSpend} To Contribute To A Goal!</div>
        <div>Create a New Goal:</div>
        <button>Travel</button>
        <button>House</button>
        <button>Car</button>
        <button>Retirement</button>
      </div>
    )
  } else {
    return null;
  }
};

export default Goals;