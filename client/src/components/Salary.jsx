import React from 'react';

const Salary = (props) => {
  if (props.view === 'salary') {
    return (
      <div id="salary">
        <div>What is your take home pay per month?</div>
        <input name="pay" value={props.pay} onChange={props.changePay}></input>
        <button type="submit" disabled={!props.pay} onClick={props.submit}>Submit</button>
      </div>
    )
  } else {
    return null;
  }
};

export default Salary;