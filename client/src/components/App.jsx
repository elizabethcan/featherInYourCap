import React from 'react';
import axios from 'axios';
import config from '../../../axios.config.js';
import Salary from './Salary.jsx';
import Bills from './Bills.jsx';
import Travel from './Travel.jsx';
import ToSpend from './ToSpend.jsx';
import countries from '../../../database/dummyData.js';
import Plan from './Plan.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addBill = this.addBill.bind(this);
    this.calculatePlan = this.calculatePlan.bind(this);
    this.changeState = this.changeState.bind(this);
    this.submitPay = this.submitPay.bind(this);
    this.totalBills = this.totalBills.bind(this);
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
      showBudget: false,
      toSpend: '',
      location: 0,
      monthsToGoal: '',
      budget: 0,
      days: '',
      tripDetails: {},
      showGoals: false,
      countries: countries,
      showPlan: false,
    }
  }

  addBill(event) {
    var bills = this.state.bills;
    bills[event.target.id] = parseInt(event.target.value) || undefined;
    this.setState({
      bills: bills,
    })
  }
  
  calculatePlan(event) {
    event.preventDefault();
    var dailyCost = this.state.countries[this.state.location].budget[this.state.budget];
    var totalCost = this.state.days * dailyCost;
    var toSave = totalCost/this.state.monthsToGoal;
    this.setState({
      tripDetails: {
        dailyCost: dailyCost,
        totalCost: totalCost,
        toSave: toSave
      },
      toSpend: this.state.toSpend - toSave,
      showGoals: !this.state.showGoals,
      showPlan: !this.state.showPlan
    });
    console.log(this.state.tripDetails)
  }

  changeState(event) {
    var value = parseInt(event.target.value) || undefined;
    this.setState({
      [event.target.name]: value,
    });
  }

  submitPay(event) {
    event.preventDefault();
    this.setState({
      showPay: !this.state.showPay,
      showBudget: !this.showBudget,
      toSpend: this.state.pay
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
      showBudget: !this.state.showBudget,
      showGoals: !this.state.showGoals
    });
  }

  render() {
    return (
      <div>
        <h1>Feather In Your Cap</h1>
        <div>
          <Plan show={this.state.showPlan} details={this.state.tripDetails}/>
          <ToSpend toSpend={this.state.toSpend}/>
          <Salary pay={this.state.pay} changePay={this.changeState} submit={this.submitPay} show={this.state.showPay}/>
          <Bills show={this.state.showBudget} bills={this.state.bills} setBill={this.addBill} totalBills={this.totalBills}/>
          <Travel show={this.state.showGoals} countries={this.state.countries} changeState={this.changeState} days={this.state.days} months={this.state.monthsToGoal} calculate={this.calculatePlan}/>
        </div>
      </div>
    );
  }
}

export default App;