import React from 'react';

const Plan = (props) => {
  if (props.show === true) {
    return (
      <div>
        <p className="container" id="plan">Your trip to {props.country.info.name} will cost you an average of ${props.details.dailyCost} per day, for a total cost of ${props.details.totalCost}. In order to meet your goal, you need to save ${props.details.toSave} per month.</p>
        <button onClick={props.back}>Reset Trip</button>
      </div>
    );
  } else {
    return null;
  }
};

export default Plan;