// models/work.model.js
const mongoose = require('mongoose');
const WorkSchema = new mongoose.Schema({
    name: String,
    description: String,
  });
  
  module.exports = mongoose.model('Work', WorkSchema);