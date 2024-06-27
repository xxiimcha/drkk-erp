// backend/routes/designTemplates.js
const router = require('express').Router();
let DesignTemplate = require('../models/designTemplate.model');

router.route('/').get((req, res) => {
  DesignTemplate.find()
    .then(templates => res.json(templates))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  DesignTemplate.findById(req.params.id)
    .then(template => res.json(template))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const { name, description, customizationOptions } = req.body;
  const newDesignTemplate = new DesignTemplate({ name, description, customizationOptions });

  newDesignTemplate.save()
    .then(() => res.json('Design Template added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
