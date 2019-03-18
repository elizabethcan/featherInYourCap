import React from 'react';

const ToSpend = (props) => {
  if(props.toSpend !== '') {
    return (
      <div>
        <div>You Have ${props.toSpend} to budget!</div>
      </div>
    )
  } else {
    return null;
  }
};

export default ToSpend;