import React from 'react';
import axios from 'axios';
import config from '../../../axios.config.js';
import Salary from './Salary.jsx';
import Bills from './Bills.jsx';
import Travel from './Travel.jsx';
import ToSpend from './ToSpend.jsx';
import countries from '../../../database/dummyData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getCountries = this.getCountries.bind(this);
    this.changeState = this.changeState.bind(this);
    this.submitPay = this.submitPay.bind(this);
    this.changeView = this.changeView.bind(this);
    this.addBill = this.addBill.bind(this);
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
      view: 'salary',
      goal: {
        location: '',
        monthsToGoal: '',
        budget: '',
        days: '',
      },
      showGoals: false,
      countries: []  
    }
  }

  componentDidMount() {
    this.setState({
      countries: countries
    });
  }

  getCountries() {
    // axios.get('https://www.budgetyourtrip.com/api/v3/countries', config.config)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })

  }

  changeState(event) {
    var value = parseInt(event.target.value) || undefined;
    this.setState({
      [event.target.name]: value,
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
      showBudget: !this.state.showBudget,
      showGoals: !this.state.showGoals
    });
  }

  changeView(event) {
    event.preventDefault();
    this.setState({
      view: event.target.id
    })
  }

  submitPay(event) {
    event.preventDefault();
    this.setState({
      showPay: !this.state.showPay,
      showBudget: !this.showBudget,
      toSpend: this.state.pay
    })
  }

  render() {
    return (
      <div>
        <h1>Feather In Your Cap</h1>
        <div>
          <ToSpend toSpend={this.state.toSpend}/>
          <Salary pay={this.state.pay} changePay={this.changeState} submit={this.submitPay} show={this.state.showPay}/>
          <Bills show={this.state.showBudget} bills={this.state.bills} setBill={this.addBill} totalBills={this.totalBills}/>
          <Travel show={this.state.showGoals} countries={this.state.countries} goal={this.state.goal} setMonths={this.changeState}/>
        </div>
      </div>
    );
  }
}

export default App;