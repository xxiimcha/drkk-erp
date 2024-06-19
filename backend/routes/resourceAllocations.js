const router = require('express').Router();
let ResourceAllocation = require('../models/resourceAllocation.model');

router.route('/').get((req, res) => {
  ResourceAllocation.find()
    .then((allocations) => res.json(allocations))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
  const { task, resource } = req.body;

  const newResourceAllocation = new ResourceAllocation({
    task,
    resource,
    dateAssigned: Date.now(),
  });

  newResourceAllocation
    .save()
    .then(() => res.json('Resource allocated!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
