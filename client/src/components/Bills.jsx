import React from 'react';
import Bill from './Bill.jsx';

const Bills = (props) => {
  if (props.view === 'bills') {
    return (
      <div id="bills">
        <div>What are your monthly recurring bills?</div>
        <Bill bills={props.bills} setBill={props.setBill}/>
        <div>
          <button type="submit" onClick={props.submit}>Submit</button>
        </div>
      </div>
    )
  } else {
    return null;
  }
};

export default Bills;