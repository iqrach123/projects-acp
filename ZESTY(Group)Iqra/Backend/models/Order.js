const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  address: String,
  paymentMethod: String,
  orderItems: Array,
  total: Number,
});

module.exports = mongoose.model('Order', orderSchema);
