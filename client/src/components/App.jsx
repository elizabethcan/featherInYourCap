import React from 'react';
import axios from 'axios';
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
    this.back = this.back.bind(this);
    this.calculateDailyCost = this.calculateDailyCost.bind(this);
    this.calculatePlan = this.calculatePlan.bind(this);
    this.changeNumber = this.changeNumber.bind(this);
    this.changeString = this.changeString.bind(this);
    this.getConversionRate = this.getConversionRate.bind(this);
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
    axios.get('/countries')
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

  back(event) {
    event.preventDefault();
    this.setState({
      showGoals: !this.state.showGoals,
      showPlan: !this.state.showPlan
    })
  }

  calculateDailyCost(callback) {
    var averageCost = 0;
    var costs = this.state.countryInfo.costs;
    for (var i = 0; i < costs.length; i++) {
      if (costs[i].category_id === "0") {
        averageCost = costs[i][this.state.budget]
      }
    }
    callback(averageCost);
  }

  calculatePlan(event) {
    event.preventDefault();
    this.calculateDailyCost((cost) => {
      var perDay = (cost * this.state.conversionRate).toFixed(2);
      var total = (perDay * this.state.days).toFixed();
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

  getConversionRate(currency) {
    axios.get(`https://cors-anywhere.herokuapp.com/https://www.budgetyourtrip.com/api/v3/currencies/convert/${currency}/USD`)
      .then((res) => {
        this.setState({
          conversionRate: parseFloat(res.data.data.rate),
        });
      })
  }

  setBudget(event) {
    this.setState({
      budget: event.target.value,
    }, () => {
      var costs = this.state.countryInfo.costs;
      for (var i = 0; i < costs.length; i++) {
        if (costs[i].category_id === 1) {
          var accomodation = costs[i][this.state.budget]
        }
      }
    });
  }

  setCountry(event) {
    this.setState({
      location: parseInt(event.target.value),
    }, () => {
      var code = this.state.countries[this.state.location].country_code;
      axios.get(`https://cors-anywhere.herokuapp.com/https://www.budgetyourtrip.com/api/v3/costs/countryinfo/${code}`)
        .then((res) => {
          this.setState({
            countryInfo: res.data.data
          });
          this.getConversionRate(res.data.data.info.currency_code)
        });
      axios.get(`https://cors-anywhere.herokuapp.com/https://www.budgetyourtrip.com/api/v3/costs/countryhighlights/${code}`)
        .then((res) => {
          this.setState({
            countryHighlights: res.data.data
          });
        })
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
      <>
      <div>THIS IS A TEST</div>
      <div id="main-container">
        <div id="left-container">
          <Country show={this.state.showGoals} countryInfo={this.state.countryInfo} countryHighlights={this.state.countryHighlights} conversionRate={this.state.conversionRate}/>
        </div>
        <div id="right-container">
          <h1 id="header">Feather In Your Cap</h1>
          <div>
            <Landing />
            <Plan show={this.state.showPlan} details={this.state.tripDetails} country={this.state.countryInfo}back={this.back}/>
            <ToSpend toSpend={this.state.toSpend}/>
            <Salary pay={this.state.pay} changePay={this.changeNumber} submit={this.submitPay} show={this.state.showPay}/>
            <Bills show={this.state.showBudget} bills={this.state.bills} setBill={this.addBill} totalBills={this.totalBills}/>
            <Travel show={this.state.showGoals} countries={this.state.countries} setCountry={this.setCountry} changeString={this.changeString} changeNumber={this.changeNumber} days={this.state.days} months={this.state.monthsToGoal} calculate={this.calculatePlan}/>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default App;