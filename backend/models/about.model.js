// models/about.model.js
const mongoose = require('mongoose');
const AboutSchema = new mongoose.Schema({
    setting1: String,
    setting2: String,
  });
  
  module.exports = mongoose.model('About', AboutSchema);