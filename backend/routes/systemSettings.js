const router = require('express').Router();
const multer = require('multer');
const SystemSettings = require('../models/systemSettings.model');

const upload = multer({ storage: multer.memoryStorage() });

router.post('/', upload.any(), async (req, res) => {
  try {
    const { tagline, services, works } = req.body;
    const headerImage = req.files.find(file => file.fieldname === 'headerImage')?.buffer.toString('base64');
    const logo = req.files.find(file => file.fieldname === 'logo')?.buffer.toString('base64');

    const settings = new SystemSettings({
      headerImage,
      logo,
      tagline,
      services: JSON.parse(services),
      works: JSON.parse(works),
    });

    await settings.save();
    res.status(200).send('Settings saved successfully');
  } catch (error) {
    console.error('Error saving system settings:', error);
    res.status(500).send('Failed to save settings');
  }
});

module.exports = router;
