const router = require('express').Router();
let Contact = require('../models/contact.model');

router.route('/').get((req, res) => {
  Contact.find()
    .then(contact => res.json(contact))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const newContact = new Contact(req.body);

  newContact.save()
    .then(() => res.json('Contact settings added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;