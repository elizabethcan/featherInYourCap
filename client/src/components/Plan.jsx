import React from 'react';

const Plan = (props) => {
  if (props.show === true) {
    return (
      <div>This trip will cost you an average of ${props.details.dailyCost} per day, for a total cost of ${props.details.totalCost}. In order to meet your goal, you need to save ${props.details.toSave.toFixed()} per month!</div>
    );
  } else {
    return null;
  }
};

export default Plan;