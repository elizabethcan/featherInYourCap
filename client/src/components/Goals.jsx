import React from 'react';

const Goals = (props) => {
  if (props.view === 'goals') {
    return (
      <div>
        <div>You Have ${props.toSpend} To Contribute To A Goal!</div>
        <div>Create a New Goal:</div>
        <button id="travelGoal" onClick={props.setGoal}>Travel</button>
        <button id="houseGoal" onClick={props.setGoal}>House</button>
        <button id="carGoal" onClick={props.setGoal}>Car</button>
        <button id="retirementGoal" onClick={props.setGoal}>Retirement</button>
      </div>
    )
  } else {
    return null;
  }
};

export default Goals;