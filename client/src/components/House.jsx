import React from 'react';

const House = (props) => {
  if (props.view === 'houseGoal') {
    return (
      <div>
        <div>House</div>
      </div>
    )
  } else {
    return null;
  }
};

export default House;