const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    content: { type: String, required: true },
    isSender: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
