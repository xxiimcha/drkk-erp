// backend/routes/discussions.js
const router = require('express').Router();
let Discussion = require('../models/discussion.model');

// Get all discussions
router.route('/').get((req, res) => {
  Discussion.find()
    .then(discussions => res.json(discussions))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Get discussion details
router.route('/:id').get((req, res) => {
  Discussion.findById(req.params.id)
    .then(discussion => res.json(discussion))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add new discussion
router.route('/add').post((req, res) => {
  const { title, content } = req.body;
  const newDiscussion = new Discussion({ title, content, messages: [] });

  newDiscussion.save()
    .then(() => res.json('Discussion added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
