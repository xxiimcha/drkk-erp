// backend/models/designVersion.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const designVersionSchema = new Schema({
  version: { type: String, required: true },
  description: { type: String, required: true },
  changes: { type: Array, default: [] },
  createdAt: { type: Date, default: Date.now }
}, {
  timestamps: true,
});

const DesignVersion = mongoose.model('DesignVersion', designVersionSchema);

module.exports = DesignVersion;
