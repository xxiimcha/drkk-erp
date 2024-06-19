const router = require('express').Router();
let Message = require('../models/message.model');

// Get all messages
router.route('/').get((req, res) => {
  Message.find()
    .then((messages) => res.json(messages))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Add a new message
router.route('/add').post((req, res) => {
  const { content } = req.body;

  const newMessage = new Message({ content, isSender: true });

  newMessage
    .save()
    .then(() => res.json('Message added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
