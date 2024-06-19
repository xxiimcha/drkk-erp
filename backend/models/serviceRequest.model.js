const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const serviceRequestSchema = new Schema(
  {
    customerName: { type: String, required: true },
    requestDetails: { type: String, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const ServiceRequest = mongoose.model('ServiceRequest', serviceRequestSchema);

module.exports = ServiceRequest;
