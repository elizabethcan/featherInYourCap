const Country = require('../models/country.js');

var getCountry = (country, callback) => {
  console.log(typeof(country));
  Country
    .find({id: country}, (err, country) => {
      if (err) {
        callback(err);
      } else {
        callback(null, country);
      }
    })
};

module.exports = {
  getCountry,
};