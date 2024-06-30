// backend/models/materialRequest.model.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const materialRequestSchema = new Schema({
  materialName: { type: String, required: true },
  quantity: { type: Number, required: true },
  status: { type: String, required: true, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
}, {
  timestamps: true,
});

const MaterialRequest = mongoose.model('MaterialRequest', materialRequestSchema);

module.exports = MaterialRequest;
