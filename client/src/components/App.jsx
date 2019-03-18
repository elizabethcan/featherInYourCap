import React from 'react';
import axios from 'axios';
import headers from '../../../axios.config.js';
import Salary from './Salary.jsx';
import Bills from './Bills.jsx';
import Goals from './Goals.jsx';
import Travel from './Travel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.getCountries = this.getCountries.bind(this);
    this.changeState = this.changeState.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    this.changeView = this.changeView.bind(this);
    this.moveForward = this.moveForward.bind(this);
    this.moveBackward = this.moveBackward.bind(this);
    this.addBill = this.addBill.bind(this);
    this.totalBills = this.totalBills.bind(this);
    this.setGoal = this.setGoal.bind(this);
    this.state = {
      pay: '',
      showPay: false,
      bills: {
        Rent: '',
        Utilities: '',
        Car: '',
        Health: '',
        Groceries: '',
        Fuel: '',
        Other: ''
      },
      toSpend: '',
      view: 'salary',
      goal: {
        location: '',
        monthsToGoal: '',
        budget: '',
        days: '',
      },
      countries: []  
    }
  }

  componentDidMount() {
    // this.getCountries();
  }

  // getCountries() {
  //   axios.get(
  //     'https://www.budgetyourtrip.com/api/v3/countries', 
  //     {headers: {
  //       'X-API-KEY': 'ELIZABETHCANNON230'
  //     }})
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }

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

  changeView(event) {
    event.preventDefault();
    this.setState({
      view: event.target.id
    })
  }

  toggleShow(event) {
    this.setState({
      [event.target.id]: !this.state[event.target.id],
    })
  }

  render() {
    return (
      <div>
        <h1>Feather In Your Cap</h1>
        <div>
          <div>
            <button id="salary" onClick={this.changeView}>Salary</button>
            <button id="bills" onClick={this.changeView}>Budget</button>
            <button id="goals" onClick={this.changeView}>Goals</button>
          </div>
          <Salary pay={this.state.pay} changePay={this.changeState} submit={this.toggleShow} show={this.state.showPay}/>
          <Bills bills={this.state.bills} view={this.state.view} back={this.moveBackward} submit={this.moveForward} setBill={this.addBill} totalBills={this.totalBills}/>
          <Goals toSpend={this.state.toSpend} view={this.state.view} back={this.moveBackward} setGoal={this.setGoal}/>
          <Travel view={this.state.view} goal={this.state.goal} setMonths={this.changeState}/>
        </div>
      </div>
    );
  }
}

export default App;