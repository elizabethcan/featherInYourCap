const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  first: String,
  last: String,
  salary: Number,
  budget: {
    rent: Number,
    utilities: Number,
    car: Number,
    health: Number,
    groceries: Number,
    fuel: Number,
    other: Number,
  },
  goals: [
    {
      id: Number,
      type: String,
      name: String,
      total: Number,
      monthly: Number
    }
  ]
});

var User = mongoose.model('User', userSchema);

module.exports = User;