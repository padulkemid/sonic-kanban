const route = require('express').Router();
const UserController = require('../controllers/user');

// C reate
route.post('/register', UserController.create);

// R ead
route.post('/login', UserController.read);

module.exports = route;
