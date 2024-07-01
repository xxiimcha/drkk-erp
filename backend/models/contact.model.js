// models/contact.model.js
const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema({
    setting1: String,
    setting2: String,
  });
  
  module.exports = mongoose.model('Contact', ContactSchema);
  