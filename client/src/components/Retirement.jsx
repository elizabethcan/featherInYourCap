import React from 'react';
import RetirementPlan from './RetirementPlan.jsx';

const Retirement = (props) => {
  if (props.view === 'retirementGoal') {
    return (
      <div>
        <div>Set a Retirement Goal!</div>
        <div>In order to retire, you must have 25 times your annual spending saved.</div>
        <div>How much do you currently have saved for retirement?</div>
        <div>
          <input value={props.currentSavings} onChange={props.changeSavings}></input>
          <button onClick={props.submit}>Submit</button>
        </div>
      </div>
    )
  } else {
    return null;
  }
};

export default Retirement;