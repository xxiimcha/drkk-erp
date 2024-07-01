const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const leaveRequestSchema = new Schema({
  employeeName: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  // Add more fields as necessary
}, {
  timestamps: true,
});

const LeaveRequest = mongoose.model('LeaveRequest', leaveRequestSchema);

module.exports = LeaveRequest;
