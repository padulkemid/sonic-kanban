require('dotenv').config();
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_SECRET,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  production: {
    username: 'dbrbkxzmnplaow',
    password: 'c031b8a0caf8cd8aea38f34daea574e72ae4e7ade6fef9d13993e9a09d202ee3',
    database: 'dji6o0e81b5q3',
    host: 'ec2-50-17-21-170.compute-1.amazonaws.com',
    dialect: 'postgres',
  },
};
