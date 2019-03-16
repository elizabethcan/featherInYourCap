import React from 'react';

const Car = (props) => {
  if (props.view === 'car') {
    return (
      <div>
        <div>Car</div>
      </div>
    )
  } else {
    return null;
  }
};

export default Car;