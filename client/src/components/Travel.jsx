import React from 'react';

const Travel = (props) => {
  if (props.view === 'travelGoal') {
    return (
      <div>
        <div>Travel</div>
        
      </div>
    )
  } else {
    return null;
  }
};

export default Travel;