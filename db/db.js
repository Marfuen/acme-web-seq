const Sequelize = require('sequelize');
require('dotenv').config()


module.exports = new Sequelize(process.env.DATABASE_URL || process.env.MYDBURL, {
  dialect: 'postgres',
  logging: false,
});
