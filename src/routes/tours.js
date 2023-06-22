const express = require('express');
const router = express.Router();

const tourController = require('../app/controllers/TourController');

router.get('/:slug/booking', tourController.booking);
// router.get('/booking', tourController.booking);
router.get('/create', tourController.create);
router.post('/store', tourController.store);
router.get('/:slug', tourController.show)

module.exports = router;
