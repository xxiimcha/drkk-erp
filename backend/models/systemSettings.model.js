const mongoose = require('mongoose');

const systemSettingsSchema = new mongoose.Schema({
  headerImage: { type: String, required: false },
  logo: { type: String, required: false },
  tagline: { type: String, required: false },
  services: { type: Array, required: false },
  works: { type: Array, required: false },
}, {
  timestamps: true,
});

const SystemSettings = mongoose.model('SystemSettings', systemSettingsSchema);

module.exports = SystemSettings;
