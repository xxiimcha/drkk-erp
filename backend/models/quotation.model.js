// backend/models/quotation.model.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const quotationSchema = new Schema({
  customerName: { type: String, required: true },
  items: [{ description: String, quantity: Number, price: Number }],
  total: { type: Number, required: true },
  status: { type: String, default: 'pending' },
}, {
  timestamps: true,
});

const Quotation = mongoose.model('Quotation', quotationSchema);

module.exports = Quotation;
