const router = require('express').Router();
let HomeSettings = require('../models/homeSettings.model');

// Example GET route
router.route('/').get((req, res) => {
  HomeSettings.find()
    .then(settings => res.json(settings))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Example POST route
router.route('/add').post((req, res) => {
  const newSetting = new HomeSettings(req.body);

  newSetting.save()
    .then(() => res.json('Home setting added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
