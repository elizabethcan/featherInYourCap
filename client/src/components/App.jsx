import React from 'react';
import Salary from './Salary.jsx';
import Bills from './Bills.jsx';
import Goals from './Goals.jsx';
import Travel from './Travel.jsx';
import House from './House.jsx';
import Car from './Car.jsx';
import Retirement from './Retirement.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changePay = this.changePay.bind(this);
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
      goal: undefined,
    }
  }

  changePay(event) {
    var pay = parseInt(event.target.value) || undefined;
    this.setState({
      pay: pay,
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
    console.log(event.target.id);
    var goal = event.target.id;
    var view = this.state.view;
    var view;
    if (goal === 'travelGoal') {
      view = 3;
    } else if (goal = 'houseGoal') {
      view = 4;
    } else if (goal = 'carGoal') {
      view = 5;
    } else if (goal = 'retirementGoal') {
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
        <Salary pay={this.state.pay} changePay={this.changePay} view={this.state.views[this.state.view]} submit={this.moveForward}/>
        <Bills bills={this.state.bills} view={this.state.views[this.state.view]} back={this.moveBackward} submit={this.moveForward} setBill={this.addBill} totalBills={this.totalBills}/>
        <Goals toSpend={this.state.toSpend} view={this.state.views[this.state.view]} back={this.moveBackward} setGoal={this.setGoal}/>
        <Travel view={this.state.views[this.state.view]}/>
        <House view={this.state.views[this.state.view]}/>
        <Car view={this.state.views[this.state.view]}/>
        <Retirement view={this.state.views[this.state.view]}/>
      </div>
    );
  }
}

export default App;