const route = require('express').Router();
const errorHandler = require('../middlewares/error_handler');
const Task = require('./task');
const User = require('./user');

route.use(User);
route.use('/tasks', Task);
route.use(errorHandler);

module.exports = route;
