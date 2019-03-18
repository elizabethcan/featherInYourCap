import React from 'react';
import Bill from './Bill.jsx';

const Bills = (props) => {
  // const disableButton = () => {
  //   let disabled = true;
  //   for (var bill in props.bills) {
  //     if (props.bills[bill].length > 0) {
  //       disabled = false;
  //     }
  //   }
  //   return disabled;
  // }

  if (props.show === true) {
    return (
      <div id="bills">
        <div>What are your monthly recurring bills?</div>
        <Bill bills={props.bills} setBill={props.setBill}/>
        <div>
          <button type="submit" onClick={props.totalBills}>Submit</button>
        </div>
      </div>
    )
  } else {
    return null;
  }
};

export default Bills;