// backend/routes/customAssets.js
const router = require('express').Router();
let CustomAsset = require('../models/customAsset.model');

router.route('/').get((req, res) => {
  CustomAsset.find()
    .then(assets => res.json(assets))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  CustomAsset.findById(req.params.id)
    .then(asset => res.json(asset))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const { name, type, properties } = req.body;
  const newCustomAsset = new CustomAsset({ name, type, properties });

  newCustomAsset.save()
    .then(() => res.json('Custom Asset added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
