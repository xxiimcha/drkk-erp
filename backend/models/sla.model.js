const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const slaSchema = new Schema({
  customerName: { type: String, required: true },
  agreementDetails: { type: String, required: true },
  effectiveDate: { type: Date, required: true },
  expirationDate: { type: Date, required: true }
}, {
  timestamps: true,
});

const SLA = mongoose.model('SLA', slaSchema);

module.exports = SLA;
