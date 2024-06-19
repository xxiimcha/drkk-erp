const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resourceAllocationSchema = new Schema(
  {
    task: { type: String, required: true },
    resource: { type: String, required: true },
    dateAssigned: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const ResourceAllocation = mongoose.model('ResourceAllocation', resourceAllocationSchema);

module.exports = ResourceAllocation;
