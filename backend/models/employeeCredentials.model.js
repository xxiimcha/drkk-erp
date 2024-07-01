// models/employeeCredentials.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeCredentialsSchema = new Schema({
  employeeId: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  position: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  status: { type: String, default: 'active' }, // status could be active, inactive, etc.
}, {
  timestamps: true,
});

const EmployeeCredentials = mongoose.model('EmployeeCredentials', employeeCredentialsSchema);

module.exports = EmployeeCredentials;
