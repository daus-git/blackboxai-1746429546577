const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');

// Get all trips
router.get('/', tripController.getAllTrips);

// Get single trip by ID
router.get('/:id', tripController.getTripById);

// Search trips by destination
router.get('/search/:destination', tripController.searchTrips);

module.exports = router;
