// backend/models/order.model.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  customerName: { type: String, required: true },
  items: [{ description: String, quantity: Number, price: Number }],
  total: { type: Number, required: true },
  status: { type: String, default: 'processing' },
}, {
  timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
