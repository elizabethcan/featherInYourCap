import React from 'react';

const Retirement = (props) => {
  if (props.view === 'retirementGoal') {
    return (
      <div>
        <div>Retirement</div>
      </div>
    )
  } else {
    return null;
  }
};

export default Retirement;