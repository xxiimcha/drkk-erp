const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const homeSettingsSchema = new Schema({
  headerImage: { type: String, required: true },
  logo: { type: String, required: true },
  tagline: { type: String, required: true }
}, {
  timestamps: true,
});

const HomeSettings = mongoose.model('HomeSettings', homeSettingsSchema);
module.exports = HomeSettings;
