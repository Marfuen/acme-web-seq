const db = require('../db');

const Content = db.define('content', {
  title: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  body: db.Sequelize.TEXT,
});

module.exports = Content;
