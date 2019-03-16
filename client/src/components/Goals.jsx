import React from 'react';

const Goals = (props) => {
  if (props.view === 'goals') {
    return (
      <div>
        <div>You Have ${props.toSpend} Per Month To Contribute To A Trip!</div>
        <button id="travelGoal" onClick={props.setGoal}>Create a New Trip!</button>
        <div>
          <button onClick={props.back}>Back</button>
        </div>
      </div>
    )
  } else {
    return null;
  }
};

export default Goals;