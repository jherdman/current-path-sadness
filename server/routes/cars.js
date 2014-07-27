var cars = [
    { id: 1, name: 'Ford' },
    { id: 2, name: 'Chevy' },
    { id: 3, name: 'Cadillac' }
];

module.exports = function(app) {
  var express = require('express');
  var carsRouter = express.Router();

  carsRouter.get('/', function(req, res) {
    res.json({ cars: cars });
  });

  carsRouter.get('/:id', function(req, res) {
    var carId = parseInt(req.params.id, 10);
    var car = cars[carId];
    res.json({ car: car });
  });

  app.use('/cars', carsRouter);
};
