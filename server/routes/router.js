const express = require('express');
const route = express.Router();
const controller = require("../controller/controller");


//API
route.post('/api/login',controller.loginUser);
route.post('/api/register',controller.registerUser);


module.exports = route