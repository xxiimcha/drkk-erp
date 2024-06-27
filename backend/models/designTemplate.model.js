// backend/models/designTemplate.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const designTemplateSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  customizationOptions: { type: Array, default: [] }
}, {
  timestamps: true,
});

const DesignTemplate = mongoose.model('DesignTemplate', designTemplateSchema);

module.exports = DesignTemplate;
