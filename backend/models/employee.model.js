// models/employee.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  homePhone: { type: String, required: true },
  alternatePhone: { type: String },
  email: { type: String, required: true },
  ssnOrGovId: { type: String, required: true },
  birthDate: { type: Date, required: true },
  maritalStatus: { type: String },
  spouseName: { type: String },
  spouseEmployer: { type: String },
  spouseWorkPhone: { type: String },
  jobTitle: { type: String, required: true },
  employeeId: { type: String, required: true },
  supervisor: { type: String },
  department: { type: String, required: true },
  workLocation: { type: String },
  workEmail: { type: String, required: true },
  workPhone: { type: String },
  cellPhone: { type: String },
  startDate: { type: Date, required: true },
  salary: { type: Number, required: true },
  emergencyContactName: { type: String, required: true },
  emergencyContactAddress: { type: String, required: true },
  emergencyContactPhone: { type: String, required: true },
  emergencyContactRelationship: { type: String, required: true },
  sss: { type: String },
  pagibig: { type: String },
  tin: { type: String },
  gsis: { type: String },
}, {
  timestamps: true,
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
