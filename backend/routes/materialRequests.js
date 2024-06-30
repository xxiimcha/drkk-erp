// backend/routes/materialRequests.js

const express = require('express');
const router = express.Router();
const MaterialRequest = require('../models/materialRequest.model');

// Get all material requests
router.get('/', async (req, res) => {
  try {
    const requests = await MaterialRequest.find();
    res.json(requests);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Create a new material request
router.post('/', async (req, res) => {
  const newRequest = new MaterialRequest({
    materialName: req.body.materialName,
    quantity: req.body.quantity,
    status: 'pending',
  });

  try {
    const savedRequest = await newRequest.save();
    res.json(savedRequest);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Update material request status
router.patch('/:id', async (req, res) => {
  try {
    const updatedRequest = await MaterialRequest.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(updatedRequest);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

module.exports = router;
