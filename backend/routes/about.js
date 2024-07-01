const router = require('express').Router();
let About = require('../models/about.model');

router.route('/').get((req, res) => {
  About.find()
    .then(about => res.json(about))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const newAbout = new About(req.body);

  newAbout.save()
    .then(() => res.json('About us settings added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;