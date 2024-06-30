// backend/models/supplier.model.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplierSchema = new Schema({
  name: { type: String, required: true },
  contactInfo: { type: String, required: true },
  address: { type: String, required: true },
  itemsSupplied: { type: [String], required: true },
}, {
  timestamps: true,
});

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;
