const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
  employeeName: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, required: true },
  // Add more fields as necessary
}, {
  timestamps: true,
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
