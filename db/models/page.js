const db = require('../db');

const Page = db.define('page', {
  name: db.Sequelize.STRING,
});

module.exports = Page;
