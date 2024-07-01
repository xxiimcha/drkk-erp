const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const payrollSchema = new Schema({
  employeeName: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  // Add more fields as necessary
}, {
  timestamps: true,
});

const Payroll = mongoose.model('Payroll', payrollSchema);

module.exports = Payroll;
