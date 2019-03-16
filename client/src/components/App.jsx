import React from 'react';
import Salary from './Salary.jsx';
import Bills from './Bills.jsx';
import Goals from './Goals.jsx';
import Travel from './Travel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    this.moveForward = this.moveForward.bind(this);
    this.moveBackward = this.moveBackward.bind(this);
    this.addBill = this.addBill.bind(this);
    this.totalBills = this.totalBills.bind(this);
    this.setGoal = this.setGoal.bind(this);
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
      views: ['salary', 'bills', 'goals', 'travelGoal', 'houseGoal', 'carGoal', 'retirementGoal'],
      view: 0,
      monthsToGoal: undefined,
    }
  }

  componentDidMount() {
  }

  changeState(event) {
    var value = parseInt(event.target.value) || undefined;
    this.setState({
      [event.target.name]: value,
    });
  }

  moveForward(event) {
    event.preventDefault();
    let view = this.state.view + 1;
    this.setState({
      view: view
    });
  }

  moveBackward(event) {
    event.preventDefault();
    let view = this.state.view - 1;
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
      if (this.state.bills[bill] !== undefined) {
        totalSpent += this.state.bills[bill];
      }
    }
    var toSpend = this.state.pay - totalSpent;
    this.setState({
      toSpend: toSpend,
    });
    this.moveForward(event);
  }

  setGoal(event) {
    var goal = event.target.id;
    var view = this.state.view;
    if (goal === 'travelGoal') {
      view = 3;
    } else if (goal === 'houseGoal') {
      view = 4;
    } else if (goal === 'carGoal') {
      view = 5;
    } else if (goal === 'retirementGoal') {
      view = 6;
    }
    this.setState({
      view: view,
    });
  }

  render() {
    return (
      <div>
        <h1>Feather In Your Cap</h1>
        <div>
          <Salary pay={this.state.pay} changePay={this.changeState} submit={this.moveForward} view={this.state.views[this.state.view]}/>
          <Bills bills={this.state.bills} view={this.state.views[this.state.view]} back={this.moveBackward} submit={this.moveForward} setBill={this.addBill} totalBills={this.totalBills}/>
          <Goals toSpend={this.state.toSpend} view={this.state.views[this.state.view]} back={this.moveBackward} setGoal={this.setGoal}/>
          <Travel view={this.state.views[this.state.view]} months={this.state.monthsToGoal} setMonths={this.changeState}/>
        </div>
      </div>
    );
  }
}

export default App;