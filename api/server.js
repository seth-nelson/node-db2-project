const express = require('express');
const helmet = require('helmet');
const carsRouter = require('../cars/carsRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/cars', carsRouter);

// Page shows h2 when properly running
server.get('/', (req, res) => {
    res.send(`<h2>Server is responding.</h2>`);
});

module.exports = server;