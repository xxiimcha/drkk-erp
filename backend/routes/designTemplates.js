// backend/routes/designTemplates.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const DesignTemplate = require('../models/designTemplate.model');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Get all design templates
router.get('/', async (req, res) => {
  try {
    const templates = await DesignTemplate.find();
    res.json(templates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new design template
router.post('/', upload.single('file'), async (req, res) => {
  const { name, description, customizationOptions } = req.body;
  const file = req.file ? req.file.path : '';
  const template = new DesignTemplate({
    name,
    description,
    customizationOptions: JSON.parse(customizationOptions),
    file
  });

  try {
    const newTemplate = await template.save();
    res.status(201).json(newTemplate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
