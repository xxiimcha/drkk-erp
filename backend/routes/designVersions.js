// backend/routes/designVersions.js
const router = require('express').Router();
let DesignVersion = require('../models/designVersion.model');

router.route('/').get((req, res) => {
  DesignVersion.find()
    .then(versions => res.json(versions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  DesignVersion.findById(req.params.id)
    .then(version => res.json(version))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const { version, description, changes } = req.body;
  const newDesignVersion = new DesignVersion({ version, description, changes });

  newDesignVersion.save()
    .then(() => res.json('Design Version added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
