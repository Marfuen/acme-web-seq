const Sequelize = require('sequelize');

module.exports = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acmewebseq', {
  dialect: 'postgres',
  logging: false,
});
