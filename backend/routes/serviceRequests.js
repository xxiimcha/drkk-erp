const router = require('express').Router();
let ServiceRequest = require('../models/serviceRequest.model'); // Ensure this model exists

// Get all service requests
router.route('/').get((req, res) => {
  ServiceRequest.find()
    .then((requests) => res.json(requests))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Add a new service request
router.route('/add').post((req, res) => {
  const { customerName, requestDetails, date } = req.body;

  const newServiceRequest = new ServiceRequest({ customerName, requestDetails, date });

  newServiceRequest
    .save()
    .then(() => res.json('Service request added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
