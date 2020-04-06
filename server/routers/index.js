const route = require('express').Router();
const { User } = require('../models');

route.get('/', (req, res) => {
  User.findAll()
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      res.json({ message: 'error' });
    });
});

module.exports = route;
