const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`hello from the server`)
});

server.post('/api/cars', (req, res) => {
    db.insert(req.body).into('cars')
        .then(newCar => {
            res.status(201).json(newCar);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'failed to add car to database' });
        });
});

server.get('/api/cars', (req, res) => {
    db.select().from('cars')
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'failed to retrieve cars from database' });
        });
});

server.get('/api/cars/:id', (req, res) => {
    db.select().from('cars').where({ id: req.params.id })
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'failed to retrieve cars from database' });
        });
});



module.exports = server;