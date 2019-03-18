import React from 'react';

const Salary = (props) => {
  if (props.show === false) {
    return (
      <div id="salary">
        <div>What is your take home pay per month?</div>
        <input name="pay" value={props.pay} onChange={props.changePay}></input>
        <button id="showPay" type="submit" disabled={!props.pay} onClick={props.submit}>Submit</button>
      </div>
    )
  } else {
    return null;
  }
};

export default Salary;