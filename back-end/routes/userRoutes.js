const express = require('express');
const { createUser, login } = require('../controllers/userController');
const routes = express.Router();
routes.post('/postUser',createUser);
routes.post('/login',login);
module.exports =routes;