// backend/models/customAsset.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customAssetSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  properties: { type: Object, default: {} }
}, {
  timestamps: true,
});

const CustomAsset = mongoose.model('CustomAsset', customAssetSchema);

module.exports = CustomAsset;
