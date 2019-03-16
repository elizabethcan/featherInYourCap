import React from 'react';

const Bill = (props) => {
  return (
    <div>
      {Object.keys(props.bills).map((bill) => {
        return (
          <div key={bill}>
            <div>{bill}:</div>
            <input id={bill} value={props.bills[bill]} onChange={props.setBill}></input>
          </div>
        );
      })}
    </div>
  )
};

export default Bill;