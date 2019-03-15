import React from 'react';
import Salary from './Salary.jsx';
import Bills from './Bills.jsx';
import Goals from './Goals.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changePay = this.changePay.bind(this);
    this.changeView = this.changeView.bind(this);
    this.addBill = this.addBill.bind(this);
    this.totalBills = this.totalBills.bind(this);
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
      toSpend: 0,
      views: ['salary', 'bills', 'goals'],
      view: 0
    }
  }

  changePay(event) {
    this.setState({
      [event.target.id]: parseInt(event.target.value),
    });
  }

  changeView(event) {
    event.preventDefault();
    let view = this.state.view + 1;
    this.setState({
      view: view
    });
  }

  addBill(event) {
    var bills = this.state.bills;
    bills[event.target.id] = parseInt(event.target.value) || undefined;
    this.setState({
      bills: bills,
    })
  }

  totalBills(event) {
    event.preventDefault();
    var totalSpent = 0;
    for (var bill in this.state.bills) {
      totalSpent += this.state.bills[bill];
    }
    var toSpend = this.state.pay - totalSpent;
    this.setState({
      toSpend: toSpend,
    });
    this.changeView(event);
  }

  render() {
    return (
      <div>
        <h1>Feather In Your Cap</h1>
        <Salary pay={this.state.pay} changePay={this.changePay} view={this.state.views[this.state.view]} submit={this.changeView}/>
        <Bills bills={this.state.bills} view={this.state.views[this.state.view]} submit={this.changeView} setBill={this.addBill} totalBills={this.totalBills}/>
        <Goals toSpend={this.state.toSpend} view={this.state.views[this.state.view]}/>
      </div>
    );
  }
}

export default App;