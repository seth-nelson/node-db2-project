const express = require('express');
const db = require('../data/db-config.js');

const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const cars = await db.select('*').from('cars');
        console.log('got cars data from db', cars);
        res.status(200).json(cars);
    } catch (err) {
        res.status(500).json({ message: 'The cars could not be retrieved.', error: err});
    }
});


router.post('/', validateCar, async (req, res) => {
    try {
        const carData = await db.insert(req.carData).into('cars');
        res.status(200).json(carData);
    } catch (err) {
        res.status(400).json({ message: 'The car information could not be added.', error: err});
    }
});


// Middleware for car validation
function validateCar(req, res, next) {
    const cars = req.body;

    if (cars.VIN === '' || cars.make === '' || cars.model === '' || cars.mileage === 0) {
        res.status(400).json({ message: 'Please ensure all required fields are filled: VIN, make, model, mileage.'})
    } else {
        req.cars = { ...req.cars, ...cars };
        next();
    }
}


module.exports = router;