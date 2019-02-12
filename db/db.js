const Sequelize = require('sequelize');
require('dotenv').config()
let DATABASE_URL = process.env.DATABASE_URL

module.exports = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});
