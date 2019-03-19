import React from 'react';

const ToSpend = (props) => {
  if(props.toSpend !== '') {
    return (
      <div className="container" id="spend">
        <div>You have ${props.toSpend} of your monthly pay left to budget!</div>
      </div>
    )
  } else {
    return null;
  }
};

export default ToSpend;