import React from 'react';

const Bill = (props) => {
  return (
    <div>
      {Object.keys(props.bills).map((bill) => {
        return (
          <div>
            <div>{bill}</div>
            <div>
              Amount:
              <input></input>
            </div>
          </div>
        );
      })}
    </div>
  )
};

export default Bill;