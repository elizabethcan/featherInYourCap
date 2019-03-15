import React from 'react';
import Salary from './Salary.jsx';
import Bills from './Bills.jsx';
import Goals from './Goals.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    this.changeView = this.changeView.bind(this);
    this.addBill = this.addBill.bind(this);
    this.state = {
      pay: undefined,
      bills: {
        Rent: undefined,
        Utilities: undefined,
        Car: undefined,
        Health: undefined,
        Groceries: undefined,
        Fuel: undefined,
        Other: undefined
      },
      views: ['salary', 'bills', 'goals'],
      view: 0
    }
  }

  changeState(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  changeView(event) {
    event.preventDefault();
    let view = this.state.view + 1;
    console.log(view);
    this.setState({
      view: view
    });
  }

  addBill(event) {
    if (this.state.bills === undefined) {
      let bills = event.target.value
    } else {
      let bills = this.state.bills + event.target.value
    }
    this.setState({
      bills: bills
    });
  }

  render() {
    return (
      <div>
        <h1>You Can Afford That Too</h1>
        <Salary pay={this.state.pay} changePay={this.changeState} view={this.state.views[this.state.view]} submit={this.changeView}/>
        <Bills bills={this.state.bills} view={this.state.views[this.state.view]} submit={this.changeView}/>
        <Goals view={this.state.views[this.state.view]}/>
      </div>
    );
  }
}

export default App;