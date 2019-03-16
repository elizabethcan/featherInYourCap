import React from 'react';

const RetirementPlan = (props) => {
  if (props.display === true) {
    return (
      <div>
        <div>Plan</div>
      </div>
    )
  } else {
    return null;
  }
};

export default RetirementPlan;