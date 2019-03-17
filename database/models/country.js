const mongoose = require('mongoose');

var countrySchema = new mongoose.Schema({
  name: Number,
  budget: Object
});

var Country = mongoose.model('Country', countrySchema);

module.exports = Country;