const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Telemetry metrics endpoint');
});

router.get('/cpu', (req, res) => {
    res.send('CPU usage: 50%');
});

router.get('/memory', (req, res) => {
    res.send('Memory usage: 75%');
});

module.exports = router;