import React from 'react';
import Bill from './Bill.jsx';

const Bills = (props) => {
  const disableButton = () => {
    for (var bill in props.bills) {
      if (props.bills[bill] === undefined) {
        return true;
      } else {
        return false;
      }
    }
  }

  if (props.view === 'bills') {
    return (
      <div id="bills">
        <div>What are your monthly recurring bills?</div>
        <Bill bills={props.bills} setBill={props.setBill}/>
        <div>
          <button onClick={props.back}>Back</button>
          <button type="submit" disabled={disableButton()} onClick={props.totalBills}>Submit</button>
        </div>
      </div>
    )
  } else {
    return null;
  }
};

export default Bills;