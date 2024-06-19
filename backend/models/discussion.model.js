// backend/models/discussion.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  content: { type: String, required: true },
  isSender: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now }
});

const discussionSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  messages: [messageSchema]
}, {
  timestamps: true,
});

const Discussion = mongoose.model('Discussion', discussionSchema);

module.exports = Discussion;
