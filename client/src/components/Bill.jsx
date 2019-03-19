import React from 'react';

const Bill = (props) => {
  return (
    <div id="bills">
      {Object.keys(props.bills).map((bill) => {
        return (
          <div id="bill" key={bill}>
            <div>{bill}:</div>
            <input id={bill} value={props.bills[bill]} onChange={props.setBill}></input>
          </div>
        );
      })}
    </div>
  )
};

export default Bill;