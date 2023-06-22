const express = require('express');
const router = express.Router();

const about_us_Controller = require('../app/controllers/Aubot_UsController');
router.get('/information', about_us_Controller.information);
module.exports = router;
