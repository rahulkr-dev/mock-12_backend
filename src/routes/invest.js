
const express = require('express');
const calculateInvest  = require('../controllers/invest');

const app = express.Router();

app.post('/invest',calculateInvest);

module.exports = app;
