const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  income: String,
  city: String,
  car: String,
  quote: String,
  phone_price: Number
});

const User = mongoose.model('user', UserSchema);

module.exports = User;