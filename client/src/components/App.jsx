import React from 'react';
import axios from 'axios';
import config from '../../../axios.config.js';
import Salary from './Salary.jsx';
import Bills from './Bills.jsx';
import Travel from './Travel.jsx';
import ToSpend from './ToSpend.jsx';
import Plan from './Plan.jsx';
import Landing from './Landing.jsx';
import Country from './Country.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addBill = this.addBill.bind(this);
    this.calculateDailyCost = this.calculateDailyCost.bind(this);
    this.calculatePlan = this.calculatePlan.bind(this);
    this.changeNumber = this.changeNumber.bind(this);
    this.changeString = this.changeString.bind(this);
    this.setCountry = this.setCountry.bind(this);
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
      budget: 'value_budget',
      days: '',
      tripDetails: {},
      showGoals: false,
      countries: [],
      showPlan: false,
    }
  }

  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://www.budgetyourtrip.com/api/v3/countries')
      .then((res) => {
        this.setState({
          countries: res.data.data.slice(1)
        })
      })
  }

  addBill(event) {
    var bills = this.state.bills;
    bills[event.target.id] = parseInt(event.target.value) || undefined;
    this.setState({
      bills: bills,
    })
  }
  
  // calculatePlan(event) {
  //   event.preventDefault();
  //   var dailyCost = this.state.countries[this.state.location].budget[this.state.budget];
  //   var totalCost = this.state.days * dailyCost;
  //   var toSave = totalCost/this.state.monthsToGoal;
  //   this.setState({
  //     tripDetails: {
  //       dailyCost: dailyCost,
  //       totalCost: totalCost,
  //       toSave: toSave
  //     },
  //     toSpend: this.state.toSpend - toSave,
  //     showGoals: !this.state.showGoals,
  //     showPlan: !this.state.showPlan
  //   });
  // }

  calculateDailyCost(callback) {
    var dailyCost = 0;
    var averageCost = 0;
    var costs = this.state.countryInfo.costs;
    for (var i = 0; i < costs.length; i++) {
      dailyCost += parseInt(costs[i][this.state.budget]);
    }
    averageCost = dailyCost/costs.length;
    callback(averageCost);
  }

  calculatePlan(event) {
    event.preventDefault();
    this.calculateDailyCost((cost) => {
      console.log(cost);
      axios.get(`https://cors-anywhere.herokuapp.com/https://www.budgetyourtrip.com/api/v3/currencies/convert/${this.state.countryInfo.info.country_code}/USD/${cost}`)
        .then((res) => {
          console.log(`this will cost ${res.data.data.newAmount} in USD per day`)
          var perDay = res.data.data.newAmount.toFixed(2);
          var total = perDay * this.state.days.toFixed(2);
          var save = (total/this.state.monthsToGoal).toFixed(2);
          this.setState({
            tripDetails: {
              dailyCost: perDay,
              totalCost: total,
              toSave: save
            },
            toSpend: this.state.toSpend - save,
            showGoals: !this.state.showGoals,
            showPlan: !this.state.showPlan
          });
        });
    })
  }

  changeNumber(event) {
    var value = parseInt(event.target.value) || undefined;
    this.setState({
      [event.target.name]: value,
    });
  }

  changeString(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  setCountry(event) {
    this.setState({
      location: parseInt(event.target.value),
    }, () => {
      var code = this.state.countries[this.state.location].country_code;
      var url = `https://cors-anywhere.herokuapp.com/https://www.budgetyourtrip.com/api/v3/costs/countryinfo/${code}`;
      axios.get(url)
        .then((res) => {
          this.setState({
            countryInfo: res.data.data
          })
        });
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
      <div id="main-container">
        <div id="left-container">
          <Country show={this.state.showGoals} countryInfo={this.state.countryInfo}/>
        </div>
        <div id="right-container">
          <h1 id="header">Feather In Your Cap</h1>
          <div>
            <Landing />
            <Plan show={this.state.showPlan} details={this.state.tripDetails}/>
            <ToSpend toSpend={this.state.toSpend}/>
            <Salary pay={this.state.pay} changePay={this.changeNumber} submit={this.submitPay} show={this.state.showPay}/>
            <Bills show={this.state.showBudget} bills={this.state.bills} setBill={this.addBill} totalBills={this.totalBills}/>
            <Travel show={this.state.showGoals} countries={this.state.countries} setCountry={this.setCountry} changeString={this.changeString} changeNumber={this.changeNumber} days={this.state.days} months={this.state.monthsToGoal} calculate={this.calculatePlan}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;