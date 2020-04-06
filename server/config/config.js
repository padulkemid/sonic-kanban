'use strict';
require('dotenv').config();

module.exports = {
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_SECRET,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  production: {
    username: 'ftghgpticlklby',
    password: '71e945f9dd8dc3c6a7a1c54545dd6747e0ce7306c24a60b122a4f9d5e2a45546',
    database: 'd2ouedpvfasb7p',
    host: 'ec2-52-202-185-87.compute-1.amazonaws.com',
    dialect: 'postgres',
  },
};
