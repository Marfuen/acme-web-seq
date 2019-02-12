const Sequelize = require('sequelize');
require('dotenv').config()

console.log(typeof process.env.DATABASE_URL)
module.exports = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});
