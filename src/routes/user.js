
const express = require('express');
const { signupUser,loginUser,getUser } = require('../controllers/user');

const app = express.Router();

app.post('/signup',signupUser);
app.post('/login',loginUser);
app.get('/:token',getUser);

module.exports = app;
